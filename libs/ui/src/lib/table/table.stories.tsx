import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableBasic } from './table-basic/table-basic';

const Story: ComponentMeta<typeof TableBasic> = {
  component: TableBasic,
  title: 'Table',
};
export default Story;

const TableBasicTemplate: ComponentStory<typeof TableBasic> = (args) => (
  <TableBasic />
);

export const _TableBasic = TableBasicTemplate.bind({});
_TableBasic.args = {};
