import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "All fields are mandatory" };
    }
    try {
      const res = await fetch("api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to create product");
      }

      const data = await res.json();
      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: "Product Create Successfully" };
    } catch (error) {
      console.error("Error creating product:", error);
      return { success: false, message: error.message };
    }
  },
  fetchProducts: async () => {
    const res = await fetch("api/products");
    const data = await res.json();
    set({ products: data.data });
  },

  deleteProduct: async (id) => {
    const res = await fetch(`api/products/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }

    set((state) => ({
      products: state.products.filter((item) => item._id !== id),
    }));

    return { success: true, message: "Product Deleted Successfully" };
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }

    set((state) => ({
      products: (state) =>
        state.products.map((product) => product._id === pid)
          ? data.data
          : product,
    }));

    return { success: true, message: "Product Updated Successfully" };
  },
}));
