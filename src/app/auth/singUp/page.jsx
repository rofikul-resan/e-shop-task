"use client";
import { userRegister } from "@/RTK-state/Sclice/userSlice";
import React from "react";
import { useDispatch } from "react-redux";

const SingUp = () => {
  const dispatch = useDispatch();

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const password = form.password.value;
    const name = form.name.value;
    const userInfo = { name, phone, password };
    dispatch(userRegister(userInfo));
    console.log(userInfo);
  };
  return (
    <div className="hero min-h-screen py-10 md:w-9/12 mx-auto">
      <form
        onSubmit={handleSingUp}
        className="hero-content flex-col lg:flex-row-reverse"
      >
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
