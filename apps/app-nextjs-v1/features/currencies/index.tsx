import { Accordion } from 'reactstrap';
import { useHandleToggle } from '@nx-nextjs/api-services';
import {
  ConvertCurrencies,
  CurrenciesListSymbols,
  CurrenciesLatest,
  CurrenciesFluctuation,
} from '../../features';

export const MyAccordion = ({ setListSymbols }) => {
  const { open, toggle } = useHandleToggle();

  return (
    <Accordion className="accordion-border" open={open} toggle={toggle}>
      <CurrenciesListSymbols setListSymbols={setListSymbols} />
      <CurrenciesLatest setListSymbols={setListSymbols} />
      <CurrenciesFluctuation setListSymbols={setListSymbols} />
      <ConvertCurrencies setListSymbols={setListSymbols} />
    </Accordion>
  );
};
