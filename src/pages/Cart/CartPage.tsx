import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import CartTotal from 'components/Cart/CartTotal'
import { useAppSelector } from 'redux/hooks'

type Props = {
   
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartPage = ({
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {

const productsInCart= useAppSelector((state)=>state.productsInCart)

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
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
