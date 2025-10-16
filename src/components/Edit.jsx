import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { getResumeAPI, updateAResumeAPI } from '../service/allAPI';
import { FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    maxHeight: "90vh"
};

function Edit({ resumeId }) {

    const [editUserInput, setEditUserInput] = useState({
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

    const [inputSkill, setInputSkill] = useState("")

    const addSkill = (inputSkill) => {
        console.log("user input skill" + inputSkill);
        if (inputSkill) {
            if (editUserInput.skill.includes(inputSkill)) {
                alert("Given skill already Exisiting.. Add another")
            } else {
                setEditUserInput({ ...editUserInput, skill: [...editUserInput.skill, inputSkill] })
            }
        }
    }


    const removeSkill = (skill) => {
        console.log(skill);
        setEditUserInput({ ...editUserInput, skill: editUserInput.skill.filter(item => item != skill) })

    }

    const updateResume = async () => {
        try {
            const result = await updateAResumeAPI(resumeId, editUserInput)
            console.log(result);
            if (result.status == 200) {
                Swal.fire({
                    title: `Success`,
                    text: `Resume updated successfully`,
                    icon: `success`,
                    confirmButtonText: `Black`
                })
            } else {
                Swal.fire({
                    title: "Error",
                    text: ` Error updating Resume`,
                    icon: `error`,
                    confirmButtonText: `Black`
                })
            }
        } catch (err) {
            Swal.fire({
                title: "Error",
                text: ` Error updating Resume`,
                icon: `error`,
                confirmButtonText: `Black`
            })
        }

    }

    const SkillsSuggestionArray = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODEJS", "MONGODB"]

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        getEditResume(resumeId)
    }
    const handleClose = () => setOpen(false);

    // console.log(resumeId);

    const getEditResume = async (resumeId) => {
        try {
            const result = await getResumeAPI(resumeId)
            console.log(result);
            setEditUserInput(result.data)
        } catch (error) {
            console.log(error);

        }
    }
    console.log(editUserInput);


    return (
        <>
            <button onClick={handleOpen} className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'><FaRegEdit /></button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Your Resume
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='mt-4'>
                            <h1>Personal Details</h1>
                            <div className="d-flex row p-3">
                                <TextField value={editUserInput.profesionalData.name} onChange={(e) => setEditUserInput({ ...editUserInput, profesionalData: { ...editUserInput.profesionalData, name: e.target.value } })} id='name' label="Full Name" variant='standard' />
                                <TextField value={editUserInput.profesionalData.jobTitle} onChange={(e) => setEditUserInput({ ...editUserInput, profesionalData: { ...editUserInput.profesionalData, jobTitle: e.target.value } })} id='job-title' label="Job Title" variant='standard' />
                                <TextField value={editUserInput.profesionalData.location} onChange={(e) => setEditUserInput({ ...editUserInput, profesionalData: { ...editUserInput.profesionalData, location: e.target.value } })} id='location' label="Location" variant='standard' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1>Contact Details</h1>
                            <div className="d-flex row p-3">
                                <TextField value={editUserInput.profesionalData.email} onChange={(e) => setEditUserInput({ ...editUserInput, profesionalData: { ...editUserInput.profesionalData, email: e.target.value } })} id='email' label="Email" variant='standard' />
                                <TextField value={editUserInput.profesionalData.phone} onChange={(e) => setEditUserInput({ ...editUserInput, profesionalData: { ...editUserInput.profesionalData, phone: e.target.value } })} id='phno' label="Phone Number" variant='standard' />
                                <TextField value={editUserInput.profesionalData.github} onChange={(e) => setEditUserInput({ ...editUserInput, profesionalData: { ...editUserInput.profesionalData, github: e.target.value } })} id='github' label="GitHub Profile Link" variant='standard' />
                                <TextField value={editUserInput.profesionalData.linkedin} onChange={(e) => setEditUserInput({ ...editUserInput, profesionalData: { ...editUserInput.profesionalData, linkedin: e.target.value } })} id='linkedin' label="LinkedIn Profile Link" variant='standard' />
                                <TextField value={editUserInput.profesionalData.portfolio} onChange={(e) => setEditUserInput({ ...editUserInput, profesionalData: { ...editUserInput.profesionalData, portfolio: e.target.value } })} id='portfolio' label="Portfolio Profile Link " variant='standard' />

                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1>Education Details</h1>
                            <div className="d-flex row p-3">
                                <TextField value={editUserInput.educationData.course} onChange={(e) => setEditUserInput({ ...editUserInput, educationData: { ...editUserInput.educationData, course: e.target.value } })} id='course-name' label="course Name" variant='standard' />
                                <TextField value={editUserInput.educationData.college} onChange={(e) => setEditUserInput({ ...editUserInput, educationData: { ...editUserInput.educationData, college: e.target.value } })} id='college-name' label="College Name " variant='standard' />
                                <TextField value={editUserInput.educationData.university} onChange={(e) => setEditUserInput({ ...editUserInput, educationData: { ...editUserInput.educationData, university: e.target.value } })} id='university' label="University" variant='standard' />
                                <TextField value={editUserInput.educationData.year} onChange={(e) => setEditUserInput({ ...editUserInput, educationData: { ...editUserInput.educationData, year: e.target.value } })} id='y-of-passout' label="Year of Passout" variant='standard' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1>Professional Details</h1>
                            <div className="d-flex row p-3">
                                <TextField value={editUserInput.experience.jobRole} onChange={(e) => setEditUserInput({ ...editUserInput, experience: { ...editUserInput.experience, jobRole: e.target.value } })} id='jorIn' label="Job or Internship" variant='standard' />
                                <TextField value={editUserInput.experience.company} onChange={(e) => setEditUserInput({ ...editUserInput, experience: { ...editUserInput.experience, company: e.target.value } })} id='company-name' label="Company Name" variant='standard' />
                                <TextField value={editUserInput.experience.jobLocation} onChange={(e) => setEditUserInput({ ...editUserInput, experience: { ...editUserInput.experience, jobLocation: e.target.value } })} id='company-location' label="Location" variant='standard' />
                                <TextField value={editUserInput.experience.duration} onChange={(e) => setEditUserInput({ ...editUserInput, experience: { ...editUserInput.experience, duration: e.target.value } })} id='duration' label="Duration" variant='standard' />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <h1>Skills</h1>
                            <div className='d-flex align-item-center justify-content-between'>
                                <TextField value={inputSkill} onChange={(e) => setInputSkill(e.target.value)} id='skill' label="Add Skill" variant='standard' />
                                <Button onClick={() => addSkill(inputSkill)} variant='outlined'>Add</Button>
                            </div>
                            <div className='mt-3'>
                                <h4>Suggestions :</h4>
                                <div className='d-flex flex-wrap gap-4 mt-3'>
                                    {
                                        SkillsSuggestionArray.map((useSkill) => (
                                            <Button onClick={() => addSkill(useSkill)} key={useSkill} variant='outlined'>{useSkill}</Button>
                                        ))
                                    }
                                </div>
                            </div>

                            <div>

                                <h4>Added Skills</h4>
                                {
                                    editUserInput.skill.map((item) => (
                                        <span key={item} className='btn btn-primary me-3'>{item}<button className='text-light btn' onClick={() => removeSkill(item)}>X</button></span>
                                    ))

                                }
                            </div>
                        </div>

                        <div className='mt-4'>
                            <h1>Professional Summary</h1>
                            <div className="d-flex row p-3">
                                <TextField value={editUserInput.summary} onChange={e => setEditUserInput({ ...editUserInput, summary: e.target.value })} multiline rows={5} id='summary' label="Write a short note about Yourself" variant='standard' />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-4">
                            <Button variant='outlined'>Clear</Button>
                            <Button type='button' onClick={updateResume} variant='outlined'>Update</Button>
                        </div>

                    </div>
                </Box>
            </Modal>
        </>
    )
}
export default Edit