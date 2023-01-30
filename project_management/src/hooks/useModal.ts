import { useState } from 'react';

export const UseModal = () => {

  const [showModal, setShowModal] = useState(false)

  function toggle() {
    setShowModal(!showModal)
  }

  return {
    showModal,
    toggle 
  }
}