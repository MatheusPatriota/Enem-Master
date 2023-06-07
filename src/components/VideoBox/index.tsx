import React from "react"

function VideoBox(props: any) {
	const { title, videoLink, thumbnail } = props

	return (
		<div className="flex justify-center items-center flex-col">
			<div className="w-40 h-40 p-4 flex justify-center items-center bg-enem-d8d8de rounded-md">
				<a href={videoLink} target="_blank" rel="noopener noreferrer">
					<img
						src={thumbnail}
						alt={title}
						className="w-full h-full object-cover"
					/>
				</a>
			</div>
			<p className="text-center text-sm mt-1">{title}</p>
		</div>
	)
}

export default VideoBox
