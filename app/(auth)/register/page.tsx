"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});

const RegisterForm: React.FC = () => {
  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label htmlFor="firstName" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                        First Name
                      </label>
                      <Field
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage name="firstName" component="div" className="text-xs italic text-red-500" />
                    </div>
                    <div className="md:ml-2">
                      <label htmlFor="lastName" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                        Last Name
                      </label>
                      <Field
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage name="lastName" component="div" className="text-xs italic text-red-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage name="email" component="div" className="text-xs italic text-red-500" />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                        Password
                      </label>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="******************"
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage name="password" component="div" className="text-xs italic text-red-500" />
                    </div>
                    <div className="md:ml-2">
                      <label htmlFor="confirmPassword" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                        Confirm Password
                      </label>
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="******************"
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage name="confirmPassword" component="div" className="text-xs italic text-red-500" />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a href="#" className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <a href="/login" className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                      Already have an account? Login!
                    </a>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
