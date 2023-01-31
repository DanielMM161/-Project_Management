
import { useState } from 'react';

import InputLabel from './../InputLabel/InputLabel';
import TextAreaLabel from '../TextAreaLabel/TextAreaLabel';
import ModalFooter from '../ModalFooter/ModalFooter';

import { ITask } from '../../models/task.model';

import './style.css'
import CheckBox from '../CheckBox/CheckBox';

interface IEditTaskFormProps {
  taskName: string;
  taskDescription: string
  closeModal: () => void
  acceptClick: (task: ITask) => void
}

const EditTaskForm = ({
  taskName,
  taskDescription,
  acceptClick,
  closeModal
}: IEditTaskFormProps) => {

  const [title, setTitle] = useState(taskName)
  const [desription, setDescription] = useState(taskDescription)
  const [status, setStatus] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()    
    if(desription !== taskDescription && title !== taskName) {
      const task: ITask = {
        title: title,
        description: desription
      }
      acceptClick(task)      
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-center items-center bord border-2 text-center p-2 uppercase font-bold">
        {taskName}
      </div>
      <form className="form-edit" onSubmit={(e) => handleSubmit(e)}>

        <InputLabel 
          label='Title'
          typeInput='text'
          inputValue={title}
          placeHolder={"Your Title Here"}
          onValueChange={(e) => setTitle(e)}        
        />

        <TextAreaLabel 
          label='Description'
          inputValue={desription}
          onValueChange={(e) => setDescription(e)}        
        />

        <h3>Status</h3>
        <CheckBox text='Todo' onChange={(newStatus) => setStatus(newStatus)}/>

        <ModalFooter cancelClick={() => closeModal()}/>
      </form>
    </div>
  )
}

export default EditTaskForm
