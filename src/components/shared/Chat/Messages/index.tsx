'use client';
 
import { useChat } from 'ai/react';
import styles from "./Messages.module.css"
export const Messages = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 console.log(messages);
  return (
    <main className={styles.chat}>
      <section className={styles.chat_section}>
        {messages.map(m => (
          <div className={styles.chat_message} key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
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