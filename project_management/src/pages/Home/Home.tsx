import Button from "../../components/Button/Button"
import Modal from "../../components/Modal/Modal"
import { UseModal } from "../../hooks/useModal"

const Home = () => {

  const {showModal, toggle} = UseModal()

  return (
   <>
     <Button text="show modal"/>

    <Modal 
      title="" 
      showModal={showModal} 
      closeDialog={() => toggle()}
    >
      <></>
    </Modal>
   </>
  )
}

export default Home