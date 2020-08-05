import styled from 'styled-components';
import React from 'react'
import { useTags } from 'useTags';
import createId from 'lib/createId';

const Tag = styled.section`
    background: #FFFFFF; 
    padding: 12px 16px;
    flex-grow: 1; 
    display:flex; 
    flex-direction: column;
    justify-content: flex-end; 
    align-items: flex-start;
    > ol { margin: 0 -12px;
        > li{
        background: #D9D9D9;
        border-radius: 18px;
        display:inline-block;
        padding: 3px 18px; 
        font-size: 14px;
        margin: 8px 12px;
        &.selected {
            background: #f60
        }
        }
    }
    > button{
        background:none; border: none;
        padding: 2px 4px;
        border-bottom: 1px solid gray;
        color: #666;
        margin-top: 8px;
    }
`;

type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
    const selectedTagIds = props.value;
    const { tags } = useTags();


    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }
    }
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";
    return (
        <Tag>
            <ol>
                {
                    tags.map(tag => {
                        return <li
                            className={getClass(tag.id)}
                            onClick={() => onToggleTag(tag.id)}
                            key={tag.id}
                        >{tag.name}</li>
                    })
                }
            </ol>
            <button>新增标签</button>
        </Tag>
    )
}



export { TagsSection };