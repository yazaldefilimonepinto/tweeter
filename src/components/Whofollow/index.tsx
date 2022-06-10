import React, { FunctionComponent } from 'react';
import styles from '@/styles/components/WhoFollow/styles.module.scss';
import { Button } from '@/components/global/Button';

type User = {
  name: string;
  followers: string;
  photo: string;
  banner: string;
  description: string;
};
type whoFollowProps = {
  users: User[];
};
export const WhoFollow: FunctionComponent<whoFollowProps> = ({ users }) => {
  return (
    <section className={styles.container}>
      <p>Trends for you</p>
      <div className={styles.content}>
        {users.map((user, key) => (
          <div className={styles.profile} key={key}>
            <div className={styles.header}>
              <div className={styles.photo}>
                <img src={user.photo} alt="profile" />
              </div>
              <div className={styles.username}>
                <span>{user.name}</span>
                <span>{user.followers}</span>
              </div>
              <Button text="Follow" />
            </div>
            <div className={styles.others}>
              <p>{user.description}</p>
              <div>
                <img src={user.banner} alt="banner" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
