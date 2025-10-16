import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import { FiEdit } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Edit from './Edit';
import History from '../pages/History';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'

function Preview({ userInput, isResumeAdded, resumeId, setuserInput }) {
  console.log(userInput);

  const downloadPDF = async () =>{
    const input = document.getElementById("result") // to get the id
    const canvas = await html2canvas(input, {scale : 2}) // convert the selected html to canvas(screenshot)
    const imgData = canvas.toDataURL("image/png") //convert canvas into image url

    //pdf
    const pdf = new jsPDF("p","mm","a4") // portrait millimeter a4 size 
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height*pdfWidth)/canvas.width
    pdf.addImage(imgData,"png",0,0,pdfWidth,pdfHeight)
    pdf.save("resume.pdf")
  }

  return (
    <>
      <Box component="section">
        <Stack direction={"row"} sx={{ gap: "10px", display: "flex", justifyContent: "end" }}>
          {/* edit */}
          {isResumeAdded && <div className='d-flex'>
            <Edit resumeId={resumeId} setuserInput={setuserInput} />
            {/* <button className='btn btn-primary align-item-center d-flex justify-content-center btn-lg'><FiEdit /></button> */}
            {/* Download */}
            <p><button type='button' onClick={downloadPDF} className='btn btn-primary align-item-center d-flex justify-content-center btn-lg'><FaFileDownload /></button></p>
          </div>}

          {/* History */}
          <p><Link to="/history">
            <button className='btn btn-primary align-item-center d-flex justify-content-center btn-lg'><FaHistory /></button></Link></p>
          {/* Back */}
          <Link to={"/"}><p className='btn text-primary'>Back</p></Link>
        </Stack>
        <div className='mt-3 p-3' id='result'>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center', padding: "50px" }}>
            <h2>{userInput.profesionalData.name}</h2>
            <h4>{userInput.profesionalData.jobTitle}</h4>
            <p><span>{userInput.profesionalData.location}</span>| <span>{userInput.profesionalData.email}</span> | <span>{userInput.profesionalData.phone}</span></p>
            <div className='d-flex gap-2 justify-content-center'>
              <Link href={userInput.profesionalData.github}>GitHub</Link>
              <Link href={userInput.profesionalData.linkedin}>Linkedin</Link>
              <Link href={userInput.profesionalData.portfolio}>Portfolio</Link>
            </div>

            <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
            <p style={{ textAlign: "justify" }}>{userInput.summary} </p>
            <Divider sx={{ fontSize: '25px' }}>Education</Divider>
            <h5>{userInput.educationData.course}</h5>
            <p>{userInput.educationData.college}| {userInput.educationData.university} | {userInput.educationData.year}</p>
            <Divider sx={{ fontSize: '25px' }}>Professional Experience</Divider>
            <h5>{userInput.experience.jobRole}</h5>
            <p>{userInput.experience.company} | {userInput.experience.jobLocation} | {userInput.experience.duration}</p>
            <Divider sx={{ fontSize: '25px' }}>Skills</Divider>
            <Stack spacing={2} direction={"row"} sx={{ flexWrap: "wrap", gap: "10px" }}>
              {userInput.skill.map((item) => (
                <Button key={item} variant='contained'>{item}</Button>
              ))}
            </Stack>

          </Paper>
        </div>
      </Box>

    </>
  )
}

export default Preview