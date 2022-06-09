import { Button } from '@/components/global/Button';
import { Input } from '@/components/global/Input';
import styles from '@/styles/pages/signup/styles.module.scss';

export default function SignUp() {
  return (
    <div className={styles.root}>
      <article className={styles.container}>
        <header className={styles.header}>Register</header>
        <form className={styles.form}>
          <div className={styles.formContainer}>
            <section className={`${styles.personal}, ${styles.details}`}>
              <span>personal details</span>

              <div className={styles.fields}>
                <Input type="date" placeholder="Enter Com o Teu Email" name="name" required />
                <Input placeholder="Enter Com o Teu Email" name="name" label="Email" />
                <Input placeholder="Enter Com o Teu Email" name="name" />
                <Input placeholder="Enter Com o Teu Email" name="name" />
                <Input placeholder="Enter Com o Teu Email" name="name" />
                <Input placeholder="Enter Com o Teu Email" name="name" />
              </div>
            </section>
            <section className={`${styles.personal}, ${styles.details}`}>
              <span>personal details</span>

              <div className={styles.fields}>
                <Input type="date" placeholder="Enter Com o Teu Email" name="name" required />
                <Input placeholder="Enter Com o Teu Email" name="name" label="Email" />
                <Input placeholder="Enter Com o Teu Email" name="name" />
                <Input placeholder="Enter Com o Teu Email" name="name" />
                <Input placeholder="Enter Com o Teu Email" name="name" />
                <Input placeholder="Enter Com o Teu Email" name="name" />
              </div>
            </section>
          </div>
          <Button text="SigUp" />
        </form>
      </article>
    </div>
  );
}
