import { useEffect, useState } from "react";

interface ICheckBoxStatusProps {
  taskStatus: boolean
}

interface ICheckBoxItem {
  text: string
  onChange: () => void
}

const CheckBox = () => {

  const [status, setStatus] = useState<boolean[]>([])

  const statusText = ['Todo', 'InProgress', 'Finished']

  function clickStatus(index: number) {
    status[index] = !status[index]
    const newStatus = status.map((item, i) => {
        if (index != i) {
            item = false                
        }
        return item
    })
    setStatus([...newStatus])    
  }

  return (
    <div className="w-full flex flex-row gap-8">      
      {statusText.map((value, index) => {
         return (
          <div className="flex items-center mb-4">
            <input  id="default-checkbox" type="checkbox" checked={status[index]} onChange={() => clickStatus(index)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{value}</label>
          </div>
         )
      })}
    </div>
  )
}

export default CheckBox