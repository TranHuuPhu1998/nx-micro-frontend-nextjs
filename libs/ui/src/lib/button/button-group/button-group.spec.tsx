import { render } from '@testing-library/react';

import Buttongroup from './button-group';

describe('Buttongroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Buttongroup />);
    expect(baseElement).toBeTruthy();
  });
});
