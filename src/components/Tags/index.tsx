import React, { FunctionComponent } from 'react';
import styles from '@/styles/components/Tags/styles.module.scss';

type Tag = {
  name: string;
  tweet: string;
};
type TagsProps = {
  tags: Tag[];
};
export const Tags: FunctionComponent<TagsProps> = ({ tags }) => {
  return (
    <div className={styles.container}>
      <p>Trends for you</p>
      <div className={styles.content}>
        {tags.map((tag, key) => (
          <div className={styles.tag} key={key}>
            <h2>{tag.name}</h2>
            <span>{tag.tweet}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
