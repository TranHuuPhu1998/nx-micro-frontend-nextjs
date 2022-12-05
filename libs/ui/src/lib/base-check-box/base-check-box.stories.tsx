import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseCheckBox } from './base-check-box';

const Story: ComponentMeta<typeof BaseCheckBox> = {
  component: BaseCheckBox,
  title: 'BaseCheckBox',
};
export default Story;

const Template: ComponentStory<typeof BaseCheckBox> = (args) => (
  <BaseCheckBox />
);

export const Index = Template.bind({});
Index.args = {};
