import productsArray from 'utils/productsArray'
// console.log(productsArray)
type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsArray[parseInt(productId) - 1].title}://ненадежно привязываться к порядковому номеру как к уникальному
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
