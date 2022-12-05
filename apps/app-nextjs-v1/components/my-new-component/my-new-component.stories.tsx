import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyNewComponent } from './my-new-component';

const Story: ComponentMeta<typeof MyNewComponent> = {
  component: MyNewComponent,
  title: 'MyNewComponent',
};
export default Story;

const Template: ComponentStory<typeof MyNewComponent> = (args) => (
  <MyNewComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
