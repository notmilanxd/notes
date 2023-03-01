import { useHotkeys } from "react-hotkeys-hook";

export function SideBarOpenShortcut () {
    useHotkeys("ctrl+shift", () => {}, {preventDefault:true})
}