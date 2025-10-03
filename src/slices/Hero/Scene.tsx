"use client"

import { Keyboard } from "@/components/Keyboard";
import { Keycap } from "@/components/Keycap";
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
    
    const scalingFactor = window.innerWidth <= 500 ? .5 : 1;


    return ( // here we can't use div etc cuz we're using here ( React Three Fiber )

        <group>             {/* use groups here same like div */}

            <PerspectiveCamera  makeDefault position={[0,0,4]} fov={50} />          like camera thing for perspective

            
            {/* made another group cuz we wanted this site 3d thing also looks aligned and full in mobile also so we added scaling thing in this parent group of keyboard and all floatig keycaps */}
            <group scale={scalingFactor} >            
            <Keyboard 
                scale={9}
                position={[ 0.2 , -0.5 , 1.8]}   // hardcoded this after write {positonX, Y , z} here and taken positon form site and then hardcoded here correct values 
                rotation={[1.6 , 0.4 , 0]}   

             />
            

            //keycaps  again group | rotations given in keycap.tsx cuz we don't wanna want to wrie again again 
            <group > 
                <Keycap position={[0.0, -0.4, 2.6]}rotation={[0,2,3]} texture={0} />
                <Keycap position={[0,1,1]}         rotation={[0,4,2]} texture={7}/>
                <Keycap position={[-1.4, 0, 2.3]}  rotation={[3,2,1]} texture={1}/>
                <Keycap position={[0.7,0.9,1.4]}   rotation={[3,2,0]} texture={4}/>
                <Keycap position={[-1.8, 0.5, 1.5]}  rotation={[0,1,3]} texture={2}/>
                <Keycap position={[1.3,-0.3,2.3]}  rotation={[1,2,0]} texture={6}/>
                <Keycap position={[-0.1,0.9,2.6]}    rotation={[1,4,0]} texture={3}/>
                <Keycap position={[0,1,2]}         rotation={[2,2,3]} texture={5}/>
                <Keycap position={[-0.77,0.1,2.8]} rotation={[3,2,3]} texture={2}/>
                <Keycap position={[2,0,1]}         rotation={[0,0,3]} texture={1}/>
            </group>
            </group>

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