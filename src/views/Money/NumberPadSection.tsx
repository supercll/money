
import styled from 'styled-components';
import React, { useEffect } from 'react'

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

const rgba: string[] = ['rgba(254, 67, 101)',
    'rgba(249,205,173)',
    'rgba(252,157,154)',
    'rgba(200,200,169)',
    'rgba(199,237,233)',
    'rgba(147,224,255)',
    'rgba(131,175,155)'];

type Props = {
    value: number;
    onChange: (value: number) => void;
    onOK?: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
    const outPut = props.value.toString();
    const setOutPut = (outPut: string) => {
        let value;
        if (outPut.length > 16) {
            value = parseFloat(outPut.slice(0, 16));
        } else if (outPut.length === 0) {
            value = 0;
        } else {
            value = parseFloat(outPut)
        }
        props.onChange(value)
    }

    useEffect(() => {
        let originColor = "";
        let timer: any;
        document.querySelector(".pad")?.addEventListener('click', (e) => {
            originColor = getComputedStyle((e.target as Element)).backgroundColor;
            const target = (e.target as HTMLButtonElement)
            if (target.tagName === 'BUTTON') {
                target.style.background = rgba[Math.floor((Math.random() * rgba.length))]
            }
            clearTimeout(timer);
            timer = setTimeout(() => {
                target.style.background = originColor;
            }, 100)
        })

    }, [])

    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text == null) return;
        switch (text) {
            case '退格':
                if (outPut.length === 1) setOutPut("0");

                else setOutPut(outPut.slice(0, -1));
                break;
            case 'OK':
                props.onOK && props.onOK();
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