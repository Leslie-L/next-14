"use client"
import { login } from "@/actions";
import styles from "./LoginForm.module.css";


export default function Login()  {

  const handleSubmit = async (event:any) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    await login(formData);
  }

  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
        <input type="text" name="email"  id="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password"  id="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
}