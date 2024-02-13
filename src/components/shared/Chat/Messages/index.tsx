'use client';
 
import { useChat } from 'ai/react';
import styles from "./Messages.module.css"
import { useEffect,useCallback, useState } from 'react';


const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

export const Messages = (props: { agent: string }) => {
  
  const { messages, input, handleInputChange, handleSubmit,append,isLoading } = useChat();
  
  const appendCallback = useCallback(
    async () => {
      
      const id = uniqueId()
      await append({
        id: id,
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
        .filter((val,index)=>index>=2)
        .map(m =>{
          const role = m.role === 'user' ? 'User ' : 'Assistente ';
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
          disabled={isLoading}
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