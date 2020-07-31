import styled from 'styled-components';
import React, { useState } from 'react'


const Category = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;


const CategorySection: React.FC = () => {
  const CategoryMap = {'-': '支出', '+': '收入'}
  const [category, setCategory] = useState("-");
  type Keys = keyof typeof CategoryMap;
  return (
    <Category>
      <ul>
        <li className={category === "-" ? "selected" : ""}
          onClick={() => setCategory("-")}
        >支出</li>
        <li className={category !== "-" ? "selected" : ""}
          onClick={() => setCategory("+")}
        >收入</li>
      </ul>
    </Category>
  )
}

export { CategorySection }