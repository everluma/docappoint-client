import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

const Hero = () => {

  const slides = [
    {
      id: 1,
      title: "Book Trusted Doctors Instantly",
      description:
        "Find experienced specialists and schedule appointments without waiting in long queues.",
      image:
        "https://i.ibb.co.com/8DGwz7D/doctor1.jpg",
    },

    {
      id: 2,
      title: "Modern Healthcare Experience",
      description:
        "Seamless appointment booking with verified doctors and modern healthcare facilities.",
      image:
        "https://i.ibb.co.com/3N6tq5S/doctor2.jpg",
    },

    {
      id: 3,
      title: "Your Health, Our Priority",
      description:
        "Connect with top-rated doctors anytime and manage your appointments effortlessly.",
      image:
        "https://i.ibb.co.com/7Y9q1dD/doctor3.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 pt-10">

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
        }}
        loop={true}
      >

        {
          slides.map((slide) => (
            <SwiperSlide key={slide.id}>

              <div className="grid lg:grid-cols-2 items-center gap-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-[40px] p-8 lg:p-16">

                {/* left */}
                <div>

                  <h1 className="text-4xl lg:text-6xl font-black leading-tight text-slate-900">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">

                    <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300">
                      Book Appointment
                    </button>

                    <button className="px-8 py-4 rounded-2xl border border-slate-300 hover:bg-white duration-300">
                      Explore Doctors
                    </button>

                  </div>

                </div>

                {/* right */}
                <div className="flex justify-center">

                  <img
                    src={slide.image}
                    alt="doctor"
                    className="w-full max-w-md rounded-[30px] object-cover shadow-2xl"
                  />

                </div>

              </div>

            </SwiperSlide>
          ))
        }

      </Swiper>

    </section>
  );
};

export default Hero;