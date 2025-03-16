import { useEffect, useRef } from 'react';

const useDebounce = (callback, delay, dependencies) => {
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            callback();
        }, delay);

        return () => clearTimeout(timeoutRef.current);
    }, dependencies);
};

export default useDebounce;
