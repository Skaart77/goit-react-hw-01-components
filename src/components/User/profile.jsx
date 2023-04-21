import PropTypes from 'prop-types';
import {
  UserProfile,
  Stats,
  Item,
  Label,
  Quantity,
  Discription,
  Name,
} from './profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserProfile>
      <Discription>
        <img src={avatar} width={200} alt="User avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Discription>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
