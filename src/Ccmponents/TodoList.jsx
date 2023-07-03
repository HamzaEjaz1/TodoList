import React from 'react'
import { useState } from 'react'
const TodoList = () => {
const [Activity, setActivilty]=useState("");
const [listData , setListData]= useState([]);


function AddActivity(){
   setListData((listData)=>{
    const updatedList =[...listData, Activity]
    console.log(updatedList)
    setActivilty('');
    return updatedList
   })

}

function removeActivity(i){
    const updatedListData =listData.filter((elem ,id)=>{
        return i!=id;
    })
    setListData(updatedListData)
}
function RemoveAll(){
    setListData([])
}
  return (
    <div className=' my-5 w-1/2 mx-auto py-5  font-bold block justify-center items-center bg-slate-100 px-3 ' >
    <h1 className='text-center py-3 w-full mx-auto  text-4xl font-bold bg-gray-400 flex justify-center items-center'>TODO List</h1>
<div className='flex justify-between items-center'>
<input className='px-5 py-1 my-5  w-2/3 border border-slate-800 border-2'  value={Activity} onChange={(e)=> setActivilty(e.target.value)}


></input>

<button className='bg-slate-600 rounded px-5 py-2 text-white' onClick={AddActivity}>ADD</button>
</div>
 

<p className=''>Here is Your List : {')'}</p>

{listData!=[] && listData.map((data ,i)=>{
    return (
     <div className='flex justify-between'>
     <p key={i} className='bg-slate-500 w-full text-gray-50 px-4 py-2 my-2'>
     {data}</p>
     <button className='bg-green-700 text-white px-4 py-2 my-2' onClick={()=> removeActivity(i)}>Remove</button>
     </div>
    )
} )}


{listData.length>=2 && <button className='bg-green-700 text-white px-4 w-full py-2 my-2 flex justify-center items-center' onClick={RemoveAll}>Remove all</button>}
    </div>
  )
}

export default TodoList