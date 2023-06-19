import { useEffect, useState } from 'react'
import st from './ErrScreen.module.scss'

export default function ErrScreen() {
    const [isLong, setIsLong] = useState(false)

    const handleReload = () => {
        window.location.reload()
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLong(true)
        }, 3000)
    }, [])

    return (
        <div className={st.container}>
            <h1>😟 Произошла ошибка</h1>
            <p>С Fake Api такое бывает, попробуйте еще раз</p>
            <button onClick={handleReload}>Запустить снова</button>
        </div>
    )
}
