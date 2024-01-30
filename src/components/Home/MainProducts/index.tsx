import Image from 'next/image';
import styles from './MainProducts.module.css'
import Item from './Item';
const getProducts =async ()=>{
  const src =  await fetch("https://"+process.env.SHOPIFY_HOSTNAME+'/admin/api/2024-01/products.json',{
    headers:{
      'X-Shopify-Access-Token':process.env.SHOPYFY_APY_KEY||""
    }
  })
  const data =  await src.json()
  return data.products;
}

const MainProducts= async ()=> {
  const data = await getProducts();
  console.log(data)
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
  }
export default MainProducts;
