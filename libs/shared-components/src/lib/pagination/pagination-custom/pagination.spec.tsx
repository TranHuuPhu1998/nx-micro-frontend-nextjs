import { render } from '@testing-library/react';

import { PaginationPage } from './pagination';

describe('Pagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PaginationPage
        className='flex'
        currentPage={1}
        pageSize={10}
        siblingCount={1}
        totalCount={1000}
        onPageChange={() => {
          console.log('change');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
