"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart3D } from "@/components/charts/PieChart3D";
import { BarChart3D } from "@/components/charts/BarChart3D";
import { motion } from "framer-motion";

export default function Analytics() {
  const transactionData = {
    expenses: [
      { category: "Food", amount: 500, color: "#FF6B6B" },
      { category: "Transport", amount: 300, color: "#4ECDC4" },
      { category: "Entertainment", amount: 200, color: "#45B7D1" },
      { category: "Utilities", amount: 400, color: "#96CEB4" },
      { category: "Other", amount: 100, color: "#FFEEAD" },
    ],
    income: [
      { category: "Salary", amount: 5000, color: "#4CAF50" },
      { category: "Investments", amount: 1000, color: "#2196F3" },
      { category: "Freelance", amount: 800, color: "#9C27B0" },
      { category: "Other", amount: 200, color: "#FF9800" },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Financial Analytics</h1>

        <Tabs defaultValue="expenses" className="space-y-4">
          <TabsList>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
          </TabsList>

          <TabsContent value="expenses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h2 className="text-xl font-semibold mb-4">Expense Distribution</h2>
                <div className="h-[400px] w-full">
                  <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <PieChart3D data={transactionData.expenses} />
                      <OrbitControls enableZoom={false} />
                    </Suspense>
                  </Canvas>
                </div>
              </Card>

              <Card className="p-4">
                <h2 className="text-xl font-semibold mb-4">Expense Categories</h2>
                <div className="h-[400px] w-full">
                  <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <BarChart3D data={transactionData.expenses} />
                      <OrbitControls enableZoom={false} />
                    </Suspense>
                  </Canvas>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="income">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h2 className="text-xl font-semibold mb-4">Income Distribution</h2>
                <div className="h-[400px] w-full">
                  <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <PieChart3D data={transactionData.income} />
                      <OrbitControls enableZoom={false} />
                    </Suspense>
                  </Canvas>
                </div>
              </Card>

              <Card className="p-4">
                <h2 className="text-xl font-semibold mb-4">Income Categories</h2>
                <div className="h-[400px] w-full">
                  <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <BarChart3D data={transactionData.income} />
                      <OrbitControls enableZoom={false} />
                    </Suspense>
                  </Canvas>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}