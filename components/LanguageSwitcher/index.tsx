import { useTranslation } from '@/contexts/LanguageContext'
import styles from "@/components/Footer/Footer.module.sass";

export default function LanguageSwitcher() {
    const { locale, changeLanguage } = useTranslation()

    return (
        locale === 'en'
            ? <a onClick={() => changeLanguage('ru')} style={{marginRight: 24, cursor: "pointer"}}><span>RU</span></a>
            : <a onClick={() => changeLanguage('en')} style={{marginRight: 24, cursor: "pointer"}}><span>EN</span></a>
    )
}