import { Avatar, IsOffline, IsOnline, Item } from "./FriendListItem.styled";

export const FriendListItem = ({data}) => {
    return data.map(item => {
        return (<Item key={item.id}>
            {item.isOnline ? <IsOnline/> : <IsOffline/>}
            <Avatar src={item.avatar} alt="User avatar" style={{width: 48,}}/>
            <p>{item.name}</p>
        </Item>)
    });
}