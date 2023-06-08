import React from "react"
import correctImage from "../../assets/correct-image.svg"
import Lamp from "../../assets/lamp.svg"
import VideoBox from "../VideoBox"

function QuestionCorrectModal(props: any) {
	const handleClose = () => {
		props.onClose()
	}

	return (
		<>
			<div
				className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
				style={{ zIndex: 999 }}
			>
				<div className="bg-white p-10 rounded-[30px] w-[70%] h-[50%] shadow-lg">
					<div className="flex p-6  w-full h-[80%]">
						<div className="flex flex-col justify-center text-center w-full font-bold tex-lg items-center text-[16px]">
							<p>Parabéns!!</p>
							<p>Você acertou, continue evoluindo!</p>
							<img
								src={correctImage}
								alt="Imagem de questão certa"
								className="w-[200px] p-2"
							/>
						</div>
					</div>
					<div className="flex justify-center mt-4">
						<button
							className="bg-enem-75f9a2 hover:opacity-70 text-black font-bold py-2 px-4 rounded w-[400px]"
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

export default QuestionCorrectModal
