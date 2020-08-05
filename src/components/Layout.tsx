import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
const Main = styled.div`
margin: 0 7px;
padding: 10px;
background:#ffffff;
flex-grow: 1;
overflow: auto;
&::-webkit-scrollbar{
  display:none
}
`;
const Layout = (props: any) => {
  return (
    <Wrapper>
      <Banner />
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
};

export default Layout;