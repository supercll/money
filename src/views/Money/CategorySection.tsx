import styled from 'styled-components';
import React from 'react'


const Category = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    .spending {
      background: #fb7299;
    }
    .income {
      background: #73c9e5;
    }
    > li {
      background: #f1f1f1;
      border-radius: 50%;
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
    }
  }
`;
type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  // const CategoryMap = {'-': '支出', '+': '收入'}
  // type Keys = keyof typeof CategoryMap;
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