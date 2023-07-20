import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Article from './Article'

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
            <Header title="React" year={2015} />
            <Content />
            <Header title="TS" year={2019} />
            <Article title="News 1" description="Текст1" author="Аффтор1" />
            <Article title="News 2" description="Текст2" author="Аффтор2" />
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
