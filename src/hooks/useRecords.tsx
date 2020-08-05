import { useState, useEffect } from "react"
import useUpdate from "./useUpdate";

type RecordItem = {
    tagIds: number[];
    note: string;
    category: "+" | "-";
    amount: number;
    createdAt: string
}

type newRecordItem = Omit<RecordItem, "createdAt">

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem("records") || '[]'))
    }, [])

    const addRecord = (newRecord: newRecordItem) => {
        const record = { ...newRecord, createdAt: (new Date()).toISOString() }
        setRecords([...records, record])
    };

    useUpdate(() => {
        window.localStorage.setItem("records", JSON.stringify(records));
    }, [records])
    return {
        records,
        addRecord,
    }
}