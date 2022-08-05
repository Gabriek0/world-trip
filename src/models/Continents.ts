export interface Continents {
  id: string;
  name: string;
  description: string;
  information?: string;
  countryNumber?: string;
  languageNumber?: string;
  cities?: string;
  image: string;
  shortcut: string;
  countries?: Countries[];
}

export interface Countries {
  id: string;
  country: string;
  capital: string;
  flag: string;
  capitalImage: string;
}
