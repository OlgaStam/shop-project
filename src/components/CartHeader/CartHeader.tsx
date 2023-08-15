import CartProductList from 'components/Cart/CartProductList'
import CartTotal from 'components/Cart/CartTotal'
type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ productsInCart }: Props) => {

    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
