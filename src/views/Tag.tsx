import React from 'react'
import { useTags } from 'useTags';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import Button from 'components/Button';
import styled from 'styled-components';
import Input from 'components/Input';


type Params = {
    id: string
}

const Topbar = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding: 14px;
    background:white;
`;

const Tag: React.FC = () => {
    const { findId } = useTags();
    let { id } = useParams<Params>();
    const tag = findId(parseInt(id));
    return (
        <Layout>
            <Topbar>
                <Icon fill="#fb7299" name="leftArro" />
                <span>编辑标签</span>
                <span></span>
            </Topbar>
            <Input label="修改标签名：">修改标签名：</Input>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    )
}

export default Tag;