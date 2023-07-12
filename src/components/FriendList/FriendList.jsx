import PropTypes from 'prop-types';
import { List } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <List>
          {friends.map(item => {
            return <FriendListItem 
              key={item.id} 
              avatar={item.avatar} 
              name={item.name} 
              isOnline={item.isOnline}
            />
          })}
        </List>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };