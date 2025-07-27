import {useForm} from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom"
import { useEffect } from "react";


function LoginPage() {

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm()
  const { signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data)
  });

  useEffect(() => {
          if (isAuthenticated) navigate("/");
      }, [isAuthenticated]);


  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className=" border-2 border-zinc-400 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6 hover:text-blue-600">Welcome back!</h1>

        {signinErrors.map((error, i) => (
                <div key={i} className="bg-red-500 p-2 text-white rounded mb-2 text-center">
                {error}
                </div>
            ))}

        <form onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 hover:bg-white hover:text-black border border-gray-300"
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            Email is required
          </span>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 hover:bg-white hover:text-black border border-gray-300"
          placeholder="Password"
          />
          {errors.password && (
          <span className="text-red-500 text-sm">
            Password is required
          </span>
          )}

        <button type="submit" className="w-full bg-blue-600 hover:bg-white hover:text-blue-600 text-white px-4 py-2 rounded-md my-2">Login</button>
      </form>
      <p className="flex gap-x-2 justify-between">
        Don't have an account? <Link to="/register" className="text-blue-600 hover:text-orange-500 font-bold">Sign up</Link>
      </p>
      </div>
    </div>
  )
}

export default LoginPage