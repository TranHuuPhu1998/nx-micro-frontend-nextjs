import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MyAccordion } from '@nx-app-v1/features';
import { Card, CardHeader, Col, Row } from 'reactstrap';

// dynamic import
const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

function Home() {
  const [listSymbols, setListSymbols] = useState({});

  return (
    <Row className="p-2">
      <Col sm="6">
        <Card color="dark" inverse>
          <CardHeader tag="h3">
            Exchange Rates Data API Playground accordion.
          </CardHeader>
          <MyAccordion setListSymbols={setListSymbols} />
        </Card>
      </Col>
      <Col sm="6">
        <Card color="dark" inverse>
          <CardHeader tag="h3">Response ReactJson</CardHeader>
          {listSymbols && <DynamicReactJson src={listSymbols} theme="pop" />}
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
