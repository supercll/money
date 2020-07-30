import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      align-items: center;
      .icon {
          width: 24px;
          height: 24px;
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon fill="#d4237a" name="tag" />
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon fill="#da8d15" name="money" />
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Icon fill="#1296db" name="chart" />
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav