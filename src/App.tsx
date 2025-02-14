import React, { useRef, useState } from 'react';
import './App.css'
import { AnimatedText } from './components/autotext'


function App() {
  const text: string= 'Happy  Valentines day baby I know am bit late for this only 2 days left. But you know how much i love you and will always do. You are the best thing ever happened to me, I cant stay away from you even for a second it makes me really miserable i want to spend and live my every dream with you only. So remember whatever happens we fight or we dont talk to each other i love you endlessly forever.';
  const[text1, setText1] = useState(true);
  const[text2, setText2] = useState(false);
  const[text3, setText3] = useState(false);
  const[text4, setText4] = useState(false);
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [yesButton, setYesButton] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if(audioRef.current){
      audioRef.current.play();
    }
  };

  return <div className='bg-red-300 h-screen w-full'>
    <audio ref={audioRef} loop>
      <source src="/audio.mp3" type='audio/mp3'/>
    </audio>
    <div className='relative w-full h-[10%] bg-white text-black text-5xl font-md font-stretch-extra-expanded items-center flex justify-center text-red-500 shadow-lg'>
      Valentine's Day
      <span className='text-base absolute bottom-0 right-0 px-6'>-from kunal</span>
    </div>

    <div className='bg-linear-to-b from-pink-300 to-red-500 text-center text-white font-semibold text-md h-[50%] w-full font-mono p-5 '>
      <AnimatedText text={text}/>
      <hr/>
    </div>

    <div className=' w-full bg-red-500 h-[50%] text-center flex-col flex gap-3'>
      <div className={`${yesButton ? 'hidden' : ''}`}>
        <div className='font-sans text-white text-5xl'> So....</div>
        <div className='text-white text-5xl'>Will you be my<br/> Valentine?</div>
        <div className='relative flex justify-center font-sans text-white gap-2'>
          <button className='border px-4 p-1 focus:bg-white focus:text-red-600 font-semibold transition-all'
          onClick={() => {setYesButton(true), playAudio();}}>Yes</button>
          <button className={`border px-4 p-1 focus:bg-white focus:text-red-600 font-semibold transition-all ${button1 === true ? 'hidden' : 'block'}`} 
          onClick={() => {setButton1(true), setText1(false), setText2(true)}}>No</button>
          <button className={`absolute bottom-0 left-0 border px-4 p-1 focus:bg-white focus:text-red-600 font-semibold transition-all  ${button1 === true ? 'block' : 'hidden'} ${button2 === true ? 'hidden' : 'block'}`}
          onClick={() => {setButton2(true), setText2(false), setText3(true)}}>No</button>
          <button className={`absolute bottom-0 right-0 border px-4 p-1 focus:bg-white focus:text-red-600 font-semibold transition-all  ${button2 === true ? 'block' : 'hidden'} ${button3 === true ? 'hidden' : 'block'}`}
          onClick={() => {setButton3(true), setText3(false), setText4(true)}}>No</button>
          <button className={`border px-4 p-1 focus:bg-white focus:text-red-600 font-semibold transition-all  ${button3 === true ? 'block' : 'hidden'}`}
          onClick={() => {setYesButton(true), playAudio();}}>absolutely yes</button>
        </div>
        <div className='font-sans text-white'>Note: {text1 && "Please dont say no 😭"} {text2 && "think again carefully"} {text3 && "Really ?? Please 🥺"} {text4 && "Fine go ahead 😔"} </div>
      </div>
      {yesButton && <div className='flex flex-col justify-center items-center h-1/2'>
        <img src='/gianbortion-cat.gif' className='h-full '/>
        <div className='font-sans text-white text-xl'>Mere Balkan ki maa tane i love you 😘</div>
        </div>}
    </div>
  </div>
}

export default App
