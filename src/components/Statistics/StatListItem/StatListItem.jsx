import styled from 'styled-components';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const Item = styled.li`
    display: flex;
    text-align: center;
    flex-direction: column;
    /* width: calc(100% / 5); */
    padding-top: 11px;
    padding-bottom: 14px;
    span {
        color: #FFF;
    }
    span:first-child {
        font-size: 15px;
        margin-bottom: 10px;
    }
    span:last-child {
        font-size: 24px;
    }
`

export const StatListItem = ({data}) => {
    let length = data.length;
    return data.map((item) => {
        return (
            <Item key={item.id} style={{
                backgroundColor: getRandomHexColor(),
                width: `calc(100% / ${length})`,
              }}>
                <span>{item.label}</span>
                <span>{item.percentage}%</span>
            </Item>
        )
    })
}