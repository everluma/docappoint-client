const Stats = () => {

  const stats = [
    {
      id: 1,
      number: "500+",
      title: "Expert Doctors",
    },

    {
      id: 2,
      number: "12K+",
      title: "Happy Patients",
    },

    {
      id: 3,
      number: "24/7",
      title: "Support Service",
    },

    {
      id: 4,
      number: "99%",
      title: "Satisfaction Rate",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 mt-20">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {
          stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl duration-300"
            >

              <h2 className="text-4xl font-black text-cyan-500">
                {stat.number}
              </h2>

              <p className="mt-3 text-slate-600 font-medium">
                {stat.title}
              </p>

            </div>
          ))
        }

      </div>

    </section>
  );
};

export default Stats;