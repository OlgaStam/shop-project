import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

type Props = {
    product: Product
    productCount: number
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    changeProductQuantity,
}: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )

    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            dispatch({
                                type: 'TOGGLE_LIKE',
                                id: product.id,
                            })
                        }}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-description">
                        {product.description}
                    </div>
                    <div className="product-description">
                        Price for one item: ${product.price}
                    </div>
                    <div className="product-features">
                        Count: {productCount}
                    </div>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() => {
                            if (productCount <= 1) {
                                dispatch({
                                    type: 'remove-product-from-cart',
                                    id: product.id,
                                })
                            } else {
                                changeProductQuantity(
                                    product.id,
                                    productCount - 1
                                )
                            }
                        }}
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => {
                            dispatch({
                                type: 'remove-product-from-cart',
                                id: product.id,
                            })
                        }}
                    >
                        <DeleteIcon />
                        Remove
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
