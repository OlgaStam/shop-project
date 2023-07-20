import React from 'react'
import ReactDOM from 'react-dom/client'

//without JSX
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(<React.StrictMode>{title}</React.StrictMode>)

// with JSX
const h1 = <h1 id="title-2">Hello React.js</h1>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{h1}</React.StrictMode>)
