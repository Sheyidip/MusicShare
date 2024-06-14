import { getAuth, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle,  } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const OAuth =() => {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      //localStorage.setItem('isAuthenticated', 'true');
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }

  async function onTwitterClick() {
    try {
      const auth = getAuth();
      const provider = new TwitterAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      //localStorage.setItem('isAuthenticated', 'true');
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Twitter");
    }
  }
  return (
    <div>
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded "
    >
      <FcGoogle className="" />
      Continue with Google
    </button>

    <button
        type="button"
        onClick={onTwitterClick}
        className="flex items-center justify-center w-full bg-blue-500 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-blue-600 active:bg-blue-700 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded mt-3"
      >
        <FaTwitter className="text-2xl bg-white rounded-full mr-2" />
        Continue with Twitter
      </button>
    </div>
  );
}
export default OAuth;