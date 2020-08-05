import React from 'react'
import { useTags } from 'useTags';
import { useParams, useHistory } from 'react-router-dom';
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

    const { findId, updateTag, deleteTag } = useTags();
    let { id: paramsId } = useParams<Params>();
    const tag = findId(parseInt(paramsId));
    const tagContent = (tag: { id: number, name: string }) => {
        return <div>
            <InputWrapper>
                <Input
                    label="修改标签名："
                    placeholder="标签名"
                    value={tag.name}
                    onChange={(e) => {
                        updateTag(tag.id, { name: e.target.value })
                    }}
                >修改标签名：</Input>
            </InputWrapper>
            <Center>
                <Space />
                <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
            </Center>
        </div>
    }
    const history = useHistory();
    const clickBack = () => {
        history.goBack();
    }

    return (
        <Layout>
            <Topbar>
                <Icon fill="#fb7299" name="leftArro" onClick={clickBack} />
                <span>编辑标签</span>
                <span></span>
            </Topbar>
            {!!tag ? tagContent(tag) : <Center>
                <Button>标签不存在</Button>
            </Center>
            }

        </Layout>
    )
}

export default Tag;