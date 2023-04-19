import css from 'components/Statistic/statistic.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <div className={css.statistics}>
        { title && (<h2 className={css.title}>{title}</h2>) }
 <ul className={css.stat_list}>
          {stats.map(stat =>
          (<li
            key={stat.id}
            className={css.item}
          style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>))}
   
  </ul>
</div>);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

PropTypes.Statistics = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
};