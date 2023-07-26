import Typography from '@mui/material/Typography'
import ProductListItem from './ProductListItem'
import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'

type Props = {}

const ProductList = (props: Props) => {
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
                {productsArray.map((product, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <ProductListItem
                            title={product.title}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductList
