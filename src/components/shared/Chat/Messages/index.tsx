'use client';
 
import { useChat } from 'ai/react';
import styles from "./Messages.module.css"
export const Messages = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
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
        {messages.map(m =>{
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