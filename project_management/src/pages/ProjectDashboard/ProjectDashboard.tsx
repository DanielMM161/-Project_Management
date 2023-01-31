import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";

type Task = {
  name: string;
  status: string;
};

const ProjectDashboard = () => {

  // ToDo: get project 

  const [ideas, setIdeas] = useState<Task[]>([])
  const [todo, setTodo] = useState<Task[]>([])
  const [inProgress, setInProgress] = useState<Task[]>([])
  const [finished, setFinished] = useState<Task[]>([])

  useEffect(() => {

    //remove this when routes are ready
    const tasks_list = [{
      name: 'task1',
      status: 'todo'
    },
    {
      name: 'task2',
      status: 'todo'
    },
    {
      name: 'task3',
      status: 'idea'
    },
    {
      name: 'task4',
      status: 'inProgress'
    },
    {
      name: 'task5',
      status: 'finished'
    }]

    //remove this when routes are ready
    setIdeas(tasks_list.filter(task => task.status == 'idea'))
    setTodo(tasks_list.filter(task => task.status == 'todo'))
    setInProgress(tasks_list.filter(task => task.status == 'inProgress'))
    setFinished(tasks_list.filter(task => task.status == 'finished'))

    // axios.get(`http://localhost:5000/api/project/${project.id}/tasks`)
    //   .then(res => {
    //     setIdeas(tasks_list.filter(task => task.status == 'idea'))
    //     setTodo(tasks_list.filter(task => task.status == 'todo'))
    //     setInProgress(tasks_list.filter(task => task.status == 'inProgress'))
    //     setFinished(tasks_list.filter(task => task.status == 'finished'))

    //   })
    //   .catch(err => console.log(err))


  }, [])


  return (
    <div className='m-5 mt-20'>
      <div className='px-10 mt-5'>
        <div className="text-lg font-bold mr-4">hi, username</div>
        <div className="text-2xl font-bold mr-4">project name</div>
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