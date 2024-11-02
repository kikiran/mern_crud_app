import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useProductStore } from "../store/product";
import Toast from "../components/Toast";

const CreateProduct = () => {
  const { createProduct } = useProductStore();
  const [toastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { success, message } = await createProduct(data);
    if (success) {
      setToastVisible(!toastVisible);
      setMessage(message);
    } else {
      setToastVisible(false);
    }
  };

  const onClose = () => {
    setToastVisible(false);
  };

  return (
    <div className="bg-slate-300 max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      {toastVisible ? <Toast message={message} onClose={onClose} /> : null}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`mt-1 block w-full border rounded-md p-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            {...register("price", { required: "Price is required" })}
            className={`mt-1 block w-full border rounded-md p-2 ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            {...register("image", { required: "Image URL is required" })}
            className={`mt-1 block w-full border rounded-md p-2 ${
              errors.image ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
