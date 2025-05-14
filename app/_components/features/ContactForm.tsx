"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

interface ValueTypes {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  const validation = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string().email(),
    subject: Yup.string(),
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
    <div className="container mx-auto md:w-[760px] py-8 my-8">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={contactFormSubmission}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="flex flex-col gap-6 md:gap-8">
            <div className=" grid grid-cols-1 xs:grid-cols-2 gap-5 md:gap-8">
              <div className=" w-full ">
                <label
                  htmlFor="firstName"
                  className="block text-xs font-bold text-[#1D2130] dark:text-gray-100"
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
                  className="block text-xs font-bold text-[#1D2130] dark:text-gray-100"
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
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-[#1D2130] dark:text-gray-100"
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
              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold  text-[#1D2130] dark:text-gray-100"
                >
                  Subject
                </label>
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  className="outline-none px-2 py-1 border-b-2 broder-gray-300 w-full"
                />
                <ErrorMessage
                  name="subject"
                  component={"div"}
                  className="text-sm text-red-600"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="message text-[#1D2130] dark:text-gray-100">message</label>
              <Field
                as="textarea"
                name="message"
                id="message"
                className="outline-none border-2 broder-gray-200 w-full h-36 rounded-sm p-2"
              />
            </div>
            <div className="mx-auto lg:mx-0">
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

export default ContactForm;
