import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from './box';

const Story: ComponentMeta<typeof Box> = {
  component: Box,
  title: 'Box',
};
export default Story;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
