import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm({
    defaultValues: {
        
    }
  });

  const registerHandler = (event) => {
  console.log(event)

  }

const googleHandler =() => {
    
}

  return (
    <div className="my-32 px-10">
      <h2 className="text-2xl text-center">Register</h2>
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="flex flex-col lg:w-2/6 md:w-3/6 space-y-4 mx-auto"
      >
        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {required: 'THis Field is required'})}
            className="input input-bordered  "
          />

               <p className="text-error">{errors?.name?.message}</p>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email", {required: 'THis Field is required'})}
            className="input input-bordered  "
          />

               <p className="text-error">{errors?.name?.message}</p>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            
            {...register("password", 
             {required: 'THis Field is required',
              minLength: {
                value:6,
                message: "At least Six Characters"
            }
          },
          {pattern: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6}))/ , message: "Provide a Strong Password "},
            
            )}
            className="input input-bordered  "
          />
        <p className="text-error">{errors?.password?.message}</p>
        </div>

        <input type="submit" value="Submit" className="btn btn-accent" />
        <p>Already have an Account? <Link className="text-secondary" to='/login'>Login In</Link></p>
        <div className="divider">OR</div>
        <button onClick={googleHandler} className="btn btn-outline">Continue With Google</button>
      </form> 
    
    </div>
  );
};

export default Register;
