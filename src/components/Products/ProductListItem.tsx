import { Card, Button, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <h4 className="product-title">iPhone 14 Pro</h4>
                <p className="product-description">This is iPhone 14 Pro</p>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 128 Gb</div>
                <div className="product-price">
                    Price: <span>$1000</span>
                </div>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
