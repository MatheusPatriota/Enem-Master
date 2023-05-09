import React from 'react';

import Lamp from '../../assets/lamp.svg';
import VideoBox from '../VideoBox';

function VideoTutorialModal(props: any) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <>
      <div className="bg-transparent absolute inset-0 flex justify-center items-center">
        <div className="bg-white p-10 rounded-[30px] w-[70%] h-[50%] shadow-lg">
          <div className="flex p-6 pt-0">
            <div className="w-20 flex justify-center items-center">
              <img src={Lamp} alt="lampada" width={"45px"} />
            </div>
            <div className="flex flex-col justify-center text-center w-full font-bold tex-lg">
              <p>Não tem certeza?</p>
              <p>Assista um tutorial para responder</p>
            </div>
          </div>
          <div className="p-6 !pt-0">
            <p className="font-light text-lg mb-4">Videos de Solução:</p>
            <div className="flex gap-10 justify-around">
              <VideoBox />
              <VideoBox />
              <VideoBox />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-enem-75f9a2 hover:opacity-70 text-black font-bold py-2 px-4 rounded"
              onClick={handleClose}
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoTutorialModal;
