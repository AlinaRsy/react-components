import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s from '../Catalog.module.css'
import { Link } from 'react-router-dom';
export default function CatalogCard(card){
    return(
        <>
            <Card className={s.card}>
                <Link to={`${card.id}`} className={s.img__container}>
                    <Card.Img className={s.card__img} variant="top" src={card.img} />
                </Link>
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                    {card.price}$
                    </Card.Text>
                    <Button variant="primary">Добавить в корзину</Button>
                </Card.Body>
            </Card>
        </>
    )
}