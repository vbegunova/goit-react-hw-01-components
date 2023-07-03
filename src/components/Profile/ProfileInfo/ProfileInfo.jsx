import styled from 'styled-components';

const Container = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    h3, p {
        margin-top: 0;
        margin-bottom: 10px;
        color: #212F41;
    }
    h3 {
        font-size: 18px;
    }
    p {
        font-size: 14px;
        color: #ABB4BE;
    }
    p:last-child {
        margin-bottom: 0;
    }
`

// const Name = styled.h3`
//     margin-bottom: 10px;
// `

// const Tag = styled.p`
//     margin-bottom: 10px;
// `

const Avatar = styled.img`
    margin-bottom: 20px;
    width: 100px;
    border-radius: 50%;
`

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