import React from 'react';
import styled from 'styled-components';
type Props = {
  toggle: any;
  mode: string;
};
const ThemeToggle: React.FC<Props> = ({ toggle, mode }) => {
  return (
    <ToggleWrapper onClick={toggle}>
      {mode === 'dark' ? '🌚' : '🌝'}
    </ToggleWrapper>
  );
};

export default ThemeToggle;

const ToggleWrapper = styled.button`
  position: absolute;
  z-index: 999999;
  bottom:1rem;
  right:1rem;
  // bottom: 4%;
  // right: 3%;

  background-color: ${(props) => props.theme.palette.common.black};
  border: ${(props) => props.theme.palette.common.grey};
  font-size: 20px;

  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 9.6rem;
  height: 4.8rem;
  border-radius: 30px;
`;
