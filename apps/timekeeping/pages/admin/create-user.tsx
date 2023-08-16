import React from 'react';
import { Button, Form, Input, Select, Typography, Layout } from 'antd';
const { Title } = Typography;

const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout style={{ padding: '100px' }}>
      <Title level={3}>Create user</Title>

      <Form
        form={form}
        name='control-hooks'
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name='youId' label='You Id' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='fullName'
          label='Full Name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='email' label='Email' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='positions'
          label='Position'
          rules={[{ required: true }]}
        >
          <Select
            placeholder='Select a option and change input text above'
            allowClear
          >
            <Option value='FE Developer'>FE Developer</Option>
            <Option value='BE Developer'>BE Developer</Option>
            <Option value='Mobile Developer'>Mobile Developer</Option>
          </Select>
        </Form.Item>
        <Form.Item name='gender' label='Gender' rules={[{ required: true }]}>
          <Select
            placeholder='Select a option and change input text above'
            allowClear
          >
            <Option value='male'>male</Option>
            <Option value='female'>female</Option>
            <Option value='other'>other</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default App;
