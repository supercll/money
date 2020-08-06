import React from 'react'
import styled from "styled-components";
import Icon from 'components/Icon';
import Layout from 'components/Layout';

const HomeSection = styled.div`
    a {
        color: #40b475;
        margin-left: 10px;
    }
`;

function Home() {

    return (
        <Layout>
            <HomeSection>
                <p><Icon name="GitHub" /><a href="http://">项目源码</a></p>
            </HomeSection>
        </Layout>

    );
}

export default Home;
