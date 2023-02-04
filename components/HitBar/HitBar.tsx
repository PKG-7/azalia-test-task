import Image from 'next/image'
import style from './HitBar.module.scss'
import hit from '../../images/elements/hit.svg'

export function HitBar({ count }: { count: number }) {
    if (count < 300) return null
    return <Image src={hit} className={style.hit} alt='' />
}
