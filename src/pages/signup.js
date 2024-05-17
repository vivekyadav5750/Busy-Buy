import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import authService from "../services/authSevices";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Shift password validation to utils
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!emailRegex.test(email)) {
      toast.error("Invalid Email");
      return;
    }

    //TODO: Add Regex for password

    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    // if (!passwordRegex.test(password)) {
    //   // toast.error("Password must contain at least 8 characters, including UPPER/lowercase and numbers");
    //   toast.info("Password must contain at least 8 characters, including UPPER/lowercase and numbers");
    //   return;
    // }

    const { error } = await authService.signup(email, password);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("User Created Successfully");
    // navigate to sign in page
    navigate("/signin");
  };

  return (
    // main frame  for SingUp Page
    <main className="flex items-center justify-center">
      {/* // register form */}
      <div className="h-96 w-80 mt-20 space-y-4">
        {/* <h1 className="text-5xl font-serif font-black text-customBlue">Sign Up</h1> */}
        <h1 className="text-5xl font-sans font-black text-customBlue">
          Sign Up
        </h1>
        {/* <h1 className="text-5xl font-mono font-black text-customBlue">Sign Up</h1> */}

        <form className="flex flex-col space-y-4  pt-8" onSubmit={handleSubmit}>
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
              focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="text"
            placeholder="Enter Name"
            required
            autoComplete="off"
            name="name"
          />
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
              focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="email"
            placeholder="Enter Email"
            required
            autoComplete="off"
            name="email"
          />
          <input
            className="h-12 w-72 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
              focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
            type="password"
            placeholder="Enter Password"
            required
            autoComplete="off"
            name="password"
          />
          <button className="h-10 w-72 p-1.5 bg-darkPurple text-lg text-white rounded-md shadow-lg shadow-slate-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
