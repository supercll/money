import React from 'react'
import { useTags } from 'useTags';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import Button from 'components/Button';
import styled from 'styled-components';
import Input from 'components/Input';
import Center from 'components/Center';


type Params = {
    id: string
}

const Space = styled.div`
    height: 48px;   
`

const Topbar = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding: 14px;
    background:white;
`;

const InputWrapper = styled.div`
    background:white;
    padding: 0 16px;
    margin-top: 8px;
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
            <InputWrapper>
                <Input
                    label="修改标签名："
                    placeholder="标签名"
                    value={tag.name}
                >修改标签名：</Input>
            </InputWrapper>
            <Center>
                <Space />
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )
}

export default Tag;