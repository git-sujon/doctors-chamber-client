import { format } from "date-fns";
import { sl } from "date-fns/locale";
import React from "react";

const AppointmentFormModal = ({ modalInfo, setModalInfo ,selectedDate }) => {
  const { name, slots } = modalInfo;

  const bookingFormHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;

    const modalInfo = {
      servicesName: name,
      patientName,
       phone, email, slot
    }
    console.log(modalInfo)

    setModalInfo(null)

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
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full "
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
