import s from './Categories.module.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
export default function Categories({setCategory}){
    return(
        <ButtonGroup className="mb-2">
            <Button onClick={()=>setCategory(0)}>Все товары</Button>
            <Button onClick={()=>setCategory(1)}>Платья</Button>
            <Button onClick={()=>setCategory(2)}>Обувь</Button>
            <Button onClick={()=>setCategory(3)}>Брюки</Button>
        </ButtonGroup>
    )
}