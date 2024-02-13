import Image from 'next/image';
type propType={
  item: ProductType;
  imageSrc:string;
}
export default function Item({item,imageSrc}:propType){
    return(
        <article >
                <p>{item.title}</p>
                <Image
                  src={imageSrc}
                  fill
                  alt={item.title} 
                  loading="eager" 
                />
        </article>
    )
}