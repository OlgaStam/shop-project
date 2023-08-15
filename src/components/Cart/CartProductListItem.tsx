// type Props = {}

import { Product } from 'utils/productsArray'

// const CartProductListItem = (props: Props) => {
//   return (
//    <div key={productId}>
//                     {productsObject[parseInt(productId)].title}:{' '}
//                     {productsInCart[parseInt(productId)]}
//                 </div>
//   )
// }
type Props = {
    product: Product
    productCount: number
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title}: {productCount}
        </div>
    )
}

export default CartProductListItem
