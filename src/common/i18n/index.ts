import { Strings } from './strings'
import { en } from './en'
import { es } from './es'
import { pt } from './pt'
import { fr } from './fr'
import { it } from './it'
import { ko } from './ko'
import { zh } from './zh'
import { ja } from './ja'

export { Strings } from './strings'

export type Language = 'en' | 'es' | 'pt' | 'fr' | 'it' | 'ko' | 'zh' | 'ja'

const DICTIONARIES: Record<Language, Strings> = { en, es, pt, fr, it, ko, zh, ja }

const SUPPORTED_LANGUAGES = Object.keys(DICTIONARIES) as Language[]

export function isSupportedLanguage(value: string): value is Language {
  return (SUPPORTED_LANGUAGES as string[]).includes(value)
}

// Falls back to English for anything that is not (yet) a real dictionary
// key, same tolerance the rest of this project extends to any setting a
// user could have from before an option existed.
export function getStrings(language: string): Strings {
  return isSupportedLanguage(language) ? DICTIONARIES[language] : en
}
