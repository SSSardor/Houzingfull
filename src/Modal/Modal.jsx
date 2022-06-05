import React from "react";
import styled from "styled-components";
export default function Modal({ onClose, children }) {
  return (
    <StyledModal>
      <div className="modal-content">
        <div className="close">
          <span onClick={onClose}>&times;</span>
        </div>
        {children}
      </div>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 80vw;
  height: 100vh;
  overflow: auto;
  margin:0 0 0 200px ;
  /* background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */

  .modal-content {
    background-color: #fefefe;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;

    .close {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    }
    span {
      color: black;
      font-size: 40px;
    }
  }
`;
