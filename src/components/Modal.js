import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from 'Components/Button';
import { Play, X } from '@styled-icons/feather';
import Type from 'Components/Type';

const ModalBox = styled.div`
  background: ${(props) => props.theme.colors.black};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  button {
    background: transparent;
    border: none;
    position: absolute;
    right: 20px;
    top: 20px;
    &:focus,
    &:active {
      outline-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 640px;
`;

const MediaBox = styled.div`
  height: 360px;
  width: 100%;
`;

const Modal = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mediaEl = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);

    const mediaSrc = mediaEl.current.firstChild.src;

    mediaEl.current.firstChild.src = mediaSrc;
  }

  return (
    <div>
      <Button onClick={openModal}>
        Watch{` `}
        <Play size="19" fill="white"></Play>
      </Button>
      <ModalBox isOpen={isOpen}>
        <button
          onClick={closeModal}
          css={`
            cursor: pointer;
          `}
        >
          <X size="48" color="white"></X>
        </button>
        <ModalContent>
          <MediaBox ref={mediaEl}>{children}</MediaBox>
          <Type
            el="h3"
            color="white"
            align="center"
            css={`
              margin: ${(props) => props.theme.rhythm()} 0;
            `}
          >
            {title}
          </Type>
        </ModalContent>
      </ModalBox>
    </div>
  );
};

export default Modal;
