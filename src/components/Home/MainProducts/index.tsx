import styles from './MainProducts.module.css'
import Item from './Item';
import { getProducts } from '@/services/shopify';
export const dynamic = 'force-dynamic';


const MainProducts= async ()=> {
  const data = await getProducts();

  if(data)
    return(
      <section className={styles.Main_products}>
        <h3>✨ New products released!</h3>
        <div className={styles.MainProducts_grid}> 
        {
          data.map((item)=>{
            const imageSrc = item.image;
            return(
              <Item key={item.id} item={item} imageSrc={imageSrc}/>
            );
          })
        }
        </div>
      </section>
    )
    return(<div>
      Error
    </div>)
  }
export default MainProducts;
