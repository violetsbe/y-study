import styled from "styled-components";
import ModalImg2 from "../public/images/modal_title2.svg";
import Close from "../public/images/close.svg";

const Modal = ({ title, width, height }) => (
  <Container>
    <ModalWrapper wsize={width} hsize={height}>
      <ModalTitle>
        <ModalImg2 />
        <TitleText>{title}</TitleText>
        <Close />
      </ModalTitle>
      <Line />
    </ModalWrapper>
  </Container>
);

export default Modal;

const Container = styled.div`
  background: #000000;
  opacity: 0.5;
  border: 1px solid #707070;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: ${(props) => (props.wsize ? props.wsize : 638)}px;
  height: ${(props) => (props.wsize ? props.wsize : 438)}px;
  z-index: 2;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column; // 세로로 쌓임
`;

const ModalTitle = styled.div`
  display: flex; // row(default) : 가로로 쌓임
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const TitleText = styled.div``;

const Line = styled.div`
  background: #1e1e1e;
  width: 90%;
  height: 1px;
`;
