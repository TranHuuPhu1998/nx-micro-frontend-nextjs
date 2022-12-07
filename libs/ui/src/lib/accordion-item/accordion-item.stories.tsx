import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionItem } from './accordion-item';

const Story: ComponentMeta<typeof AccordionItem> = {
  component: AccordionItem,
  title: 'AccordionItem',
};
export default Story;

const Template: ComponentStory<typeof AccordionItem> = (args) => (
  <AccordionItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
