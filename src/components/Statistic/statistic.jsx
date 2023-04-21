import PropTypes from 'prop-types';
import { Statistic, StatList, Item, Label, Title } from './statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{stat.label}</Label>
            <span>{stat.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </Statistic>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

PropTypes.Statistics = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
