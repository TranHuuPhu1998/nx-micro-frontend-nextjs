import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyV2Component } from './my-v2-component';

const Story: ComponentMeta<typeof MyV2Component> = {
  component: MyV2Component,
  title: 'MyV2Component',
};
export default Story;

const Template: ComponentStory<typeof MyV2Component> = (args) => (
  <MyV2Component {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
