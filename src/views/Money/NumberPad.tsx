import styled from "styled-components";

const NumberPad = styled.section`
    display:flex;
    flex-direction: column;
    > .output{
        background:white;
        font-size: 36px;
        line-height: 50px;
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
            &.ok{ height: 128px; float: right;background:#40b475 }
            &.zero{ width: 50%; }
        }
    }
`;

export default NumberPad;