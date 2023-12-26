import axios from "axios";
import { useQuery } from "react-query";

export const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products`

const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const useProducts = () => {
    return useQuery('products', getProducts)
}

const productService = {
    useProducts,
}
export default productService;