import { BaseAccordionItem } from '@nx-shared-components';
import { SERVICES_symbols } from '@nx-nextjs/api-services';
import { ICurrenciesFeature, ISymbols } from '@nx-nextjs/interfaces';

export const CurrenciesListSymbols = ({ setListSymbols }) => {
  return (
    <BaseAccordionItem
      targetId='1'
      url={ICurrenciesFeature.CURRENCIES_SYMBOLS}
      accordionId='1'
      onFetchAllData={() => SERVICES_symbols<ISymbols>(setListSymbols)}
      buttonText='RUN GET ALL ( Returns all available currencies )'
    />
  );
};
