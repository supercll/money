import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from './Icon';

const NavWrapper = styled.nav`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.35);
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

`

const RecordButton = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
bottom: 100px;
right: 10px;
> .icon {
    font-size: 28px;
}
`;

const Nav = () => {
    const showRecordBoard = () => {
        const mask:any = document.body.querySelector("#mask");
        const recordBoard:any = document.body.querySelector("#recordBoard");
        mask.style.display = "block";
        mask.style.background = "rgba(0, 0, 0, 0.5)";
        console.log(mask.offsetLeft);
        recordBoard.style.bottom = "0";
    }
    return (
        <NavWrapper>
            <RecordButton onClick={showRecordBoard} className="record">
                <Icon fill="#da8d15" name="record" />
                <div>记一笔</div>
            </RecordButton>
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
                    <NavLink activeClassName="selected" to="/home">
                        <Icon name="home" />
                        主页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav