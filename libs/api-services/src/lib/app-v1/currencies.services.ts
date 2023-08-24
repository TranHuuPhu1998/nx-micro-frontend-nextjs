import { axiosClient } from 'libs/shared-helper/src';
import { IConvertCurrencies } from '@nx-nextjs/interfaces';
import toast from 'react-hot-toast';

export const SERVICES_symbols = async <TData>(callBack: (data: TData) => void) => {
  try {
    const { data } = await axiosClient.get('/symbols');
    callBack(data);
    toast.success('Returns all available currencies.');
  } catch {
    toast.error('Failed');
  }
};

export const SERVICES_convert = async <TData>(value: IConvertCurrencies, callBack: (data: TData) => void) => {
  const params = value;
  try {
    const { data } = await axiosClient.get('/convert', { params });
    callBack(data);
    toast.success('With this endpoint, we have any amount conversion from one currency to another.');
  } catch {
    toast.error('Failed');
  }
};

export const SERVICES_latest = async <TData>(value: IConvertCurrencies, callBack: (data: TData) => void) => {
  const params = value;
  try {
    const { data } = await axiosClient.get('/latest', { params });
    callBack(data);
    toast.success('Returns exchange rate data in real-time for all available currencies or for a specific set.');
  } catch {
    toast.error('Failed');
  }
};
export const SERVICES_fluctuation = async <TData>(callBack: (data: TData) => void) => {
  // const params = value;
  try {
    const { data } = await axiosClient.get('/fluctuation');
    callBack(data);
    toast.success('Returns exchange rate data in real-time for all available currencies or for a specific set.');
  } catch {
    toast.error('Failed');
  }
};
