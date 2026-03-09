import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />

      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default FocusInput;