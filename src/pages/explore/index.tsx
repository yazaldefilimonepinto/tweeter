import { Container } from '@/components/global/Container';
import React, { FunctionComponent } from 'react';
import styles from '@/styles/pages/Explore.module.scss';
import { Button } from '@/components/global/Button';
import { Tweet } from '@/components/Tweet';

const Explore: FunctionComponent = () => {
  const exploreTag = ['Top', 'Lastest', 'People', 'Media'];
  return (
    <Container>
      <article className={styles.article}>
        <aside className={styles.aside}>
          <ul className={styles.asideList}>
            {exploreTag.map((tag, key) => (
              <li key={key} className={styles.asideChildren}>
                {tag}
              </li>
            ))}
          </ul>
        </aside>
        <section className={styles.content}>
          <div className={styles.search}>
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search" />
            <Button text="Search" />
          </div>
          <article className={styles.tweets}>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </article>
        </section>
      </article>
    </Container>
  );
};
export default Explore;
