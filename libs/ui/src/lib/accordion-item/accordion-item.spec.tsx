import { render } from '@testing-library/react';

import AccordionItem from './accordion-item';

describe('AccordionItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccordionItem />);
    expect(baseElement).toBeTruthy();
  });
});
