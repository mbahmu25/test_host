'use client';
import Image from "next/image";
import {useState,useRef,useEffect} from "react";
export default function Home() {
  const [dat,setDat] = useState([])
  useEffect(()=>{
    async function call(){
      const res = await fetch('http://localhost:3001/api/tes',{
      headers:{
        'accept': 'application/json',
          'content-type': 'application/json',
    }
  })
  const data = await res.json()
  setDat(data)
  }
  call()
  },[])
  return (
    <>
      <div className="w-[100px] h-[100px] bg-[red]">
        {dat.id}
      </div>
    </>
  );
}
