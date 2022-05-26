import { adminRequest, userRequest } from "../Components/requestMethod/RequestMethod"
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"


export const login=async(dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res=await userRequest.post("user/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure(err))
    }
}

export const getProducts=async(dispatch,user)=>{
    dispatch(getProductStart())
    try{
        const res=await adminRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    }catch(err){
        dispatch(getProductFailure(err))
    }
}

export const deleteProduct=async(id,dispatch)=>{
    dispatch(deleteProductStart())
    try{
        // const res=await adminRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    }catch(err){
        dispatch(deleteProductFailure(err))
    }
}

export const updateProduct=async(id,product,dispatch)=>{
    dispatch(updateProductStart())
    try{
        // const res=await adminRequest.post(`products/${id}`)
        dispatch(updateProductSuccess({id,product}))
    }catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct=async(product,dispatch)=>{
    dispatch(addProductStart())
    try{
        const res=await adminRequest.post("/products/add", product)
        dispatch(addProductSuccess(res.data))
    }catch(err){
        dispatch(addProductFailure(err))
    }
}