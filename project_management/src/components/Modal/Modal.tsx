import ModalFooter from "../ModalFooter/ModalFooter"

interface IModal {
  title: string
  showModal: boolean
  closeDialog: () => void
  children: React.ReactNode
}

const Modal = ({
  title,
  showModal,
  closeDialog,
  children
}: IModal) => {
    
  return (
    <>
      {showModal ? (
          <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {title}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
                </div>
                <ModalFooter acceptClick={() => {}} cancelClick={() => {}}/>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal