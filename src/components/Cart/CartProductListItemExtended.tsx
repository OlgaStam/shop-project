// type Props = {}

// const CartProductListItemExtended = (props: Props) => {
//   return (
//     <div>CartProductListItemExtended</div>
//   )
// }

// export default CartProductListItemExtended
import { Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-descrpition">
                        {product.description}
                    </div>
                    <div className="product-descrpition">
                        Price for one item: ${product.price}
                    </div>
                    <div>Count: {productCount}</div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended