import React from "react";
import AuthImage from "@/public/Abstract Curves and Colors.jpeg";
import Image from "next/image";
import Logo from "@/components/Logo";
import AuthForm from "@/components/authentication/AuthForm";

const AuthtenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-2 relative">
      <div className="relative w-full flex flex-col bg-muted p-10 text-primary-foreground">
        <div className="w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10"></div>
        <div className="w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10"></div>
        <Image
          src={AuthImage}
          alt="login image"
          fill
          className="w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center">
          <Logo />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Magix AI est une plateforme innovante de génération
              d’images par intelligence artificielle, conçue pour les créateurs,
              professionnels du marketing, artistes et entrepreneurs.&rdquo;
            </p>
            <footer>Développé par Balekage Gael</footer>
          </blockquote>
        </div>
      </div>

      {/* login form */}

      <div className="relative flex flex-col items-center justify-center p-8 h-full w-full">
        <div className="max-w-xl w-[350px] mx-auto">
          <AuthForm />
        </div>
      </div>
    </main>
  );
};

export default AuthtenticationPage;
