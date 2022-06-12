import React, { FunctionComponent, useState } from 'react';
import styles from '@/styles/components/Followers/styles.module.scss';
import profile from '@/assets/images/profile.jpeg';
import { Button } from '../global/Button';
type FollowersProps = {
  SetStatus: Function;
};
export const Followers: FunctionComponent<FollowersProps> = ({ SetStatus }) => {
  function handlerModal() {
    SetStatus();
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h3>Daniel Jensen is following</h3>
        <button onClick={handlerModal}>
          <i className="bx bx-x"></i>
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.profile}>
          <div>
            <div>
              <div className={styles.photo}>
                <img src={profile.src} alt="profile" />
              </div>
              <div className={styles.info}>
                <h4>Austin Neill</h4>
                <span>120k followers</span>
              </div>
            </div>

            <Button text="Following" />
          </div>
          <p>Follow me on IG: @arstyy</p>
        </div>

        <div className={styles.profile}>
          <div>
            <div>
              <div className={styles.photo}>
                <img src={profile.src} alt="profile" />
              </div>
              <div className={styles.info}>
                <h4>Austin Neill</h4>
                <span>120k followers</span>
              </div>
            </div>

            <Button text="Following" />
          </div>
          <p>Follow me on IG: @arstyy</p>
        </div>

        <div className={styles.profile}>
          <div>
            <div>
              <div className={styles.photo}>
                <img src={profile.src} alt="profile" />
              </div>
              <div className={styles.info}>
                <h4>Austin Neill</h4>
                <span>120k followers</span>
              </div>
            </div>

            <Button text="Following" />
          </div>
          <p>Follow me on IG: @arstyy</p>
        </div>

        <div className={styles.profile}>
          <div>
            <div>
              <div className={styles.photo}>
                <img src={profile.src} alt="profile" />
              </div>
              <div className={styles.info}>
                <h4>Austin Neill</h4>
                <span>120k followers</span>
              </div>
            </div>

            <Button text="Following" />
          </div>
          <p>Follow me on IG: @arstyy</p>
        </div>
      </div>
    </section>
  );
};
