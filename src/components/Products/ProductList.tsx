import Typography from '@mui/material/Typography'
import ProductListItem from './ProductListItem'
import { Grid } from '@mui/material'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    marginTop: '30px',
                    textTransform: 'uppercase',
                }}
                align="center"
            >
                Product List
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
