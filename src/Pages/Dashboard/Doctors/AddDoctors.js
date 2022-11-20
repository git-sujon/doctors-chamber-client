import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddDoctors = () => {
console.log(process.env.REACT_APP_image_host_API);
    const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const addDoctorHandler = (event) => {
    console.log(event)


  };
  

  const {data: doctorsSpecialty = [] }= useQuery({
        queryKey: ['doctorsSpecialty'],
        queryFn: async()=> {
        const res = await fetch(`http://localhost:5000/doctorsSpecialty`)
        const data = await res.json()
        return data
        
        }
        
  })



  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800  mb-10">
        Add Doctor
      </h1>
      <form
        onSubmit={handleSubmit(addDoctorHandler)}
        className="flex flex-col lg:w-2/6 md:w-3/6 space-y-4 "
      >
        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "THis Field is required" })}
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
            {...register("email", { required: "THis Field is required" })}
            className="input input-bordered  "
          />

          <p className="text-error">{errors?.email?.message}</p>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select    {...register(`specialty`)}  className="select select-bordered w-full mt-2">
            {
                doctorsSpecialty.map(specialty => <option
                 
                    key={specialty?._id}
                    value={specialty?.name}
                    >
                        {specialty?.name}
                    
                    </option>)
            }
      
       
          </select>

          <p className="text-error">{errors?.photoURL?.message}</p>
        </div>


            {/* image file upload  */}

            <div className="form-control  ">
          <label className="label">
            <span className="label-text">Upload Image</span>
          </label>
          <input
            type="file"
            {...register("file", { required: "THis Field is required" })}
          />

          <p className="text-error">{errors?.email?.message}</p>
        </div>




        <input type="submit" value="Submit" className="btn btn-accent" />
      </form>
    </div>
  );
};

export default AddDoctors;
