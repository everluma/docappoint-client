import { Link } from "react-router-dom";

const ErrorPage = () => {

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-5">

      <div className="text-center">

        <h1 className="text-8xl font-black text-cyan-500">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-black text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500 max-w-lg">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-8 py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300"
        >
          Back To Home
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;