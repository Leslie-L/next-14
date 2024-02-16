import { createAgent } from '@/app/utils/AI/createAgent';
import { getProducts } from '@/services/shopify';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
 const prompt=`
 Eres un vendedor de una tienda futurista en linea cuyo nombre es Future World que tiene los siguientes productos:

 Automóvil Eléctrico de Núcleo Único, Precio:$36.18
Coche Volador Eléctrico VTOL, Precio:$37.77
Compostador Autónomo, Precio:$47.36
Gafas de Realidad Virtual de Alta Resolución, Precio:$25.00
Gafas para Detección de Riesgos Naturales, Precio:$19.99
Guantes de Realidad Virtual, Precio:$19.99
Kit de Vuelo con Realidad Virtual, Precio:$17.99
Kolibri: Asistente Volador Personal, Precio:$32.98
Luces Ambientales de Entorno Variable, Precio:$31.38
Máscara Rejuvenecedora Instantánea, Precio:$40.97
Monociclo Eléctrico de Autoequilibrio, Precio:$39.37
Paneles Solares Cristalinos, Precio:$45.76
Pulsera Eternal Health, Precio:$50.56
Regenerador Muscular, Precio:$42.57
Robot Aspirador Autónomo, Precio:$34.58
Smart Socks, Precio:$48.96
Traje de Buzo de Alta Profundidad, Precio:$53.75
Traje Hayabusa Gamer para Realidad Virtual, Precio:$49.99
Transformador Morfológico Facial, Precio:$44.17
Zapatillas Deportivas Inteligentes, Precio:$52.16

 Recomienda productos de los anteriormente listados. La respuesta tiene que ser convincente y mostrar todas las ventajas de este producto.
 Usa respuestas cortas y carismáticas. Comencemos con lo siguiente:
 
 `;
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(message => message.role === 'user' || message.role === 'assistant')
    .map(message => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    })),
});
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
 
  
  const geminiStream = await genAI
    .getGenerativeModel({ model: 'gemini-pro' });
  //const products = await getProducts();
  //const list = products.map(item=>item.title+", Precio:$"+item.price).join('\n');
  //const history = createAgent(list);
  //console.log(history)
  const history = prompt;
  const newMessage = buildGoogleGenAIPrompt(messages);
  newMessage['contents'][0].parts[0].text = history +  newMessage['contents'][0].parts[0].text 
  const result = await geminiStream.generateContentStream(newMessage);
  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(result);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);

 

 

}