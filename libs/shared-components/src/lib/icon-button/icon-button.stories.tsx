import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from './icon-button';

const Story: ComponentMeta<typeof IconButton> = {
  component: IconButton,
  title: 'IconButton',
};
export default Story;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
