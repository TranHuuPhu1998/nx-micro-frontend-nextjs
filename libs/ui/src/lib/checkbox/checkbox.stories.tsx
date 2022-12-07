import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckboxColor } from './checkbox-colors/checkbox-colors';
import { BaseCheckBox } from './base-check-box/base-check-box';

const Story: ComponentMeta<typeof CheckboxColor> = {
  component: CheckboxColor,
  title: 'Check Box',
};

const CheckBoxColorTemplate: ComponentStory<typeof CheckboxColor> = () => (
  <CheckboxColor />
);

const BaseCheckBoxTemplate: ComponentStory<typeof BaseCheckBox> = () => (
  <BaseCheckBox />
);

export const _CheckBoxColor = CheckBoxColorTemplate.bind({});
export const _CheckBoxBasic = BaseCheckBoxTemplate.bind({});

export default Story;
