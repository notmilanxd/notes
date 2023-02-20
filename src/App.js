import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Topics from './components/Topics';
import * as MaterialIcons from "react-icons/md"
import * as HeroIcons from "react-icons/hi2"
import * as FAIcons from "react-icons/fa"

function App(props) {
  const [sideBar, setSideBar] = useState(true)
  const [arrowRotate, setArrowRotate] = useState("rotate-0")
  return (
    
    <div className="App">
        <div className={`${sideBar ? "w-52" : "w-10 justify-center"} fixed h-full bg-slate-100 transition-all duration-300 flex`}>
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
                } title={sideBar ? null : "Expand"} className={`h-6 ${sideBar ? "w-[4.5rem] right-2" : "w-6 justify-center"} bg-gradient-to-b from-[#104eba] to-blue-500 absolute flex cursor-pointer items-center rounded-l-lg rounded-r-lg top-2 transition-all duration-300 border-t border-1.5 border-t-slate-300`}>
                  <HeroIcons.HiArrowRight className={`text-[15px] ${arrowRotate} transition-transform duration-300 text-white absolute ${sideBar ? "left-2" : null}`} />
                  {sideBar ? <p className='text-white text-[13px] right-2 absolute font-thin select-none'>Close</p> : null}
                </div>
          </div>
        <div className={`${sideBar ? "left-52" : "left-10"} w-full fixed transition-all duration-300`}>
          <Home/>
        </div>
    </div>
  );
}

export default App;
