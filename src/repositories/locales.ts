import { locales } from "./locales.data.ts";

export type Locale = {
  locale: string;
  message: string;
};

export const localesSize = Object.keys(locales).length;

/**
 * Return a given locale identified by its id
 * @param id unique identifier
 */
export const getLocaleById = (id: number): Locale => ({
  locale: Object.keys(locales)[id - 1],
  message: Object.values(locales)[id - 1],
});
