import React from "react";

function Score() {
  return (
    <>
      <div className="flex flex-col gap-8 p-10 h-screen">
        <div className="flex gap-4 items-center justify-between">
          <div className=" flex items-center gap-8">
            <div className="text-[30px] font-black">ENEM Master</div>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center h-[100%]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px] font-normal">Sua pontuação:</p>
            <p className="text-[30px] font-black">{100}</p>
          </div>
          <button
            className="bg-enem-75f9a2 hover:opacity-70 text-black font-bold py-2 px-4 rounded w-[400px]"
            // onClick={handleClose}
          >
            Continuar
          </button>
        </div>
      </div>
    </>
  );
}

export default Score;
