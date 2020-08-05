import { useEffect, useRef } from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    })
    useEffect(() => {
        console.log(count.current)
        if (count.current > 1) {
            fn();
        }
    }, deps)
}

export default useUpdate;


