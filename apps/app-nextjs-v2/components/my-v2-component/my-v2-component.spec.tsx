import { render } from '@testing-library/react';

import MyV2Component from './my-v2-component';

describe('MyV2Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyV2Component />);
    expect(baseElement).toBeTruthy();
  });
});
