import { CSSProperties, ReactNode } from 'react';
import { ItemContainer } from './styles';

interface ILabeWithIcon {
  label: string;
  icon: ReactNode;
  background: CSSProperties['color'];
}

export const LabelWithIcon = ({ label, icon, background }: ILabeWithIcon) => {
  return (
    <ItemContainer background={background}>
      <div>{icon}</div>
      <span>{label}</span>
    </ItemContainer>
  );
};
