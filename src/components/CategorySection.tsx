import styled from 'styled-components';
import React from 'react'


const Category = styled.section`
font-size: 14px;
background: #ffffff;
margin: 10px 0;
> ul{
  display:flex;
  .spending {
    background: #fb7299;
  }
  .income {
    background: #73c9e5;
  }
  > li {
    margin: 0 4px;
    padding: 4px 8px;
    background: #f1f1f1;
    border-radius: 40px;
    text-align:center;
  }
}
`;
type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const category = props.value;
  return (
    <Category>
      <ul>
        <li className={`${category === "-" ? "spending" : ""}`}
          onClick={() => props.onChange("-")}
        >支出</li>
        <li className={`${category !== "-" ? "income" : ""}`}
          onClick={() => props.onChange("+")}
        >收入</li>
      </ul>
    </Category>
  )
}

export { CategorySection }