import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'


export default function Signupform() {
const [Submitdata, setSubmitdata] = useState(null)
const initialValues={
  name:'',
  lastname:'',
  pic:null,
  gender:'',
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
            <label htmlFor='name' className='labelcss' >First Name</label>
            <Field  name= "name" type='text' className='FieldCss'/>
            <ErrorMessage name='name' component='div' />
            <br />
          </div>
          <div className='boxcss'>
            <label htmlFor='lastname'  className='labelcss' >last Name </label>
            <Field  name= "lastname" type='text' className='FieldCss'  />
            <ErrorMessage name='lastname' component='div' />
            <br />
          </div>
            <div className='boxcss'>
              <label  className='labelcss'>Gender</label>
                <div role='group' aria-labelledby='gender'>
                <label>
              <Field  type='radio' name='gender' value='male' className='FieldCss' />male
              </label>
              <label >
              <Field  type='radio' name='gender' value='female'  className='FieldCss' />female
              </label>
              <label >
              <Field  type='radio' name='gender' value='other' className='FieldCss' />other
              </label>
              </div>
              <ErrorMessage  name='gender' component='div'/>
              </div>   
              <div>
              <label htmlFor="pic"   className='labelcss' > profile picture</label>
              <input type='file' id='pic' name='pic' onChange={(e)=>setFieldValue('pic',e.target.files[0])} />
              <ErrorMessage name='pic' component='div'/>
              </div>
              <div className='boxcss'>
                <label htmlFor="address"  className='labelcss'  > address</label>
                <Field as='textarea' id="address" name="address" className='FieldCss'  />
                <ErrorMessage name='address' component='div' />
              </div>
              <div className='boxcss'>
                <label htmlFor="phone"  className='labelcss' >Phone Number</label>
                <Field  id="phone" name="phone" type='text' className='FieldCss'  />
                <ErrorMessage name='phone' component='div' />
              </div>
              <div className='btnsub' >
                <button type='Submit' className='sbmitbtn' >Submit</button>
              </div>
        </Form>
      )}
    </Formik>
    {
      Submitdata && (
        <div>
          <h2>Submited data</h2>
          {Submitdata.pic &&(
            <div className='boxcss'style={{padding:'0px',margin:'0'}} >
              <strong>profile picture</strong>
              <img src={Submitdata.pic} alt='profile pic' style={{width:'100px',height:'100px',}} />
            </div>
          )}
          <p><strong>Name</strong> {Submitdata.name}</p>
          <p><strong>lastname</strong> {Submitdata.lastname}</p>
          <p><strong>gender</strong> {Submitdata.gender}</p>
          <p><strong>address</strong> {Submitdata.address}</p>
          <p><strong>phone</strong> {Submitdata.phone}</p>
          
            </div>
          )}
          </div>
      )
    }

  

