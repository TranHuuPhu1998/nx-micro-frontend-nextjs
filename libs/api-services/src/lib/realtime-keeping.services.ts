import { ref, get, push, set } from 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { dbRealTime } from '../firebase-config';
/**
 * @title             fire base real time create collection
 * @des               func create collection when user check in
 *
 * @returns            if success return data user check in
 */

export const userCheckIn = async () => {
  try {
    const payload = {
      title: `Check in at ${new Date().toISOString()}`,
      createdAt: new Date().toISOString(),
      userAgent: navigator.userAgent,
      checkIn: true,
      checkOut: false,
    };

    const postListRef = ref(dbRealTime, 'users');
    const newPostRef = push(postListRef);

    await set(newPostRef, payload);

    return true;
  } catch (error) {
    console.error(error);
    return error;
  }
};

/**
 * @title             fire base real time get list collection
 * @des               func get collection
 *
 * @returns           if success return list user check in or checkout
 */

export const getListUserFromCollection =async () => {
  try {
    const db = getFirestore();
    const usersCollectionRef = collection(db, 'users');
    const response: any[] = [];
    // Fetch the list of documents in the 'users' collection
    await getDocs(usersCollectionRef)
      .then((querySnapshot) => {
        // Loop through the documents and get their data
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          console.log("🚀 ~ file: realtime-keeping.services.ts:51 ~ querySnapshot.forEach ~ userData:", userData)
          response.push(userData);
        });
      })
      .catch((error) => {
        return error;
      });
      
      console.log("🚀 ~ file: realtime-keeping.services.ts:60 ~ getListUserFromCollection ~ response:", response)

    return response;
  } catch (error) {
    return error;
  }
};

export const getListUserRealTime = async () => {
  try {
    const db = dbRealTime;
    // Reference to the 'users' location in the database
    const usersRef = ref(db, 'users');
    let response: any[] = [];
    // Retrieve the list of users
    await get(usersRef)
      .then((snapshot: any) => {
        if (snapshot.exists()) {
          // The snapshot contains the data at the specified location.
          const data = snapshot.val();

          // Convert the object of objects to an array of users
          const userList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));

          response = userList;
          return response;
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

    return response;
  } catch (error) {
    return error;
  }
};
