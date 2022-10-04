import React from "react";
import { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    pwConfirm: "",
  });

  return (
    <div className="container mb-3">
      <h3 className="contentBoxTop mb-3">회원 가입</h3>

      <form action="/users" method="post">
        <div className="form-group row">
          <label for="username" className="col-sm-3 col-form-label">
            Username*
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="name" className="col-sm-3 col-form-label">
            Name*
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="email" className="col-sm-3 col-form-label">
            Email
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="email"
              name="email"
              value={form.email}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password" className="col-sm-3 col-form-label">
            Password*
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="pwConfirm" className="col-sm-3 col-form-label">
            Password Confirmation*
          </label>
          <div className="col-sm-9 col-sm-offset-3">
            <input
              type="password"
              id="pwConfirm"
              name="pwConfirm"
              value={form.pwConfirm}
              className="form-control"
            />
          </div>
        </div>
        <p>
          <small>*Required</small>
        </p>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
