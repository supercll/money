
import styled from 'styled-components';
import React, { useState } from 'react'

const NumberPad = styled.section`
    display:flex;
    flex-direction: column;
    > .output{
        background:white;
        font-size: 36px;
        line-height: 72px;
        text-align:right;
        padding: 0 16px;
        box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                    inset 0 5px 5px -5px rgba(0,0,0,0.25);
    }
    > .pad{ 
        > button{
        font-size: 18px; 
        float: left; 
        width: 25%; 
        height: 64px; 
        border: 1px solid white;
        &.ok{ height: 128px; float: right; }
        &.zero{ width: 50%; }

        &:nth-child(1){
            background:#f2f2f2;
        }
        &:nth-child(2),
        &:nth-child(5) {
            background:#E0E0E0;
        }
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9) {
            background:#D3D3D3;
        }
        &:nth-child(4),
        &:nth-child(7),
        &:nth-child(10) {
            background:#C1C1C1;
        }
        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13) {
            background:#B8B8B8;
        }
        &:nth-child(12) {
            background:#9A9A9A;
        }
        &:nth-child(14) {
            background:#A9A9A9;
        }
        }
    }
`;

const NumberPadSection: React.FC = () => {
    const [outPut, _setOutPut] = useState("0");
    const setOutPut = (outPut: string) => {
        if (outPut.length > 16) return;
        _setOutPut(outPut)
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text == null) return;
        switch (text) {
            case '退格':
                if (outPut.length === 1) {
                    setOutPut("0");
                } else {
                    setOutPut(outPut.slice(0, -1));
                }
                break;
            case 'OK':
                console.log(text)
                break;
            case '清空':
                setOutPut("0");

                break;
            case '.':
                if (outPut.indexOf(".") >= 0) break;
                setOutPut(outPut + ".")

                break;
            default:
                if (outPut === "0") {
                    setOutPut(text);
                } else {
                    setOutPut(outPut + text)
                }
                break;

        }
    }
    return (
        <NumberPad>
            <div className="output">
                {outPut}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>退格</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </NumberPad>

    )
}

export { NumberPadSection };