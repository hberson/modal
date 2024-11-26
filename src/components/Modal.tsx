import React from 'react';
import { styled } from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

const Modal: React.FC<React.PropsWithChildren> = ({
  children,
}): React.JSX.Element => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalContent
            onClick={(event) => {
              event.stopPropagation();
            }}>
            {children}
            <button onClick={() => setShow(false)}>Close Modal</button>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
