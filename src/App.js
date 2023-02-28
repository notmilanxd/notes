import './index.css';
import { useState, useRef, useEffect } from 'react';
import Home from './components/Home';
import * as MaterialIcons from "react-icons/md"
import AccPopUp from './components/accountPopUpBox';

function App() {
  const [sideBar, setSideBar] = useState(true)
  const [arrowRotate, setArrowRotate] = useState("rotate-180")
  function DarkIcon() {
    return <MaterialIcons.MdOutlineDarkMode title='Dark mode' className='dark:text-white text-[25px] text-[#697789] select-none hover:text-[#373c46] duration-500'/>
  }
  function LightIcon() {
    return <MaterialIcons.MdOutlineLightMode title='Light mode' className='text-[25px] dark:text-[#a6a6a7] select-none hover:dark:text-white duration-500' />
  }
  
  const [modeSwitcher, setModeSwitcher] = useState(DarkIcon)
  const [isAccountPopUp, setAccountPopUp] = useState(false)

  const myRef = useRef(null);

  useEffect(() => {
    const element = myRef.current;
    const handleMousedown = (e) => {
      // do something with e
      if (isAccountPopUp === true) {
        setAccountPopUp(false)
      }
    };
    element.addEventListener("mousedown", handleMousedown);
    return () => {
      element.removeEventListener("mousedown", handleMousedown);
    };
  }, [isAccountPopUp]);

  

  return (
    <div className="App">
        <div ref={myRef}>
        {/* SIDEBAR */}
        <div className={`${sideBar ? "w-52" : "w-10 justify-center"} fixed h-full bg-slate-100 dark:bg-[#181818] transition-all duration-300 flex flex-wrap`}>
          {sideBar ? 
          <>
          {/* FLOATING MENU */}
          <div className='absolute border-2 dark:border-[#363636] h-12 w-[92%] items-center bottom-2 bg-[#ffffff] dark:bg-[#202020] rounded-lg left-[4%] justify-center flex'>
            {/* ABOUT ICON */}
            <MaterialIcons.MdInfoOutline title='About' className='text-[#697789] dark:text-[#a6a6a7] text-[25px] absolute left-2 select-none cursor-pointer hover:dark:text-white duration-500 hover:text-[#373c46]'/>
            {/* ACCOUNT ICON */}
            <MaterialIcons.MdOutlineAccountCircle onClick={() =>{
              setAccountPopUp(true)}
            } title='Account' className='text-[#697789] dark:text-[#a6a6a7] text-[25px] absolute right-2 select-none cursor-pointer hover:dark:text-white duration-500 hover:text-[#373c46]'/>
            {/* LIGHT/DARK MODE SWITCHER */}
            <div onClick={() => {if (document.documentElement.classList.contains("dark")){
                  document.documentElement.classList.remove('dark')
                  setModeSwitcher(<DarkIcon/>)
                  console.log("alles gut")
                } else {
                  document.documentElement.classList.add('dark')
                  setModeSwitcher(<LightIcon/>)
                }}} className="cursor-pointer">
              {modeSwitcher}
            </div>
          </div>
          </>
          
          : null}                
                {sideBar ? <div onClick={()=>{console.log("hello hello Im not where I supposed to be")}} className='top-2 bg-gradient-to-b from-[#0256e8] to-blue-500 absolute flex cursor-pointer items-center rounded-l-lg rounded-r-lg border-t border-1.5 border-t-slate-400 h-6 w-28 mx-2 justify-center flex-wrap space-x-1 select-none'>
                  <MaterialIcons.MdSearch className='text-white' />
                  <p className='text-white text-[13px] font-thin select-none'>Search</p>
                  <p className="text-gray-200 text-[11px]">Ctrl+K</p>
                </div> 
                : null}
                <div onClick={
                  () => {
                    if (sideBar === true){
                        setSideBar(false);
                        setArrowRotate("rotate-0")
                    } else {
                        setSideBar(true);
                        setArrowRotate("rotate-180")
                    }
                }
                } title={sideBar ? null : "Expand"} className={`h-6 ${sideBar ? "w-[4.5rem] right-2" : "w-6 justify-center"} bg-gradient-to-b from-[#024fd5] to-blue-500 absolute flex cursor-pointer items-center rounded-l-lg rounded-r-lg top-2 transition-all duration-300 border-t border-1.5 border-t-slate-400`}>
                  <MaterialIcons.MdArrowForward className={`text-[15px] ${arrowRotate} transition-transform duration-300 text-white absolute ${sideBar ? "left-2" : null}`} />
                  {sideBar ? <p className='text-white text-[13px] right-2 absolute font-thin select-none'>Close</p> : null}
                </div>
          </div>
        <div className={`${sideBar ? "left-52" : "left-10"} w-full fixed transition-all duration-300`}>
          <Home/>
        </div>
        </div>
        {sideBar && isAccountPopUp ? <div id='accButton' className={`bottom-52 fixed left-24`}>
            <AccPopUp name="Account name" />   
        </div> : null}
    </div>
  );
    }


export default App;
