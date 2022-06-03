import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Login.scss";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "~/layouts/Main";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Enter an email/username."),
    password: yup
      .string()
      .required("Enter a password.")
      .min(4, "Password must be at least 4 characters"),
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
            <h1 className="title">Sign in</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form__group">
                <input
                  {...register("username")}
                  placeholder="Username or email address"
                />
                {errors.username?.message && (
                  <span>{errors.username?.message}</span>
                )}
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

              <div className="forgotPassword">
                <a href="#">Forgot your password?</a>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btnSubmit" type="submit">
                  Sign in
                </button>
              </div>

              <div className="or">
                <span style={{ color: "#ccc" }}>Not a member? </span>
                <span
                  className="navigate"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Join now
                </span>
              </div>
            </form>
          </section>
        </div>
      </Main>
    </>
  );
}
