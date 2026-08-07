import { Strings } from './strings'
import { en } from './en'
import { es } from './es'

export { Strings } from './strings'

export type Language = 'en' | 'es'

const DICTIONARIES: Record<Language, Strings> = { en, es }

export function isSupportedLanguage(value: string): value is Language {
  return value === 'en' || value === 'es'
}

// Falls back to English for anything that is not (yet) a real dictionary
// key, same tolerance the rest of this project extends to any setting a
// user could have from before an option existed.
export function getStrings(language: string): Strings {
  return isSupportedLanguage(language) ? DICTIONARIES[language] : en
}
