import { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Card, Row } from 'reactstrap';
import {
  googleApi,
  facebookApi,
  FBReadTimeGetListTimekeeping,
  FBRealTimeCreateTimekeeping,
} from '@nx-nextjs/api-services';
// ** Icons Imports
import { Table } from 'reactstrap';
import toast from 'react-hot-toast';
import { async } from '@firebase/util';

export function Index() {
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [dataCheckInCheckOut, setDataCheckInCheckOut] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  console.log('🚀 ~ file: index.tsx:18 ~ Index ~ loading', loading);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // get [192 XO VIET NGHE TINH] location
  const geolocationPosition = {
    latitude: 16.03225,
    longitude: 108.2153,
  };

  const successCallback = async (position) => {
    const { coords } = position;

    const isLatitude = coords.latitude === geolocationPosition.latitude;
    const isLongitude = coords.latitude === geolocationPosition.longitude;

    // when user stands at the [192 XO VIET NGHE TINH] location
    if (isLatitude && isLongitude) {
      // is has permission check in or check out then enable button [CHECK_IN] or [CHECK_OUT]
      setIsCheckIn(true);
    } else {
      setIsCheckIn(false);
    }
  };

  const errorCallback = (error) => {
    alert(error.message);
    return;
  };

  useLayoutEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckInCheckOut = async () => {
    try {
      const data = await FBRealTimeCreateTimekeeping();

      if (data) {
        console.log(
          '🚀 ~ file: index.tsx:64 ~ handleCheckInCheckOut ~ data',
          data
        );
        toast.success('Check in success fully');
      }
      setRefetch((prev) => !prev);
    } catch (error) {
      console.error('error', error);
      toast.success('Check in errors');
    }
  };

  const fetchDataUserCollection = async () => {
    const data = await FBReadTimeGetListTimekeeping();
    console.log(
      '🚀 ~ file: index.tsx:74 ~ fetchDataUserCollection ~ data',
      data
    );
    setDataCheckInCheckOut(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchDataUserCollection();
    setLoading(false);
  }, [refetch]);

  return (
    <div className="p-2">
      <h1>
        <span> Hello there, </span>
        Welcome timekeeping 👋
      </h1>

      <Row center>
        <Button onClick={handleCheckInCheckOut}>Check In</Button>
      </Row>
      <Row>
        <Button className="mt-1" onClick={() => googleApi()}>
          Google
        </Button>

        <Button className="mt-1" onClick={() => facebookApi()}>
          Facebook
        </Button>
      </Row>
      {loading === true && (
        <h1>
          <span> Hello there, </span>
          Welcome timekeeping 👋
        </h1>
      )}
      <Row>
        <Table responsive>
          <thead>
            <tr>
              <th>UserID</th>
              <th>CreateAt</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {dataCheckInCheckOut?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.key}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </div>
  );
}

export default Index;
