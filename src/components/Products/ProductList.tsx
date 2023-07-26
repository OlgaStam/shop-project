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
                    margin: '30px',
                    textTransform: 'uppercase',
                }}
                align="center"
            >
                Product List
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 14 Pro"
                        description="This is iPhone 14 Pro"
                        type="phone"
                        capacity="64"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 13 Pro"
                        description="This is iPhone 13 Pro"
                        type="phone"
                        capacity="128"
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 12 Pro"
                        description="This is iPhone 12 Pro"
                        type="phone"
                        capacity="560"
                        price={1500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
