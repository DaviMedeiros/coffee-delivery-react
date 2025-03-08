import { useState } from 'react';
import { InputNumberContainer } from './styles';
import { Minus, Plus } from '@phosphor-icons/react';

export const InputNumber = () => {
  const [amount, setAmount] = useState(0);

  const handleClickAddAmount = () => {
    setAmount(amount + 1);
  };

  const handleClickDecreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <InputNumberContainer>
      <button onClick={handleClickDecreaseAmount}>
        <Minus size={15} weight="bold" />
      </button>
      <input type="text" value={amount} />
      <button onClick={handleClickAddAmount}>
        <Plus size={15} weight="bold" />
      </button>
    </InputNumberContainer>
  );
};
