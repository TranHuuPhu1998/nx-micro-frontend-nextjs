import { Card, CardHeader, Table, Container, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import { getListUserFromCollection } from '@nx-nextjs/api-services';

const ListUser = () => {
  const [, setLoading] = useState<boolean>(false);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await getListUserFromCollection();
      setListUser(response);
    }
    fetchData();
    setLoading(false);
  }, []);

  return (
    <>
      <Container fluid>
        <Row className='mt-5'>
          <div className='col'>
            <Card className='bg-default shadow'>
              <CardHeader className='bg-transparent border-0'>
                <h3 className='text-white mb-0'>LIST USER</h3>
              </CardHeader>
              <Table
                className='align-items-center table-dark table-flush'
                responsive
              >
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>YouId</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>FullName</th>
                    <th scope='col'>Positions</th>
                    <th scope='col'>Gender</th>
                  </tr>
                </thead>
                {listUser?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.youId}</td>
                      <td>{item.email}</td>
                      <td>{item.fullName}</td>
                      <td>{item.positions}</td>
                      <td>{item.gender}</td>
                    </tr>
                  );
                })}
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ListUser;
