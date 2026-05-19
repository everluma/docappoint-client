const LoadingSpinner = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>

    </div>
  );
};

export default LoadingSpinner;