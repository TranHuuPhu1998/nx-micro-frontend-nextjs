import styled from 'styled-components';
import { IBoxProps } from '@nx-shared-interfaces';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  compose,
} from 'styled-system';

export const Box = styled.div<IBoxProps>(
  compose(space, color, typography, layout, flexbox, grid, background, border, position, shadow)
);
