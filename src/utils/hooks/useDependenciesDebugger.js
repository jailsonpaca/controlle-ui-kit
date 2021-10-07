import { useMemo, useRef, useState } from 'react';

const compareInputs = (inputKeys, oldInputs, newInputs) => {
    const changed = [];
    inputKeys.forEach(key => {
        const oldInput = oldInputs[key];
        const newInput = newInputs[key];
        if (oldInput !== newInput) {
            // console.log('change detected', key, 'old:', oldInput, 'new:', newInput);
            changed.push(key);
        }
    });
    return changed;
};

export const useDependenciesDebugger = inputs => {
    const oldInputsRef = useRef(inputs);
    const inputValuesArray = Object.values(inputs);
    const inputKeysArray = Object.keys(inputs);
    const [changed, setChanged] = useState([]);
    useMemo(() => {
        const oldInputs = oldInputsRef.current;

        setChanged(compareInputs(inputKeysArray, oldInputs, inputs));

        oldInputsRef.current = inputs;
    }, inputValuesArray);
    return changed;
};
