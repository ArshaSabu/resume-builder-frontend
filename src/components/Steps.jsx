import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addResumeAPI } from '../service/allAPI';
import Swal from 'sweetalert2'


//React Stepper
const steps = ['Basic Information', 'Contact', 'Education details', 'Work Experience', 'Skills & Certificates', 'Review and Submit'];

function Steps({ setuserInput, userInput, setIsResumeAdded, setIsResumeId }) {
    const [inputSkill, setInputSkill] = useState("")
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());


    console.log(userInput);


    const SkillSuggestionArray = ['HTML', 'CSS', 'Javascript', 'NODE.JS', 'MONGODB', 'REACT']

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    const addSkill = (inputSkill) => {
        console.log("user input skill" + inputSkill);
        if (inputSkill) {
            if (userInput.skill.includes(inputSkill)) {
                alert("Given skill already Exisiting.. Add another")
            } else {
                setuserInput({ ...userInput, skill: [...userInput.skill, inputSkill] })
            }
        }
    }


    const removeSkill = (skill) => {
        console.log(skill);
        setuserInput({ ...userInput, skill: userInput.skill.filter(item => item != skill) })

    }

    const renderStepArrayContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h1>Personal Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.profesionalData.name} onChange={(e) => setuserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, name: e.target.value } })} id='name' label="Full Name" variant='standard' />
                        <TextField value={userInput.profesionalData.jobTitle} onChange={(e) => setuserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, jobTitle: e.target.value } })} id='job-title' label="Job Title" variant='standard' />
                        <TextField value={userInput.profesionalData.location} onChange={(e) => setuserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, location: e.target.value } })} id='location' label="Location" variant='standard' />

                    </div>
                </div>
            )

            case 1: return (
                <div>
                    <h1>Personal Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.profesionalData.email} onChange={(e) => setuserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, email: e.target.value } })} id='email' label="Email" variant='standard' />
                        <TextField value={userInput.profesionalData.phone} onChange={(e) => setuserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, phone: e.target.value } })} id='phno' label="Phone Number" variant='standard' />
                        <TextField value={userInput.profesionalData.github} onChange={(e) => setuserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, github: e.target.value } })} id='github' label="GitHub Profile Link" variant='standard' />
                        <TextField value={userInput.profesionalData.linkedin} onChange={(e) => setuserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, linkedin: e.target.value } })} id='linkedin' label="LinkedIn Profile Link" variant='standard' />
                        <TextField value={userInput.profesionalData.portfolio} onChange={(e) => setuserInput({ ...userInput, profesionalData: { ...userInput.profesionalData, portfolio: e.target.value } })} id='portfolio' label="Portfolio Profile Link " variant='standard' />

                    </div>
                </div>
            )

            case 2: return (
                <div>
                    <h1>Education Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.educationData.course} onChange={(e) => setuserInput({ ...userInput, educationData: { ...userInput.educationData, course: e.target.value } })} id='course-name' label="course Name" variant='standard' />
                        <TextField value={userInput.educationData.college} onChange={(e) => setuserInput({ ...userInput, educationData: { ...userInput.educationData, college: e.target.value } })} id='college-name' label="College Name " variant='standard' />
                        <TextField value={userInput.educationData.university} onChange={(e) => setuserInput({ ...userInput, educationData: { ...userInput.educationData, university: e.target.value } })} id='university' label="University" variant='standard' />
                        <TextField value={userInput.educationData.year} onChange={(e) => setuserInput({ ...userInput, educationData: { ...userInput.educationData, year: e.target.value } })} id='y-of-passout' label="Year of Passout" variant='standard' />

                    </div>
                </div>
            )

            case 3: return (
                <div>
                    <h1>Professional Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.experience.jobRole} onChange={(e) => setuserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} id='jorIn' label="Job or Internship" variant='standard' />
                        <TextField value={userInput.experience.company} onChange={(e) => setuserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} id='company-name' label="Company Name" variant='standard' />
                        <TextField value={userInput.experience.jobLocation} onChange={(e) => setuserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} id='company-location' label="Location" variant='standard' />
                        <TextField value={userInput.experience.duration} onChange={(e) => setuserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} id='duration' label="Duration" variant='standard' />
                    </div>
                </div>
            )

            case 4: return (
                <div>
                    <h1>Skills</h1>
                    <div className='d-flex align-item-center justify-content-between'>
                        <TextField value={inputSkill} onChange={(e) => setInputSkill(e.target.value)} id='skill' label="Add Skill" variant='standard' />
                        <Button onClick={() => addSkill(inputSkill)} variant='outlined'>Add</Button>
                    </div>
                    <div className='mt-3'>
                        <h4>Suggestions :</h4>
                        <div className='d-flex flex-wrap gap-4 mt-3'>
                            {
                                SkillSuggestionArray.map((useSkill) => (
                                    <Button onClick={() => addSkill(useSkill)} key={useSkill} variant='outlined'>{useSkill}</Button>
                                ))
                            }
                        </div>
                    </div>

                    <div>

                        <h4>Added Skills</h4>
                        {
                            userInput.skill.map((item) => (
                                <span key={item} className='btn btn-primary me-3'>{item}<button className='text-light btn' onClick={() => removeSkill(item)}>X</button></span>
                            ))

                        }
                    </div>
                </div>
            )

            case 5: return (
                <div>
                    <h1>Professional Summary</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.summary} onChange={e => setuserInput({ ...userInput, summary: e.target.value })} multiline rows={5} id='summary' label="Write a short note about Yourself" variant='standard' />
                    </div>
                </div>
            )
        }
    }

    //add resume
    const handleAddResume = async () => {
        const { name, jobTitle, location } = userInput.profesionalData
        if (name && jobTitle && location) {
            const result = await addResumeAPI(userInput)
            console.log(result);
            // console.log(result.data.id);
            setIsResumeId(result.data.id)

            setIsResumeAdded(true)
            Swal.fire({
                title: "Good job!",
                text: "Resume added Successfully",
                icon: "success"
            });

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error! Resume added failed",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }


    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                            <Button className='ms-5' variant='contained' onClick={handleAddResume}>Add Resume</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {renderStepArrayContent(activeStep)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </>
    )
}

export default Steps