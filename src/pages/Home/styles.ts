import styled from "styled-components";

export const HomeBackgruond = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  padding: 0 !important;
  margin: 0 !important;

  background-color: orange;
`;

export const MenuBox = styled.div`
  min-height: 10rem;

  border: 1px solid black;

  margin: 10px;
  padding: 10px;
`;

export const MenuItem = styled.div`
  transition: transform 0.3s ease; /* Adiciona uma transição suave de 0.3 segundos para a escala */

  /* Estilos de hover */
  &:hover {
    background-color: #f0f0f0; /* Cor de fundo ao passar o mouse sobre o item do menu */
    transform: scale(
      1.05
    ); /* Aplica uma escala de 1.05 ao passar o mouse sobre o item */
  }

  @media screen and (max-width: 600px) {
    /* Estilos específicos para telas menores que 600px */
    max-height: 100px;
  }
`;
