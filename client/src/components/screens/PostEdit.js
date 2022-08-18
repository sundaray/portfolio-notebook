import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostEdit, useFetchSinglePost } from "../hooks/postsHooks";

const PostEdit = () => {
  const { id } = useParams();

  const { data: post } = useFetchSinglePost(id);

  const mutation = usePostEdit(id);

  const formik = useFormik({
    initialValues: {
      title: post?.title,
      body: post?.body,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      body: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
          id="title"
          type="text"
          {...formik.getFieldProps("title")}
        />
        {formik.touched.title && formik.errors.title ? (
          <small className="form-text text-danger">{formik.errors.title}</small>
        ) : null}
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea
          className="shadow appearance-none border rounded mb-1 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
          id="body"
          type="text"
          rows="10"
          {...formik.getFieldProps("body")}
        />
        {formik.touched.body && formik.errors.body ? (
          <small>{formik.errors.body}</small>
        ) : null}
      </div>

      <div>
        <button
          className="bg-indigo-500 text-gray-50 px-2 py-1 rounded hover:bg-indigo-600"
          type="submit"
        >
          Edit
        </button>
      </div>
    </form>
  );
};

export default PostEdit;
