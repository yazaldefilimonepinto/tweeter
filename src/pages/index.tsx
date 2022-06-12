import { Button } from '@/components/global/Button';
import { Container } from '@/components/global/Container';
import React, { FunctionComponent, useState } from 'react';
import styles from '@/styles/pages/Home.module.scss';
import profile from '@/assets/images/profile.jpeg';
import { Tags } from '@/components/Tags';
import { WhoFollow } from '@/components/Whofollow';
import { HomeSidebar } from '@/components/homeSidebar';
// import photo from '@/assets/images/profile.jpeg';
// import banner from '@/assets/images/banner.jpg';

type HomeProps = {
  fakeTag: any;
  fakeUser: any;
};
const Home: FunctionComponent<HomeProps> = () => {
  const [activeModel, SetActiveModel] = useState(false);

  function handlerModal() {
    return SetActiveModel(!activeModel);
  }
  return (
    <Container>
      <article className={styles.article}>
        <section className={styles.createTweet}>
          <p>Tweet something</p>
          <div className={styles.tweetContent}>
            <div className={styles.tweetArea}>
              <div>
                <img src={profile.src} alt="profile" />
              </div>
              <textarea placeholder="What’s happening?"></textarea>
            </div>
            <div className={styles.tweetButton}>
              <div>
                <button>
                  <i className="bx bx-image-alt"></i>
                </button>
                <button className={styles.buttonModal} onClick={handlerModal}>
                  <i className="bx bx-world"></i> Everyone can reply
                  <section className={activeModel ? `${styles.modal} ${styles.activeModal}` : styles.modal}>
                    <div>
                      <h3>Who can reply?</h3>
                      <span>Choose who can reply to this Tweet.</span>
                      <span></span>
                      <ul>
                        <li>
                          <button onClick={handlerModal}>
                            <i className="bx  bx-world"></i>
                            Everyone
                          </button>
                        </li>
                        <li>
                          <button onClick={handlerModal}>
                            <i className="bx bx-group"></i>
                            People you follow
                          </button>
                        </li>
                      </ul>
                    </div>
                  </section>
                </button>
              </div>
              <Button text="Tweet" />
            </div>
          </div>
        </section>
        <HomeSidebar />
      </article>
    </Container>
  );
};

export default Home;
