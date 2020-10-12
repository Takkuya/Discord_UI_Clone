import styled from "styled-components";
import {AlternateEmail} from 'styled-icons/material'

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`

export const Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  /*O tamanho total da tela menos a barra de cima (46px) menos a barra de baixo (68px)*/
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollvar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`

export const InputWrapper = styled.div`
  width: 100%;

  padding: 0 16px;
`

export const Input = styled.input`
  width: 100%;
  height: 44px;

  /*O padding de 57 é para o placeholder nao sobrepor o icone de @*/
  padding: 0 10px 0 57px;
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);

  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  /*Mini hack para deixar o @ dentro do input*/
  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;

  color: var(--gray);
`