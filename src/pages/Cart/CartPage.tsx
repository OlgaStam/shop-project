import { Typography } from '@mui/material'
import CartTotal from 'components/Cart/CartTotal'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
type productsObjectType = {
    [id: number]: Product
}
const CartPage = ({ productsInCart }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)

    return (
        <div>
            <div>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        margin: '30px 0',
                    }}
                >
                    Cart
                </Typography>
            </div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:{' '}
                        {productsInCart[parseInt(productId)]} : ${' '}
                        {productsObject[parseInt(productId)].price}
                    </div>
                ))}
            </div>
         <CartTotal productsInCart={productsInCart}/>
        </div>
    )
}

export default CartPage
