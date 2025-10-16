import React from 'react'
import { Link } from "react-router-dom"; 
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

function ResumeGenerator() {
  return (
    <>
     <div className="container-fluid">
      <h1 className='text-center mt-5'>Create a job-winning Resume in minutes</h1>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-4 border shadow rounded p-5 text-center">
          <IoDocumentTextSharp className='text-primary fs-1 mb-3'/>
          <h4>Add your information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
        </div>
        <div className="col-2"></div>
        <div className="col-4 border shadow rounded p-5 text-center">
          <FaFileDownload className='text-danger fs-1 mb-3'/>
          <h4>Download your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>
        </div>
        <div className="col-1"></div>
      </div>
      <div className='text-center'>
        <Link to={"/form"} className="btn btn-success">LET'S START</Link>
      </div>
     </div>
    </>
  )
}

export default ResumeGenerator
