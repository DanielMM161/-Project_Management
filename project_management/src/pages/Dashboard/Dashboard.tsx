import React, { useEffect, useState } from 'react'


import ProjectItems from './ProjectItmes';

const userUrl:string = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


type ProjectType = {
  idMeal: string;
  strMeal: string;
  }

const Dashboard = () => {

  const [userProject, setUserProject] = useState<ProjectType[]>([]);

  useEffect(() =>{
    fetch(userUrl)
    .then((response) => response.json() )
    .then((data) => setUserProject(data.meals))
    .catch((error) => console.log(error));
  },[userUrl]);

  return (
    <div>
      <h1 >Dashboard</h1>
      {/* part-1 daniel */}
      <div>

      </div>
      {/* part -2 jacob */}
      <div>
        <h1 className='text-center'>Your Project</h1>
        {
          userProject.map((project) => {
            return <ProjectItems key = {project.idMeal} prop = {project}/>
          })
        }

      </div>
    </div>
  )
}

export default Dashboard
