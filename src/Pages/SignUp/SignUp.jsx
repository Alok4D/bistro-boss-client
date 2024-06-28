import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then( () => {
          console.log('User Profile Updated!');
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User login Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        })
        .catch(error => console.log(error));
    })
  };

  return (
  <>
  <Helmet>
    <title>Bistro Boss || Sign-Up</title>
  </Helmet>
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  // pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
                })} placeholder="password" className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600" role="alert">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600" role="alert">Password must less than 20 characters</p>
              )}
              {/* {errors.password?.type === "pattern" && (
                <p className="text-red-600" role="alert">Password must have one uppercase & one lowercase & one number & one special characters</p>
              )} */}

              <label className="label"><a href="#" className="label-text-alt link link-hover">Forgot password?
                </a>
              </label>
            </div>
        
            <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Sign Up"  />
            </div>
          </form>
          <p><small>Already have an account <Link to="/login">Login</Link></small></p>
        </div>
      </div>
    </div>
  </>
  );
};

export default SignUp;
