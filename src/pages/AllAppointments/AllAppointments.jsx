import { useState } from "react";

import DoctorCard from "../../components/Doctors/DoctorCard";

import doctors from "../../data/doctors";

const AllAppointments = () => {

  const [searchText, setSearchText] =
    useState("");

  const filteredDoctors =
    doctors.filter((doctor) =>
      doctor.name
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        ) ||
      doctor.specialty
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
    );

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      {/* heading */}
      <div className="text-center max-w-3xl mx-auto">

        <h1 className="text-5xl font-black text-slate-900">
          All Doctors
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Browse and book appointments with experienced healthcare specialists.
        </p>

      </div>

      {/* search */}
      <div className="mt-10 max-w-2xl mx-auto">

        <input
          type="text"
          placeholder="Search by doctor name or specialty..."
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
          className="w-full px-6 py-5 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500 shadow-sm"
        />

      </div>

      {/* empty state */}
      {
        filteredDoctors.length === 0 && (
          <div className="text-center py-20">

            <h3 className="text-3xl font-bold text-slate-800">
              No Doctor Found
            </h3>

            <p className="text-slate-500 mt-4">
              Try another keyword.
            </p>

          </div>
        )
      }

      {/* doctors */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
            />
          ))
        }

      </div>

    </section>
  );
};

export default AllAppointments;