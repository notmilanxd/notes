import { useHotkeys } from 'react-hotkeys-hook';


export function SearchIconFunction() {
    console.log("search clicked")
  }

export function SearchShortcut () {
    useHotkeys('ctrl+k', () => {SearchIconFunction()}, {preventDefault: true})
  }
