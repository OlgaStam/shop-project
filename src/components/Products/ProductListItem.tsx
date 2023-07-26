import { Card, Button, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
// import PhoneType from './PhoneType'

type Props = { phoneType: string }

const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <h4 className="product-title">iPhone {props.phoneType}</h4>
                <p className="product-description">
                    This is iPhone {props.phoneType}
                </p>
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
