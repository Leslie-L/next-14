'use client';
 
import { useChat } from 'ai/react';
import styles from "./Messages.module.css"
import { useEffect,useCallback } from 'react';


export const Messages = (props: { agent: string }) => {
  
  const { messages, input, handleInputChange, handleSubmit,append } = useChat();
  
  const appendCallback = useCallback(
    async () => {
      await append({
        id: '1',
        content: props.agent,
        role: 'user'
      });
    },
    [append, props.agent]
  );

  useEffect(() => {
    const firstContext = async () => {
      await appendCallback();
    };

    firstContext();
  }, [appendCallback]);
 const clientClass ={
     backgroundColor: '#4f56ff',
     alignSelf: 'flex-end',
 }
 const aiClass ={
  backgroundColor: '#4a4647',
}
  return (
    <main className={styles.chat}>
      <section className={styles.chat_section}>
        {messages
        .map(m =>{
          const role = m.role === 'user' ? 'User ' : 'AI ';
          const classMess = m.role === 'user'?clientClass:aiClass;
          return (
            <div className={styles.chat_message} style={classMess} key={m.id}>
              <span>
                <b>{role}</b>
              </span>
              <p> {m.content}</p>
            </div>
          )
        } )}
      </section>
      <form className={styles.chat_form} onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Preguntale al asistente"
        />
        <button
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}