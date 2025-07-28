import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function EnPage() {
    const router = useRouter()

    useEffect(() => {
        localStorage.setItem('locale', 'en')
        router.replace('/')
    }, [router])

    return <div>Switching to English...</div>
}