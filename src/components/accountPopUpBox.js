import * as MaterialIcons from "react-icons/md"

function AccPopUp(props) {
    return(
        <div className="w-52 h-36 bg-white border-2 rounded-lg dark:border-[#363636] dark:bg-[#202020] flex absolute justify-center">
            <div className="h-14 border-b-2 dark:border-[#363636] w-[95%] flex flex-wrap absolute space-x-2 items-center">
                <MaterialIcons.MdAccountCircle className="text-[50px] text-gray-500" />
                <p className="dark:text-white">{props.name}</p>
            </div>
            <div className="top-[4.5rem] space-y-3 w-[90%] absolute cursor-pointer">
                <div className="flex-wrap space-x-1 flex select-none">
                    <MaterialIcons.MdOutlineVpnKey className="text-[#697789] dark:text-[#a6a6a7]"/>
                    <p className="text-[#697789] dark:text-[#a6a6a7] text-sm">Reset password</p>
                </div>
                <div className="flex-wrap space-x-1 flex cursor-pointer select-none">
                    <MaterialIcons.MdLogout className="text-[#697789] dark:text-[#a6a6a7]"/>
                    <p className="text-[#697789] dark:text-[#a6a6a7] text-sm">Log out</p>
                </div>
            </div>
        </div>
    )
}

export default AccPopUp;