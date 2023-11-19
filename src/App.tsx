import React from "react";

function App() {
  return (
    <div className="absolute h-full w-full bg-black p-4 flex flex-row gap-8">
      <div className="w-[512px]">
        <div className="rounded-[32px] bg-black p-8 border-2 border-[#30302B]">
          <p className="font-light text-4xl">Alan Sherba</p>
          <div className="h-4" />
          <p className="font-light text-base">Programmer</p>
          <p className="font-light text-base">
            UX, Feel, Action, Game Designer
          </p>
          <p className="font-light text-base">Unity Engineer</p>
          <p className="font-light text-base">VFX Artist</p>
        </div>
      </div>

      <div className="h-full w-[2px] bg-[#30302B4D]" />

      <div className="w-[512px] pt-8">
        <p className="font-light text-4xl">Alan Sherba</p>
        <div className="h-4" />
        <p className="font-light text-base">Programmer</p>
        <p className="font-light text-base">UX, Feel, Action, Game Designer</p>
        <p className="font-light text-base">Unity Engineer</p>
        <p className="font-light text-base">VFX Artist</p>
      </div>

      <div className="h-full w-[2px] bg-[#30302B4D]" />

      <div className="grow grid place-items-end">
        <div className="text-right">
          <p className="font-ligh right-0 text-4xl">Contact</p>
          <p className="font-light text-base">alansherba@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
