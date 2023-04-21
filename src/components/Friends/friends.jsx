import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/Friends/friendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

PropTypes.FriendList = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
