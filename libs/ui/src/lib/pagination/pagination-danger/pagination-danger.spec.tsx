import { render } from '@testing-library/react';

import { PaginationDanger } from './pagination-danger';

describe('PaginationDanger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaginationDanger />);
    expect(baseElement).toBeTruthy();
  });
});
