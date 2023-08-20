import toast from 'react-hot-toast';

/**
 * @title             fetch method POST
 * @des               func post image to cloud
 * @param formData    data for upload
 * @param callBack    function for set data
 *
 * @returns            if success return data upload file
 */

export const handleUpLoadFile = async <TData>(
  formData: BodyInit | null | undefined,
  callBack: (payload: TData) => void
) => {
  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/ifv/upload', {
      method: 'POST',
      body: formData,
    });
    const responseJson: TData = await res.json();
    callBack(responseJson);
    toast.success('Upload successfully');
  } catch (error) {
    toast.success('Failed');
  }
};
