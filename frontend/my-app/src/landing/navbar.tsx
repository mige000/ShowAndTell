import STlogo from '../img/STlogo.png';
import React from 'react';

type Logout = () => void;

const Navbar = ({showJoin = true, showLogout = false, logout} : {showJoin ?: boolean, showLogout?: boolean, logout?: Logout}) => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='max-w-[1400px] ml-8 w-full h-full grid grid-cols-3 grid-rows-1 justify-items-between items-center'>
        <div className=''>
          <a className="flex" href='/'>
            <img src={STlogo} className="h-[65px] mt-1"/>
            <div className='flex text-3xl font-bold my-4'>
                <p className='ml-2 font-productsans font-bold'>Show & Tell</p>   
            </div>
          </a>
        </div>
        <div className="px-4 flex items-center justify-center">
          <ul className="flex gap-4 ml-12 font-productsans font-bold">
            <li><a href="/">
              {showJoin ?
                <div className='hover:brightness-90 duration-500 mx-1 my-1 rounded-[1rem] bg-satBlue text-white px-3 py-1 w-fit font-bold'>
                  <p>Join</p>
                </div>
              : <></>}
            </a></li>
            <li><a href="/feed">
              <div className='hover:brightness-90 duration-500 mx-1 my-1 rounded-[1rem] bg-satGreen text-white px-3 py-1 w-fit font-bold'>
                <p>Your Feed</p>
              </div>
            </a></li>
            <li><a href="./about">
              <div className='hover:brightness-90 duration-500 mx-1 my-1 rounded-[1rem] bg-satRed text-white px-3 py-1 w-fit font-bold'>
                <p>About</p>
              </div>
            </a></li>
          </ul>
        </div>

        <div className='flex justify-end ml-1'>
          { !showLogout ? <>
            <a className='hover:brightness-90 duration-500 px-6 gap-2 flex justify-between items-center rounded-md bg-transparent' href="/feed">
              Login
            </a>
            <a className='hover:brightness-90 duration-500 px-8 py-3 rounded-md bg-satGreen text-white font-bold' href="/feed">
              Sign Up
            </a>
          </> : <>
            <a className='hover:brightness-90 duration-500 px-8 py-3 rounded-md bg-satRed text-white font-bold' onClick={logout}>
              Logout
            </a>
          </>}
        </div>

      </div>
    </div>
  )
}

export default Navbar