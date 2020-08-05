import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.div`
margin-bottom: 15px;
height: 15vh;
display:flex;
justify-content: center;
align-items: center;
background: #00a1d6;
box-shadow: 0 0 14px #00a1d6;
`;
const Main = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
>div {
    color: white;
    font-size: 18px;
}
>.icon {
    font-size: 48px;
}
`;
const Banner = (props: any) => {
    return (
        <Wrapper>
            <Main>
                <Icon fill="#fb7299" name="bilibili"></Icon>
                <div>哔哩记账</div>
            </Main>
        </Wrapper>
    );
};

export default Banner;