"use client";
import React, { useId } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { signup } from "@/actions/auth-actions";
import { redirect } from "next/navigation";

const formSchema = z
  .object({
    full_name: z.string().min(3, {
      message: "Votre nom doit contenir au mois 3 characters",
    }),
    email: z.string().email({
      message: "Addrress email invalide",
    }),
    password: z
      .string({
        required_error: "Le mot de passe est requit pour continuer",
      })
      .min(8, {
        message: "Le mot de passe doit contenir au moins 8 characters",
      }),
    confirmPassword: z.string({
      required_error: "Confirmer Le mot de passe est requit pour continuer",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mot de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

const RegistetForm = ({ className }: { className?: string }) => {
  const [loading, setLoading] = React.useState(false);
  const toastId = useId();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Creation en cours...", { id: toastId });
    setLoading(true);
    const formData = new FormData();
    formData.append("full_name", values.full_name);
    formData.append("email", values.email);
    formData.append("password", values.password);

    const { success, error } = await signup(formData);
    if (!success) {
      toast.error(String(error), { id: toastId });
      setLoading(false);
    } else {
      toast.success(
        "Compte créé avec succès, un email a été envoyer veiller confirmer",
        { id: toastId }
      );
      setLoading(false);
      redirect("/login");
    }
  }

  return (
    <div className={cn("grid gap-6", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom Complet</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe..." type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmer le Mot de passe</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
            S'inscrire
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegistetForm;
