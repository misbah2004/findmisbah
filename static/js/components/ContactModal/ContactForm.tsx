import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { PropsContactForm, Values } from '../../@types/props';
import Style from './style.module.scss';
import ShahidBg from '../../assets/images/about-shahid.png';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';

const ContactForm: React.FC<PropsContactForm> = ({ toggleModal }) => {
  const [submitedResponse, setSubmited] = useState<boolean>(false);
  return (
    <>
      {createPortal(
        <div className={`${Style.modal} relative`}>
          <button
            className="text-base absolute right-6 top-6 md:right-4 md:top-4 w-8 h-8 bg-secondary text-lg leading-7 z-20"
            onClick={() => {
              toggleModal();
            }}
          >
            x
          </button>
          <div className="md:w-10/12 h-[calc(100vh - 16px)] m-4 md:h-[80vh] bg-base absolute left-0 top-0 bottom-0 right-0 md:m-auto shadow-csShadow rounded-lg flex flex-col md:flex-row gap-4">
            <div className="flex-1 sm:flex-[2]">
              <img
                src={ShahidBg}
                alt="About shahid"
                className="h-full object-contain object-bottom sm:object-center"
              />
            </div>
            <div className="flex-[2] sm:flex-1 flex justify-center items-center flex-col">
              {submitedResponse ? (
                <p className="text-center text-secondary">
                  Thanks for your time <br />
                  Shahid will contact you shortly!
                </p>
              ) : (
                <>
                  <h1 className="text-lg text-white font-bold tracking-wide mb-4">
                    Contact Shahid!
                  </h1>
                  <Formik
                    initialValues={{ email: '', name: '', message: '' }}
                    validate={(values) => {
                      const errors = {} as Values;
                      if (!values.name) {
                        errors.name = 'Name is required';
                      }
                      if (!values.email) {
                        errors.email = 'Email is Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = 'Invalid email address';
                      }
                      if (!values.message) {
                        errors.message = 'Message is required!';
                      } else if (!/^[a-zA-Z\s]*$/i.test(values.message)) {
                        errors.message = 'Message only accept words!!!';
                      }
                      return errors;
                    }}
                    onSubmit={(
                      values: Values,
                      { setSubmitting, resetForm }: FormikHelpers<Values>
                    ) => {
                      const getInputData = () => {
                        const dataPost = new FormData();
                        dataPost.append('entry.1531216797', values.name);
                        dataPost.append('entry.1904656856', values.email);
                        dataPost.append('entry.267860547', values.message);
                        return dataPost;
                      };
                      const submitUrl =
                        'https://docs.google.com/forms/d/e/1FAIpQLSeACzYQE24Co6bUGgHkqra_ML6KqXqDY_f0IOSJsRfXkPKcVQ/formResponse';
                      fetch(submitUrl, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: getInputData(),
                      })
                        .then(() => {
                          setSubmitting(false);
                          resetForm();
                          setSubmited(true);
                        })
                        .catch((err) => {
                          console.error(err);
                          setSubmitting(false);
                          resetForm();
                        });
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="w-full px-4 sm:pl-0 sm:pr-4">
                        <label htmlFor="name" className="text-white">
                          Name<i className="text-secondary">*</i>
                        </label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full p-4 mb-4 outline-none"
                          placeholder="John"
                          autoComplete="true"
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="mt-[-12px] text-secondary"
                        />
                        <label htmlFor="email" className="text-white">
                          Email<i className="text-secondary">*</i>
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full p-4 outline-none mb-4"
                          placeholder="john@gmail.com"
                          autoComplete="true"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="mt-[-12px] text-secondary"
                        />
                        <label htmlFor="message" className="text-white">
                          Message<i className="text-secondary">*</i>
                        </label>
                        <Field
                          as="textarea"
                          name="message"
                          id="message"
                          className="block w-full p-4 outline-none"
                          placeholder="I want to hire!"
                          autoComplete="true"
                        />
                        <ErrorMessage
                          name="message"
                          component="p"
                          className="mt-4 text-secondary"
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-secondary outline-none relative px-5 py-2 z-[1] mt-4 text-secondBase cursor-pointer"
                        >
                          Submit
                        </button>
                      </Form>
                    )}
                  </Formik>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ContactForm;
