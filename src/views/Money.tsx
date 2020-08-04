import Layout from "components/Layout";
import React, { useState } from 'react'
import { TagsSection } from './Money/TagsSection';
import { CategorySection } from './Money/CategorySection';
import { NoteSection } from './Money/NoteSection';
import { NumberPadSection } from './Money/NumberPadSection';
import styled from "styled-components";

const MyLayout = styled(Layout)`
    display:flex;
    flex-direction: column;
`
type Category = '-' | '+';

function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0
    });

    // Partial 部分类型
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>
            <TagsSection
                value={selected.tagIds}
                onChange={(tagIds) => onChange({ tagIds })}
            />
            <NoteSection
                value={selected.note}
                onChange={(note) => onChange({ note })}
            />
            <CategorySection
                value={selected.category}
                onChange={(category) => onChange({ category })}
            />
            <NumberPadSection
                value={selected.amount}
                onChange={(amount) => onChange({ amount })}
                onOK={() => { }}
            />
        </MyLayout>
    );
}
export default Money;
