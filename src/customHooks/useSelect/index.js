import { useState } from 'react';
export default function useSelect(v) {
    const [value, setValue] = useState(v);
    const onChange = event => {
        setValue(event.target.value);
    };
    return { value, onChange }
}