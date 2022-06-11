import { Container } from '@/components/global/Container';
import React, { FunctionComponent } from 'react';
import styles from '@/styles/pages/Profile.module.scss';

import photo from '@/assets/images/profile.jpeg';
import style from '@/styles/pages/Explore.module.scss';
import { Button } from '@/components/global/Button';
import { Tweet } from '@/components/Tweet';

const Profile: FunctionComponent = () => {
  const bookmarksTag = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];

  return (
    <div>
      <article className={styles.profileContainer}>
        <section className={styles.user}>
          <div className={styles.container}>
            <div className={styles.image}>
              <img src={photo.src} alt="profile" />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h2>Daniel Jensen</h2>
                <span>
                  <strong>2,569</strong> Following
                </span>
                <span>
                  <strong>10.8K</strong> Followers
                </span>
              </div>
              <p>Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>
            </div>
          </div>
          <Button text="Follow">
            <i className="bx bxs-user-plus"></i>
          </Button>
        </section>
      </article>

      <Container>
        <article className={style.article}>
          <aside className={style.aside}>
            <ul className={style.asideList}>
              {bookmarksTag.map((tag, key) => (
                <li key={key} className={style.asideChildren}>
                  {tag}
                </li>
              ))}
            </ul>
          </aside>
          <section className={style.content}>
            <article className={style.tweets}>
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
    </div>
  );
};
export default Profile;
