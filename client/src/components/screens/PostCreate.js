import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostCreate } from "../hooks/postsHooks";

const errorVariant = {
  initial: {
    opacity: 0,
    x: "-0.1rem",
  },
  animate: {
    opacity: 1,
    x: "0rem",
  },
  exit: {
    opacity: 0,
    x: "-0.1rem",
  },
};

const PostCreate = () => {
  const mutation = usePostCreate();

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Required."),
      body: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Required."),
    }),
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <>
      <form
        className="w-11/12  md:w-3/5 xl:w-2/5 flex flex-col bg-white shadow-md rounded px-8 py-8 m-auto"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col mb-4">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
            id="title"
            name="title"
            type="text"
            {...formik.getFieldProps("title")}
          />
          <AnimatePresence>
            {formik.touched.title && formik.errors.title ? (
              <motion.span
                variants={errorVariant}
                initial="initial"
                animate="animate"
                exit="initial"
                className="mt-1 text-red-500 text-xs italic"
              >
                {formik.errors.title}
              </motion.span>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col mb-4">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="body"
          >
            Body
          </label>
          <textarea
            className="shadow appearance-none border rounded mb-1 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
            id="body"
            name="body"
            rows="6"
            {...formik.getFieldProps("body")}
          />
          <AnimatePresence>
            {formik.touched.body && formik.errors.body ? (
              <motion.span
                variants={errorVariant}
                initial="initial"
                animate="animate"
                exit="initial"
                className="text-red-500 text-xs italic"
              >
                {formik.errors.body}
              </motion.span>
            ) : null}{" "}
          </AnimatePresence>
        </div>
        <div>
          <button
            className="bg-indigo-500 text-gray-50 px-2 py-1 rounded hover:bg-indigo-600"
            type="submit"
          >
            Create Post
          </button>
        </div>
      </form>
    </>
  );
};
export default PostCreate;
