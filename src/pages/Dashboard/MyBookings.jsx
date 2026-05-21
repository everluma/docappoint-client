import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyBookings = () => {

  const axiosSecure = useAxiosSecure();

  const [bookings, setBookings] =
    useState([]);

    const [selectedBooking, setSelectedBooking] =
  useState(null);

    const { user } = useContext(AuthContext);

 useEffect(() => {

  if(user?.email){

    axiosSecure
      .get(`/bookings?email=${user.email}`)
      .then(res => {

        setBookings(res.data);

      })
      .catch(error => {

        console.log(error);

      });
  }

}, [axiosSecure, user]);



  const handleDeleteBooking = async (id) => {

  try {

    await axiosSecure.delete(
      `/bookings/${id}`
    );

    const remainingBookings =
      bookings.filter(
        booking => booking._id !== id
      );

    setBookings(remainingBookings);

  } catch (error) {

    console.log(error);

  }
};

  //  Handle updated booking 

  const handleUpdateBooking = async (e) => {

  e.preventDefault();

  const form = e.target;

  const updatedBooking = {
    patientName: form.patientName.value,
    appointmentDate: form.appointmentDate.value,
    problem: form.problem.value,
  };

  try {

    await axiosSecure.put(
      `/bookings/${selectedBooking._id}`,
      updatedBooking
    );

    const updatedBookings =
      bookings.map((booking) => {

        if (
          booking._id === selectedBooking._id
        ) {

          return {
            ...booking,
            ...updatedBooking,
          };
        }

        return booking;
      });

    setBookings(updatedBookings);

    setSelectedBooking(null);

  } catch (error) {

    console.log(error);

  }
};

  return (

    <>


    <section className="p-5 lg:p-10">

      <div className="flex items-center justify-between flex-wrap gap-5">

        <div>

          <h1 className="text-4xl font-black text-slate-900">
            My Bookings
          </h1>

          <p className="text-slate-500 mt-3">
            Manage all your booked appointments
          </p>

        </div>

        <div className="px-5 py-3 rounded-2xl bg-cyan-100 text-cyan-600 font-semibold">

          Total Bookings:
          {" "}
          {bookings.length}

        </div>

      </div>

      {
        bookings.length === 0 ? (
          <div className="mt-16 bg-white rounded-[30px] border border-slate-200 p-10 text-center">

            <h3 className="text-3xl font-bold text-slate-800">
              No Bookings Yet
            </h3>

            <p className="text-slate-500 mt-4">
              Book your first appointment with a doctor.
            </p>

          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 mt-12">

            {
              bookings.map(
                (booking) => (
                  <div
                    key={booking._id}
                    className="bg-white rounded-[30px] border border-slate-200 p-7 shadow-sm hover:shadow-xl duration-300"
                  >

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                      <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 text-sm font-semibold w-fit">

                        {booking.specialty}

                      </span>

                      <span className="text-slate-500 font-medium">

                        {booking.appointmentDate}

                      </span>

                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mt-6 break-words">

                      {booking.doctorName}

                    </h2>

                    <p className="text-slate-500 mt-3 break-words">

                      {booking.hospital}

                    </p>

                    <div className="mt-8 space-y-4">

                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-5">

                        <span className="text-slate-500">
                          Patient
                        </span>

                        <span className="font-semibold text-slate-900 text-right break-words">

                          {booking.patientName}

                        </span>

                      </div>

                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-5">

                        <span className="text-slate-500">
                          Email
                        </span>

                        <span className="font-semibold text-slate-900 text-right break-all">

                          {booking.patientEmail}

                        </span>

                      </div>

                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-5">

                        <span className="text-slate-500">
                          Fee
                        </span>

                        <span className="font-semibold text-slate-900 text-right">

                          ৳{booking.fee}

                        </span>

                      </div>

                    </div>

                    <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200">

                      <h4 className="font-bold text-slate-800">
                        Problem Description
                      </h4>

                      <p className="text-slate-500 mt-3 leading-relaxed break-words">

                        {booking.problem}

                      </p>

                    </div>

                    {/* update booking button */}
                   <button
                  onClick={() =>
                  setSelectedBooking(booking)
                }
               className="w-full mt-6 py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300"
               >
               Update Booking
                   </button>

                    <button
                      onClick={() =>
                     handleDeleteBooking(booking._id)
                    }
                      className="w-full mt-6 py-4 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 duration-300"
                    >
                      Cancel Booking
                    </button>

                  </div>
                )
              )
            }

          </div>
        )
      }

      

    </section>

    {/* modals */}

    {
  selectedBooking && (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-5">

      <div className="bg-white w-full max-w-2xl rounded-[30px] p-8">

        <h2 className="text-3xl font-black text-slate-900">
          Update Booking
        </h2>

        <form
        onSubmit={handleUpdateBooking}
        className="mt-6 space-y-5"
        >

          <input
            type="text"
            name="patientName"
            defaultValue={selectedBooking.patientName}
            className="w-full px-5 py-4 rounded-2xl border border-slate-300"
          />

          <input
            type="email"
            defaultValue={selectedBooking.patientEmail}
            readOnly
            className="w-full px-5 py-4 rounded-2xl border border-slate-300 bg-slate-100"
          />

          <input
            type="date"
            name="appointmentDate"
            defaultValue={selectedBooking.appointmentDate}
            className="w-full px-5 py-4 rounded-2xl border border-slate-300"
          />

          <textarea
          name="problem"
            defaultValue={selectedBooking.problem}
            rows="4"
            className="w-full px-5 py-4 rounded-2xl border border-slate-300 resize-none"
          ></textarea>

          <div className="flex gap-4">

            <button
              type="button"
              onClick={() =>
                setSelectedBooking(null)
              }
              className="w-full py-4 rounded-2xl border border-slate-300 font-semibold"
            >
              Cancel
            </button>

            <button
              className="w-full py-4 rounded-2xl bg-cyan-500 text-white font-semibold"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}


    </>
  );


};

export default MyBookings;