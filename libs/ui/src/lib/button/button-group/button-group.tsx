import { useState } from 'react';
import { Button, ButtonGroup, ButtonProps } from 'reactstrap';

export interface BaseButtonGroupProps extends ButtonProps {
  color: string;
  outline: boolean;
}

export function BaseButtonGroup(props: BaseButtonGroupProps) {
  const { color, ...params } = props;

  const [rSelected, setRSelected] = useState(1);
  return (
    <ButtonGroup>
      <Button {...params} color={color} active={rSelected === 1}>
        One
      </Button>
      <Button
        {...params}
        color={color}
        onClick={() => setRSelected(2)}
        active={rSelected === 2}
      >
        Two
      </Button>
      <Button
        {...params}
        color={color}
        onClick={() => setRSelected(3)}
        active={rSelected === 3}
      >
        Three
      </Button>
    </ButtonGroup>
  );
}

export default BaseButtonGroup;
