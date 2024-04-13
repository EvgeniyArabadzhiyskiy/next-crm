'use client';

import gsap from 'gsap';
import { createPortal } from 'react-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';

const Modal = ({
  children,
  setIsOpen,
}: {
  children: React.ReactNode;
  setIsOpen: (value: boolean) => void;
}) => {
  const modalRoot: HTMLDivElement = document.querySelector('#modal-root')!;

  const tl = useRef<gsap.core.Timeline>(gsap.timeline());

  //   useLayoutEffect(() => {
  //     const ctx = gsap.context(() => {
  //       gsap.set(modalRef.current!, { opacity: 0 });
  //       tl.current.to(modalRef.current!, { opacity: 1, duration: 2 });
  //     });

  //     return () => ctx.revert();
  //   }, []);

  const { contextSafe } = useGSAP(() => {
    // gsap.timeline()
    // .set('#modal-element', { opacity: 0 })
    // .to('#modal-element', {opacity: 1, duration: 2 });

    tl.current
      .set('#modal-element', { opacity: 0 })
      .to('#modal-element', { opacity: 1, duration: 0.5 });
  });

  const animatedClouseModal = () => {
    tl.current.to('#modal-element', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setIsOpen(false);
      },
    });
  };

  const handleBackDropClick = contextSafe(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target;
      const currentTarget = e.currentTarget;

      if (target === currentTarget) {
        animatedClouseModal();
      }
    },
  );

  const handleClick = contextSafe(() => {
    animatedClouseModal();
  });

  const handleEscPress = contextSafe((e: KeyboardEvent) => {
    animatedClouseModal();
  });

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscPress);
      document.body.style.overflow = 'visible';
    };
  });

  return createPortal(
    <div
      id="modal-element"
      onClick={handleBackDropClick}
      className="w-screen h-screen bg-black bg-opacity-40 z-100 fixed inset-0 flex items-center justify-center"
    >
      <div className="w-[200px] h-[400px] bg-white">
        {children}
        <button className="text-2xl" onClick={handleClick}>
          Close Modal
        </button>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
