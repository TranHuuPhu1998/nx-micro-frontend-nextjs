import { async } from '@firebase/util';
import { limitToLast, onValue, push, query, ref, set } from 'firebase/database';
import { readTimeDB } from '../firebase';

/**
 * @title             fire base real time create collection
 * @des               func create collection when user check in
 * @param title       title userId check in
 * @param createdAt   current date
 * @param userId      is user check In
 *
 * @returns            if success return data user check in
 */

export const FBRealTimeCreateTimekeeping = async () => {
  try {
    const payload = {
      title: `Check in at ${new Date().toISOString()}`,
      createdAt: new Date().toISOString(),
      userId: 'user id',
      checkIn: true,
      checkOut: true,
    };

    const postListRef = ref(readTimeDB, 'users');
    const newPostRef = push(postListRef);

    await set(newPostRef, payload);

    return { ...payload };
  } catch (error) {
    console.error(error);
    return error;
  }
};
interface ICollection {
  key: string;
  userId?: string;
  title?: string;
  createdAt?: Date;
}

export const FBReadTimeGetListTimekeeping = () => {
  try {
    const recentPostsRef = ref(readTimeDB, '/users');
    let response: ICollection[] = [];
    onValue(recentPostsRef, (snapshot) => {
      const data: ICollection[] = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        data.push({
          key: childKey,
          ...childData,
        });
      });

      response = data;
      return response;
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
