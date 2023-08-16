import { Card, CardContent, Typography } from '@mui/material'
import { useState } from 'react'

type Props = {}
type ReviewType = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: ReviewType[] = [
        {
            name: 'Ava',
            text: 'I am very happy with my purchase at this store! Here I found my favorite iPhone at a great price, and it was the best purchase of my life! In addition, the store provided fast delivery and quality service, which caused only positive emotions',
        },
        {
            name: 'Stan Woods',
            text: 'Thank you for the wonderful service and excellent selection of iPhones in your store! I was pleasantly surprised with the quick delivery and high quality of the product. Great store for those who want to buy a quality iPhone at an affordable price. I recommend it!',
        },
    ]
    // прописываем стейт, указываем тип - массив

    const [reviews, setReviews] = useState<ReviewType[]>(arrReviews)

    // Данный код представляет использование хука useState в React и определение начального состояния для переменной reviews.

    // useState - это хук в React, который позволяет добавлять состояние в функциональные компоненты.
    // ReviewType[] - указывает тип данных, который будет храниться в состоянии переменной reviews. Здесь предполагается, что ReviewType - это тип данных, определенный где-то в вашем коде, который описывает структуру отзыва.
    // arrReviews - это массив, который служит начальным значением состояния переменной reviews.
    // Вместе эти строки кода объявляют переменную reviews и функцию setReviews, которая будет использоваться для обновления значения переменной reviews. При помощи хука useState вы можете получить текущее значение состояния переменной reviews и функцию setReviews, которая позволяет обновлять это значение.

    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    margin: '30px 0',
                    textTransform: 'uppercase',
                }}
                align="center"
            >
                Reviews
            </Typography>
            {/* выводим массив отзывов*/}
            {reviews.map(({ name, text }: ReviewType, i) => (
                <Card
                    variant="outlined"
                    sx={{
                        marginBottom: '15px',
                    }}
                    key={i}
                >
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {name}:
                        </Typography>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            {/* В представленном коде используется метод map() для отображения массива reviews в виде карточек с использованием библиотеки Material-UI.

reviews.map() - вызов метода map() для итерации по массиву reviews и создания нового массива компонентов на основе каждого элемента массива.
({ name, text }: ReviewType, i) - деструктуризация объекта ReviewType, где name и text являются свойствами объекта ReviewType, а i - индекс текущего элемента массива.
<Card> - компонент карточки из библиотеки Material-UI.
variant="outlined" - опция компонента Card, указывающая на использование границы для карточки.
sx={{ marginBottom: '15px' }} - стилизация компонента Card с помощью объекта sx, где marginBottom задает отступ снизу для карточки.
key={i} - присваивание уникального ключа для каждой карточки, используя индекс элемента массива.
<CardContent> - компонент содержимого карточки, где располагаются данные отзыва.
<Typography variant="h6" component="div">{name}:</Typography> - компонент Typography из библиотеки Material-UI, используемый для отображения имени отзыва с определенным вариантом (variant="h6") и компонентом (component="div").
<div>{text}</div> - отображение текста отзыва внутри элемента div. */}
        </>
    )
}

export default Reviews
