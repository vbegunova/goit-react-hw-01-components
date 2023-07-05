import styled from 'styled-components';

const IsOnline = styled.span`
    background-color: #50AE51;
`

const IsOffline = styled.span`
    background-color: #F85650;
`

const Item = styled.li`
    display: flex;
    gap: 7px;
    width: 100%;
    padding: 4px;
    padding-left: 7px;
    align-items: center;
    box-shadow: 1px 1px 1px 1px rgba(1, 1, 1, 0.1);
    p {
        font-size: 16px;
    }
    span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

const Avatar = styled.img`
    border-radius: 3px;
`

export const FriendListItem = ({data}) => {
    return data.map(item => {
        return (<Item>
            {item.isOnline ? <IsOnline/> : <IsOffline/>}
            <Avatar src={item.avatar} alt="User avatar" style={{width: 48,}}/>
            <p>{item.name}</p>
        </Item>)
    });
}