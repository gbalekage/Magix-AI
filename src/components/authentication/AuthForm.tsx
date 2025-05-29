"use client";

import React, { useState } from "react";
import Login from "./Login";
import { Button } from "../ui/button";
import RegistetForm from "./RegistetForm";
import Link from "next/link";
import ResetForm from "./ResetForm";

const AuthForm = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === "reset"
            ? "Réinitialiser le mot de passe"
            : mode === "register"
            ? "S'inscrire"
            : "Se connecter"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {mode === "reset"
            ? "Entrez votre adresse e-mail pour réinitialiser votre mot de passe."
            : mode === "register"
            ? "Créez un compte pour commencer."
            : "Connectez-vous à votre compte."}
        </p>
      </div>
      {mode === "reset" && (
        <>
          <ResetForm />
          <div className="text-center">
            <Button
              className="p-0"
              onClick={() => setMode("login")}
              variant="link"
            >
              Se connecter
            </Button>
          </div>
        </>
      )}
      {mode === "register" && (
        <>
          <RegistetForm />
          <div className="text-center">
            <Button
              className="p-0"
              onClick={() => setMode("login")}
              variant="link"
            >
              Vons deja un compte? Se connecter
            </Button>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking sign up, you agree to our{" "}
            <Link
              href={"#"}
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of services
            </Link>{" "}
            and{" "}
            <Link
              href={"#"}
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy.
            </Link>
          </p>
        </>
      )}
      {mode === "login" && (
        <>
          <Login />
          <div className="text-center">
            <Button
              className="p-0"
              onClick={() => setMode("register")}
              variant="link"
            >
              Vons n'avez pas de compte? Creer en un
            </Button>
            <Button
              className="p-0"
              onClick={() => setMode("reset")}
              variant="link"
            >
              Mot de passe oublier!
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthForm;
