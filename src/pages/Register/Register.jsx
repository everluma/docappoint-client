import { useEffect } from "react";

import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

import AuthBanner from "../../components/Auth/AuthBanner";

import { FcGoogle } from "react-icons/fc";

import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

  // title

  useEffect(() => {

  document.title =
    "DocAppoint | Register";

}, []);



  const {
  createUser,
  googleLogin,
  updateUserProfile,
} = useContext(AuthContext);

const navigate = useNavigate();

const [error, setError] =
  useState("");

const handleRegister = async (e) => {

  e.preventDefault();

  setError("");

  const form = e.target;

  const name =
    form.name.value;

  const photo =
    form.photo.value;

  const email =
    form.email.value;

  const password =
    form.password.value;

  // validation
  const uppercaseRegex =
    /[A-Z]/;

  const lowercaseRegex =
    /[a-z]/;

  if (
    password.length < 6
  ) {
    return setError(
      "Password must be at least 6 characters"
    );
  }

  if (
    !uppercaseRegex.test(password)
  ) {
    return setError(
      "Password must contain one uppercase letter"
    );
  }

  if (
    !lowercaseRegex.test(password)
  ) {
    return setError(
      "Password must contain one lowercase letter"
    );
  }

  try {

    await createUser(
      email,
      password
    );

    await updateUserProfile({
      displayName: name,
      photoURL: photo,
    });

    toast.success(
      "Registration successful!"
    );

    navigate("/login");

  } catch (err) {

    setError(err.message);
  }
};

const handleGoogleSignup =
  async () => {

    try {

      await googleLogin();

      toast.success(
        "Google signup successful!"
      );

      navigate("/");

    } catch (err) {

      toast.error(err.message);
    }
  };


  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-5 py-10">

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10">

        <AuthBanner
          title="Join DocAppoint Today"
          subtitle="Create your account and manage appointments with trusted healthcare professionals."
        />

        {/* form */}
        <div className="bg-white rounded-[40px] p-8 lg:p-14 shadow-xl border border-slate-100">

          <div className="text-center">

            <h2 className="text-4xl font-black text-slate-900">
              Register
            </h2>

            <p className="mt-4 text-slate-500">
              Create your healthcare account
            </p>

          </div>

          <form
         onSubmit={handleRegister}
          className="mt-10 space-y-6"
              >

            {/* name */}
            <div>

              <label className="font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text" name="name"
                placeholder="Enter your name"
                className="w-full mt-3 px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
              />

            </div>

            {/* photo */}
            <div>

              <label className="font-semibold text-slate-700">
                Photo URL
              </label>

              <input
                type="text" name="photo"
                placeholder="Enter photo URL"
                className="w-full mt-3 px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
              />

            </div>

            {/* email */}
            <div>

              <label className="font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email" name="email"
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
                type="password" name="password"
                placeholder="Enter your password"
                className="w-full mt-3 px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
              />

            </div>

            {/* error */}

            {
            error && (
            <p className="text-red-500 font-medium">
            {error}
            </p>
            )
            }

            {/* register button */}
            <button
              className="w-full py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300"
            >
              Register
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
          <button onClick={handleGoogleSignup}
            className="w-full py-4 rounded-2xl border border-slate-300 flex items-center justify-center gap-3 hover:bg-slate-50 duration-300"
          >

            <FcGoogle className="text-2xl" />

            Continue with Google

          </button>

          {/* login */}
          <p className="text-center mt-8 text-slate-600">

            Already have an account?

            <Link
              to="/login"
              className="text-cyan-500 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
};

export default Register;