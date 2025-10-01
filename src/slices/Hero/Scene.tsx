"use client"

import { Keyboard } from "@/components/Keyboard";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";



export function Scene(){

    const { positionX , positionY , positionZ , rotationX , rotationY , rotationZ } =    // it's kinda hard for giving position manually so we use (Leva) in which have useControls thing which shows on frontend screen wehre you can select the positions and rotation etc and then hardcoded that coordinates etc  just like we did below in keyboard component
    useControls({
        positionX : 0 ,         // defualt values x,y,z
        positionY : -.5 , 
        positionZ : 3,
        rotationX : Math.PI / 2,    // Math.PI means pie in radian 180 deg = 1 Pi
        rotationY : 0,
        rotationZ : 0
    });



    return ( // here we can't use div etc cuz we're using here ( React Three Fiber )

        <group>             {/* use groups here */}

            <PerspectiveCamera  makeDefault position={[0,0,4]} fov={50} />          {/* like camera thing for perspective*/}
            <Keyboard scale={9}
                    position={[ 0.2 , -0.5 , 1.8]}   // hardcoded this after write {positonX, Y , z} here and taken positon form site and then hardcoded here correct values 
                    rotation={[1.6 , 0.4 , 0]}   

             />

            <Environment files={"/hdr/blue-studio.hdr"}
                        environmentIntensity={0.05}
             />


            <spotLight position={[-2,1.5,3]}
                       intensity={30}
                       castShadow 
                       shadow-bias={-0.0002}
                       shadow-normalbias={0.002}
                       shadow-mapSize={1024}

            />
        </group>

    )
}