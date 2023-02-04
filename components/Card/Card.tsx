import style from './Card.module.scss'
import { Item } from '@/pages'
import { CartButton } from '../CartButton/CartButton'
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import { HitBar } from '../HitBar/HitBar'
import { Price } from '../Price/Price'
import { Rating } from '../Rating/Rating'
import { CardImage } from '../CardImage/CardImage'

interface Props {
    item: Item
}

export default function Card({ item }: Props) {
    return (
        <div className={style.card}>
            <HitBar count={item.rating.count} />
            <CardImage item={item} />

            <div>
                <div className={style.category_container}>
                    <div className={style.category}>{item.category}</div>
                    <Rating item={item} />
                </div>

                <div className={style.title}>{item.title}</div>
                <Price price={item.price} />
            </div>

            <div className={style.buttons_container}>
                <CartButton />
                <FavoriteButton />
            </div>
        </div>
    )
}
