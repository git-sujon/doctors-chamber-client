import { format } from "date-fns";
import { sl } from "date-fns/locale";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AppointmentFormModal = ({ modalInfo, setModalInfo ,selectedDate, refetch }) => {
  const date= format(selectedDate, 'PPPP')
  const {user} = useContext(AuthContext)
  const { name, slots, _id,price } = modalInfo;

  const bookingFormHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;

    const modalInfo = {

      appintmentDate: date,
      servicesName: name,
      patientName,
       phone, email, slot, servicesNameId: _id , price
    }
   


    fetch(`http://localhost:5000/bookings`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(modalInfo)

    })
    .then(res => {

      return res.json()
    })
    .then(data=> {
      console.log(data)
      
      if(data.acknowledged) {
        setModalInfo(null)
        toast.success("Booking Confirm")
        refetch()
        
      }
      else {
        toast.error(data.message)
      }
      
    })
    .catch(err=> console.error(err))
  
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="AppointmentFormModalId"
        className="modal-toggle"
      />
      <form onSubmit={bookingFormHandler} className="modal ">
        <div className="modal-box relative">
          <label
            htmlFor="AppointmentFormModalId"
            className="btn btn-sm btn-circle absolute right-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="pt-8 space-y-3  ">
            <input
              type="text"
              name=""
              value={format(selectedDate, "PPPP")}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full font-bold "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, _idx) => (
                <option key={_idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full "
              defaultValue={user?.displayName}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full "
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full "
              defaultValue={user?.email}
              disabled
            />
            <button type="submit" className="btn btn-accent w-full">
              Submit
            </button>
          </p>
        </div>
      </form>
    </>
  );
};

export default AppointmentFormModal;
