import { useEffect, useState } from 'react'
import st from './Loader.module.scss'

export default function Loader() {
    const [isLong, setIsLong] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLong(true)
        }, 3000)
    }, [])

    return (
        <div className={st.container}>
            <h1>Loading...</h1>
            {isLong && (
                <p>
                    Иногда Fake Api может очень долго грузиться. ReactQuery сейчас долбит
                    его как может.🔨🔨🔨
                </p>
            )}
        </div>
    )
}
