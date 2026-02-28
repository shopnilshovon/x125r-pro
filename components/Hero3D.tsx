"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero3D() {

  useEffect(() => {
    const canvas = document.getElementById("bg") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: any[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1
      });
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = "#00ff9d";
        ctx!.fill();
        p.x += p.dx;
        p.y += p.dy;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center relative">
      <canvas id="bg" className="absolute inset-0 -z-10" />
      
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-8xl font-bold text-green-400 drop-shadow-[0_0_40px_#00ff9d]"
      >
        X125R
      </motion.h1>

      <p className="mt-6 text-gray-400 text-lg">
        Hero Xtreme 125R — Speed Meets Meme Finance
      </p>
    </section>
  );
}
