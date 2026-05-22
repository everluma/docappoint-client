import { useEffect, useState } from "react";

import DoctorCard from "../../components/Doctors/DoctorCard";

import useAxiosSecure from "../../hooks/useAxiosSecure";

import LoadingSpinner from "../../shared/Loading/LoadingSpinner";

const AllAppointments = () => {

  const axiosSecure =
    useAxiosSecure();

  const [doctors, setDoctors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [searchText, setSearchText] =
    useState("");

  const [sortOption, setSortOption] =
    useState("");

  // seo title
  useEffect(() => {

    document.title =
      "All Appointments | DocAppoint";

  }, []);

  // fetch doctors
  useEffect(() => {

    setLoading(true);

    axiosSecure
      .get(
        `/doctors?search=${searchText}&sort=${sortOption}`
      )
      .then((res) => {

        setDoctors(res.data);

        setLoading(false);

      })
      .catch((error) => {

        console.log(error);

        setLoading(false);

      });

  }, [
    axiosSecure,
    searchText,
    sortOption,
  ]);

  // loading
  if (loading) {
    return <LoadingSpinner />;
  }

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

      {/* search + sort */}
      <div className="mt-10 flex flex-col lg:flex-row gap-5 max-w-4xl mx-auto">

        <input
          type="text"
          placeholder="Search by doctor name or specialty..."
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
          className="w-full px-6 py-5 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500 shadow-sm"
        />

        <select
          value={sortOption}
          onChange={(e) =>
            setSortOption(e.target.value)
          }
          className="px-6 py-5 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500 shadow-sm"
        >

          <option value="">
            Sort By Fee
          </option>

          <option value="fee_asc">
            Fee Low To High
          </option>

          <option value="fee_desc">
            Fee High To Low
          </option>

        </select>

      </div>

      {/* no result */}
      {
        doctors.length === 0 && (
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
          doctors.map((doctor) => (
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

export default AllAppointments;