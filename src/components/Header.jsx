import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/slice/userSlice";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearch } from "../store/slice/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  function handleSearch() {
    dispatch(toggleGptSearch());
  }

  function handleSignout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="text-white body-font fixed top-0 bg-gradient-to-b from-black w-full z-50">
      <div className=" px-16 flex p-5  md:flex-row items-center justify-between">
        <a className="flex font-medium items-center text-white mb-4 md:mb-0">
          <img src={NETFLIX_LOGO} className="w-24 hover:underline" alt="logo" />
        </a>

        {user && (
          <div>
            <button
              onClick={handleSearch}
              className="bg-purple-600 py-1 px-2 mr-2 rounded hover:bg-purple-700"
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <button onClick={handleSignout} className="font-semibold text-base">
              {"Sign out"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
