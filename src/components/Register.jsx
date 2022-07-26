import { Formik } from "formik";
import register from "services/register";

export default function Register() {
  return (
    <>
        <h2>Formulario de registro</h2>
        <Formik 
           initialValues={{ username: "", password: "" }}
           onSubmit={(values) => register(values)}
        >
            {
                ({ errors, handleChange, handleSubmit, isSubmitting}) => (
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" onChange={handleChange}/>
                        <input type="password" name="password" onChange={handleChange}/>
                        <button disabled={isSubmitting}>Register</button>
                    </form>
                )
            }
        </Formik>
    </>
  )
}
