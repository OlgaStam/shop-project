import React from 'react'
import ReactDOM from 'react-dom/client'

//элементы всегда возвращаем один элемент (много заворачиваем в один)
//компоненты перепишем в виде стрелковой функции
// для компонентов используют ПаскальКейс, для обычных функций кэмелКейс
// вызываются как теги
const Header = () => {
    return <h1>Hello React</h1>
}

const Content = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo suscipit reprehenderit aliquam, possimus repellendus
                error esse provident sit quis quia architecto repellat adipisci
                consectetur sed. Non et aspernatur rem dolorem!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo suscipit reprehenderit aliquam, possimus repellendus
                error esse provident sit quis quia architecto repellat adipisci
                consectetur sed. Non et aspernatur rem dolorem!
            </p>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <Header />
            <Content />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
