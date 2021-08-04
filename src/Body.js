import React,{useState,useEffect} from 'react'
import './Body.css'
import Notes from './Notes'
import Modal from './Modal'

function Body() {
    const [modal,setModal] = useState(false);
    const[data,setData]=useState(JSON.parse(localStorage.getItem('Notes')) !=null? JSON.parse(localStorage.getItem('Notes')):[])
    // useEffect(() => {
    //     console.log('data')
    //    var value=localStorage.getItem('Notes');
    //    value=JSON.parse(value);
    //    console.log('data',value)
    //    setData(value);
    //    console.log(data)
        
    // })

    const dataUpdate=(d)=>{
        var value=localStorage.getItem('Notes');
       value=JSON.parse(value);
       console.log('data',value)
       setData(value);
       console.clear();
       console.log(data);
       setModal(false)
    }
    const closeModal=(sts)=>{
        console.log(sts)
           setModal(false);
    }
    const showModal=()=>{
        setModal(true);
    }
    return (
        <>
        <div class="header">
            <div className="logo">
                <h4>
                    Notes 1.0<br></br>
                  
                </h4>
            </div>
            <div className="nav">

            </div>
        </div>

        <div className="container">

            {
                data.map((ele,index)=>{
                    return(

                        <Notes time={ele.time} date={ele.date} title={ele.title} content={ele.content}></Notes>
                    )
                })
            }
          
        
       
       
    
        </div>
        <footer>
         <span></span>
         <span onClick={showModal} className="btn btn-add"><i class="fa fa-plus"></i></span>
        </footer>
          {modal==true? <Modal update={dataUpdate} dismiss={closeModal}></Modal>:null}  

       
        </>
    )
}

export default Body
