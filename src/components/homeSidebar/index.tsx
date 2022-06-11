import React, { FunctionComponent } from 'react';
import { fakeTag, fakeUser } from '@/fake';
import styles from '@/styles/pages/Home.module.scss';
import { Tags } from '@/components/Tags';
import { WhoFollow } from '@/components/Whofollow';

export const HomeSidebar: FunctionComponent = () => {
  return (
    <section className={styles.sidebar}>
      <Tags tags={fakeTag} />
      <WhoFollow users={fakeUser} />
    </section>
  );
};
