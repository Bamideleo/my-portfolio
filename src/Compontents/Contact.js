import React from 'react'
import Title from './Title';
import {DataConsumer} from '../context/Context';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';

function Contact() {

    const ScrollToElement = (element)=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-80
        })
    }
    return (
       <DataConsumer>
           {
               (value) => {
                   const {setClass} = value
                return(
                    <>
                     <Title title="Contact" color={setClass?"red":"gray"}/>
                     <div className="contact">
                         <div className="container">
                             <div className="contact-center">
                                 <div className="contact-link">
                                     <div className="links-item">
                                     <h3>Links</h3>
                                        {value.Links.map(item=>{
                                            return(
                                                <ul key={item.id}>
                                               <li >
                                                 <Link to="/" onClick={()=>ScrollToElement(item.scrolling)}>{item.link}</Link>
                                               </li>
                                               </ul>
                                            )
                                        })}
                                     </div>
                                     <div className="contact-media">
                                         <h3>media</h3>
                                             <ul>
                                             <li> <a href="linkedin.com/in/bamidele-oluwaseun-a724b9192" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-linkedin fa-2x"/></a></li>
                                             <li><a href="linkedin.com/in/bamidele-oluwaseun-a724b9192" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-facebook-square fa-2x"/></a></li>
                                             <li><a href="linkedin.com/in/bamidele-oluwaseun-a724b9192" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-github-square fa-2x"/></a></li>
                                             <li><a href="linkedin.com/in/bamidele-oluwaseun-a724b9192" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-twitter fa-2x"/></a></li>
                                        </ul>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="created">
                         <div className="container copy">
                             <p>&copy;Design by BAMZ {year()>2020 ? "2020 - ":""}{year()}</p>
                         </div>
                     </div>
                    </>
                   
                )
            }
           }
           
       </DataConsumer>
    )        
}
// year functions
let year = ()=>{
    let year = new Date().getFullYear();
    return year
}
export default Contact
