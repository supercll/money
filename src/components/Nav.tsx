import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from './Icon';

const NavWrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    > ul {
    display: flex;
    > li {
        width: 33.3333%;
        text-align: center;

        > a{
            padding: 16px;
            padding: 4px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .icon {
            width: 24px;
            height: 24px;
        }

        .selected {
            color: #fb7299;
            background: rgba(0,0,0,0.1)
        }
    }
    }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink activeClassName="selected" to="/tags">
                        <Icon fill="#d4237a" name="tag" />
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/money">
                        <Icon fill="#da8d15" name="money" />
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/statistics">
                        <Icon fill="#1296db" name="chart" />
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav