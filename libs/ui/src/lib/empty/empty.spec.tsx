import { render } from '@testing-library/react';

import { EmptyTable } from './empty';

describe('Empty', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmptyTable colSpan={1} />);
    expect(baseElement).toBeTruthy();
  });
});
