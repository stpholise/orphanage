"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import Image from "next/image";

interface ValueTypes {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface ModalProp {
  setIsPopupActive: Dispatch<SetStateAction<boolean>>;
}

const Modals = ({ setIsPopupActive }: ModalProp) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "valunteer",
    message: "",
  };

  const validation = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string().email(),
    message: Yup.string(),
  });

  const contactFormSubmission = (
    values: ValueTypes,
    { resetForm }: FormikHelpers<ValueTypes>
  ) => {
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <div className="container mx-auto w-full sm:w-calc(100% - 2rem) md:w-[720px] z-40 bg-white px-4 py-8 my-8 rounded-sm fixed -left-1/2 -right-1/2 top-1/35 xs:top-1/28 sm:top-1/13 overflow-auto">
      <div
        onClick={() => setIsPopupActive(false)}
        className="absolute top-3 right-3 bg-black rounded-sm sm:rounded-lg sm:w-9 sm:h-9 w-6 h-6 flex items-center justify-center"
      >
        <Image
          src={"/Icons/Cross.svg"}
          alt="close modal"
          height={"24"}
          width={"24"}
          className="sm:h-6 sm:w-6 h-4 w-4"
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={contactFormSubmission}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="flex flex-col gap-6 md:gap-5 ">
            <div className="flex flex-col gap-2">
              <h2 className="sm:text-4xl text-2xl font-bold">
                Join as a volunteer
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
                varius enim in eros elementum tristique.{" "}
              </p>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
              <div className=" w-full ">
                <label
                  htmlFor="firstName"
                  className="block text-xs font-bold text-[#1D2130]"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="outline-none px-2 py-1 border-b-2 broder-gray-300 w-full"
                />
                <ErrorMessage
                  name="firstName"
                  component={"div"}
                  className="text-sm text-red-600"
                />
              </div>
              <div className="w-full ">
                <label
                  htmlFor="lastName"
                  className="block text-xs font-bold text-[#1D2130]"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="outline-none px-2 py-1 border-b-2 broder-gray-300 w-full"
                />
                <ErrorMessage
                  name="lastName"
                  component={"div"}
                  className="text-sm text-red-600"
                />
              </div>
              <div className="w-full sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-[#1D2130]"
                >
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="outline-none px-2 py-1 border-b-2 broder-gray-300 w-full"
                />
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="text-sm text-red-600"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="message">message</label>
              <Field
                as="textarea"
                name="message"
                id="message"
                className="outline-none border-2 broder-gray-200 w-full h-28 rounded-sm p-1"
              />
            </div>
            <div className="mx-auto sm:mx-0">
              <button
                disabled={!isValid || isSubmitting || !dirty}
                className={clsx(" w-44 h-10 ", {
                  "bg-gray-300 text-gray-500 cursor-not-allowed":
                    !isValid || isSubmitting || !dirty,
                  "bg-[#F2C94C] hover:bg-[#e6be3a] active:bg-[#d9b334] text-[#1D2130]":
                    isValid && !isSubmitting && dirty,
                  "bg-[#F2C94C]/80 cursor-wait":
                    isSubmitting && isValid && dirty,
                })}
              >
                send message
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Modals;
