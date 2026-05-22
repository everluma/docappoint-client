import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { updateProfile } from "firebase/auth";

import { toast } from "react-hot-toast";

const MyProfile = () => {

  const { user } =
    useContext(AuthContext);

  const [openModal, setOpenModal] =
    useState(false);

  const handleUpdateProfile =
    async (e) => {

      e.preventDefault();

      const form = e.target;

      const name =
        form.name.value;

      const photo =
        form.photo.value;

      try {

        await updateProfile(
          user,
          {
            displayName: name,
            photoURL: photo,
          }
        );

        toast.success(
          "Profile updated successfully!"
        );

        setOpenModal(false);

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to update profile!"
        );
      }
    };

  return (

    <>

      <section className="p-5 lg:p-10">

        <div className="bg-white rounded-[30px] border border-slate-200 p-8 shadow-sm max-w-3xl">

          <div className="flex flex-col items-center text-center">

            <img
              src={
                user?.photoURL
              }
              alt="user"
              className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500"
            />

            <h2 className="mt-6 text-4xl font-black text-slate-900">

              {user?.displayName}

            </h2>

            <p className="mt-3 text-slate-500 text-lg break-all">

              {user?.email}

            </p>

            <button
              onClick={() =>
                setOpenModal(true)
              }
              className="mt-8 px-8 py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300"
            >
              Update Profile
            </button>

          </div>

        </div>

      </section>

      {
        openModal && (

          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-5">

            <div className="bg-white w-full max-w-xl rounded-[30px] p-8">

              <h2 className="text-3xl font-black text-slate-900">

                Update Profile

              </h2>

              <form
                onSubmit={
                  handleUpdateProfile
                }
                className="mt-6 space-y-5"
              >

                <input
                  type="text"
                  name="name"
                  defaultValue={
                    user?.displayName
                  }
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300"
                />

                <input
                  type="text"
                  name="photo"
                  defaultValue={
                    user?.photoURL
                  }
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300"
                />

                <div className="flex gap-4">

                  <button
                    type="button"
                    onClick={() =>
                      setOpenModal(false)
                    }
                    className="w-full py-4 rounded-2xl border border-slate-300 font-semibold"
                  >
                    Cancel
                  </button>

                  <button
                    className="w-full py-4 rounded-2xl bg-cyan-500 text-white font-semibold"
                  >
                    Save Changes
                  </button>

                </div>

              </form>

            </div>

          </div>
        )
      }

    </>
  );
};

export default MyProfile;