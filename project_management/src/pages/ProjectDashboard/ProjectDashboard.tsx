import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";
import { useParams } from 'react-router-dom'

type Task = {
  name: string;
  status: string;
};

type Projct = {
  name: string,
  users: Object[],
}
const ProjectDashboard = () => {

  const id = "63d8e83ba4552d8a50e5f73f" //useParams() 
  const [ideas, setIdeas] = useState<Task[]>([])
  const [todo, setTodo] = useState<Task[]>([])
  const [inProgress, setInProgress] = useState<Task[]>([])
  const [finished, setFinished] = useState<Task[]>([])
  const [project, setProject] = useState<Projct>()

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


  }, [])


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
              <div className='my-2 py-1 border' key={index}>
                {task.name}
              </div>)}
            <div className='my-2 py-1 border'>Create a task</div>
          </div>
        </div>
        <div className='rounded-lg border text-center w-full mx-auto'>
          <div className="p-4 border-b">
            <h3 className="text-lg font-bold">To-Do</h3>
          </div>
          <div className='p-4'>
            {todo.map((task, index) =>
              <div className='my-2 py-1 border' key={index}>
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
              <div className='my-2 py-1 border' key={index}>
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
              <div className='my-2 py-1 border' key={index}>
                {task.name}
              </div>)}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectDashboard