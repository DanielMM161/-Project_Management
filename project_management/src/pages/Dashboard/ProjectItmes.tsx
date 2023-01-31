import React from "react";

type ProjectType = {
  idMeal: string;
  strMeal: string;
};

type ProjectTypeItem = {
  prop: ProjectType;
};
export default function ProjectItems({ prop }: ProjectTypeItem) {
  return (
    <div className = "flex justify-center my-2">
    <div className="flex flex-row justify-center border border-indigo-600 rounded-lg w-1/2">
      <div className="py-1 basis-2/3 flex justify-start">
        <div className="px-2 basis-1/2"><p>{prop.strMeal}</p></div>
        <div className="px-2 basis-1/2"><p>{prop.idMeal}</p></div>
      </div>
      <div className="py-1 basis-1/3 flex justify-around" >
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded" onClick={() =>{}}>
        View
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded" onClick={() => {}}>
        Delete
      </button>
      </div>
      
    </div>
    </div>
  );
}
