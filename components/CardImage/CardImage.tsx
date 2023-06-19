import { Item } from '@/types/ItemInCart'
import Image from 'next/image'
import style from './CardImage.module.scss'

export function CardImage({ item }: { item: Item }) {
    return (
        <div className={style.container}>
            <Image src={item.image} width={220} height={220} alt={item.title} />
        </div>
    )
}
