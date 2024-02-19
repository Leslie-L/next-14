import { useShoppingCart } from "@/provider/useShoppingCart";
import Image from "next/image";


export default function CheckoutOrder() {
    const { cart } = useShoppingCart();
    return(
        <section>
            <h1>CheckOut</h1>
            <article>
                {
                    cart.map(item=>{
                        return(
                            <div key={item.id}>
                                <div>
                                    <Image
                                    
                                    src={item.image ||""}
                                    fill
                                    alt={item.title} 
                                    loading="eager" 
                                    /> 
                                </div>
                                <div>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <div>
                                            <button>-</button>
                                            <span>{item.quantity}</span>
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button>X</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    )
}