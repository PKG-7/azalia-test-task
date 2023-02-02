import { Item } from '@/pages'
import Image from 'next/image'
import React from 'react'
import style from './Card.module.scss'

interface Props {
    item: Item
}

export default function Card({ item }: Props) {
    return (
        <div className={style.cover}>
            <div>{item.title}</div>
            <Image src={item.image} width={220} height={220} alt={item.title} />
        </div>
    )
}
