import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RuPage() {
    const router = useRouter()

    useEffect(() => {
        localStorage.setItem('locale', 'ru')
        router.replace('/')
    }, [router])

    return <div>Переключение на русский язык...</div>
}