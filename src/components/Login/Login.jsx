import React from "react";
import {useFormik} from "formik";


const Login = (props)=>{
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values));

            // formik.resetForm()
        },
    })
    return <div>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder={'Login'}
                       {...formik.getFieldProps('email')}/>
            </div>
            <div>
                <input type={'password'} placeholder={'Password'}
                       {...formik.getFieldProps('password')}/>
            </div>
            <div>
                <input type={'checkbox'}
                       {...formik.getFieldProps('rememberMe')}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    </div>
}
export default  Login