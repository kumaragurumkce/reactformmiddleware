import React,{useEffect, useState} from 'react'

export default function ThemeToggle() {
 
    const [darkMode,setDarkMode]=useState(()=>{
        return localStorage.getItem("theme") === 'dark'
    });
    useEffect(()=>{
        if (darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }
        else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')

        }
    },[darkMode])

    return (
   <button className='bg-gray-700 text-white px-4 p-2 rounded-md hover:bg-gray-900' 
   onClick={()=> setDarkMode(!darkMode)}> {darkMode ? 'Light Mode' : 'Dark Mode'} </button> 
  )
}
