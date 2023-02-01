import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";
import { useParams } from 'react-router-dom'
import EditTaskForm from '../../components/EditTaskForm/EditTaskForm';
import Modal from '../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { ITask, Task } from '../../models/task.model';
import { UseModal } from './../../hooks/useModal';
import { fetchSingleTask, updateTask } from './../../services/task.service';

type Projct = {
  name: string,
  users: Object[],
}

type inputArr = {
  type: string,
  id: number,
  value: string
}
const ProjectDashboard = () => {

  const {showModal, toggle} = UseModal()
  const dispatch = useAppDispatch()
  const userState = useAppSelector(state => state.user)
  const { user } = userState
  const [taskSelected, setTaskSelected] = useState<Task>()


  const [arr, setArr] = useState<inputArr[]>([]);
  const { projectId } = useParams()
  const id = "63d8e83ba4552d8a50e5f73f" //useParams() 
  const [ideas, setIdeas] = useState<Task[]>([])
  const [todo, setTodo] = useState<Task[]>([])
  const [inProgress, setInProgress] = useState<Task[]>([])
  const [finished, setFinished] = useState<Task[]>([])
  const [project, setProject] = useState<Projct>()
  const [isTaskAdded, setIsTaskAdded] = useState<Boolean>(false)


  const addInput = () => {
    setArr((s: any) => {
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };

  const handleChange = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    // console.log(e.target.id)
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  useEffect(() => {

    axios.get(`http://localhost:5000/api/project/${id}`)
      .then(res => setProject(res.data.project))
      .catch(err => console.log(err))

    axios.get(`http://localhost:5000/api/project/${id}/tasks`)
      .then(res => {
        if (res.data.tasks.length > 0) {
          console.log(res.data.tasks)
          setIdeas(res.data.tasks.filter((task: any) => task.status == 'idea'))
          setTodo(res.data.tasks.filter((task: any) => task.status == 'todo'))
          setInProgress(res.data.tasks.filter((task: any) => task.status == 'inProgress'))
          setFinished(res.data.tasks.filter((task: any) => task.status == 'finished'))
        }

      })
      .catch(err => console.log(err))

    setIsTaskAdded(false)
    setArr([])

  }, [isTaskAdded])

  const handleSubmitTask = (e: any) => {
    axios.post(`http://localhost:5000/api/task/new`, { name: arr[e.target.id].value ,project_id: id})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setIsTaskAdded(true)
  }

  function onClickTask(task: Task) {
    setTaskSelected(task)
    toggle()
  }

  function handleEditTask(newTask: Task) {    
    dispatch(
      updateTask({
        name: newTask.name,
        status: newTask.status,
        createdAt: newTask.createdAt,
        taskId: newTask._id,
        userToken: user?.userToken ?? "",
        desription: newTask.description ?? ""
      })
    )
    .then(value => {      
      if(value != null) {
        setIsTaskAdded(true)
        toggle()
      }
    })
  }

  function formatDate(date: string): string {
    try {
      const dateSplit = date.split('T')
      return dateSplit[0]
    } catch (error) {
      return ""
    }
  }

  return (
    <div className='m-5 mt-20'>
      <div className='px-10 mt-5'>
        <div className="text-lg font-bold mr-4">hi, username</div>
        <div className="text-2xl font-bold mr-4">{project ? project.name : ''}</div>
      </div>
      <div className='flex gap-5 container p-10 mx-auto'>
        <div className='rounded-lg border text-center w-full mx-auto'>
          <div className="p-4 border-b">
            <h3 className="text-lg font-bold">Idea</h3>
          </div>
          <div className='p-4'>
            {ideas.map((task, index) =>
              <div className='my-2 py-1 border cursor-pointer' key={index} onClick={() => onClickTask(task)}>
                {task.name}
              </div>)}

            {arr.map((item, index) => {
              return (
                <div className='flex' key={index}>
                  <input
                    onChange={handleChange}
                    value={item.value}
                    id={index.toString()}
                    type={item.type}
                    className="my-2 p-1 border"
                    placeholder='Enter task description'
                  />
                  <button id={index.toString()} onClick={handleSubmitTask} className='py-1 px-3 bg-inherit text-gray-400 '>ok</button>
                </div>
              );
            })}
          </div>
          <div className='my-2 text-3xl '>
            <button className='bg-inherit text-gray-400 rounded-full pb-2 px-3 hover:bg-gray-200 font-bold hover:text-gray-700' onClick={addInput}>+</button>
          </div>
        </div>
        <div className='rounded-lg border text-center w-full mx-auto'>
          <div className="p-4 border-b">
            <h3 className="text-lg font-bold">To-Do</h3>
          </div>
          <div className='p-4'>
            {todo.map((task, index) =>
              <div className='my-2 py-1 border cursor-pointer' key={index} onClick={() => onClickTask(task)}>
                {task.name}
              </div>)}
          </div>
        </div>
        <div className='rounded-lg border text-center w-full mx-auto'>
          <div className="p-4 border-b">
            <h3 className="text-lg font-bold">In Progress</h3>
          </div>
          <div className='p-4'>
            {inProgress.map((task, index) =>
              <div className='my-2 py-1 border cursor-pointer' key={index} onClick={() => onClickTask(task)}>
                {task.name}
              </div>)}
          </div>
        </div>
        <div className='rounded-lg border text-center w-full mx-auto'>
          <div className="p-4 border-b">
            <h3 className="text-lg font-bold ">Finished</h3>
          </div>
          <div className='p-4'>
            {finished.map((task, index) =>
              <div className='my-2 py-1 border cursor-pointer' key={index} onClick={() => onClickTask(task)}>
                {task.name}
              </div>)}
          </div>
        </div>
      </div>

      <Modal
        title=''
        showModal={showModal}
        closeDialog={() => toggle()}        
      >
        <EditTaskForm
          taskId={taskSelected?._id ?? ""}
          taskName={taskSelected?.name ??  ""}
          taskDescription={""}
          taskDate={ formatDate(taskSelected?.createdAt ?? "")}
          taskStatus={taskSelected?.status ?? "todo"}
          acceptClick={(task) => handleEditTask(task)}
          closeModal={() => toggle()}
        />

      </Modal>
    </div>
  )
}

export default ProjectDashboard