import React from 'react';

import errorImage from '../../assets/error-image.svg';
import Lamp from '../../assets/lamp.svg';
import VideoBox from '../VideoBox';

function QuestionErrorModal(props: any) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <>
      <div className="bg-transparent absolute inset-0 flex justify-center items-center">
        <div className="bg-white p-10 rounded-[30px] w-[70%] h-[50%] shadow-lg">
          <div className="flex p-6  w-full h-[30%]">
            <div className="w-20 flex justify-center items-center">
              <img src={Lamp} alt="lampada" width={"45px"} />
            </div>
            <div className="flex flex-col justify-center text-center w-full font-bold tex-lg items-center text-[12px]">
              <p>Você errou!</p>
              <p>não foi dessa vez, continue tentando!</p>
              <img
                src={errorImage}
                alt="Imagem de questão errada"
                className="w-[100px]"
              />
            </div>
          </div>
          <div className="p-6 !pt-0 w-full h-[60%]">
            <p className="font-light text-lg mb-4">Videos de Solução:</p>
            <div className="flex gap-10 justify-around">
              <VideoBox />
              <VideoBox />
              <VideoBox />
            </div>
          </div>
          <div className="flex justify-center mt-4 ">
            <button
              className="bg-enem-ffc266 hover:opacity-70 text-black font-bold py-2 px-4 rounded w-[400px]"
              onClick={handleClose}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionErrorModal;
