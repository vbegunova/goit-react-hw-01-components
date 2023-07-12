import PropTypes from 'prop-types';
import { Container, Info, Avatar, List, Item, StatName, StatData } from './Profile.styled';

export const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <Container>
            <Info>
                <Avatar src={avatar} alt="avatar" />
                <h3>{name}</h3>
                <p>@{tag}</p>
                <p>{location}</p>
            </Info>
            <List>
                <Item>
                    <StatName>Followers</StatName>
                    <StatData>{stats.followers}</StatData>
                </Item>
                <Item>
                    <StatName>Views</StatName>
                    <StatData>{stats.views}</StatData>
                </Item>
                <Item>
                    <StatName>Likes</StatName>
                    <StatData>{stats.likes}</StatData>
                </Item>
            </List>
        </Container>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
}