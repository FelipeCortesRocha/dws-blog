/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonContainer } from './styles';

interface ButtonProps {
  className?: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  children?: React.ReactNode;
}

function Button({ className, type = 'primary', onClick, IconLeft, IconRight, children }: ButtonProps) {
  return (
    <ButtonContainer className={`${className} ${type}`} onClick={onClick}>
      {IconLeft && <IconLeft />}
      <span>{children}</span>
      {IconRight && <IconRight />}
    </ButtonContainer>
  );
}

export default Button;
