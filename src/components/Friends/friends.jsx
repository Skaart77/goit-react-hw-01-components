import css from 'components/Friends/friends.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/Friends/friendListItem';


export const FriendList = ({ friends }) => {
    return (
    
 <ul className={css.friend_list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            
             )
        )}  
  </ul>
);
};

PropTypes.FriendList = {
    friend: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
     isOnline: PropTypes.bool.isRequired,
     id: PropTypes.number.isRequired,
    })),
   
}