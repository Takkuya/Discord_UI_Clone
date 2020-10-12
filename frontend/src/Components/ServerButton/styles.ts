import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center; /*Alinhamento de forma vertical*/
  justify-content: center; /*Alinhamento de forma horizontal*/
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  /*Se for a logo da Rocketseat utiliza a cor roxa, se não for utiliza a cor padrão*/
  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  position: relative;
  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;

    /*A position absolute só funciona pois colocamos position relative no Button*/
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    /*É obrigatorio ter esse content, mesmo que ele esteja vazio*/
    content: "";
    /*Se ele tiver notificações fica a bolinha, se não tiver fica sem a bolinha*/
    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quarternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    /*A quantidade de notificações*/
    content: "${(props) => props.mentions && props.mentions}";
    /*Os que tem notificações vai aparecer a bolinha, os que não tem não aparece*/
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? "inline" : "none"};
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
