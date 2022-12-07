import { render } from '@testing-library/react';

import BaseButton from './base-button';

describe('BaseButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseButton />);
    expect(baseElement).toBeTruthy();
  });
});
