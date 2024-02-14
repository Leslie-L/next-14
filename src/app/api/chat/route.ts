import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
 
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
  const history = [
    {
      role: "user",
      parts: "quiero que todo lo que me responsa sea haciendote pasar por una tienda virutual futurista que vende lentes de realidad virtual, comencemos:",
    },
  ]
  const newMessage = buildGoogleGenAIPrompt(messages);
  newMessage['contents'][0].parts[0].text = history[0].parts +'\n'+  newMessage['contents'][0].parts[0].text 
  const result = await geminiStream.generateContentStream(newMessage);
  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(result);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);

 

 

}