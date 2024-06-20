import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import pic from '../assets/ab.jpg'
export default function AddUser() {
    let navigation=useNavigate()
  let [productBrand,setproductBrand]=useState('')
  let [productType,setproductType]=useState('')
  let [productPrice,setproductPrice]=useState('')
  let [productRating,setproductRating]=useState('')
  let [productImage,setproductImage]=useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    let data=new FormData()
    data.append("productBrand",productBrand)
    data.append("productType",productType)
    data.append("productPrice",productPrice)
    data.append("productRating",productRating)
    data.append("productImage",productImage)
    await axios.post('http://localhost:5000/api/saveData',data,{
        headers:{
            'Content-Type':"multipart/form-data"
        }
    })
    navigation('/')
  
   }
   
  return (
    <section className='bg-orange-800'>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-md object-cover object-top"
            src={pic}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative">
          <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
            <h3 className="text-4xl font-bold text-white">
              Now you dont have to rely on your designer to create a new page
            </h3>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <li className="flex items-center space-x-3">
                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-medium text-white"> Commercial License </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-medium text-white"> Unlimited Exports </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-medium text-white"> 120+ Coded Blocks </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-medium text-white"> Design Files Included </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Add Product</h2>
        
          <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium  text-white">
                  {' '}
                  productBrand{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder: text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="productBrand"
                    id="name"
                    onChange={(e)=>setproductBrand(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-white">
                  {' '}
                  productType{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder: text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="productType"
                    id="email"
                    onChange={(e)=>setproductType(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-white">
                    {' '}
                    productPrice{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder: text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="productPrice"
                    id="password"
                    onChange={(e)=>setproductPrice(e.target.value)}

                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-white">
                    {' '}
                    productRating{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder: text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="productRating"
                    id="password"
                    onChange={(e)=>setproductRating(e.target.value)}

                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-white">
                    {' '}
                    Product Images{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder: text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    placeholder="product Images"
                    id="password"
                    onChange={(e)=>setproductImage(e.target.files[0])}
                    accept='/*image'

                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-black hover:text-white"
                >
                 Submit<ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  </section>
  )
}
