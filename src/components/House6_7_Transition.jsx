import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, ScrollControls, useScroll } from "@react-three/drei";
import House6_Routine from "./houses/House6_Routine";
import House7_Partnerships from "./houses/House7_Partnerships";
import * as THREE from "three";

const Scene = () => {
    const scroll = useScroll();
    const { camera } = useThree();

    useFrame(() => {
        // Calculate scroll progress (0 to 1)
        const r1 = scroll.range(0, 1);

        // Interpolate camera position
        // Start: [0, 0, 10] (Looking at House 6)
        // End: [15, 0, -5] (Looking at House 7)
        camera.position.x = THREE.MathUtils.lerp(0, 15, r1);
        camera.position.z = THREE.MathUtils.lerp(10, -5, r1);

        // Interpolate camera rotation
        // Start: 0 (Looking forward)
        // End: -Math.PI / 2 (Looking right)
        camera.rotation.y = THREE.MathUtils.lerp(0, -Math.PI / 2, r1);
    });

    return (
        <>
            {/* House 6 - Front Wall */}
            <group position={[0, 0, 0]}>
                <Html
                    transform
                    occlude="blending"
                    position={[0, 0, 0]}
                    style={{
                        width: "100vw",
                        height: "100vh",
                    }}
                >
                    <div className="w-full h-full bg-background overflow-hidden">
                        <House6_Routine />
                    </div>
                </Html>
            </group>

            {/* House 7 - Right Wall */}
            <group position={[15, 0, -15]} rotation={[0, -Math.PI / 2, 0]}>
                <Html
                    transform
                    occlude="blending"
                    position={[0, 0, 0]}
                    style={{
                        width: "100vw",
                        height: "100vh",
                    }}
                >
                    <div className="w-full h-full bg-background overflow-hidden">
                        <House7_Partnerships />
                    </div>
                </Html>
            </group>
        </>
    );
};

export default function House6_7_Transition() {
    return (
        <div className="w-full h-screen relative">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ScrollControls pages={2} damping={0.2}>
                    <Scene />
                </ScrollControls>
            </Canvas>
        </div>
    );
}
