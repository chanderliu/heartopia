import { ref, computed, inject, provide, type InjectionKey, type Ref, type ComputedRef } from 'vue'

export type Locale = 'zh' | 'en'

const STORAGE_KEY = 'heartopia-lang'

const getSavedLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem(STORAGE_KEY) as Locale) || 'en'
  }
  return 'en'
}

const locale: Ref<Locale> = ref(getSavedLocale())

export function setLocale(l: Locale) {
  locale.value = l
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, l)
  }
}

export function getLocale(): Locale {
  return locale.value
}

export interface I18nContext {
  locale: Ref<Locale>
  t: (key: string) => string
  tText: (englishText: string) => string
  toggleLocale: () => void
  setLocale: (l: Locale) => void
}

export const I18N_KEY: InjectionKey<I18nContext> = Symbol('i18n')

export function provideI18n() {
  const ctx: I18nContext = {
    locale,
    t: (key: string) => {
      const keys = key.split('.')
      let result: any = locale.value === 'zh' ? zh : en
      for (const k of keys) {
        result = result?.[k]
      }
      return typeof result === 'string' ? result : key
    },
    tText: (englishText: string) => translateText(englishText, locale.value),
    toggleLocale: () => {
      setLocale(locale.value === 'zh' ? 'en' : 'zh')
    },
    setLocale,
  }
  provide(I18N_KEY, ctx)
  return ctx
}

export function useI18n(): I18nContext {
  const ctx = inject(I18N_KEY)
  if (!ctx) throw new Error('useI18n() must be used inside <Layout> which calls provideI18n()')
  return ctx
}

import { en } from './en'
import { zh } from './zh'

const enReverseMap = buildReverseMap(en)

function buildReverseMap(obj: Record<string, any>, prefix = ''): Map<string, string> {
  const map = new Map<string, string>()
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string') {
      map.set(value, fullKey)
    } else if (typeof value === 'object' && value !== null) {
      const subMap = buildReverseMap(value, fullKey)
      subMap.forEach((v, k) => map.set(k, v))
    }
  }
  return map
}

export function translateText(englishText: string, targetLocale: Locale): string {
  const key = enReverseMap.get(englishText)
  if (!key) return englishText
  const keys = key.split('.')
  let result: any = targetLocale === 'zh' ? zh : en
  for (const k of keys) {
    result = result?.[k]
  }
  return typeof result === 'string' ? result : englishText
}
