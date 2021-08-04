import React ,{useState,useEffect}from 'react'
import './Modal.css'
import { useForm } from "react-hook-form";


function Modal(props) {
    
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const [notesList, setnotesList] = useState([{}])
    const [track, setTrack] = useState('')
    const [notes, setNotes] = useState({
        date:'',
        time:'',
        title:'',
        content:''

    })

    const onSubmit = data =>
    {
       // console.log(data);

       setNotes({
            date:new Date().toLocaleDateString('en-IN',{year:'numeric',month:"short",day:"2-digit"}),
            time:new Date().toLocaleTimeString('en-IN',{hour:"2-digit",minute:"2-digit",hour12:true}),
            title:data.title,
            content:data.content
        })
       
       
      setTimeout(()=>{
          setTrack('done')
      },10)
       
         reset();
    }
   useEffect(()=>{
       if(track=='done'){

           console.log(notes)
           var arr=[];
           var pArr=localStorage.getItem('Notes')
           pArr=JSON.parse(pArr);
           arr.push(notes)
           if(pArr!=null){
           
            localStorage.setItem('Notes',JSON.stringify([...pArr,notes]));
            props.update()
           }
           else{
               localStorage.setItem('Notes',JSON.stringify([notes]))
               props.update()
           }
           
       }
       setTrack('')
   })
    
   
    return (
        <div class="modal">
         <div className="modal-content">
         <form onSubmit={handleSubmit(onSubmit)}>
             <div className="modal-header">
                 
               <div>&nbsp;<strong>Write Note</strong></div>
               <div className="dismiss" onClick={()=>{props.dismiss(false)}}><i className="fa fa-times"></i></div>
               </div>
             <div class="hr"></div>
             <div className="modal-body">
               
               <div className="form-group">
               
               <input autoComplete="off" autoFocus {...register("title", { required: true })} type="text" className="form-input"></input>
               <label>Title</label>
               {errors.title && <span className="err">This field is required</span>}
               </div>
               
               <div className="form-group">
               
               <textarea {...register("content", { required: true })}  placeholder="Type your notes here..."  rows="14" className="form-area"/>
               <label>Write Notes here</label>
               {errors.content && <span className="err">This field is required</span>}
               </div>

             </div>
             <div className="modal-footer">
                 <div class="hr"></div>
                 <div class="footer-content">
                     <div></div>
                     <div>
                 <button onClick={()=>{props.dismiss(false)}} class="btn-close"> Close</button>&nbsp;&nbsp;&nbsp;
                 <button    type="submit" class="btn-submit"> Save</button>
                 </div>
                 </div>
             </div>
             </form>
         </div>
        </div>
    )
}

export default Modal
