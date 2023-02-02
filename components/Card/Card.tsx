import { Item } from '@/pages'
import Image from 'next/image'
import React from 'react'
import style from './Card.module.scss'
import favorite from '../../images/icons/favorite.svg'

interface Props {
    item: Item
}

export default function Card({ item }: Props) {
    return (
        <div className={style.card}>
            <div className={style.container}>
                <div className={style.container}>
                    <Image src={item.image} width={220} height={220} alt={item.title} />
                </div>

                <div>
                    <div className={style['category']}>{item.category}</div>
                    <div className={style['title']}>{item.title}</div>
                    <div className={style['price']}>
                        {item.price} ₽ <span className={style['price_sign']}>/шт.</span>
                    </div>
                    <div className={style['button_container']}>
                        <button className={style['cart_button']}>В корзине</button>
                        <Image src={favorite} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
