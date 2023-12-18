import Nav from './Nav'
import {useForm} from 'react-hook-form'
import styling from './Register.module.css'
const Register = () => {

    const {register,handleSubmit,watch,formState:{errors}} = useForm()
    const onSubmit = (data)=>{
        confirm('Registration successfull')
        console.log(data)
    }
    
    return (
    <div>
        <Nav/>
        <h1 className={styling.head}>Create Account</h1>
        <form  onSubmit={handleSubmit(onSubmit)} className={styling.form}>
            <div>
                <input type="text" className={styling.inputs} placeholder='Your Name' {...register('YourName',{required:'Name is required',
                minLength:{
                    value:3,
                    message:'Name should be contain more than 3 character '
                },maxLength:{
                    value:30,
                    message:'NAme should be contain less than 30 character'
                }
            })} />
                <p>{errors.YourName?.message}</p>
            </div>
            <br />
            <input type="type"  className={styling.inputs} placeholder='Your Email' {...register('Email',{required:'Email is required', pattern:{
                value :/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                message:'Enter a valid Email'
            }})} />
            <p>{errors.Email?.message}</p>
            <br />
            <input type="Password"  className={styling.inputs} placeholder='Password' {...register('Password',{required:'Password is required',
            minLength:{
                value: 10,
                message:'Password must be more than 10 characters'
            },pattern:{
                value: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
                message: 'Password must contain at least one special character'
            }})} />
            <p>{errors.Password?.message}</p>
            <br />
            <input type="Password"  className={styling.inputs} placeholder='Re-Enter your password' {...register('ReEnter',{required:'Re-Enter your password',
            validate:
            value=>value===watch('Password')|| 'Password not match'

        })}
            />
            
            <p>{errors.ReEnter?.message}</p>
            <br />
            <button className={styling.btn} type='submit'>SIGN UP</button>
        </form>
      
    </div>
  )
}


export default Register
