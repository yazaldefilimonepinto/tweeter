import React, { FunctionComponent } from 'react';

import styles from '@/styles/components/Tweet/styles.module.scss';

import photo from '@/assets/images/profile.jpeg';
import banner from '@/assets/images/banner.jpg';

export const Tweet: FunctionComponent = () => {
  return (
    <section className={styles.tweetContainer}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={photo.src} alt="profile" />
        </div>
        <div className={styles.infos}>
          <h4>Peyton Lyons</h4>
          <span>24 August at 20:43 </span>
        </div>
      </div>
      <div className={styles.tweet}>
        <p>Traveling – it leaves you speechless, then turns you into a storyteller.</p>
        <div className={styles.tweetImage}>
          <img src={banner.src} alt="banner" />
        </div>
        <div className={styles.tweetStatus}>
          <span>449 Comments</span>
          <span>59k Retweets</span>
          <span>234 Saved</span>
        </div>
      </div>

      <div className={styles.actions}>
        <div>
          <ul className={styles.actionsList}>
            <li>
              <button>
                <i className="bx bx-comment"></i> Comment
              </button>
            </li>
            <li>
              <button>
                <i className="bx bx-refresh"></i> Retweet
              </button>
            </li>
            <li>
              <button>
                <i className="bx bx-heart"></i> Like
              </button>
            </li>
            <li>
              <button>
                <i className="bx bx-bookmark"></i> Save
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.comment}>
          <div className={styles.image}>
            <img src={photo.src} alt="photo" />
          </div>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Tweet your reply" />
            <button>
              <i className="bx bx-image-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
