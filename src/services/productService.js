import { axiosInstance } from "../lib/axiosInstance";

export const getAllProducts = async ({
  page = 1,
  limit = 15,
  keyword = "",
} = {}) => {
  try {
    const response = await axiosInstance.get(
      `/products/search?limit=${limit}&skip=${(page - 1) * limit}&q=${keyword}`
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
export const getAllCategories = async () => {
  try {
    const response = await axiosInstance.get(`/products/categories`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
export const getProductsByCategory = async ({ category, page = 1 }) => {
  try {
    const response = await axiosInstance.get(
      `/products/category/${category}?limit=15&skip=${(page - 1) * 15}`
    );
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
