import * as MaterialIcons from "react-icons/md"

export function CreateNoteButton() {
    return(
        <div className="justify-center items-center flex w-48 absolute h-9 top-10 rounded-lg space-x-1 bg-gradient-to-b from-[#0256e8] to-blue-400 border-t border-t-slate-400 shadow-md text-lg select-none cursor-pointer">
            <MaterialIcons.MdOutlineAddCircle className="text-[27px] text-white"/>
            <p className="text-white">Create new note</p>
        </div>
    )
}