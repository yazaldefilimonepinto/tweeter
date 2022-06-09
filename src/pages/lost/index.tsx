import { Button } from '@/components/global/Button';
import { Input } from '@/components/global/Input';
import styles from '@/styles/pages/login/styles.module.scss';

export default function Login() {
  return (
    <div className={styles.root}>
      <article className={styles.container}>
        <header className={styles.header}>Login</header>
        <form className={styles.form}>
          <div className={styles.formContainer}>
            <section className={`${styles.personal}, ${styles.detailsMobile}`}>
              <div className={styles.detailsMobile}>
                <Input placeholder="Enter Com o Teu Email" name="email" label="Email" />
              </div>
            </section>
          </div>
          <Button text="Reset Password" />
        </form>
      </article>
    </div>
  );
}
