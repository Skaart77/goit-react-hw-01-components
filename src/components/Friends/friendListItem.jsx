import PropTypes from 'prop-types';
import { FriendsItem, OnlineItem } from './friends.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <OnlineItem isOnline={isOnline}></OnlineItem>
      {/* <span className={isOnline ? css.online : css.offline}></span> */}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsItem>
  );
};

PropTypes.FriendListItem = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
