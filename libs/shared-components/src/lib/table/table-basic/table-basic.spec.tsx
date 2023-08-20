import { render } from '@testing-library/react';

import { TableBasic } from './table-basic';

describe('TableBasic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableBasic />);
    expect(baseElement).toBeTruthy();
  });
});
