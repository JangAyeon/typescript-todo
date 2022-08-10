import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.palette.common.yellow};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.palette.common.black};
  font-weight: ${(props) => props.theme.font.weight.medium};
  height: 4.6rem;
  padding: 0 3rem;
`;
export default Button;
