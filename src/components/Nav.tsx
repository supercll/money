import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from './Icon';

const NavWrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    position: relative;
    a{
        padding: 16px;
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    > ul {
    display: flex;
    > li {
            text-align: center;
            width: 33.333%;
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
    .record {
        position: absolute;
        bottom: 100px;
        right: 10px
    }
`

const Nav = () => {
    return (
        <NavWrapper>
            <NavLink activeClassName="selected" to="/money" className="record">
                <Icon fill="#da8d15" name="money" />
                记一笔
            </NavLink>
            <ul>
                <li>
                    <NavLink activeClassName="selected" to="/tags">
                        <Icon fill="#d4237a" name="tag" />
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/statistics">
                        <Icon fill="#1296db" name="chart" />
                        统计
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/set">
                        <Icon fill="#d4237a" name="set" />
                        主页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav