import { useParams } from "react-router-dom";

import doctors from "../../data/doctors";

const DoctorDetails = () => {

  const { id } = useParams();

  const doctor = doctors.find(
    (doc) => doc.id === id
  );

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Doctor Not Found
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <div className="bg-white rounded-[40px] p-8 lg:p-14 shadow-xl border border-slate-100">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* image */}
          <div>

            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[500px] object-cover rounded-[30px]"
            />

          </div>

          {/* content */}
          <div>

            <span className="px-5 py-2 rounded-full bg-cyan-100 text-cyan-600 font-semibold">
              {doctor.specialty}
            </span>

            <h1 className="mt-6 text-5xl font-black text-slate-900">
              {doctor.name}
            </h1>

            <p className="mt-5 text-slate-600 text-lg leading-relaxed">

              {doctor.description}

            </p>

            {/* info */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between border-b border-slate-200 pb-4">

                <span className="text-slate-500">
                  Experience
                </span>

                <span className="font-semibold text-slate-900">
                  {doctor.experience}
                </span>

              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-4">

                <span className="text-slate-500">
                  Hospital
                </span>

                <span className="font-semibold text-slate-900">
                  {doctor.hospital}
                </span>

              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-4">

                <span className="text-slate-500">
                  Rating
                </span>

                <span className="font-semibold text-yellow-500">
                  ★ {doctor.rating}
                </span>

              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-4">

                <span className="text-slate-500">
                  Consultation Fee
                </span>

                <span className="font-semibold text-slate-900">
                  ৳{doctor.fee}
                </span>

              </div>

            </div>

            {/* buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <button
                className="px-8 py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300"
              >
                Book Appointment
              </button>

              <button
                className="px-8 py-4 rounded-2xl border border-slate-300 font-semibold hover:border-cyan-500 hover:text-cyan-500 duration-300"
              >
                Contact Doctor
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DoctorDetails;