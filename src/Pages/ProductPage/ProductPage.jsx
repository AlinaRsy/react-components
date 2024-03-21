import { Link, useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import s from './ProductPage.module.css';
import Button from 'react-bootstrap/Button';
import { products } from '../../products';
import Example from '../../Components/Modal/Modal';
    export default function ProductPage(){
        const {id} = useParams();
        const product = products.find(product=>product.id===+id);
        return(
            <>
                <Link className={s.link} to='/'>◄ Вернуться в каталог</Link>
                <div className={s.card}>
                    <div className={s.card__img}>
                        <img src={product.img} alt="#" />
                    </div>
                    <div className={s.card__body}>
                        <div className={s.card__title}>{product.name}<Badge className={s.badge} bg="primary">Акция</Badge></div>
                        <div className={s.card__price}>{product.price}$</div>
                        <div style={{display:'flex', gap:'10px'}} className={s.card__btns}>
                            <Button className={s.card__btn} variant="outline-primary">В корзину</Button>
                            <Example/>
                        </div>
                    </div>
                </div>
            </>
        )
}