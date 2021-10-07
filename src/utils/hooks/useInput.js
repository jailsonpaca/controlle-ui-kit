import { useState } from 'react';

const useInput = init => {
    const [value, setValue] = useState(init);

    const handleSetValue = text => setValue(text);

    return {
        value,
        onChange: handleSetValue,
    };
};

export default useInput;
