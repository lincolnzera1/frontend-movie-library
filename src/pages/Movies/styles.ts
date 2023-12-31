import styled from "styled-components";

export const PostCard = styled.img`
  cursor: pointer;
  transition: transform 0.2s ease-in-out; /* Adiciona uma transição suave à transformação */

  /* Estilos de hover */
  &:hover {
    transform: scale(1.05); /* Aumenta levemente o tamanho ao passar o mouse */
  }

  @media (min-width: 1200px) {
    /* height: 416px; */
  }
`;
