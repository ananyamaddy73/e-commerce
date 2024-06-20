import axios from 'axios'
// import { Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Table() {

    let [data,setData]=useState([])

    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        let result=await axios.get('http://localhost:5000/api/getData')
        setData(result.data)
    }
    async function deleteData(productId){
      let result= confirm("Are you sure want to delete this product")
      if(result==true){
        await axios.delete(`http://localhost:5000/api/deleteData/${productId}`)
        getData()
        console.log(productId)
      }
        
    }
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 bg-black mt-10 rounded-md">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-3xl text-white">Products</h2>
            <p className="mt-1 text-sm text-gray-200">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
          <div className='ml-[420px]'>
            
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product..." required />
       
    </div>
</form>

          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
            Search
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-orange-300">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-black"
                      >
                        <span>Product Brand</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-bold text-black"
                      >
                  Product Type
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-black"
                      >
                    Product Rating
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-black"
                      >
                   Product Price
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-orange-200">
                    {data.map((data) => (
                      <tr >
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={`http://localhost:5000/${data.productImage}`}
                                alt="product image"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{data.productBrand}</div>
                              {/* <div className="text-sm text-gray-700">{data.email}</div> */}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{data.productType}</div>
                          {/* <div className="text-sm text-gray-700">{person.department}</div> */}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {data.productRating}⭐
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {data.productPrice}
                        </td>
                        {/* <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-700">
                            Edit
                          </a>
                        </td> */}
                        <td>
                        <Link 
                        to={`/updateproduct/${data.productId}`}
                        type="button" class="text-gray-900 font-medium rounded-lg text-[19px] px-5 py-2.5 me-2 mb-2 "><i class="ri-edit-line"></i></Link>
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg text-[19px]"
                        onClick={()=>deleteData(data.productId)}
                        ><i class="ri-delete-bin-6-line"></i></button>
                        <Link 
                        to={`/viewproduct/${data.productId}`}
                        type="button" class="text-gray-900  text-[19px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "><i class="ri-eye-line"></i></Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
