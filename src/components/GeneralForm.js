import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

function GeneralForm() {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Mail adresinizi giriniz"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Yaşınızı giriniz"
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div>
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Şifrenizi giriniz"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <label>Şifre Tekrarı</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Şifrenizi tekrar giriniz"
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="sum-bmit">
        Kaydet
      </button>

      <Link className="formLink" to={"/portal"}>
        Portala Git
      </Link>
    </form>
  );
}

export default GeneralForm;
