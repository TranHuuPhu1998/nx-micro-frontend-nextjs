import { axiosClient } from '@nx-nextjs/helper';
import { IConvertCurrencies } from '@nx-nextjs/interfaces';
import toast from 'react-hot-toast';

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
