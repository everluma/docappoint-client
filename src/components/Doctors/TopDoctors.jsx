import { useEffect, useState } from "react";

import useAxiosSecure from "../../hooks/useAxiosSecure";

import DoctorCard from "./DoctorCard";

import LoadingSpinner from "../../shared/Loading/LoadingSpinner";

const TopDoctors = () => {

  const axiosSecure =
    useAxiosSecure();

  const [doctors, setDoctors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [searchText, setSearchText] =
    useState("");

  useEffect(() => {

    axiosSecure
      .get("/top-doctors")
      .then((res) => {

        setDoctors(res.data);

        setLoading(false);
      })
      .catch((error) => {

        console.log(error);

        setLoading(false);
      });

  }, []);

  const filteredDoctors =
    doctors.filter((doctor) =>
      doctor.name
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        ) ||
      doctor.specialty
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
    );

  return (
    <section className="max-w-7xl mx-auto px-5 mt-24">

      {/* heading */}
      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
          Top Rated Doctors
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Connect with experienced and verified healthcare specialists from top hospitals.
        </p>

      </div>

      {/* search */}
      <div className="mt-10 max-w-2xl mx-auto">

        <input
          type="text"
          placeholder="Search doctors by name or specialty..."
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
          className="w-full px-6 py-5 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500 shadow-sm"
        />

      </div>

      {/* loading */}
      {/* {
        loading && (
          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-cyan-500">
              Loading Doctors...
            </h2>

          </div>
        )
      } */}

      {
  loading && <LoadingSpinner />
}

      {/* no result */}
      {
        !loading &&
        filteredDoctors.length === 0 && (
          <div className="text-center py-20">

            <h3 className="text-3xl font-bold text-slate-800">
              No Doctor Found
            </h3>

            <p className="text-slate-500 mt-4">
              Try searching with another keyword.
            </p>

          </div>
        )
      }

      {/* doctors grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
            />
          ))
        }

      </div>

    </section>
  );
};

export default TopDoctors;