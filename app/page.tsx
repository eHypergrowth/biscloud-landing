
'use client';
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C1A2B] text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center space-x-3">
          <Image src="/logo-biscloud.png" alt="BisCloud Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">BisCloud.pro</h1>
        </div>
        <nav className="space-x-6 hidden md:block">
          <a href="#features" className="hover:underline">Características</a>
          <a href="#pricing" className="hover:underline">Precios</a>
          <a href="#academy" className="hover:underline">Academia</a>
          <a href="#start" className="ml-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Comenzar</a>
        </nav>
      </header>

      <section className="py-20 text-center px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">De la idea al despliegue. En minutos.</h2>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Infraestructura modular, segura y automatizable para lanzar y escalar negocios digitales reales. No necesitas DevOps, necesitas resultados.
        </p>
        <a href="#start" className="inline-block bg-[#00E676] text-black text-lg font-semibold px-6 py-3 rounded hover:bg-[#00c566]">Comienza ahora</a>
        <p className="text-sm text-white/50 mt-4">Prueba gratuita por 7 días. Sin tarjeta. Sin complicaciones.</p>
      </section>

      <section id="features" className="bg-[#0F2C45] px-6 md:px-20 py-16">
        <h3 className="text-3xl font-bold text-center mb-10">¿Qué es BisCloud.pro?</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <ul className="space-y-4 list-disc list-inside text-white/90">
              <li>Despliegue SaaS en minutos con plantillas preconfiguradas</li>
              <li>Seguridad avanzada con Keycloak e infraestructura modular</li>
              <li>DevOps sin dolor: Kafka, Quarkus, Kubernetes, PostgreSQL y más</li>
              <li>Automatización y agentes IA para escalar sin equipo técnico</li>
              <li>Integración con tu facturación, CRM, ventas y marketing</li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <p className="text-lg">BisCloud.pro es la infraestructura oficial del ecosistema BisLinGrowth.</p>
            <p className="mt-4">Aquí no alquilas servidores, aquí lanzas empresas listas para escalar.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 md:px-20 py-16">
        <h3 className="text-3xl font-bold text-center mb-10">Planes simples. Resultados reales.</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white text-black p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Starter Cloud</h4>
            <p className="mb-4">$15 USD/mes</p>
            <ul className="text-sm list-disc list-inside space-y-2">
              <li>1 plantilla BHM</li>
              <li>1 microservicio</li>
              <li>1 base de datos</li>
              <li>Backups incluidos</li>
            </ul>
          </div>
          <div className="bg-[#00E676] text-black p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Startup Cloud</h4>
            <p className="mb-4">$49 USD/mes</p>
            <ul className="text-sm list-disc list-inside space-y-2">
              <li>Panel DevOps</li>
              <li>5 microservicios</li>
              <li>IA integrada</li>
              <li>Seguridad avanzada</li>
            </ul>
          </div>
          <div className="bg-white text-black p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Enterprise Cloud</h4>
            <p className="mb-4">$99 USD/mes</p>
            <ul className="text-sm list-disc list-inside space-y-2">
              <li>Cluster Kubernetes privado</li>
              <li>Monitoreo</li>
              <li>Soporte 24/7</li>
              <li>Infraestructura escalable</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center text-white/60 py-10 border-t border-white/10 text-sm">
        BisCloud.pro – La nube que lanza empresas. En alianza con BisLinGrowth y TheQuarkusProject.
      </footer>
    </main>
  );
}
