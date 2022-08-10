import React, { ComponentProps } from 'react';
import styled, { StyledComponent } from 'styled-components';

const StyledRoot = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 0.1rem;
  margin: -0.1rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.1rem;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  background: ${(props) =>
    props.checked ? props.theme.palette.common.yellow : 'none'};

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  border: 3px solid ${(props) => props.theme.palette.common.yellow};
  transition: all 150ms;
`;

type Props = ComponentProps<StyledComponent<'input', any, {}>>;

const CheckBox: React.FC<Props> = ({ checked, ...props }) => (
  <StyledRoot>
    <HiddenCheckbox {...props} type="checkbox" checked={checked} />
    <StyledCheckbox checked={checked} />
  </StyledRoot>
);

export default CheckBox;
