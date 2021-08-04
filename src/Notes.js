import React from 'react'
import './Notes.css'

function Notes(props) {
    return (
        <>
     
              <div  className="card">
              <div className="card-header">
                <div className="card-timing">
                    <span><i className="fas fa-clock"></i>&nbsp;{props.time}</span>
                    <span><i class="far fa-calendar-alt"></i>&nbsp;{props.date}</span>
                </div>
                <p className="title">{props.title}</p>
              </div>
               <div class="hr"></div>
              <div className="card-body">
                  <p>
                 {
                    props.content
                 }
                 </p>
              </div>
             
              <div className="card-footer">
              <div className="hr"></div>
              <div className="footer-btn">
              <div>
              <span><i class="fa fa-heart"></i></span>
              </div>
              <div>
                 <span><i class="fa fa-edit"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span><i class="fa fa-trash"></i></span>
              </div>
              </div> 
              </div>
 
          </div>
 
            
      
            
        </>
    )
}

export default Notes
