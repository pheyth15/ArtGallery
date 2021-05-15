import styled from "styled-components";

const LinkButton = styled.a`
  background-color: transparent;
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.1vw;
  padding: 1vw 1.5vw;
  margin: 1vw 0.5vw;
  text-decoration: none;
  border: 0.1vw solid ${(props) => props.theme.colors.dark};
  transition: 0.15s;
`;

type ButtonProps = {
  text: string;
  link: string;
};

const Button = ({ text, link }: ButtonProps) => (
  <LinkButton className="btn" href={link}>
    <span>{text}</span>
  </LinkButton>
);

export default Button;
