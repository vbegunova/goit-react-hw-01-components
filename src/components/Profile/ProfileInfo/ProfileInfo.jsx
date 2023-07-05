import { Avatar, Container } from "./ProfileInfo.styled";

export const ProfileInfo = ({ name, tag, location, avatar }) => {
    return(
        <Container>
            <Avatar src={avatar} alt="avatar" />
            <h3>{name}</h3>
            <p>@{tag}</p>
            <p>{location}</p>
        </Container>
    );
}