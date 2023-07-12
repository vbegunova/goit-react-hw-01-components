import PropTypes from 'prop-types';
import { List, Section, Title, Item } from "./Statistics.styled";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
    let length = stats.length;
    return (
        <Section>
            {title ? <Title>{title}</Title> : ''}
            <List>
                {stats.map(stat => {
                    return (
                        <Item key={stat.id} style={{
                            backgroundColor: getRandomHexColor(),
                            width: `calc(100% / ${length})`,
                          }}>
                            <span>{stat.label}</span>
                            <span>{stat.percentage}%</span>
                        </Item>
                    )
                })}
            </List>
        </Section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
}