import { locales } from "./data.ts";

export const localesSize = Object.keys(locales).length;

/**
 * Return a given locale identified by its id
 * @param id unique identifier
 */
export const getLocaleById = (id: number) => Object.values(locales)[id - 1];
