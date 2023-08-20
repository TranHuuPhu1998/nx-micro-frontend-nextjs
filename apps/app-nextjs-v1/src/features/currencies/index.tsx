import { UncontrolledAccordion } from 'reactstrap';
import { ConvertCurrencies, CurrenciesListSymbols, CurrenciesLatest, CurrenciesFluctuation } from '@app1-components';

export const FEATURES_currencies = ({ setListSymbols }) => {
  return (
    <UncontrolledAccordion defaultOpen='1'>
      <CurrenciesListSymbols setListSymbols={setListSymbols} />
      <CurrenciesLatest setListSymbols={setListSymbols} />
      <CurrenciesFluctuation setListSymbols={setListSymbols} />
      <ConvertCurrencies setListSymbols={setListSymbols} />
    </UncontrolledAccordion>
  );
};
