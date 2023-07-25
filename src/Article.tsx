import classes from './Article.module.scss'
console.log(classes)
type Props = {
    title: string
    description: string
    author: string
}
//стилизация с SCSS
const Article = ({ title, description, author }: Props) => {
    return (
        <>
            <h2 className={classes['title']}>{title}</h2>
            <p>{description}</p>
            <div>Author: {author}</div>
        </>
    )
}

export default Article
