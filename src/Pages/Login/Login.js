import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const googleHandler = () => {};

  return (
    <div className="my-32 px-10">
      <h2 className="text-2xl text-center">Login</h2>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col lg:w-2/6 md:w-3/6 space-y-4 mx-auto"
      >
        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("name")}
            className="input input-bordered  "
          />
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password")}
            className="input input-bordered  "
          />
        </div>

        <input type="submit" value="Submit" className="btn btn-accent" />
        <p>New to Doctors Chamber? <Link className="text-secondary" to='/register'>Create a Account</Link></p>
        <div className="divider">OR</div>
        <button onClick={googleHandler} className="btn btn-outline">
          Continue With Google
        </button>
      </form>
    </div>
  );
};

export default Login;
