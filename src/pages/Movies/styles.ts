import styled from "styled-components";

export const PostCard = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease-in-out; /* Adiciona uma transição suave à transformação */

  /* Estilos de hover */
  &:hover {
    transform: scale(1.05); /* Aumenta levemente o tamanho ao passar o mouse */
  }
`;
