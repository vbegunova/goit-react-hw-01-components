import PropTypes from 'prop-types';
import { ProfileInfo } from 'components/Profile/ProfileInfo/ProfileInfo';
import { ProfileStats } from 'components/Profile/ProfileStats/ProfileStats';
import { Container } from './Profile.styled';

export const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <Container>
            <ProfileInfo name={name} tag={tag} location={location} avatar={avatar}/>
            <ProfileStats stats={stats}/>
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