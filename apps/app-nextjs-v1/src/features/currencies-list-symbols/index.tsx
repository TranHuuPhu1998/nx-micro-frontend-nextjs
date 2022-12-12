import { BaseAccordionItem } from '@nx-nextjs/ui';
import { onFetchAllCurrencies } from '@nx-nextjs/api-services';
import { ICurrenciesFeature, ISymbols } from '@nx-nextjs/interfaces';

export const CurrenciesListSymbols = ({ setListSymbols }) => {
  return (
    <BaseAccordionItem
      targetId="1"
      url={ICurrenciesFeature.CURRENCIES_SYMBOLS}
      accordionId="1"
      onFetchAllData={() =>
        onFetchAllCurrencies<ISymbols>(
          ICurrenciesFeature.CURRENCIES_SYMBOLS,
          setListSymbols
        )
      }
      buttonText="RUN GET ALL ( Returns all available currencies )"
    ></BaseAccordionItem>
  );
};
