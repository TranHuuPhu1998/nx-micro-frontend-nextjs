import { axiosClient } from '@nx-nextjs/helper';
import { IConvertCurrencies } from '@nx-nextjs/interfaces';
import toast from 'react-hot-toast';

/**
 * @title             axios fetch data
 * @des               func create collection when user check in
 * @param url         url for checking
 * @param callBack    call back func for get data
 *
 * @returns            if success return list symbols
 */

export const onFetchAllCurrencies = async <TData>(
  url: string,
  callBack: (data: TData) => void
): Promise<void> => {
  switch (url) {
    case 'symbols':
      return axiosClient.get('/symbols').then((res) => callBack(res.data));
    default:
      break;
  }
};

/**
 * @title             axios fetch data
 * @des               func handle convert currencies
 * @param value       payload for convert
 * @param callBack    call back func for get data
 *
 * @returns            if success return data converted
 */

export const handleConvertCurrencies = async <TData>(
  value: IConvertCurrencies,
  callBack: (data: TData) => void
) => {
  const params = value;
  try {
    const { data } = await axiosClient.get('/convert', { params });
    callBack(data);
    toast.success('Convert currencies successfully');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { message } = error?.response?.data?.error;
    toast.error(message);
  }
};
