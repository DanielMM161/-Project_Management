import { useEffect, useState } from 'react'

import { Store } from 'react-notifications-component';
import EditTaskForm from '../../components/EditTaskForm/EditTaskForm';
import Modal from '../../components/Modal/Modal';

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { createNewProject } from '../../services/project.service';
import { fetchUserSession } from '../../services/user.service';

const Dashboard = () => {

  const dispatch = useAppDispatch()
  const userState = useAppSelector(state => state.user)
  const { user } = userState

  const [showInput, setShowInput] = useState(false)
  const [projectName, setProjectName] = useState("")
  
  function handleCreateNewProject() {
    if(projectName.trim() != "") {
      dispatch(createNewProject(projectName))
      .then(value => {
        if(value) {
          dispatch(fetchUserSession())          
          Store.addNotification({
            title: "Project Creared",
            message: `The Project ${projectName} Was Created`,
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          })
          setShowInput(!showInput)
        }
      })
    }
  }

  return (
    <div className='w-full h-full flex flex-col'>
      <h1>Dashboard</h1>
      {/* part-1 daniel */}
      <div className='flex w-full justify-between'>
        <div className='flex flex-col w-1/2'>
          <span>Hi {user?.fullName}</span>
          <span>Welcome To DashBoard</span>
        </div>
        <div className='flex flex-col w-1/2'>
          <button onClick={() => setShowInput(!showInput)}>Create Project</button>
          <input
            style={{display: showInput ? 'block' : 'none' }}
            placeholder='Project Name'
            type="text" 
            value={projectName} 
            onChange={(e) => setProjectName(e.target.value)}
          />
          <div className='flex w-full' style={{display: showInput ? 'flex' : 'none' }}>
            <button onClick={() => handleCreateNewProject()}>Accept</button>
            <button onClick={() => setShowInput(!showInput)}>Cancel</button>            
          </div>
        </div>
      </div>
      {/* part -2 jacob */}
      <div>
        <h1>Your Projects</h1>
      </div>

      <Modal
        title='Something'
        closeDialog={() => {}}
        showModal={true}
      >
       <EditTaskForm 
          taskName='something' 
          taskDescription='something'
          acceptClick={(value) => {}}
          closeModal={() => {}}
        />   
      </Modal>
    </div>
  )
}

export default Dashboard