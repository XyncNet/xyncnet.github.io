import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

const translations = { ru, en }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState('en')
    const router = useRouter()

    useEffect(() => {
        const savedLocale = localStorage.getItem('locale') || 'en'
        setLocale(savedLocale)

        // Проверяем при каждом переходе по роутам
        const handleRouteChange = () => {
            const currentLocale = localStorage.getItem('locale') || 'en'
            if (currentLocale !== locale) {
                setLocale(currentLocale)
            }
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => router.events.off('routeChangeComplete', handleRouteChange)
    }, [router])

    const changeLanguage = (newLocale) => {
        setLocale(newLocale)
        localStorage.setItem('locale', newLocale)
    }

    const t = (key) => {
        const keys = key.split('.')
        let value = translations[locale]

        for (const k of keys) {
            value = value?.[k]
        }

        return value || key
    }

    return (
        <LanguageContext.Provider value={{ t, locale, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useTranslation = () => useContext(LanguageContext)