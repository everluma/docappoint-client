import { Link } from "react-router-dom";

import AuthBanner from "../../components/Auth/AuthBanner";

import { FcGoogle } from "react-icons/fc";

const Login = () => {

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-5 py-10">

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10">

        <AuthBanner
          title="Welcome Back!"
          subtitle="Access your healthcare appointments and manage your bookings seamlessly."
        />

        {/* form */}
        <div className="bg-white rounded-[40px] p-8 lg:p-14 shadow-xl border border-slate-100">

          <div className="text-center">

            <h2 className="text-4xl font-black text-slate-900">
              Login
            </h2>

            <p className="mt-4 text-slate-500">
              Sign in to continue your healthcare journey
            </p>

          </div>

          <form className="mt-10 space-y-6">

            {/* email */}
            <div>

              <label className="font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-3 px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
              />

            </div>

            {/* password */}
            <div>

              <label className="font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-3 px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
              />

            </div>

            <div className="flex justify-end">

              <button
                type="button"
                className="text-cyan-500 font-medium hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            {/* login button */}
            <button
              className="w-full py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300"
            >
              Login
            </button>

          </form>

          {/* divider */}
          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-slate-200"></div>

            <span className="text-slate-400">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-slate-200"></div>

          </div>

          {/* google */}
          <button
            className="w-full py-4 rounded-2xl border border-slate-300 flex items-center justify-center gap-3 hover:bg-slate-50 duration-300"
          >

            <FcGoogle className="text-2xl" />

            Continue with Google

          </button>

          {/* register */}
          <p className="text-center mt-8 text-slate-600">

            Don’t have an account?

            <Link
              to="/register"
              className="text-cyan-500 font-semibold ml-2 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
};

export default Login;