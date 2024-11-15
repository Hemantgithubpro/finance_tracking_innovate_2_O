"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ChartData {
  category: string;
  amount: number;
  color: string;
}

interface BarChart3DProps {
  data: ChartData[];
}

export function BarChart3D({ data }: BarChart3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const maxAmount = Math.max(...data.map((item) => item.amount));
  const spacing = 1.5;
  const startX = -(data.length * spacing) / 2;

  return (
    <group ref={groupRef}>
      {data.map((item, index) => {
        const height = (item.amount / maxAmount) * 4;
        const position: [number, number, number] = [
          startX + index * spacing,
          height / 2,
          0,
        ];

        return (
          <mesh key={index} position={position}>
            <boxGeometry args={[0.8, height, 0.8]} />
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