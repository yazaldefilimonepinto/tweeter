import { ReactNode } from 'react';
import profile from '../../assets/images/profile.jpeg';
import code from '../../assets/images/code.png';

import Comment from '../../assets/icons/bx-comment.svg';
import Retweeted from '../../assets/icons/bx-refresh.svg';
import Saved from '../../assets/icons/bx-bookmark.svg';
import Like from '../../assets/icons/bx-heart.svg';
import ImgIcon from '../../assets/icons/bx-image.svg';

import {
  TweeterContainer,
  TweeterHeader,
  TweeterContent,
  TweeterFooter,
  TweeterComment,
  TweeterHeaderProfile,
  TweeterHeaderInfo,
  TweeterReact,
  TweeterReactAction,
  TweeterCommentContainer,
} from './styles';

interface TweeterProps {
  children?: ReactNode;
}

export function Tweeter({ children }: TweeterProps) {
  return (
    <TweeterContainer>
      <TweeterHeader>
        {/* <div> */}
        <TweeterHeaderProfile>
          <img src={profile} alt="profile" />
        </TweeterHeaderProfile>
        <TweeterHeaderInfo>
          <h3>Silvia Viegas</h3>
          <span>24 august at 2022</span>
        </TweeterHeaderInfo>
        {/* </div> */}
      </TweeterHeader>
      <TweeterContent>
        <p>
          Ipsum voluptate quaerat accusamus sed consequatur repellendus delectus ullam animi provident atque, ab cupiditate nisi aliquid
          corporis at reprehenderit laudantium id quisquam?
        </p>
        <div>
          <img src={code} alt="code" />
        </div>
      </TweeterContent>
      <TweeterFooter>
        <TweeterReact>
          <span>499 Comments</span>
          <span>86k Retweets</span>
          <span>234 Saved</span>
        </TweeterReact>
        <TweeterReactAction>
          <button>
            <Comment />
            <span>Comment</span>
          </button>
          <button>
            <Retweeted />
            <span>Retweeted</span>
          </button>
          <button>
            <Like />
            <span>Like</span>
          </button>
          <button>
            <Saved />
            <span>Saved</span>
          </button>
        </TweeterReactAction>
      </TweeterFooter>
      <TweeterCommentContainer>
        <TweeterHeaderProfile>
          <img src={profile} alt="profile" />
        </TweeterHeaderProfile>
        <TweeterComment>
          <textarea name="comment" placeholder="Tweet your reply"></textarea>
          <button>
            <ImgIcon />
          </button>
        </TweeterComment>
      </TweeterCommentContainer>
    </TweeterContainer>
  );
}
