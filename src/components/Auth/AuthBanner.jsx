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
     src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
     alt="healthcare"
     className="w-full h-full      object-cover"
     />

    </div>
  );
};

export default AuthBanner;