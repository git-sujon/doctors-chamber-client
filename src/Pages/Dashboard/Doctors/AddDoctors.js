import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";

const AddDoctors = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addDoctorHandler = (event) => {
    const formData = new FormData();
    const image = event.image[0];
    console.log(image);
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_image_host_API}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const image = imageData.data.display_url;
        const doctorsData = {
          name: event.name,
          email: event.email,
          specialty: event.specialty,
          image,
        };
        console.log(doctorsData);
        fetch(`http://localhost:5000/doctors`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem('DoctorChamberToken')}` 
            
          },
          body: JSON.stringify(doctorsData),
        })
          .then((res) => res.json())
          .then((data) => {
           if(data.acknowledged){
            toast.success(`Doctor ${event.name} added to the system`)
            navigate('/dashboard/manageDoctors')
           }
          });
      })
      .catch((err) => console.error(err));
  };

  const { data: doctorsSpecialty = [] } = useQuery({
    queryKey: ["doctorsSpecialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/doctorsSpecialty`);
      const data = await res.json();
      return data;
    },
  });

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
          <select
            {...register(`specialty`)}
            className="select select-bordered w-full mt-2"
          >
            {doctorsSpecialty.map((specialty) => (
              <option key={specialty?._id} value={specialty?.name}>
                {specialty?.name}
              </option>
            ))}
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
            {...register("image", { required: "THis Field is required" })}
          />

          <p className="text-error">{errors?.image?.message}</p>
        </div>

        <input type="submit" value="Submit" className="btn btn-accent" />
      </form>
    </div>
  );
};

export default AddDoctors;
