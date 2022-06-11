import { Container } from '@/components/global/Container';
import React, { FunctionComponent } from 'react';
import styles from '@/styles/pages/Explore.module.scss';
import { Button } from '@/components/global/Button';
import { Tweet } from '@/components/Tweet';
const BookMarks: FunctionComponent = () => {
  const bookmarksTag = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];

  return (
    <Container>
      <article className={styles.article}>
        <aside className={styles.aside}>
          <ul className={styles.asideList}>
            {bookmarksTag.map((tag, key) => (
              <li key={key} className={styles.asideChildren}>
                {tag}
              </li>
            ))}
          </ul>
        </aside>
        <section className={styles.content}>
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
export default BookMarks;
