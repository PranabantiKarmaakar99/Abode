import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 550px;
  width: 100%;
  ${'' /* background:var(--color-bg-variant); */}
  color: #fff;
  margin: 0 0px;
  font-size: 1rem;
  overflow:visible;

  @media only screen and (max-width: 600px) {
   {
    height: 550px;
  }
}

@media only screen and (max-width: 600px) {
   {
    height: 600px;
  }
}
`;
