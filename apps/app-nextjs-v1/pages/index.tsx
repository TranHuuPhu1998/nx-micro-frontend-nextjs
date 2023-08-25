import { useState } from 'react';
import { FEATURES_currencies } from '../src/features';
import { Card, CardHeader, Col, Row } from 'reactstrap';
import { JSONTree } from 'react-json-tree';

function PAGE_CURRENCIES() {
  const [listSymbols, setListSymbols] = useState({});
  const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };
  return (
    <Row className='p-2'>
      <Col sm='6'>
        <Card color='dark' inverse>
          <CardHeader tag='h3'>Exchange Rates Data API Playground accordion.</CardHeader>
          <FEATURES_currencies setListSymbols={setListSymbols} />
        </Card>
      </Col>
      <Col sm='6'>
        <Card color='dark' inverse>
          <CardHeader tag='h3'>Response ReactJson</CardHeader>
          {listSymbols && <JSONTree data={listSymbols} theme={theme} />}
        </Card>
      </Col>
    </Row>
  );
}

export default PAGE_CURRENCIES;
