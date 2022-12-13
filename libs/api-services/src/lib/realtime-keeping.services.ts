import { ITimeKeepingCollection } from '@nx-nextjs/interfaces';
import { onValue, push, ref, set } from 'firebase/database';
import { readTimeDB } from '../firebase-config';

/**
 * @title             fire base real time create collection
 * @des               func create collection when user check in
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

/**
 * @title             fire base real time get list collection
 * @des               func get collection
 *
 * @returns           if success return list user check in or checkout
 */

export const FBReadTimeGetListTimekeeping = () => {
  try {
    const recentPostsRef = ref(readTimeDB, 'users');
    let response: ITimeKeepingCollection[] = [];
    onValue(recentPostsRef, (snapshot) => {
      const data: ITimeKeepingCollection[] = [];
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
    console.log(
      '🚀 ~ file: realtime-keeping.services.ts:58 ~ onValue ~ response',
      response
    );
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
