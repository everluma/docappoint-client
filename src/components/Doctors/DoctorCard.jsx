import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {

  return (
    <div className="bg-white rounded-[30px] overflow-hidden border border-slate-200 hover:-translate-y-2 hover:shadow-2xl duration-300">

      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center justify-between">

          <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 text-sm font-semibold">
            {doctor.specialty}
          </span>

          <span className="text-yellow-500 font-bold">
            ★ {doctor.rating}
          </span>

        </div>

        <h2 className="text-2xl font-bold mt-5 text-slate-900">
          {doctor.name}
        </h2>

        <p className="text-slate-500 mt-2">
          {doctor.experience} Experience
        </p>

        <p className="text-slate-500 mt-2">
          {doctor.hospital}
        </p>

        <div className="mt-6">

          <Link
            to={`/doctor/${doctor.id}`}
            className="block text-center py-4 rounded-2xl bg-slate-900 text-white hover:bg-cyan-500 duration-300 font-semibold"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default DoctorCard;