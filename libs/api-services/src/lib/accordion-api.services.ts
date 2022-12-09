import { axiosClient } from '@nx-nextjs/helper';

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
