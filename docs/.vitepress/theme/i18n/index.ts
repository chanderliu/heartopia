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
  toggleLocale: () => void
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
    toggleLocale: () => {
      setLocale(locale.value === 'zh' ? 'en' : 'zh')
    },
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
