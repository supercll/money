import Layout from "components/Layout";
import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { useTags } from "hooks/useTags";
import Icon from '../components/Icon';
import Button from "components/Button";
import Center from "components/Center";

const TagList = styled.ol`
    font-size: 16px; 
    background:white;
    > li{
        border-bottom: 1px solid #d5d5d9;
        line-height: 20px;
        margin-left: 16px;

        >a {
            padding: 12px 16px 12px 0;
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`;

const Space = styled.div`
    height: 16px;   
`

function Tags() {
    const { tags, AddTag } = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={"/tags/" + tag.id}>
                            <span className="oneLine">{tag.name}</span>
                            <Icon fill="#fb7299" name="rightArrow" />
                        </Link>
                    </li>
                )}
            </TagList>
            <Center>
                <Space />
                <Space />
                <Space />
                <Button onClick={AddTag}>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;