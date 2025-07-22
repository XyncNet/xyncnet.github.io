import { useRouter } from 'next/router'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

export function hexToRgbA(hex: string, alpha: number) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
            ","
        )}, ${alpha})`;
    }
}

const translations = { ru, en }

export function useTranslation() {
    const { locale } = useRouter()

    const t = (key: string) => {
        const keys = key.split('.')
        // @ts-ignore
        let value = translations[locale]

        for (const k of keys) {
            value = value?.[k]
        }

        return value || key
    }

    return { t, locale }
}