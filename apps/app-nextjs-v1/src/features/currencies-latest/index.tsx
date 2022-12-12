import { BaseAccordionItem } from '@nx-nextjs/ui';
import { onFetchAllCurrencies } from '@nx-nextjs/api-services';
import { ICurrenciesFeature, ISymbols } from '@nx-nextjs/interfaces';

export const CurrenciesLatest = ({ setListSymbols }) => {
  return (
    <BaseAccordionItem
      targetId="3"
      url={ICurrenciesFeature.CURRENCIES_LATEST}
      accordionId="3"
      onFetchAllData={() =>
        onFetchAllCurrencies<ISymbols>(
          ICurrenciesFeature.CURRENCIES_LATEST,
          setListSymbols
        )
      }
      buttonText="RUN GET ALL ( Returns all available currencies )"
    ></BaseAccordionItem>
  );
};
