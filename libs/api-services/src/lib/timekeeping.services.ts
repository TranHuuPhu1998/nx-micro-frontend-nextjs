import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from 'firebase/firestore/lite';
import { db } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { auth, providerFacebook, providerGoogle } from '../firebase';

/**
 * @title             file store
 * @des               func create collection when user check in
 * @param title       title userId check in
 * @param createdAt   current date
 * @param userId      is user check In
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

interface ICollection {
  id?: string;
  uid?: string;
  title?: string;
  photos?: string[];
  createdAt?: number;
}

export const getInfoCollections = async () => {
  try {
    const data: ICollection[] = [];

    const q = query(collection(db, 'collections'));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    return error;
  }
};

export const getCollection = async (id: string) => {
  try {
    const docRef = doc(db, `collections/${id}`);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) return docSnap.data();
  } catch (error) {
    return error;
  }
};

export const googleApi = async () => {
  try {
    const res = await signInWithPopup(auth, providerGoogle);
    return res.user;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const facebookApi = async () => {
  try {
    const res = await signInWithPopup(auth, providerFacebook);
    return res.user;
  } catch (error) {
    console.error(error);
    return error;
  }
};
