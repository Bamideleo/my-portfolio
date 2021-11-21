import React from 'react';
import Title from './Title';
import {DataConsumer} from '../context/Context';
import MyPd from  '../images/mypassport2.png'


function About() {
    return (
        <DataConsumer>
    {
        (value)=>{
            const {setClass}= value
            return(
    <section className="about">
<div className="container">
    <Title title="About" color={setClass?"red":"gray"}/>
    <div className="about-center">
        <div className="about-logo">
            <img src={MyPd} alt="img"/>
        </div>
        <div className={setClass?"about-text dark-mode-white":"about-text"}>
            <div className={setClass?"dark-mode-orange":"profile"}>
                <h2>my profile</h2>
            </div>
            <div className="name">
                <p><span className={setClass?"dark-mode-orange":""}>name:</span> bamidele oluwaseun</p>
            </div>
            <div className="age">
                <p><span className={setClass?"dark-mode-orange":""}>birthday:</span> august</p>
            </div>
            <div className="address">
                <p><span className={setClass?"dark-mode-orange":""}>address:</span> 
                 60, Saforiti/Jekayinfa street, Orogun, UI/Ojoo road, Ibadan, Oyo State.</p>
            </div>
            <div className="email">
                <p><span className={setClass?"dark-mode-orange":""}>email:</span> <a href="mailto:oluwabukolaoluwaseun@gmail.com">
                     oluwabukolaoluwaseun@gmail.com</a></p>
            </div>
            <div className="phone">
                <p><span className={setClass?"dark-mode-orange":""}>mobile no:</span > 08137991330</p>
            </div>
            <div className="website">
                <p><span className={setClass?"dark-mode-orange":""}>website:</span> www.bamzy.com(under construction)</p>
            </div>
            <div className="social-media">
               <a href="linkedin.com/in/bamidele-oluwaseun-a724b9192" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-linkedin"/></a>

                   <a href="linkedin.com/in/bamidele-oluwaseun-a724b9192" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-facebook-square"/></a>

                   <a href="linkedin.com/in/bamidele-oluwaseun-a724b9192" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-github-square"/></a>
                   <a href="linkedin.com/in/bamidele-oluwaseun-a724b9192" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-twitter"/></a>
            </div>
        </div>
    </div>
    <div className={setClass?"dark-mode-lightwhite generally":"generally"}>
        <span>Geneally,</span><p>I am a young, humble
and teachable graduate of the department of Physics and Electronics, Adekule Ajasin University,
Akungba. Software development came into my life when i was in year three in school i decided to going
into it which come part of my life till today, Below are the skills i have in all fields of careers</p>
    <div className="certificate">
        <h4>My Certificate</h4>
        <p>* Degree in <b>Physics and Electronics at Adekule Ajasin University</b></p>
        <p>* Certificate in CCNA <b>At New Horizon</b></p>
    </div>
    </div>
</div>
    </section>
            )
        }
    }
        </DataConsumer>
    )
}

export default About
