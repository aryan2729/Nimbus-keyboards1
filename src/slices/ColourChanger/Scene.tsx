import { Keyboard } from "@/components/Keyboard"
import { Stage, useTexture } from "@react-three/drei"
import { KEYCAP_TEXTURES } from "."
import { useMemo } from "react"
import * as THREE from "three"
import { texture } from "three/src/nodes/TSL.js"



type SceneProps = {
    selectedTextureId : string , 
    onAnimationComplete : () => void 
}



export function Scene ( {
    selectedTextureId , 
    onAnimationComplete
} : SceneProps){

    const texturePaths = KEYCAP_TEXTURES.map((t)=> t.path);
    const textures = useTexture(texturePaths);

    const materials = useMemo(()=> {

        const materialMap : { [key : string] : THREE.MeshStandardMaterial } = {}

        KEYCAP_TEXTURES.forEach((textureConfig , index)=> {
            const texture = Array.isArray(textures) ? textures[index] : textures;

            if(texture){
                texture.flipY = false ;
                texture.colorSpace = THREE.SRGBColorSpace;

                materialMap[textureConfig.id] = new THREE.MeshStandardMaterial({
                    map : texture , 
                    roughness : 0.7
                })
            }
        })
        return materialMap;

    }, [textures]);


    const currentKnobColor = KEYCAP_TEXTURES.find((t)=> t.id === selectedTextureId)?.knobColor;



    return (
        
        <Stage environment={"city"} intensity={0.05} shadows={"contact"}>
            <group>
                <Keyboard keycapMaterial={materials[selectedTextureId]}  knobColor={currentKnobColor} />
            </group>
        </Stage>

    )
}