import styled from "styled-components";

const LinkButton = styled.a`
  background-color: transparent;
  color: ${(props) => props.theme.colors.dark};
  padding: 1rem 1.5rem;
  margin: 1rem 0.5rem;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.colors.dark};
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
