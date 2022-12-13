import { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Row } from 'reactstrap';
import {
  FBReadTimeGetListTimekeeping,
  FBRealTimeCreateTimekeeping,
} from '@nx-nextjs/api-services';
import { Table } from 'reactstrap';
import toast from 'react-hot-toast';

export function Index() {
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [dataCheckInCheckOut, setDataCheckInCheckOut] = useState([]);
  const [, setLoading] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);

  // get [192 XO VIET NGHE TINH] location
  const geolocationPosition = {
    latitude: 16.03225,
    longitude: 108.2153,
  };

  const successCallback = async (position) => {
    const { coords } = position;

    const isLatitude = coords.latitude === geolocationPosition.latitude;
    const isLongitude = coords.latitude === geolocationPosition.longitude;

    if (isLatitude && isLongitude) {
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
      if (!isCheckIn) return;
      const data = await FBRealTimeCreateTimekeeping();

      if (data) {
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
      <Row className="mb-1" style={{ margin: '0px' }}>
        <Button disabled={isCheckIn} onClick={handleCheckInCheckOut}>
          Check In
        </Button>
      </Row>
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
    </div>
  );
}

export default Index;
