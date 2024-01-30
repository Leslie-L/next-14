import Image from 'next/image';
export default function Item({item,imageSrc}){
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