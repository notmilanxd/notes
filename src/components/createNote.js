export function NoteElement(props) {
    return(
        <div className="bg-[#f9f9f9] w-48 mx-2 dark:bg-[#323232] cursor-pointer rounded-l-lg rounded-r-lg border-t border-1.5 dark:border-[#636363] border-[#d5d5d5] shadow-md dark:shadow-[#090909] select-none">
            <div className="w-40">
                <p className="mx-2 my-[0.10rem] dark:text-white overflow-hidden text-ellipsis whitespace-nowrap">{props.title}</p>
            </div>
            <p className="mx-2 dark:text-[#b4b4b4] text-sm overflow-hidden text-ellipsis whitespace-nowrap text-slate-600">{props.content}</p>
            <div className="h-[0.33rem]"></div>
        </div>
    )
}