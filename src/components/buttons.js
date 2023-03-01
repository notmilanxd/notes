import { SearchIconFunction } from "./searchFunction"
import * as MaterialIcons from "react-icons/md"

export function SearchButtonLong() {
    return (
        <div onClick={() => SearchIconFunction()} className='top-2 bg-gradient-to-b from-[#0256e8] to-blue-500 absolute flex cursor-pointer items-center rounded-l-lg rounded-r-lg border-t border-1.5 border-t-slate-400 h-6 w-28 mx-2 justify-center flex-wrap space-x-1 select-none'>
            <MaterialIcons.MdSearch className='text-white' />
            <p className='text-white text-[13px] font-thin select-none'>Search</p>
            <p className="text-gray-200 text-[11px]">Ctrl+K</p>
        </div>

    )
}

export function SearchButtonShort() {
    return (
        <div onClick={() => SearchIconFunction()} className='bg-gradient-to-b from-[#0256e8] to-blue-500 flex cursor-pointer rounded-l-lg rounded-r-lg border-t border-1.5 border-t-slate-400 h-6 w-6 justify-center items-center select-none'>
            <MaterialIcons.MdSearch className='text-white' />
        </div>

    )
}

export function TestButton() {
    return (
        <div onClick={() => SearchIconFunction()} className='bg-gradient-to-b from-[#0256e8] to-blue-500 flex cursor-pointer rounded-l-lg rounded-r-lg border-t border-1.5 border-t-slate-400 h-6 w-6 justify-center items-center select-none'>
            <MaterialIcons.MdComment className='text-white' />
        </div>

    )
}