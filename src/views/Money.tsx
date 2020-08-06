import React, { useState } from 'react'
import { TagsSection } from './Money/TagsSection';
import { CategorySection } from '../components/CategorySection';
import { NoteSection } from './Money/NoteSection';
import { NumberPadSection } from './Money/NumberPadSection';
import styled from "styled-components";
import { useRecords } from "hooks/useRecords";
import Icon from 'components/Icon';

const Mask = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0px;
    display:none;
    background: rgba(0, 0, 0, 0.5);
`
const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: -600px;
    background:#ffffff;
    display:flex;
    flex-direction: column;
    transition: 0.4s ease;
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

    const closeRecord = () => {
        const mask: any = document.body.querySelector("#mask");
        const recordBoard: any = document.body.querySelector("#recordBoard");
        mask.style.display = "none";
        mask.style.background = "rgba(0, 0, 0, 0)";
        recordBoard.style.bottom = "-600px";
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
        <div>
            <Mask id="mask">
            </Mask>
            <Wrapper id="recordBoard">
                <section id="closeRecord" ><Icon onClick={closeRecord} fill="#6dc781" name="down" /></section>
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
        </div>


    );
}
export default Money;
