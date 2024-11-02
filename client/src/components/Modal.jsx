import React, { useState } from "react";
import { useProductStore } from "../store/product";

const Modal = ({ open, openClickHandler, data }) => {
  const { _id } = data;
  const [update, setUpdate] = useState(data);
  const { updateProduct } = useProductStore();

  const updateProductHandler = async (e) => {
    await updateProduct(_id, update);
        e.preventDefault();

    openClickHandler(false);
  };

  return (
    <>
      {open && (
        <div
          id="authentication-modal"
          aria-hidden={!open}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Update Product
                </h3>
                <button
                  type="button"
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                  onClick={openClickHandler}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={update.name}
                      onChange={(e) =>
                        setUpdate({ ...update, name: e.target.value })
                      }
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Enter product name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={update.price}
                      onChange={(e) =>
                        setUpdate({ ...update, price: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Enter product price"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="imageurl"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Image URL
                    </label>
                    <input
                      type="url"
                      name="imageurl"
                      id="imageurl"
                      value={update.image}
                      onChange={(e) =>
                        setUpdate({ ...update, image: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Enter image URL"
                      required
                    />
                  </div>
                  <button
                    onClick={updateProductHandler}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
