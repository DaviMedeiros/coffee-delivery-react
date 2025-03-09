import { Minus, Plus } from '@phosphor-icons/react';
import { InputNumberContainer } from './styles';

interface IInputNumberProps {
  amount: number;
  handleClickAmount: (isAdd: boolean) => void;
}

export const InputNumber = ({
  amount,
  handleClickAmount,
}: IInputNumberProps) => {
  return (
    <InputNumberContainer>
      <button onClick={() => handleClickAmount(false)}>
        <Minus size={15} weight="bold" />
      </button>
      <input type="text" value={amount} />
      <button onClick={() => handleClickAmount(true)}>
        <Plus size={15} weight="bold" />
      </button>
    </InputNumberContainer>
  );
};
