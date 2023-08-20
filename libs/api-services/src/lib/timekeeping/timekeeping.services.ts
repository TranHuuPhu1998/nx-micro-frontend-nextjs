import { addDoc, collection, doc, getDoc, getDocs, query } from 'firebase/firestore/lite';
import { db } from '../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { auth, providerFacebook, providerGoogle } from '../config/firebase-config';
import { ITimeKeepingGetCollection } from '@nx-nextjs/interfaces';

/**
 * @title             file store
 * @des               func create collection when user check in
 *
 * @returns            if success return data user check in
 */

export const fileStoreCreateInfoCollection = async () => {
  try {
    const payload = {
      title: `Check in at ${new Date().toISOString()}`,
      createdAt: new Date().toISOString(),
      userId: 'user id',
    };

    const response = await addDoc(collection(db, 'collections'), payload);

    return { ...payload, id: response.id };
  } catch (error) {
    return error;
  }
};

/**
 * @title             file store
 * @des               func get collection when user auth
 *
 * @returns            if success return data user check in
 */

export const getInfoCollections = async () => {
  try {
    const data: ITimeKeepingGetCollection[] = [];

    const q = query(collection(db, 'collections'));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @title             file store
 * @des               func get collection detail when user auth
 * @param id          id for get details
 *
 * @returns           if success return data detail
 */

export const getCollection = async (collectionId: string) => {
  try {
    const docRef = doc(db, `collections/${collectionId}`);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data();
  } catch (error) {
    return error;
  }
  return null;
};

/**
 * @title             file store
 * @des               func login firebase with google
 *
 * @returns           if success return data user
 */

export const googleApi = async () => {
  try {
    const res = await signInWithPopup(auth, providerGoogle);
    return res.user;
  } catch (error) {
    console.error(error);
    return error;
  }
};

/**
 * @title             file store
 * @des               func facebook firebase with google
 *
 * @returns           if success return data user
 */

export const facebookApi = async () => {
  try {
    const res = await signInWithPopup(auth, providerFacebook);
    return res.user;
  } catch (error) {
    console.error(error);
    return error;
  }
};
