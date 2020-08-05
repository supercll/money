import styled from 'styled-components';
import React, { ChangeEventHandler } from 'react'
import Input from 'components/Input';


const Notes = styled.section`
    background: #f5f5f5;
    padding: 7px 14px;
    font-size: 14px;
`;

type Props = {
    value: string;
    onChange: (value: string) => void;
}

const NoteSection: React.FC<Props> = (props) => {
    const note = props.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value);    // 非受控
    }
    return (
        <Notes>
            <Input
                label="备注"
                type="text"
                placeholder="在这里添加备注"
                value={note}
                onChange={onChange}
            >
            </Input>
        </Notes>
    )
}

export { NoteSection }