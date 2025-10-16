import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { deleteResumeAPI, getAllResumesAPI } from '../service/allAPI';

function History() {

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

  const getAllResume = async () => {
    const result = await getAllResumesAPI()
    console.log(result);
    setuserInput(result.data)
  }
  console.log(userInput);

  const deleteResume = async (id) =>{   // id of deleted resume is passed
    const result = await deleteResumeAPI(id) 
    console.log(result);
    getAllResume() // called to get all resumes after deleting one
  }

  useEffect(() => {  // getAllResume is called as callback using useeffect (data get when page is loaded)
    getAllResume()
  }, [])

  return (
    <>
      <div>
        <h1 className='text-center mt-5'>Downloaded Resume History</h1>
        <Link to={"/"} style={{ marginTop: "-50px" }} className='float-end me-5'>BACK</Link>
        <Box component="section" className='container-fluid'>
          <div className="row mt-5">

            { userInput?.length > 0 ?
              userInput?.map((item, index) => (
                <div className="col-md-4" key={index}>

                  <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: "center" }}>
                    <div className='d-flex align-items-center justify-content-center'>
                      {/* <h6>Review At : 24/06/2025, 7:22:27 PM</h6> */}
                      <h6>Resume Number : {index+1}</h6>
                      <button type='button' onClick={()=>deleteResume(item?.id)} className='btn btn-danger'>X</button>
                    </div>
                    <div className='mt-3 p-3' >
                      <h2>{item?.profesionalData.name}</h2>
                      <h4>{item?.profesionalData.jobTitle}</h4>
                      <p><span>{item?.profesionalData.location}</span>| <span>{item?.profesionalData.email}</span> | <span>{item?.profesionalData.phone}</span></p>


                    </div>
                  </Paper >
                </div>
              ))
              :
              <h1>No Resumes Added</h1>
          }
          </div>
        </Box>
      </div>
    </>
  )
}

export default History
