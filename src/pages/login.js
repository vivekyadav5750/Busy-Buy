import { Link, NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseInit";
import { toast } from "react-toastify";

export default function LoginPage() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("User Logged In Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          toast.error("invalid-credential");
          return;
        }
        toast.error("Something went wrong! Please try again.");
      });

  };

  return (
    // main frame  for login Page
    <main className="flex items-center justify-center">
      {/* // login form */}
      <div className="h-96 w-80 mt-20   space-y-4">
        <h1 className="text-5xl font-sans font-black text-customBlue">
          Sign In
        </h1>

        <form
          className="flex flex-col space-y-4  pt-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
            focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="email"
            placeholder="Enter Email"
            required
            autoComplete="off"
          />
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
            focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="password"
            placeholder="Enter Password"
            required
            autoComplete="off"
          />
          <button className="h-10 w-72 p-1.5 bg-darkPurple text-lg text-white rounded-md shadow-lg shadow-slate-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Sign In
          </button>
        </form>
        <p className="font-semibold">
          <NavLink to="/signup"> Or SignUp instead</NavLink>
        </p>
      </div>
    </main>
  );
}
