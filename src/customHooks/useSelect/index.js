import { useState } from 'react';
//custom hooks for select
export default function useSelect(v) {
  const [value, setValue] = useState(v);
  const onChange = event => {
    //show string if is valid x y or f
    setValue(isNaN(event.target.value) ? event.target.value.toString() : Number(event.target.value));
  };
  return { value, onChange };
}
