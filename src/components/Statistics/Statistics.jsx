import PropTypes from 'prop-types';
import { StatListItem } from "./StatListItem/StatListItem";
import { List, Section, Title } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title ? <Title>{title}</Title> : ''}
            <List>
                <StatListItem data={stats}/>
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
        })
      ).isRequired,
}