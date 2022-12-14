import styled from "styled-components/macro";

export const Link = styled.a.attrs((props) => ({
    target: props.external && "_blank"
}))`
  color: #61dafb;
  text-underline-offset: 5px;
`;