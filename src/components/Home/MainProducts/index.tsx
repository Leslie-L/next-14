import styles from './MainProducts.module.css'
import Item from './Item';
import { getProducts } from '@/services/shopify';


const MainProducts= async ()=> {
  const data = await getProducts();
  console.log(data)
  if(data)
    return(
      <section className={styles.Main_products}>
        <h3>✨ New products released!</h3>
        <div className={styles.MainProducts_grid}> 
        {
          data.map((item)=>{
            const imageSrc = item.images[0].src;
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
