"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const UserRegistration = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const res = await signIn("credentials", {
    //         email,
    //         password,
    //         redirect: false,
    //         });

    //         if (res.error) {
    //         setError("Invalid Credentials");
    //         return;
    //         }

    //         router.replace("dashboard");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
  // return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-50">
    //   <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 w-96">
    //     <h1 className="text-xl font-bold my-4">Login</h1>

    //     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    //       <input
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="text"
    //         placeholder="Email"
    //       />
    //       <input
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //         placeholder="Password"
    //       />
    //       <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
    //         Login
    //       </button>
    //       {error && (
    //         <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
    //           {error}
    //         </div>
    //       )}

    //       <Link className="text-sm mt-3 text-right" href={"/registration/userRegistration/userRegister"}>
    //         Don't have an account? <span className="underline">Register</span>
    //       </Link>
    //       <Link className="text-sm mt-3 text-center" href={"/registration"}>
    //         <span className="underline">Back to Registration</span>
    //       </Link>
    //     </form>
    //   </div>
    // </div>
        const router = useRouter()
            const navigate = (location) => {
            router.push(location)
        }
    
    return (
          <div className="flex items-center min-h-screen bg-black">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row">
                  <div className="h-32 md:h-auto md:w-1/2 flex items-center justify-center">
                      <img className="h-auto max-w-full rounded-full shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30  hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAViZMnOVPRXHp8DW5tVMNadxV16MtQT-NA&usqp=CAU"
                          alt="img" />
                  </div>
                  <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                      <div className="w-full">
                          <div className="flex justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none"
                                  viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path
                                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                              </svg>
                          </div>
                          <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                              Login to Your Account
                          </h1>
                          <div>
                              <label className="block text-sm">
                                  Email
                              </label>
                              <input type="email"
                                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                  placeholder="" />
                          </div>
                          <div>
                              <label className="block mt-4 text-sm">
                                  Password
                              </label>
                              <input
                                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                  placeholder="" type="password" />
                          </div>
                          <p className="mt-4">
                              <a className="text-sm text-blue-600 hover:underline" href="./forgot-password.html">
                                  Forgot your password?
                              </a>
                          </p>


                          <button
                              className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                              href="#">
                              Log in
                          </button>


                          <hr className="my-8" />


                          <div className="flex items-center justify-center gap-4">
                              <button onClick={() => navigate('/registration/userRegistration/userRegister')}
                                  className="flex items-center justify-center w-full px-4 py-2 text-sm text-black text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
                                  Register
                              </button>
                              <button onClick={() => navigate('/registration')}
                                  className="flex items-center justify-center w-full px-4 py-2 text-sm text-black text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
                                  Back to Registration
                              </button>
                           </div>
                        </div> 
                      </div> 
                    </div> 
                  </div>  
                </div> 
  )
}

export default UserRegistration
