"use client"
import { useRef, useState } from "react"
import { useFrame, Canvas } from "@react-three/fiber"
import Header from "@/components/shadcn/header"
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/shadcn/ui/resizable"
function Box(props) {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef()
	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (ref.current.rotation.x += delta))
	// Return the view, these are regular Threejs elements expressed in JSX
	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1}
			onClick={(event: Event) => click(!clicked)}
			onPointerOver={(event: Event) => hover(true)}
			onPointerOut={(event: Event) => hover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	)
}

export default function Page() {
	return (
		<>
			<Header />
			<main className="h-full w-full">
				<ResizablePanelGroup direction="horizontal">
					<ResizablePanel>
						<Canvas>
							<ambientLight intensity={Math.PI / 2} />
							<spotLight
								position={[10, 10, 10]}
								angle={0.15}
								penumbra={1}
								decay={0}
								intensity={Math.PI}
							/>
							<pointLight
								position={[-10, -10, -10]}
								decay={0}
								intensity={Math.PI}
							/>
							<Box position={[-1.2, 0, 0]} />
							<Box position={[1.2, 0, 0]} />
						</Canvas>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel>Two</ResizablePanel>
				</ResizablePanelGroup>
			</main>
		</>
	)
}
