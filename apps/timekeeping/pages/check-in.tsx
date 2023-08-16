import { Button, Row } from 'reactstrap';
import { userCheckIn } from '@nx-nextjs/api-services';
import toast from 'react-hot-toast';

export function Index() {
  const handleCheckInCheckOut = async () => {
    try {
      const data = await userCheckIn();

      if (data) {
        toast.success('Check in success fully', {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      }
    } catch (error) {
      toast.success('Check in errors');
    }
  };

  return (
    <div className='p-2'>
      <h1>
        <span> Hello there, </span> Welcome timekeeping 👋
      </h1>
      <Row className='mb-1' style={{ margin: '0px' }}>
        <Button onClick={handleCheckInCheckOut}>Check In</Button>
      </Row>
    </div>
  );
}

export default Index;
