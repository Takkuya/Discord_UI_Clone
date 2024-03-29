import styled from "styled-components";

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;
  /*Tudo que sair para fora da tela no eixo vertical vai ter um scroll*/
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quartenary);

  margin-bottom: 8px;
`;
export const ServerButton = styled.div``;
