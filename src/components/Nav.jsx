import React from 'react'
import { AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const Nav = () => {

  return (
    <nav className="w-11/12 xl:w-4/5 m-auto flex justify-between py-5">
      <h1 className="text-2xl font-semibold text-rose-400 cursor-pointer">Ecom</h1>
      <div>
        <ul className="flex space-x-8 text-base hidden md:flex">
          <li className="cursor-pointer hover:text-red-400">Home</li>
          <li className="cursor-pointer hover:text-red-400">Products</li>
          <li className="cursor-pointer hover:text-red-400">Services</li>
          <li className="cursor-pointer hover:text-red-400">About</li>
        </ul>
      </div>
      <div className="flex space-x-8">
        <AiOutlineSearch size={"1.5rem"} className="cursor-pointer hover:fill-green-500" />
        <AiFillHeart size={"1.5rem"} className="cursor-pointer hover:fill-red-500" />
        <AiOutlineShoppingCart size={"1.5rem"} className="cursor-pointer hover:fill-blue-500" />
      </div>
    </nav>
  )
}

export default Nav