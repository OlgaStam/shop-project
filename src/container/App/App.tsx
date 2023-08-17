import Container from '@mui/material/Container'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Home from 'pages/Home/Home'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/Cart/CartPage'
import AboutUs from 'pages/AboutUs/AboutUs'
import Payment from 'pages/Payment/Payment'
import Shipping from 'pages/Shipping/Shipping'
import { omit } from 'lodash'

type Props = {}

type productsInCartType = {
    [id: number]: number
}
const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<productsInCartType>({
        // 1: 3,
        // 2: 3,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count, //если prevState[id] возвращает не число - ставим 0
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, [id]))
    }
 const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}
export default App
