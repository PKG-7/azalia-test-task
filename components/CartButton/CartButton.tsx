import Image from 'next/image'
import style from './CartButton.module.scss'
import plus from '../../images/elements/plusButton.svg'
import minus from '../../images/elements/minusButton.svg'
import { Item } from '@/pages'

export interface ICartButton {
    item: Item
    amountToAdd: number
    addedToCart: boolean
    setAmountToAdd: (amountToAdd: number) => void
    onClickAddtoCart: (itemId: number, amountToAdd: number) => void
    onClickRemoveFromCart: (itemId: number) => void
}

export function CartButton({
    item,
    amountToAdd,
    addedToCart,
    setAmountToAdd,
    onClickAddtoCart,
    onClickRemoveFromCart,
}: ICartButton) {
    if (!addedToCart)
        return (
            <div className={style.container}>
                <div className={style.background}>
                    <button
                        onClick={() => onClickAddtoCart(item.id, amountToAdd)}
                        className={style.cart_button}
                    >
                        В корзину
                    </button>
                    <div className={style.buttons_container}>
                        {amountToAdd > 1 ? (
                            <Image
                                onClick={() => setAmountToAdd(amountToAdd - 1)}
                                className={style.plus_button}
                                src={minus}
                                alt=''
                            />
                        ) : (
                            <Image className={style.plus_button} src={minus} alt='' />
                        )}

                        <div className={style.number}>{amountToAdd}</div>

                        <Image
                            onClick={() => setAmountToAdd(amountToAdd + 1)}
                            className={style.plus_button}
                            src={plus}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        )

    return (
        <button
            onClick={() => onClickRemoveFromCart(item.id)}
            className={style.cart_button__clicked}
        >
            В корзине
        </button>
    )
}
