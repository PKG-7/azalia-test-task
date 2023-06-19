import { Item } from '@/types/ItemInCart'
import style from './Rating.module.scss'
import { Stars } from '../Stars/Stars'

export function Rating({ item }: { item: Item }) {
    return (
        <div className={style.container}>
            <Stars rating={item.rating.rate} />

            <div className={style.rating}>
                <span>{item.rating.count}</span>
                <span> отзывов</span>
            </div>
        </div>
    )
}
