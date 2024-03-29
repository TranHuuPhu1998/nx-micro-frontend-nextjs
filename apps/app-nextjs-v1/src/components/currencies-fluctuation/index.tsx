import { BaseAccordionItem } from '@nx-shared-components';
import { SERVICES_fluctuation } from '@nx-nextjs/api-services';
import { ICurrenciesFeature, ISymbols } from '@nx-shared-interfaces';

export const CurrenciesFluctuation = ({ setListSymbols }) => {
  return (
    <BaseAccordionItem
      targetId='2'
      url={ICurrenciesFeature.CURRENCIES_CONVERT}
      accordionId='2'
      onFetchAllData={() => SERVICES_fluctuation<ISymbols>(setListSymbols)}
      buttonText='RUN GET ALL ( Returns all available currencies )'
    ></BaseAccordionItem>
  );
};
