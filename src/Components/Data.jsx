import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, editData } from '../Features/dataSlice'
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import './Data.css'


function Data() {
  const datas = useSelector((state) => state.datas)
  console.log(datas)
  const dispatch = useDispatch()
  const [data, setData] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const handleData = (event) => {
    setData(event.target.value)
  }

  const handlePush = () => {

    dispatch(addData(data))
    setData('')

  }

const  handleEdit=(id)=>{
  dispatch(editData({data:data,id:id}))
  setIsEdit(false)
  setData('')
}
  return (
    <div>
      <center>

        <h1>TO-DO-LIST</h1>
        <input value={data} onChange={(e) => { handleData(e) }} type='text' />
        <button onClick={handlePush}>Add</button>

        {datas.map((data) => {
          return (
            <div>
              <center>
                {!isEdit ? <li>{data.name} <i onClick={() => dispatch(deleteData(data.id))}><MdOutlineDeleteForever /></i>
                  <i onClick={() => setIsEdit(true)}><MdEditSquare /></i></li> : <div>
                    <input onChange={(e)=>handleData(e)} type="text" />
                    <button className='btn' onClick={()=>handleEdit(data.id)} >save</button>
                  </div> }
                 
              
              </center>

    </div>

  )
})}
        

        </center >
    </div >
  )
}

export default Data
