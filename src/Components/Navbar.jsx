import React, { useEffect, useState } from 'react'
import { CircleCheckBig } from 'lucide-react'

const Navbar = () => {
    const [title, setTitle] = useState(''); 
    // async function marqueeing(text){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             setTitle(text)
    //             resolve();
    //         },1000)
    //     })
    // }
    // useEffect(()=>{
    //     async function animateTitle(){
    //         await marqueeing("To")
    //         await marqueeing("Do")
    //         await marqueeing("List")
    //     }
    //     animateTitle();
    // },[]);                //This will loop the text over To,Do,List  only once

    const words=['To','Do','List']
    const delay=(ms)=> new Promise((res)=>setTimeout(res,ms));
    
    useEffect(()=>{
        let isMounted=true;
        async function animatetitle() {
            while(isMounted){
                for(const word1 of words){
                    setTitle(word1)
                    await delay(1000)
                }
            }
            
        }
        animatetitle();
        return ()=>{
            isMounted=false;
        }
    },[])

  return (
    <nav>
        <div className="flex flex-col sm:flex-row justify-center items-center bg-slate-100 py-1">
            <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-black mt-4 sm:mt-8" >
                <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-800 mt-2">
                    <CircleCheckBig className="h-10 w-10 sm:h-14 sm:w-14 font-extrabold text-white" />
                </div>
                <span className='font-bold mx-6  text-[2rem] sm:text-[3rem] bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text'>{title}</span>
            </div>
            {/* <div className="flex justify-center items-center">
                <ul className="flex gap-8 mx-9  text-black">
                    <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                    <li className='cursor-pointer hover:font-bold transition-all'> Your Tasks </li>
                </ul> 
             </div>*/}
           
        </div>
    </nav>
  )
}

export default Navbar
