import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  function handleSignout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  return (
    <div className="text-white body-font fixed top-0 bg-gradient-to-b from-black w-full z-50">
      <div className=" px-16 flex p-5  md:flex-row items-center justify-between">
        <a className="flex font-medium items-center text-white mb-4 md:mb-0">
          <img
            src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png"
            className="w-24"
            alt=""
          />
        </a>

        {user && (
          <button onClick={handleSignout} className="font-semibold text-base">
            {"Sign out"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
