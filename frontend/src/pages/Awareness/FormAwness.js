import React from 'react'
//import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function FormAwness() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src="https://t3.ftcdn.net/jpg/06/18/20/92/360_F_618209258_Qk0mO6T6fVnhjcDLje5gw5PBVgZX5ObM.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}