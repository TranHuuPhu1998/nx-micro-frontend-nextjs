import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseButtonGroup } from './button-group/button-group';
import { BaseButton } from './base-button/base-button';
import '@nx-nextjs/styles';

const Story: ComponentMeta<typeof BaseButtonGroup> = {
  component: BaseButtonGroup,
  title: 'Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger'],
      control: { type: 'select' },
    },
    outline: {
      control: 'boolean',
    },
    size: {
      options: ['lg', 'sm'],
      control: { type: 'select' },
    },
  },
};

const ButtonGroupTemplate: ComponentStory<typeof BaseButtonGroup> = (args) => (
  <BaseButtonGroup {...args} />
);

const ButtonTemplate: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
);

export const _ButtonGroup = ButtonGroupTemplate.bind({});
export const _ButtonBasic = ButtonTemplate.bind({});

_ButtonBasic.args = {
  color: 'secondary',
  text: 'Secondary',
  outline: false,
};

export default Story;
