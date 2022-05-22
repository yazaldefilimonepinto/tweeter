import Img from 'next/image';
import { Container, HomeHeroBackGround, ProfileContainer, ProfileContent, ProfileInformation, ProfileImg, ButtonFollow } from './styles';
import code from '../../assets/images/wallpaper.jpg';
import profile from '../../assets/images/profile.jpeg';
import UserPlus from '../../assets/icons/bxs-user-plus.svg';
import Button from '../GlobalComponents/Button';
import { useState } from 'react';
import { Modal } from '../GlobalComponents/Modal';
export function HomeHero() {
  const [active, SetActive] = useState(false);
  function handlerModal() {
    SetActive(!active);
  }
  return (
    <Container>
      <HomeHeroBackGround img={code}>
        <ProfileContainer className="container">
          <ProfileContent>
            <ProfileImg>
              <img src={profile} alt="" />
            </ProfileImg>
            <ProfileInformation>
              <div>
                <h2>Silvia Viegas</h2>
                <ButtonFollow onClick={handlerModal}>
                  <strong> 12k</strong> following
                </ButtonFollow>
                <ButtonFollow onClick={handlerModal}>
                  <strong> 100k</strong> followers
                </ButtonFollow>
              </div>
              <p>Photographer & Filmmaker based in Copenhagen Denmark ☘ 🇲🇿 </p>
            </ProfileInformation>
          </ProfileContent>
          <Button text="follow">
            <UserPlus />
          </Button>
        </ProfileContainer>
      </HomeHeroBackGround>
      <Modal isOpen={active}>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore debitis atque ex eligendi autem dignissimos aut hic iusto nihil
          nesciunt! Hic iusto voluptatum molestiae dolorum quae soluta possimus distinctio velit.
        </div>
      </Modal>
    </Container>
  );
}
