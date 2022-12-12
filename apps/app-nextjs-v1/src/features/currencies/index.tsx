import { UncontrolledAccordion } from 'reactstrap';
import {
  ConvertCurrencies,
  CurrenciesListSymbols,
  CurrenciesLatest,
  CurrenciesFluctuation,
} from '@nx-app-v1/features';

export const MyAccordion = ({ setListSymbols }) => {
  return (
    <UncontrolledAccordion defaultOpen="1">
      <CurrenciesListSymbols setListSymbols={setListSymbols} />
      <CurrenciesLatest setListSymbols={setListSymbols} />
      <CurrenciesFluctuation setListSymbols={setListSymbols} />
      <ConvertCurrencies setListSymbols={setListSymbols} />
    </UncontrolledAccordion>
  );
};
