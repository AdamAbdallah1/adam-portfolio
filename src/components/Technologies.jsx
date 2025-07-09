import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaLinux } from "react-icons/fa";

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-5xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-5xl text-orange-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJs className='text-5xl text-yellow-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostman className='text-5xl text-orange-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-5xl text-sky-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-5xl text-yellow-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPhp className='text-5xl text-indigo-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='text-5xl text-orange-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <VscVscode className='text-5xl text-sky-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaLinux className='text-5xl text-yellow-500'/>
            </div>
            
        </div>
    </div>
  )
}

export default Technologies