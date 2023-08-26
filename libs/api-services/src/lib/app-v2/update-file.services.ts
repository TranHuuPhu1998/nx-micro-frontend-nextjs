import { axiosCloudClient } from '@nx-nextjs/helper';
import toast from 'react-hot-toast';

/**
 * @title             fetch method POST
 * @des               func post image to cloud
 * @param formData    data for upload
 * @param callBack    function for set data
 *
 * @returns            if success return data upload file
 */

export const SERVICES_cloudiness_upload = async <TData>(
  formData: BodyInit | null | undefined,
  callBack: (payload: TData) => void
) => {
  try {
    const { data } = await axiosCloudClient.post('/v1_1/ifv/image/upload', formData);
    callBack(data)
    toast.success('Upload successfully');
  } catch {
    toast.success('Failed');
  }
};

interface IParams {
  expression: string;
  sort_by: {
    public_id: string;
  }[]
}
export const SERVICES_resources_search = async <TData>(
  params: IParams,
  callBack: (payload: TData) => void
) => {
  try {
    const { data } = await axiosCloudClient.get('/v1_1/ifv/resources/search', params);
    callBack(data)
    toast.success('Upload successfully');
  } catch {
    toast.success('Failed');
  }
};


export const SERVICES_sign_up_upload = async <TData>(
  callBack: (payload: TData) => void
) => {
  try {
    const { data } = await axiosCloudClient.get('/api/signuploadform');
    callBack(data)
    toast.success('Upload successfully');
  } catch {
    toast.success('Failed');
  }
};