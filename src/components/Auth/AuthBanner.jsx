const AuthBanner = ({
  title,
  subtitle,
}) => {

  return (
    <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[40px] p-14 text-white">

      <h1 className="text-5xl font-black leading-tight">
        {title}
      </h1>

      <p className="mt-6 text-lg text-cyan-50 leading-relaxed">
        {subtitle}
      </p>

      <img
        src="https://i.ibb.co.com/Y0bqs0S/doctor-team.png"
        alt="auth"
        className="mt-10 rounded-3xl"
      />

    </div>
  );
};

export default AuthBanner;