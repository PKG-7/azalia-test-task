import Image from 'next/image'
import starActive from '../../images/elements/starActive.png'
import starEmpty from '../../images/elements/starEmpty.png'
import style from './Stars.module.scss'

export function Stars({ rating }: { rating: number }) {
    const stars = []

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<Image src={starActive} alt='' />)
        } else {
            stars.push(<Image src={starEmpty} alt='' />)
        }
    }

    return <div className={style.stars}>{stars}</div>
}
