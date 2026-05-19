import {
  FaUserDoctor,
  FaClock,
  FaShieldHeart,
} from "react-icons/fa6";

const WhyChooseUs = () => {

  const features = [
    {
      id: 1,
      title: "Verified Doctors",
      description:
        "All doctors are verified professionals with years of healthcare experience.",
      icon: <FaUserDoctor />,
    },

    {
      id: 2,
      title: "Instant Booking",
      description:
        "Book appointments quickly without waiting in long hospital queues.",
      icon: <FaClock />,
    },

    {
      id: 3,
      title: "Trusted Care",
      description:
        "Secure and patient-focused healthcare support for every appointment.",
      icon: <FaShieldHeart />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 mt-24">

      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
          Why Choose DocAppoint
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          We provide a modern healthcare booking experience focused on convenience and trust.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {
          features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-[30px] p-10 border border-slate-200 hover:shadow-2xl duration-300"
            >

              <div className="w-20 h-20 rounded-3xl bg-cyan-100 text-cyan-500 text-4xl flex items-center justify-center">
                {feature.icon}
              </div>

              <h2 className="text-2xl font-bold mt-8">
                {feature.title}
              </h2>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))
        }

      </div>

    </section>
  );
};

export default WhyChooseUs;