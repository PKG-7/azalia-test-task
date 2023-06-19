import Image from 'next/image'
import style from './CartButton.module.scss'
import plus from '../../images/elements/plusButton.svg'
import minus from '../../images/elements/minusButton.svg'
import { Item, ItemInCart } from '@/types/ItemInCart'

interface ICartButton {
    item: Item
    shoppingCart: ItemInCart[]
    amountToAdd: number
    setShoppingCart: (shoppingCart: ItemInCart[]) => void
    setAmountToAdd: (amountToAdd: number) => void
}

export function CartButton({
    item,
    shoppingCart,
    setShoppingCart,
    amountToAdd,
    setAmountToAdd,
}: ICartButton) {
    const addedToCart = shoppingCart.some((x) => x.id === item.id)

    const onClickAddtoCart = (itemId: number, amountToAdd: number) => {
        const itemIndex = shoppingCart.findIndex((cartItem) => cartItem.id === itemId)
        if (itemIndex !== -1) {
            shoppingCart[itemIndex].amount += amountToAdd
            setShoppingCart([...shoppingCart])
        } else {
            setShoppingCart([...shoppingCart, { ...item, amount: amountToAdd }])
        }
    }

    const onClickRemoveFromCart = (itemId: number) => {
        setShoppingCart(shoppingCart.filter((cartItem) => cartItem.id !== itemId))
    }

    return (
        <div className={style.container}>
            <div className={style.background}>
                {!addedToCart ? (
                    <>
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
                    </>
                ) : (
                    <button
                        onClick={() => onClickRemoveFromCart(item.id)}
                        className={style.cart_button__clicked}
                    >
                        В корзине
                    </button>
                )}
            </div>
        </div>
    )
}
