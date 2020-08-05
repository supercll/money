import React, { useEffect } from 'react'
import NumberPad from './NumberPad';



const rgba: string[] = ['rgba(254, 67, 101)',
    'rgba(249,205,173)',
    'rgba(252,157,154)',
    'rgba(200,200,169)',
    'rgba(199,237,233)',
    'rgba(147,224,255)',
    'rgba(131,175,155)'];

type Props = {
    value: string;
    onChange: (value: string) => void;
    onOK?: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
    const outPut = props.value;
    const setOutPut = (outPut: string) => {
        let value = '0';
        if (outPut.length > 16) {
            return;
        }
        else if (outPut.length === 0) {
            value = '0';
        } else {
            value = outPut
        }
        props.onChange(value);
    }

    useEffect(() => {
        document.querySelector(".pad")?.addEventListener('touchstart', (e) => {
            let originColor = getComputedStyle((e.target as Element)).backgroundColor;
            const target = (e.target as HTMLButtonElement)
            if (target.tagName === 'BUTTON') {
                target.style.background = rgba[Math.floor((Math.random() * rgba.length))]
            }

            document.querySelector(".pad")?.addEventListener('touchend', () => {
                target.style.background = originColor;
            })
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
                <button>1</button><button>2</button>
                <button>3</button><button>退格</button>
                <button>4</button><button>5</button>
                <button>6</button><button>清空</button>
                <button>7</button><button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </NumberPad>
    )
}

export { NumberPadSection };