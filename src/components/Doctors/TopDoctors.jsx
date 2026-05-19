import DoctorCard from "./DoctorCard";

const TopDoctors = () => {

  const doctors = [
    {
      id: "d1",
      name: "Dr. Ayesha Rahman",
      specialty: "Cardiologist",
      image:
        "https://i.ibb.co.com/ZYW3VTp/brown-brim.png",
      experience: "10 Years",
      hospital: "Labaid Cardiac Hospital",
      rating: 4.9,
    },

    {
      id: "d2",
      name: "Dr. Tanvir Hasan",
      specialty: "Neurologist",
      image:
        "https://i.ibb.co.com/0jqHpnp/man.png",
      experience: "8 Years",
      hospital: "Square Hospital",
      rating: 4.8,
    },

    {
      id: "d3",
      name: "Dr. Nusrat Jahan",
      specialty: "Dermatologist",
      image:
        "https://i.ibb.co.com/GCCdy8t/woman.png",
      experience: "7 Years",
      hospital: "Apollo Hospital",
      rating: 4.9,
    },
  ];

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