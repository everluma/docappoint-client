import DoctorCard from "./DoctorCard";
import doctors from "../../data/doctors";

const TopDoctors = () => {

  
  return (
    <section className="max-w-7xl mx-auto px-5 mt-24">

      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
          Top Rated Doctors
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Connect with experienced and verified healthcare specialists from top hospitals.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {
          doctors.map((doctor) => (
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

export default TopDoctors;