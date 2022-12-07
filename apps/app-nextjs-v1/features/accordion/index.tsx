import { useState } from 'react';
import { Accordion } from 'reactstrap';
import { axiosClient } from '@nx-nextjs/helper';
import { BaseAccordionItem } from '@nx-nextjs/ui';

export const MyAccordion = ({ setListSymbols }) => {
  const [open, setOpen] = useState('');

  const toggle = (id: string) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  const onFetchAllCurrencies = () => {
    axiosClient.get('/symbols').then((res) => setListSymbols(res.data));
  };

  return (
    <Accordion className="accordion-border" open={open} toggle={toggle}>
      <BaseAccordionItem
        targetId="1"
        url="/symbols"
        accordionId="1"
        onFetchAllData={onFetchAllCurrencies}
        buttonText="RUN GET ALL ( Returns all available currencies )"
      ></BaseAccordionItem>

      <BaseAccordionItem
        targetId="2"
        url="/fluctuation"
        accordionId="2"
        onFetchAllData={onFetchAllCurrencies}
        buttonText="RUN GET ALL ( Returns all available currencies )"
      ></BaseAccordionItem>

      <BaseAccordionItem
        targetId="3"
        url="/latest"
        accordionId="3"
        onFetchAllData={onFetchAllCurrencies}
        buttonText="RUN GET ALL ( Returns all available currencies )"
      ></BaseAccordionItem>

      <BaseAccordionItem
        targetId="4"
        url="/convert"
        accordionId="4"
        onFetchAllData={onFetchAllCurrencies}
        buttonText="RUN GET ALL ( Returns all available currencies )"
      ></BaseAccordionItem>
    </Accordion>
  );
};
