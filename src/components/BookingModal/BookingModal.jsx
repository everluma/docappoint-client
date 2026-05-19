const BookingModal = ({
  doctor,
  closeModal,
}) => {

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-5">

      <div className="bg-white w-full max-w-2xl rounded-[35px] p-8 lg:p-10 relative animate-[fadeIn_.3s_ease]">

        {/* close button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-red-500 hover:text-white duration-300"
        >
          ✕
        </button>

        <div>

          <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 font-semibold">
            {doctor.specialty}
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900">
            Book Appointment
          </h2>

          <p className="mt-4 text-slate-600">
            Complete your booking with {doctor.name}
          </p>

        </div>

        {/* form */}
        <form className="mt-10 space-y-6">

          <div>

            <label className="font-semibold text-slate-700">
              Patient Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-3 px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
            />

          </div>

          <div>

            <label className="font-semibold text-slate-700">
              Appointment Date
            </label>

            <input
              type="date"
              className="w-full mt-3 px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
            />

          </div>

          <div>

            <label className="font-semibold text-slate-700">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full mt-3 px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
            />

          </div>

          <div>

            <label className="font-semibold text-slate-700">
              Consultation Fee
            </label>

            <input
              type="text"
              value={`৳${doctor.fee}`}
              readOnly
              className="w-full mt-3 px-5 py-4 rounded-2xl bg-slate-100 border border-slate-200 outline-none"
            />

          </div>

          <button
            className="w-full py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300"
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  );
};

export default BookingModal;