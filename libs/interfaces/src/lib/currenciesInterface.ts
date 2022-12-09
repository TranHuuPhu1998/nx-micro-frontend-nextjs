export interface IConvertCurrencies {
  amount: number;
  from: string;
  to: string;
  date: string;
}

export interface ISymbols {
  success: boolean;
  symbols: { [key: string]: string };
}

export enum ICurrenciesFeature {
  CURRENCIES_SYMBOLS = 'symbols',
  CURRENCIES_LATEST = 'latest',
  CURRENCIES_FLUCTUATION = 'fluctuation',
  CURRENCIES_CONVERT = 'convert',
}
