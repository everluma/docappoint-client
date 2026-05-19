import { Link } from "react-router-dom";

import {
  FaArrowRight,
} from "react-icons/fa6";

const Hero = () => {

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-100">

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">

        {/* left */}
        <div>

          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold">

            Trusted Healthcare Platform

          </div>

          <h1 className="mt-7 text-5xl lg:text-7xl font-black leading-tight text-slate-900">

            Book Your Doctor Appointment

            <span className="text-cyan-500">
              {" "}Instantly
            </span>

          </h1>

          <p className="mt-7 text-lg text-slate-600 leading-relaxed max-w-xl">

            Connect with experienced specialists, schedule appointments effortlessly, and manage your healthcare journey with confidence.

          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">

            <Link
              to="/appointments"
              className="px-8 py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300 flex items-center gap-3 shadow-lg shadow-cyan-200"
            >

              Explore Doctors

              <FaArrowRight />

            </Link>

            <button
              className="px-8 py-4 rounded-2xl border border-slate-300 font-semibold hover:border-cyan-500 hover:text-cyan-500 duration-300"
            >
              Learn More
            </button>

          </div>

          {/* stats */}
          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>

              <h3 className="text-3xl font-black text-slate-900">
                500+
              </h3>

              <p className="text-slate-500 mt-2">
                Doctors
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-slate-900">
                12K+
              </h3>

              <p className="text-slate-500 mt-2">
                Patients
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-slate-900">
                99%
              </h3>

              <p className="text-slate-500 mt-2">
                Satisfaction
              </p>

            </div>

          </div>

        </div>

        {/* right */}
        <div className="relative">

          {/* card bg */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-sky-400 rounded-[40px] rotate-6"></div>

          <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[40px] p-5 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
              alt="doctors"
              className="w-full h-[580px] rounded-[30px] object-cover"
            />

          </div>

          {/* floating card */}
          <div className="absolute -bottom-8 -left-5 bg-white rounded-3xl shadow-2xl p-5 border border-slate-100">

            <h4 className="font-bold text-slate-800">
              24/7 Appointment Support
            </h4>

            <p className="text-slate-500 text-sm mt-2">
              Fast & secure healthcare booking
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;