import { Typography } from '@mui/material'
import CartProductList from 'components/Cart/CartProductList'
import CartTotal from 'components/Cart/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {

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
           
         <CartProductList productsInCart={productsInCart}/>
         <CartTotal productsInCart={productsInCart}/>
        </div>
    )
}

export default CartPage
