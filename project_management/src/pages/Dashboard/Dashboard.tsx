import { useEffect, useState } from 'react'
import ProjectItems from './ProjectItmes';
import { Store } from 'react-notifications-component';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchUserSession } from '../../services/user.service';
import Modal from '../../components/Modal/Modal';
import { createNewProject } from './../../services/project.service';
import EditTaskForm from '../../components/EditTaskForm/EditTaskForm';

const Dashboard = () => {

  const dispatch = useAppDispatch()
  const userState = useAppSelector(state => state.user)
  const { user } = userState
  const userUrl:string = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [userProject, setUserProject] = useState<ProjectType[]>([]);

  const [showInput, setShowInput] = useState(false)
  const [projectName, setProjectName] = useState("")
  
  type ProjectType = {
  idMeal: string;
  strMeal: string;
  }
  
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
  
    useEffect(() =>{
    fetch(userUrl)
    .then((response) => response.json() )
    .then((data) => setUserProject(data.meals))
    .catch((error) => console.log(error));
  },[userUrl]);

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

        <h1 className='text-center'>Your Project</h1>
        {
          userProject.map((project) => {
            return <ProjectItems key = {project.idMeal} prop = {project}/>
          })
        }


      </div>
      <Modal
        showModal={true}
        title='hey'
        closeDialog={() => {}}        
      >
        <EditTaskForm taskName='asd' acceptClick={() => {}} closeModal={() => {}} taskDescription="asdsaad"/>
      </Modal>
    </div>
  )
}

export default Dashboard
