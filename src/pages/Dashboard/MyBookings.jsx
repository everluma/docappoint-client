import { useEffect, useState } from "react";

const MyBookings = () => {


    const handleDeleteBooking = (indexToDelete) => {

  const updatedBookings =
    bookings.filter(
      (_, index) =>
        index !== indexToDelete
    );

  setBookings(updatedBookings);

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );
};

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    const storedBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    setBookings(storedBookings);

  }, []);

  return (
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
                (booking, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[30px] border border-slate-200 p-7 shadow-sm hover:shadow-xl duration-300"
                  >

                    <div className="flex items-center justify-between">

                      <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 text-sm font-semibold">

                        {booking.specialty}

                      </span>

                      <span className="text-slate-500 font-medium">

                        {booking.appointmentDate}

                      </span>

                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mt-6">

                      {booking.doctorName}

                    </h2>

                    <p className="text-slate-500 mt-3">

                      {booking.hospital}

                    </p>

                    <div className="mt-8 space-y-3">

                      <div className="flex justify-between">

                        <span className="text-slate-500">
                          Patient
                        </span>

                        <span className="font-semibold text-slate-900">

                          {booking.patientName}

                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-slate-500">
                          Email
                        </span>

                        <span className="font-semibold text-slate-900">

                          {booking.patientEmail}

                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-slate-500">
                          Fee
                        </span>

                        <span className="font-semibold text-slate-900">

                          ৳{booking.fee}

                        </span>

                      </div>

                    </div>

                    <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200">

                      <h4 className="font-bold text-slate-800">
                        Problem Description
                      </h4>

                      <p className="text-slate-500 mt-3 leading-relaxed">

                        {booking.problem}

                      </p>

                    </div>

                    <button
                    onClick={ () =>
                    handleDeleteBooking(index)
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
  );
};

export default MyBookings;