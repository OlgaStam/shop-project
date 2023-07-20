//snippet tsrafce
import React from 'react'

type Props = {
    title: string
    description: string
    author: string
}

const Article = ({ title, description, author }: Props) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>Author: {author}</div>
        </>
    )
}

export default Article

// type Props = {
//     title: string
//     description: string
//     author: string
// }

// const Article = ({ title, description, author }: Props) => {
//     return (
//         <>
//             <h1>{title}</h1>
//             <p>{description}</p>
//             <h4>{author}</h4>
//         </>
//     )
// }

// export default Article
