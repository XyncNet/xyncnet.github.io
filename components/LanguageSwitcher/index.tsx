import {useRouter} from 'next/router'
import Link from 'next/link'

export default function LanguageSwitcher() {
    const router = useRouter()

    return (
        <div>
            {
                // @ts-ignore
                router.locales.map((locale) => (
                    <Link
                        key={locale}
                        href={router.asPath}
                        locale={locale}
                        className={locale === router.locale ? 'active' : ''}
                    >
                        {locale.toUpperCase()}
                    </Link>
                ))
            }
        </div>
    )
}