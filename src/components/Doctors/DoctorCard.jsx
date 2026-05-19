import { Link } from "react-router-dom";

import {
  FaLocationDot,
} from "react-icons/fa6";

import {
  MdVerified,
} from "react-icons/md";

const DoctorCard = ({
  doctor,
}) => {

  return (
    <div className="group relative bg-white/80 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white/30 shadow-lg hover:shadow-2xl hover:-translate-y-3 duration-500">

      {/* top glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-200/30 blur-3xl rounded-full"></div>

      {/* image */}
      <div className="relative overflow-hidden">

        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-80 object-cover group-hover:scale-105 duration-500"
        />

        {/* rating */}
        <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-yellow-500 font-bold shadow-lg">

          ★ {doctor.rating}

        </div>

      </div>

      {/* content */}
      <div className="relative p-7">

        {/* specialty */}
        <div className="flex items-center justify-between gap-4">

          <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 text-sm font-semibold">

            {doctor.specialty}

          </span>

          <span className="flex items-center gap-1 text-emerald-500 text-sm font-semibold">

            <MdVerified />

            Verified

          </span>

        </div>

        {/* name */}
        <h2 className="mt-5 text-2xl font-black text-slate-900 leading-snug">

          {doctor.name}

        </h2>

        {/* experience */}
        <p className="mt-3 text-slate-600 font-medium">

          {doctor.experience} Experience

        </p>

        {/* hospital */}
        <div className="mt-3 flex items-center gap-2 text-slate-500">

          <FaLocationDot className="text-cyan-500" />

          <span>

            {doctor.hospital}

          </span>

        </div>

        {/* button */}
        <Link
          to={`/doctor/${doctor.id}`}
          className="mt-7 flex items-center justify-center gap-3 py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-cyan-500 duration-300"
        >

          View Details

        </Link>

      </div>

    </div>
  );
};

export default DoctorCard;