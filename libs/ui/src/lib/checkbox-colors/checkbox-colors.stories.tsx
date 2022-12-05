import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckboxColor } from './checkbox-colors';

const Story: ComponentMeta<typeof CheckboxColor> = {
  component: CheckboxColor,
  title: 'CheckboxColor',
};
export default Story;

const Template: ComponentStory<typeof CheckboxColor> = (args) => (
  <CheckboxColor />
);

export const Index = Template.bind({});
Index.args = {};
