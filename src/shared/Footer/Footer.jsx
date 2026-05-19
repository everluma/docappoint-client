import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-5 py-14">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* logo */}
          <div>

            <div className="flex items-center gap-2 mb-4">

              <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center font-bold text-xl">
                D
              </div>

              <h2 className="text-3xl font-bold">
                DocAppoint
              </h2>

            </div>

            <p className="text-slate-400 max-w-md">
              Modern healthcare appointment booking platform for seamless patient experience.
            </p>

          </div>

          {/* socials */}
          <div className="flex items-center gap-5 text-2xl">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
          © 2026 DocAppoint. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;