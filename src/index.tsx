import React from 'react'
import ReactDOM from 'react-dom/client'
//импорт Хедер до начала кода, всегда вверху
import Header from './Header'

const Content = () => {
    return (
        <>
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
        </>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    )
}
//в рут передаем только корневой компонент, его структуру расписываем выше
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
