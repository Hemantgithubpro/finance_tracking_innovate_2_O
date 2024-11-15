"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ChartData {
  category: string;
  amount: number;
  color: string;
}

interface PieChart3DProps {
  data: ChartData[];
}

export function PieChart3D({ data }: PieChart3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  const total = data.reduce((sum, item) => sum + item.amount, 0);
  let startAngle = 0;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {data.map((item, index) => {
        const angle = (item.amount / total) * Math.PI * 2;
        const geometry = new THREE.CylinderGeometry(
          2, // radius top
          2, // radius bottom
          0.5, // height
          32, // segments
          1, // height segments
          false, // open ended
          startAngle,
          angle
        );

        const position = [
          Math.cos(startAngle + angle / 2) * 0.2,
          0,
          Math.sin(startAngle + angle / 2) * 0.2,
        ];

        startAngle += angle;

        return (
          <mesh
            key={index}
            geometry={geometry}
            position={position as [number, number, number]}
          >
            <meshStandardMaterial
              color={item.color}
              metalness={0.1}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}