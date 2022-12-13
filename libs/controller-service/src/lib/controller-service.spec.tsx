import { render } from '@testing-library/react';

import ControllerService from './controller-service';

describe('ControllerService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControllerService />);
    expect(baseElement).toBeTruthy();
  });
});
