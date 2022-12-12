import { axiosClient } from '@nx-nextjs/helper';
import toast from 'react-hot-toast';

export const handleUpLoadFile = async <TData>(
  formData: any,
  callBack: (data: TData) => void
) => {
  const cloudName = 'ifv';

  try {
    const { data } = await axiosClient.post(
      'https://api.cloudinary.com/v1_1/' + cloudName + '/auto/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    callBack(data);
    toast.success('Upload successfully');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    console.error(error);
  }
};
