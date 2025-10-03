import { Keyboard } from "@/components/Keyboard"
import { Stage } from "@react-three/drei"


type SceneProps = {
    selectedTextureId : string , 
    onAnimationComplete : () => void 
}

export function Scene ( {
    selectedTextureId , 
    onAnimationComplete
} : SceneProps){


    

    return (
        
        <Stage environment={"city"} intensity={0.05} shadows={"contact"}>
            <group>
                <Keyboard />
            </group>
        </Stage>

    )
}