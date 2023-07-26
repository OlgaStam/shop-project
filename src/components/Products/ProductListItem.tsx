import { Card, Button, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'
// import PhoneType from './PhoneType'

type Props = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
}

const ProductListItem = ({
    title,
    description,
    capacity,
    type,
    price,
}: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">
                    Price: <span>${price}</span>
                </div>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
