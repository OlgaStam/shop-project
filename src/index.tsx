import React from 'react'
import ReactDOM from 'react-dom/client'

//without JSX
const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// with JSX
const h1 = (
    <h1 id="title-2" className="title">
        Hello React.js
    </h1>
)
const content = (
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quibusdam blanditiis nisi hic porro iusto laudantium officiis
            provident, at eos, distinctio fugit voluptatibus quasi ab
            laboriosam. Magnam assumenda minus est?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quibusdam blanditiis nisi hic porro iusto laudantium officiis
            provident, at eos, distinctio fugit voluptatibus quasi ab
            laboriosam. Magnam assumenda minus est?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quibusdam blanditiis nisi hic porro iusto laudantium officiis
            provident, at eos, distinctio fugit voluptatibus quasi ab
            laboriosam. Magnam assumenda minus est?
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {h1}
        {title}
        {content}
    </React.StrictMode>
)
