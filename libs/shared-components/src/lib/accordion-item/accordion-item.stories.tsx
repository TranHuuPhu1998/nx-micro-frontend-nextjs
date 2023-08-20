import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from 'reactstrap';
import { BaseAccordionItem } from './accordion-item';
import { useArgs } from '@storybook/client-api';

const Story: ComponentMeta<typeof BaseAccordionItem> = {
  component: BaseAccordionItem,
  title: 'AccordionItem',
};

const BaseAccordionItemTemplate: ComponentStory<typeof BaseAccordionItem> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, updateArgs] = useArgs();

  const handle = (id: string) => {
    // inside this function I am updating arguments, but you can call it anywhere according to your demand, the key solution here is using `useArgs()`
    // As you see I am updating list of options with new state here
    let idr_rep = '';
    if (args.open === id) {
      idr_rep = '';
    } else {
      idr_rep = id;
    }

    updateArgs({ ...args, open: idr_rep });
  };

  return (
    <Accordion className='accordion-border' open={args.open as string} toggle={handle}>
      <BaseAccordionItem {...args} />
    </Accordion>
  );
};

export const SecondaryAccordion = BaseAccordionItemTemplate.bind({});
SecondaryAccordion.args = {
  children: <div></div>,
  url: '/symbol',
  buttonText: 'GET ALL DATA',
  open: '1',
};

export default Story;
