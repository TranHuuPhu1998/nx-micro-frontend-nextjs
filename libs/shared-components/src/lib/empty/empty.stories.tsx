import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmptyTable } from './empty';

const Story: ComponentMeta<typeof EmptyTable> = {
  component: EmptyTable,
  title: 'Empty',
};

const EmptyTableTemplate: ComponentStory<typeof EmptyTable> = (args) => <EmptyTable {...args} />;

export const _EmptyTable = EmptyTableTemplate.bind({});
export default Story;
