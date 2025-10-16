import React, { useState } from 'react';
import Steps from '../components/Steps'
import Preview from '../components/Preview'


function Form() {
  const [userInput, setuserInput] = useState({
    profesionalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",

    },
    educationData: {
      course: "",
      college: "",
      university: "",
      year: ""
    },
    experience: {
      jobRole: "",
      company: "",
      jobLocation: "",
      duration: ""
    },
    skill: [],
    summary: ""
  })

  const [isResumeAdded, setIsResumeAdded] = useState(false)
  const [resumeId, setIsResumeId] = useState("")
  //console.log(resumeId);

  return (
    <>
      <div className='fluid-container'>

        {isResumeAdded ?
          <div className='row p-5'>
            <div className="col-2"></div>
            <div className="col-8">
              <Preview userInput={userInput} isResumeAdded={isResumeAdded} resumeId={resumeId} setuserInput={setuserInput}/>
            </div>
            <div className="col-2"></div>


          </div>
          :

          <div className='row p-5'>
            <div className="col-6">
              <Steps setuserInput={setuserInput} userInput={userInput} setIsResumeAdded={setIsResumeAdded} setIsResumeId={setIsResumeId} />
            </div>
            <div className="col-6">
              <Preview userInput={userInput} />
            </div>

          </div>}

      </div>
    </>
  )
}

export default Form