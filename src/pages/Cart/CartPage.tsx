import { Typography } from '@mui/material'
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
            <div>
                Total: ${' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[parseInt(productId)].price *
                            productsInCart[parseInt(productId)],
                    0
                )}
            </div>
        </div>
    )
}

export default CartPage
