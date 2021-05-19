import React from "react";
import { useForm } from "react-hook-form";
import InputWithLabel from "../Map/mapCard/form/inputWithLabel";
import classes from "./loginStyles.module.css";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: login.js ~ line 8 ~ onSubmit ~ data", data);
  };

  return (
    <div className={classes.form}>
      <form
        className="bg-gray-100 p-4 rounded-t-md  sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-3xl">Login</h3>
        <InputWithLabel
          id="email "
          label="Email"
          type="text"
          name="email"
          {...register("email", {
            required: "Email is required",
          })}
          validationError={errors.email?.message}
          autoComplete="off"
          autoFocus
        />
        <InputWithLabel
          id="password "
          label="Password"
          type="password"
          name="password"
          {...register("password", {
            required: "Password is required",
          })}
          validationError={errors.password?.message}
          autoComplete="off"
        />
        <div className="text-right">
          <button
            className="my-2 shadow-xl bg-green-700 hover:bg-green-800 neo_shadow text-white rounded-md"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <Link
        to="/travellog"
        className=" block text-center py-1 no-underline text-white w-full cursor-pointer font-bold rounded-b-md bg-red-700 hover:bg-red-800 shadow-xl"
      >
        Login as guest
      </Link>
    </div>
  );
}

export default Login;
