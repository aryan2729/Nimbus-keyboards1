import * as THREE from "three";
import { Float, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Keycap: THREE.Mesh;
  };
  materials: Record<string, unknown>;
};


type keycapProps = {         // types define first 
    position? : [number , number , number ],
    rotation? : [number , number , number ],
    texture? : 0| 1 | 2 | 3 | 4 |5 | 6 | 7 | 8 
}

export function Keycap({
    position = [0,0,0] ,        // pass defualt 
    rotation = [Math.random() * Math.PI ,Math.random() * Math.PI ,Math.random() * Math.PI ],     // random rotation for each keycap
    texture = 0

} : keycapProps) {

  const { nodes } = useGLTF("/keycap.gltf") as unknown as GLTFResult;

    const textures = [
        "/keycap-uv-1.png",
        "/keycap-uv-2.png",
        "/keycap-uv-3.png",
        "/keycap-uv-4.png",
        "/keycap-uv-5.png",
        "/keycap-uv-6.png",
        "/keycap-uv-7.png",
        "/keycap-uv-8.png",
        "/keycap-uv-9.png",
    ];

    


  const placeholderMat = new THREE.MeshStandardMaterial({
    color: "#cccccc",
    roughness: 0.2,
  });


  return (

    //  Float in drei thing which float the objects  | now passing postion and rotation  
    <Float rotationIntensity={3}  > 
    <group dispose={null} position={position} rotation={rotation}>   
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keycap.geometry}
        material={placeholderMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
    </group>
     </Float>
  );
}
