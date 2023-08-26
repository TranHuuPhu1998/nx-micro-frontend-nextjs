import { render } from '@testing-library/react';
import { CheckboxColor } from './checkbox-colors';

describe('CheckboxColors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckboxColor />);
    expect(baseElement).toBeTruthy();
  });
});
