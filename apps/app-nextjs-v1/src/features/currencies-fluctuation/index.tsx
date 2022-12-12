import { BaseAccordionItem } from '@nx-nextjs/ui';
import { onFetchAllCurrencies } from '@nx-nextjs/api-services';
import { ICurrenciesFeature, ISymbols } from '@nx-nextjs/interfaces';

export const CurrenciesFluctuation = ({ setListSymbols }) => {
  return (
    <BaseAccordionItem
      targetId="2"
      url={ICurrenciesFeature.CURRENCIES_CONVERT}
      accordionId="2"
      onFetchAllData={() =>
        onFetchAllCurrencies<ISymbols>('fluctuation', setListSymbols)
      }
      buttonText="RUN GET ALL ( Returns all available currencies )"
    ></BaseAccordionItem>
  );
};
