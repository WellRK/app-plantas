import { useState } from 'react';

const useInputData = () => {
  const [inputData, setInputData] = useState('');

  const onClear = () => {
    setInputData('');
  };

  return { inputData, onClear, setInputData };
};

export { useInputData };
