import s from './Sorting.module.css'
export default function Sorting({sorting, setSorting}){
    function handleChahge(e){
        setSorting(e.target.value);
    }
    return(
        <div className={s.sort}>
            <select onChange={handleChahge} value={sorting} className={s.select}>
                <option className="option" value="0">Сортировать:</option>
                <option className="option" value="price_asc">Сначала дешевые</option>
                <option className="option" value="price_desc">Сначала дорогие</option>
            </select>
        </div>
    )
}