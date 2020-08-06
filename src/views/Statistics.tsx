import Layout from "components/Layout";
import React, { useState } from 'react'
import { CategorySection } from "../components/CategorySection";
import { useRecords, RecordItem } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import day from "dayjs";
import styled from "styled-components";

const History = styled.div`
    margin: 6px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #fb7299;
    background: #fafafa;
    padding: 10px 0;
    overflow: scroll;

    .tag {
        width: 25%;
        >div {
            display: inline-flex;
            padding: 0 2px;
            background: #73c9e5;
            margin: 0 1px;
            text-align: center;
            border-radius: 12%;
            color: white;
        }
    }
    .note {
        width: 50%;
        margin-right: auto;
        color: #b29999;
    }
    .amount {
        width: 25%;
        margin-right: auto;
    }
`;

const DateH3 = styled.h3`
    margin: 10px;
`;

function Statistics() {
    const [category, setCategory] = useState<"-" | "+">("-");
    const { records } = useRecords();
    const { getName } = useTags();
    const hash: { [K: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category);
    selectedRecords.map(r => {
        const key = day(r.createdAt).format('YYYY年MM月');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r)
    })
    const arr = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) {
            return 0;
        }
        if (a[0] > b[0]) {
            return -1;
        }
        return 1;
    });

    const isThisMouth = (date:string) => {
        return date === day(new Date()).format("YYYY年MM月")
    }

    return (
        <Layout >
            <CategorySection
                value={category}
                onChange={
                    value => setCategory(value)
                }
            />

            {arr.map(([date, records]) => {

                return (
                    <div key={date}>
                        <DateH3>{isThisMouth(date) ? "本月" : date}</DateH3>
                        <div>
                            {records.map(r => {
                                const d = day(r.createdAt).format("D日");
                                return (
                                    <History key={r.createdAt}>
                                        <div className="tag" >
                                            {r.tagIds.map(tagId => <div key={tagId}>{getName(tagId)}</div>)}
                                        </div>
                                        <div className="note">
                                            <span>
                                                {d === day(new Date()).format("D日") && isThisMouth(date) ? "今天" : d}
                                                {day(r.createdAt).format("HH:mm")}</span>
                                            <i> {r.note}</i>
                                        </div>
                                        <div className="amount">
                                            <span>￥{parseFloat(r.amount)}</span>
                                        </div>
                                    </History>
                                )
                            })
                            }
                        </div>
                    </div>

                )
            })}
        </Layout >


    );
}

export default Statistics;
