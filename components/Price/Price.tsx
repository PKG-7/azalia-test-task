import style from './Price.module.scss'

export function Price({ price }: { price: number }) {
    const priceConverted = Math.round(price * 70)
    let priceFormatted = ''

    const whole = priceConverted.toString()
    for (let i = 0; i < whole.length; i++) {
        if (i !== 0 && (whole.length - i) % 3 === 0) {
            priceFormatted += ' '
        }
        priceFormatted += whole[i]
    }
    return (
        <div className={style.price}>
            {priceFormatted} ₽ <span className={style.price_sign}>/шт.</span>
        </div>
    )
}
