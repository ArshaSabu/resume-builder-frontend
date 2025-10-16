import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section style={{ width: "100%", overflow: "hidden", height: "450px", backgroundImage: "url('https://img.freepik.com/free-photo/startup-hr-worker-identifying-right-candidates-job-opening-reviewing-resume_482257-125564.jpg?semt=ais_incoming&w=740&q=80')", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 border py-5 rounded my-5 text-center" style={{ backgroundColor: "white" }}>
            <h2>Designed to get hired.</h2>
            <h4>Your skills, your story, your next job - all in one</h4>
            <Link to={"/resume"}><button className='btn btn-primary'>Make Your Resume</button></Link>
          </div>
        </div>
      </section>


      <section>
        <h1 className='text-center p-5'>Tools</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-12 col-md-6">
            <img src="https://cdn-images.zety.com/pages/software_developer_resume_example_zety_in_1.jpg?fit=crop&h=250&dpr=2" alt="" className='w-50 ms-5' />
          </div>
        </div>
      </section>

      <section style={{ width: "100%", overflow: "hidden", height: "450px", backgroundImage: "url('https://weekforweek.com/wp-content/uploads/2025/05/What-20-Gift-20Certificates-.png')", backgroundAttachment: "fixed", backgroundSize: "cover" }}>

      </section>

      <section className='p-5'>
        <h1 className='text-center'>Testimony</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-5">
            <h1>Trusted by professionals worldwide</h1>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

              <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

              <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-12 col-md-6">
            <div className='row mb-2 mt-5'>
          <div className='col-3'>
          <img className='w-100' src='https://static.vecteezy.com/system/resources/thumbnails/056/505/190/small/a-woman-in-a-business-suit-standing-with-her-arms-crossed-free-photo.jpeg'></img>
          </div>
          <div className='col-3'>
          <img className='w-100' src='https://static.vecteezy.com/system/resources/thumbnails/056/505/190/small/a-woman-in-a-business-suit-standing-with-her-arms-crossed-free-photo.jpeg'></img>
          </div>
           <div className='col-3'>
          <img className='w-100' src='https://static.vecteezy.com/system/resources/thumbnails/056/505/190/small/a-woman-in-a-business-suit-standing-with-her-arms-crossed-free-photo.jpeg'></img>
          </div>
          <div className='col-3'>
          <img className='w-100' src='https://static.vecteezy.com/system/resources/thumbnails/056/505/190/small/a-woman-in-a-business-suit-standing-with-her-arms-crossed-free-photo.jpeg'></img>
          </div>
      </div>


      <div className='row mb-2 mt-5'>
          <div className='col-3'>
          <img className='w-100' src='https://myshootingphoto.com/wp-content/uploads/2023/04/photo-CV-portrait.jpg'></img>
          </div>
          <div className='col-3'>
          <img className='w-100' src='https://myshootingphoto.com/wp-content/uploads/2023/04/photo-CV-portrait.jpg'></img>
          </div>
           <div className='col-3'>
          <img className='w-100' src='https://myshootingphoto.com/wp-content/uploads/2023/04/photo-CV-portrait.jpg'></img>
          </div>
          <div className='col-3'>
          <img className='w-100' src='https://myshootingphoto.com/wp-content/uploads/2023/04/photo-CV-portrait.jpg'></img>
          </div>
      </div>


      
       <div className='row mb-2 mt-5'>
          <div className='col-3'>
          <img className='w-100' src='https://img.freepik.com/premium-photo/professional-cv-photo-confident-business-woman-formal-attire_981640-67299.jpg'></img>
          </div>
          <div className='col-3'>
          <img className='w-100' src='https://img.freepik.com/premium-photo/professional-cv-photo-confident-business-woman-formal-attire_981640-67299.jpg'></img>
          </div>
           <div className='col-3'>
          <img className='w-100' src='https://img.freepik.com/premium-photo/professional-cv-photo-confident-business-woman-formal-attire_981640-67299.jpg'></img>
          </div>
          <div className='col-3'>
          <img className='w-100' src='https://img.freepik.com/premium-photo/professional-cv-photo-confident-business-woman-formal-attire_981640-67299.jpg'></img>
          </div>
      </div>


          </div>
        </div>
      </section>

    </>
  )
}

export default LandingPage
