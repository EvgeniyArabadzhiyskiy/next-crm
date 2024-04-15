'use client';

import { useState } from 'react';
import TransitionLink from '../components/TransitionLink/TransitionLink';
import Modal from '../components/Modal/Modal';
import Link from 'next/link';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white text-black w-[900px] flex flex-col items-center justify-center gap-[50px] mx-auto"
      // className="bg-white text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]"
    >
      <h1 className="text-5xl">ABOUT PAGE</h1>
      <TransitionLink href="/" label="Home ->" />
      <Link href="/">Home</Link>

      <button className="text-2xl" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <div className="w-80 h-[300px] mx-auto bg-blue-600"></div>
      <div className="w-80 h-[300px] mx-auto bg-orange-600"></div>
      <div className="w-80 h-[300px] mx-auto bg-gray-600"></div>
      <div className="w-80 h-[300px] mx-auto bg-red-600"></div>

      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <h1 className="text-3xl">Modal Window</h1>
        </Modal>
      )}
    </div>
  );
}
