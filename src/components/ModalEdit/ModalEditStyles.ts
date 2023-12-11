import styled from "styled-components";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";

export const ModalEditBackground = styled.div`
  .modal-dialog {
    width: 100vw !important;
  }
`;

export const DialogCustom = styled(Dialog)`
  width: 50vw !important;

  @media (max-width: 1454px) {
    width: 90vw !important;
  }
`;
export const CardChild = styled.div`
  @media (max-width: 1454px) {
    display: flex;
    flex-direction: column;
  }

  img {
    @media (max-width: 1454px) {
      height: 400px;
      width: 100%;
    }
  }
`;

export const CardCustom = styled(Card)`
  @media (max-width: 1454px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
