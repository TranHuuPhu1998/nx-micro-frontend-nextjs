import { render } from '@testing-library/react';

import { BaseCheckBox } from './base-check-box';

describe('BaseCheckBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseCheckBox />);
    expect(baseElement).toBeTruthy();
  });
});
