import axios from 'axios';

const BASEURL='https://fakestoreapi.com'

export const getallproducts =async ()=>{
      
    const response =await axios.get(`${BASEURL}/products`)

    return response.data;
}

export const getproductid =async (id)=>{
      
    const response =await axios.get(`${BASEURL}/products/${id}`)

    return response.data;
}

export const getaproductsimage =async (id)=>{
      
    const response =await axios.get(`${BASEURL}/products/${id}image`)

    return response.data;
}