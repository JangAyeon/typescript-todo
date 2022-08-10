import styled from 'styled-components';

const TextButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.palette.common.white};
  font-size: ${(props) => props.theme.font.size.small};
`;

export default TextButton;
