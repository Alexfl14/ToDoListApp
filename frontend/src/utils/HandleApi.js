import axios from "axios"

const baseUrl="http://localhost:5001";
const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
    .then(({data})=> {
        console.log('data --->',data);
        setToDo(data);
    })
}
const addToDo = (text,setText,setToDo) => {
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("");
        getAllToDo(setToDo);
    })
    .catch((err)=>console.log(err))
}
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => { 
    axios.put(`${baseUrl}/update`, { _id: toDoId, text })
      .then(() => {
        setText("");  
        setIsUpdating(false); 
        getAllToDo(setToDo); 
      })
      .catch((err) => console.error('Update error:', err));
  }
  
const deleteToDo = (_id, setToDo) => {
    axios.delete(`${baseUrl}/delete`, { data: { _id } })
        .then((response) => {
            getAllToDo(setToDo);
        })
        .catch((err) => {
            console.error('Delete Error:', err.response || err);
        });
};

export {getAllToDo,addToDo,updateToDo, deleteToDo}