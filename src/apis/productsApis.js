import { axiosInstance } from "./axiosInstance";

export const getAllProducts = async ({ skip = 0, limit = 16 } = {}) => {
  try {
    const response = await axiosInstance.get(
      `/products?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
export const getSingleProduct = async ({ id }) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
export const getProductsByCategory = async ({ category }) => {
  try {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
