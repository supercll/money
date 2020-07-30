import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
require('../icons/money.svg')
require('../icons/tag.svg')
require('../icons/chart.svg')
require('../icons/test.svg')

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
                    <svg fill="#d4237a" className="icon">
                        <use xlinkHref="#tag" />
                    </svg>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <svg fill="#da8d15" className="icon">
                        <use xlinkHref="#money" />
                    </svg>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <svg fill="#1296db" className="icon">
                        <use xlinkHref="#chart" />
                    </svg>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav