import styled from "styled-components";
import { Link } from "react-router-dom";
import { IButton } from "../interfaces";

const LinkButton = styled(Link)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.1vw;
  padding: 1vw 1.5vw;
  margin: 1vw 0.5vw;
  text-decoration: none;
  border: 0.1vw solid ${(props) => props.theme.colors.dark};
  transition: 0.15s;
`;

const Button = ({ text, link }: IButton) => (
  <LinkButton to={link}>{text}</LinkButton>
);

export default Button;
