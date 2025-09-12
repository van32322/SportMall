import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    // tao hook useDebounce
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        // tao effect
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debounceValue;
}
//aaaaaaaaaaa

export default useDebounce;
