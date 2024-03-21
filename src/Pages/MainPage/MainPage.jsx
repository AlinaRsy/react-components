import 'bootstrap/dist/css/bootstrap.min.css';
import Catalog from '../../Components/Catalog/Catalog';
import Sorting from '../../Components/Sorting/Sorting';
import { useState } from 'react';
import s from './MainPage.module.css';
import Categories from '../../Components/Categories/Categories';
export default function MainPage({search}){
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState('');
    return(
        <section className='catalog'>  
            <h2 style={{padding:'30px 0'}} className="title">Каталог товаров</h2>
            <div className={s.sort}>
                <Categories setCategory={setCategory}/>
                <Sorting sorting={sorting} setSorting={setSorting}/>
            </div>
            <Catalog search={search} sorting={sorting} category={category}/>
        </section>
    )
}