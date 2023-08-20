import { render } from '@testing-library/react';

import { BaseAccordionItem } from './accordion-item';

describe('AccordionItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BaseAccordionItem
        onFetchAllData={() => {
          console.log('onFetchAllData');
        }}
        targetId='1'
        children={<div></div>}
        url='string'
        accordionId='string'
        buttonText='string'
        open='open'
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
