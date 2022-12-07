import { Button, ButtonProps } from 'reactstrap';

/* eslint-disable-next-line */
export interface BaseButtonProps extends ButtonProps {
  color: string;
  text: string;
  outline: boolean;
}

export function BaseButton(props: BaseButtonProps) {
  const { color, text, ...params } = props;
  return (
    <Button {...params} color={color}>
      {text || ''}
    </Button>
  );
}

export default BaseButton;
