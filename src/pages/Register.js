import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Register.scss";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "~/layouts/Main";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Enter an username."),
    email: yup.string().required("Enter an email.").email("Email invalid."),
    password: yup
      .string()
      .required("Enter a password.")
      .min(4, "Password must be at least 4 characters."),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Password not match.")
      .required("Enter a password."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data.username);

  return (
    <>
      <Main>
        <div className="container-login">
          <section className="form">
            <h1 className="title">Create an account</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form__group">
                <input {...register("username")} placeholder="Username" />
                {errors.username?.message && (
                  <span>{errors.username?.message}</span>
                )}
              </div>

              <div className="form__group">
                <input {...register("email")} placeholder="Email address" />
                {errors.email?.message && <span>{errors.email?.message}</span>}
              </div>

              <div className="form__group">
                <input
                  {...register("password")}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <BsEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <BsEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}

                {errors.password?.message && (
                  <span>{errors.password?.message}</span>
                )}
              </div>

              <div className="form__group">
                <input
                  {...register("confirm_password")}
                  placeholder="Confirm password"
                  type={showConfirmPassword ? "text" : "password"}
                />
                {showConfirmPassword ? (
                  <BsEye
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                  />
                ) : (
                  <BsEyeSlash
                    onClick={() => {
                      setShowConfirmPassword(!showPassword);
                    }}
                  />
                )}

                {errors.confirm_password?.message && (
                  <span>{errors.confirm_password?.message}</span>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btnSubmit" type="submit">
                  Create account
                </button>
              </div>

              <div className="or">
                <span style={{ color: "#ccc" }}>Already a member? </span>
                <span
                  className="navigate"
                  onClick={() => {
                    navigate("/login");

                  }}
                >
                  Sign in
                </span>
              </div>
            </form>
          </section>
        </div>
      </Main>
    </>
  );
}
