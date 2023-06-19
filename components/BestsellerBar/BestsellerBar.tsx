import Image from 'next/image'
import style from './BestsellerBar.module.scss'
import hit from '../../images/elements/hit.svg'

export function BestsellerBar({ count }: { count: number }) {
    if (count < 300) return null
    return <Image src={hit} className={style.hit} alt='' />
}
