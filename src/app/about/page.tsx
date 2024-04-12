import TransitionLink from "../components/TransitionLink/TransitionLink";

export default function About() {
  return (
    <main className="bg-white text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">ABOUT PAGE</h1>
      <TransitionLink href="/" label="Home ->" />
    </main>
  );
}

// "use client";

// import { useRef } from "react";

// import gsap from "gsap"; // <-- import GSAP
// import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

// gsap.registerPlugin(useGSAP);

// export default function App() {
//   const container = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // gsap code here...
//     gsap.to("#box", {rotation: 180}); // <-- automatically reverted

//   }, { scope: container }) // <-- scope for selector text (optional)

//  return (
//    <div ref={container} className="app">
//      <div id="box"  className="flex w-96 h-96 bg-red-500 font-semibold text-3xl">Hello</div>
//    </div>
//  );
// }
