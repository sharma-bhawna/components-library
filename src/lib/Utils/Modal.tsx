import React, { useState } from 'react'
import styled from 'styled-components'
interface Props {
  children: any
  onClose(): void
  id?: string
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  padding: 32px;
`

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const Modal = ({ children, onClose, id }: Props) => {
  const modalId = id ? `${id}-modal` : 'modal'
  const [isOpen, setIsOpen] = useState(true)

  const onCloseHandler = () => {
    setIsOpen(!isOpen)
    onClose()
  }

  return (
    isOpen ? (
      <ModalWrapper data-testid={modalId} id={modalId}>
        <CloseButton onClick={onCloseHandler}>X</CloseButton>
        <div>{children}</div>
      </ModalWrapper>
    ): <></>
  )
}
