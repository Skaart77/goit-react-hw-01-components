import css from 'components/User/profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar} width={200}
      alt="User avatar"
      className="avatar"
    />
    <p className={css.name}>{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li >
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li >
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li >
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired
};