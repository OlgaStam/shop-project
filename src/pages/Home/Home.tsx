import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'
type Props = {
    addProductToCart: (count: number, id: number) => void
}

const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <ProductList addProductToCart={addProductToCart} />
            <Reviews />
        </>
    )
}
export default Home
