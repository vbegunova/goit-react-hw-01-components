import { Item } from "./StatListItem.styled";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

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