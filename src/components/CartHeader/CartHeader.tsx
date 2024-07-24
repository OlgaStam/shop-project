import CartProductList from 'components/Cart/CartProductList'
import CartTotal from 'components/Cart/CartTotal'
import { useAppSelector } from 'redux/hooks'
type Props = {
   
}
const CartHeader = (props: Props) => {

const productsInCart = useAppSelector (state=> state.productsInCart)

    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
