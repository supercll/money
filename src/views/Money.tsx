import React, { useState, useRef } from 'react'
import { TagsSection } from './Money/TagsSection';
import { CategorySection } from '../components/CategorySection';
import { NoteSection } from './Money/NoteSection';
import { NumberPadSection } from './Money/NumberPadSection';
import styled from "styled-components";
import { useRecords } from "hooks/useRecords";
import Icon from 'components/Icon';

const Wrapper = styled.div`
    background:#ffffff;
    position: absolute;
    /* display: none; */
    display:flex;
    flex-direction: column;
    bottom: 0;
    transition: 0.6s ease;
    #closeRecord {
        .icon {
            font-size: 36px;
        }
    }
`
type Category = '-' | '+';

const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: '0',
}

function Money() {
    const [selected, setSelected] = useState(defaultFormData);

    const recordRef = React.createRef();

    const closeRecord = () => {


    }

    // Partial 部分类型
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }

    const { addRecord } = useRecords();

    const submit = () => {
        const res = addRecord(selected);
        if (res === true) {
            alert("记账成功");
            setSelected(defaultFormData);
        } else {
            alert(res)
        }
    }
    return (
        <Wrapper id="recordBoard">
            <section id="closeRecord" ><Icon fill="#6dc781" name="down" /></section>
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
                onOK={submit}
            />
        </Wrapper>
    );
}
export default Money;
