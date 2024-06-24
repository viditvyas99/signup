import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'


export default function Signupform() {
// // const formik = useFormik({
// //     initialValues:{
// //         firstName:'',
// //         lastName:'',
// //         email:'',
// //     },
// //     validationSchema: Yup.object({
// //         firstName:Yup.string()
// //         .min(3,'must be 3 characters or more ')
// //         .max(20,"can't be more then 20 characters")
// //         .required('required'),
// //         lastName:Yup.string()
// //         .min(3,"must be 3 characters or more")
// //         .max(20,"can't be more then 20 characters")
// //         .required('required'),
// //         email:Yup.string().email("Invalid email address").required('required'),

// //     }),
// //     onSubmit: values =>{
// //         alert(JSON.stringify(values,null,2))
// //     },
// // })
// const [info, set_info] = useState(false)
// const [data, setdata] = useState('')
// const handlereset =()=>{
//   set_info(false)
//   setdata('')
//   console.log(data)
// }
//   return (
//     <>
//     {info?
//       (<button onClick={handlereset} > reset</button>)
//       :
//       ( <div className='box'>
//         <h1 className='headcss'> form </h1>
//         <Formik   
        
//             initialValues={{
//                 firstName:'',
//                 lastName:'',
//                 phoneno :'',
//                 email:'',
//             }}
//             validationSchema= {Yup.object({
//                 firstName:Yup.string()
//                 .min(3,'must be 3 characters or more ')
//                 .max(20,"can't be more then 20 characters")
//                 .required('required'),
//                 lastName:Yup.string()
//                 .min(3,"must be 3 characters or more")
//                 .max(20,"can't be more then 20 characters")
//                 .required('required'),
//                 phoneno:Yup.string().min(10,'atleast 10').max(10,'atmost 10').required('required'),
//                 email:Yup.string().email("Invalid email address").required('required'),
        
//             })}
//           onSubmit={(values,{setSubmitting})=>{
//             // setTimeout(() => {
//             //     alert(JSON.stringify(values, null, 2));
//             //     setSubmitting(false)
                
//             // }, 400);
//             setdata(JSON.stringify(values, null, 2))
//             console.log(data)
//             set_info(true)
//             setSubmitting(false)
//           }}
//         > 
        
//         <Form className='formcss'>
//             <label htmlFor='firstName'>First Name</label>
//             <Field  name= "firstName" type='text' className='fieldcss' />
//             <ErrorMessage name='firstName'  />
//             <br />
    
//             <label htmlFor='lastName'>Last Name</label>
//             <Field  name= "lastName" type='text' className='fieldcss' />
//             <ErrorMessage name='lastName'  />
//             <br />
    
//             <label htmlFor='phoneno'>phoneno:- </label>
//             <Field  name= "phoneno" type='number' className='fieldcss' />
//             <ErrorMessage name='phoneno'  />
//             <br />
    
//             <label htmlFor='email'>Email</label>
//             <Field  name= "email" type='email' className='fieldcss'/>
//             <ErrorMessage name='email'  />
//             <br />

//             <Field name = "image" type='file' />
//             <button type="submit" className='fieldcss' >submit</button>
            
//         </Form>
      
//           </Formik>
//           </div>)
      
    
//     }
   
//     </>
//   )
// }
const [Submitdata, setSubmitdata] = useState(null)
const initialValues={
  name:'',
  lastname:'',
  gender:'',
  pic:null,
  address:'',
  phone:'',
}
const validationSchema=Yup.object({
  name:Yup.string()
  .max(20,"can't be more then 20 characters")
  .min(3,"must be 3 characters or more")
  .required('required'),
  lastname:Yup.string()
  .max(20,"can't be more then 20 characters")
  .min(3,"must be 3 characters or more")
  .required('required'),
  gender:Yup.string().required('required'),
  pic:Yup.mixed().required('required'),
  address:Yup.string().required('required'),
  phone:Yup.string()
  .required('*')
  .min(10,"must be exactly 10")
  .max(10,"must be exactly 10"),
})
const onSubmit =(value)=>{
  const picurl = value.pic?URL.createObjectURL(value.pic):null
  setSubmitdata({...value,pic:picurl})
  console.log(Submitdata.pic)

}
return(
  <div className='main'>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    
    >
      {({setFieldValue})=>(
        <Form className='formcss'>
          <div className='boxcss'>
            <label htmlFor='name'  >First Name</label>
            <Field  name= "name" type='text' />
            <ErrorMessage name='name' component='div' />
            <br />
          </div>
          <div className='boxcss'>
            <label htmlFor='lastname' >last Name </label>
            <Field  name= "lastname" type='text' />
            <ErrorMessage name='lastname' component='div' />
            <br />
          </div>
            <div className='boxcss'>
              <label className='labelcss'>Gender</label>
                <div role='group' aria-labelledby='gender'>
                <label>
              <Field  type='radio' name='gender' value='male'/>male
              </label>
              <label >
              <Field  type='radio' name='gender' value='female'/>female
              </label>
              <label >
              <Field  type='radio' name='gender' value='other'/>other
              </label>
              </div>
              <ErrorMessage  name='gender' component='div'/>
              </div>   
              <div>
              <label htmlFor="pic" > profile picture</label>
              <input type='file' id='pic' name='pic' onChange={(e)=>setFieldValue('pic',e.target.files[0])} />
              <ErrorMessage name='pic' component='div'/>
              </div>
              <div className='boxcss'>
                <label htmlFor="address" > address</label>
                <Field as='textarea' id="address" name="address" />
                <ErrorMessage name='address' component='div' />
              </div>
              <div className='boxcss'>
                <label htmlFor="phone">Phone Number</label>
                <Field  id="phone" name="phone" type='text' />
                <ErrorMessage name='phone' component='div' />
              </div>
              <div>
                <button type='Submit' >Submit</button>
              </div>
        </Form>
      )}
    </Formik>
    {
      Submitdata && (
        <div>
          <h2>Submited data</h2>
          <p><strong>Name</strong> {Submitdata.name}</p>
          <p><strong>lastname</strong> {Submitdata.lastname}</p>
          <p><strong>gender</strong> {Submitdata.gender}</p>
          <p><strong>address</strong> {Submitdata.address}</p>
          <p><strong>phone</strong> {Submitdata.phone}</p>
          {Submitdata.pic &&(
            <div className='boxcss' >
              <strong>profile picture</strong>
              <img src={Submitdata.pic} alt='profile pic' style={{width:'100px',height:'100px'}} />
            </div>
          )}
            </div>
          )}
          </div>
      )
    }

  

