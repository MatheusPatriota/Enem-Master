import React from "react"
import errorImage from "../../assets/error-image.svg"
import Lamp from "../../assets/lamp.svg"
import VideoBox from "../VideoBox"

function QuestionErrorModal(props: any) {
	const { videos } = props
	const handleClose = () => {
		props.onClose()
	}

	return (
		<>
			<div
				className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
				style={{ zIndex: 999 }}
			>
				<div className="bg-white p-6 rounded-[30px] w-[70%] h-[80%] 2xl:h-[60%] shadow-lg">
					<div className="flex w-full h-[30%]">
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
					<div className="p-6 !pt-0 w-full h-[60%] overflow-auto">
						<p className="font-light text-lg mb-4">Videos de Solução:</p>
						{videos.length === 0 ? (
							<p>Não há vídeos disponíveis para esta questão.</p>
						) : (
							<div className="flex flex-col 2xl:flex-row gap-10 justify-around ">
								{videos.map((video: any) => (
									<VideoBox
										key={video.videoId}
										title={video.title}
										videoLink={video.videoLink}
										thumbnail={video.thumbnail}
									/>
								))}
							</div>
						)}
					</div>
					<div className="flex justify-center mt-5">
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
	)
}

export default QuestionErrorModal
