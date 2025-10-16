import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"


//1. add resume - POST -steps component
export const addResumeAPI = async(reqBody)=>{
    return await commonAPI("POST", `${BASEURL}/all-resumes`,reqBody)
}

//2.get resume  //localhost3000 11 items //api writing all/resumes/resumeid  //data is sent as path parameter or reqbody
export const getResumeAPI = async (id)=> {
    return await commonAPI("GET", `${BASEURL}/all-resumes/${id}`,{})
}

//update resume
export const updateAResumeAPI= async (id, reqBody)=> {
    return await commonAPI("PATCH", `${BASEURL}/all-resumes/${id}`,reqBody)
}

//get all resume
export const getAllResumesAPI = async()=>{
    return await commonAPI("GET", `${BASEURL}/all-resumes`)
}

//4.delete resume
export const deleteResumeAPI = async (id)=> {
    return await commonAPI("DELETE", `${BASEURL}/all-resumes/${id}`)
}