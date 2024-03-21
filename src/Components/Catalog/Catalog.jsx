import {products} from '../../products'
import CatalogCard from './CatalogCard/CatalogCard'
import s from './Catalog.module.css'
export default function Catalog({search, sorting, category}){
    console.log(search);
    const catalog = products.filter(product=>product.name.toLowerCase().includes(search.toLowerCase())
    && (product.categoryId==+category || category==0));
    const sortProducts = (sorting, products)=>{
        switch(sorting){
            case 'price_asc': return [...products].sort((a,b)=>a.price-b.price);
            case 'price_desc': return [...products].sort((a,b)=>b.price-a.price);
            default: return products;
        }
    }
    const sortAndFilterProducts = sortProducts(sorting, catalog);

    return(
        <>
        <div className={s.catalog}>
            {
                sortAndFilterProducts.map((card)=>{return <CatalogCard {...card}/>})
            }
        </div>
        </>
    )
}