import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaginationPage } from './pagination-custom/pagination';
import { PaginationDanger } from './pagination-danger/pagination-danger';
import { useArgs } from '@storybook/client-api';

const Story: ComponentMeta<typeof PaginationPage> = {
  component: PaginationPage,
  title: 'Pagination',
};

const TemplatePagination: ComponentStory<typeof PaginationPage> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, updateArgs] = useArgs();

  const handle = (pageNumber: number) => {
    // inside this function I am updating arguments, but you can call it anywhere according to your demand, the key solution here is using `useArgs()`
    // As you see I am updating list of options with new state here

    updateArgs({ ...args, currentPage: pageNumber });
  };
  return <PaginationPage {...args} onPageChange={handle} />;
};

const TemplatePaginationDanger: ComponentStory<
  typeof PaginationDanger
> = () => {
  return <PaginationDanger />;
};

export const _PaginationPage = TemplatePagination.bind({});
export const _PaginationDanger = TemplatePaginationDanger.bind({});

_PaginationPage.args = {
  className: 'd-flex justify-content-between align-items-center',
  currentPage: 1,
  pageSize: 10,
  siblingCount: 1,
  totalCount: 1000,
};

_PaginationDanger.args = {};

export default Story;
