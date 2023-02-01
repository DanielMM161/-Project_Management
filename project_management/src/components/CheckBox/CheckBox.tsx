import { useEffect, useState } from "react";

interface IStateStatus {
  text: string,
  clicked: boolean
}

interface ICheckBoxItem {
  text: string
  onChange: (newStatus: string) => void
}

const CheckBox = ({
  text,
  onChange
}: ICheckBoxItem) => {

  const [status, setStatus] = useState<IStateStatus[]>([
    {text: 'idea', clicked: false},
    {text: 'todo', clicked: false},
    {text: 'in_progress', clicked: false},
    {text: 'finished', clicked: false}
  ])

  useEffect(() => {
    const newStatus = status.map(value => {
      if(value.text.trim().toLowerCase() === text.trim().toLowerCase()) {
        value.clicked = true;
      }
      return value
    })
    setStatus(newStatus)    
  }, [])


  function clickStatus(index: number) {
    status[index].clicked = !status[index].clicked
    const newStatus = status.map((item, i) => {
        if (index != i) {
            item.clicked = false                
        }
        return item
    })
    setStatus([...newStatus])
    onChange(status[index].text)  
  }

  return (
    <div className="w-full flex flex-row gap-8">      
      {status.map((value, index) => {
         return (
          <div className="flex items-center mb-4">
            <input  id="default-checkbox" type="checkbox" value={status[index].text} checked={status[index].clicked} onChange={() => clickStatus(index)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{value.text}</label>
          </div>
         )
      })}
    </div>
  )
}

export default CheckBox