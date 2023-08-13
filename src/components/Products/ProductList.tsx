import Typography from '@mui/material/Typography'
import ProductListItem from './ProductListItem'
import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart:(count: number, price:number)=>void
    }

const ProductList = ({addProductToCart}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    margin: '30px',
                    textTransform: 'uppercase',
                }}
                align="center"
            >
                Product List
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                image={image}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
