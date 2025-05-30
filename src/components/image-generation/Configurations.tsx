"use client"

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
    model: z.string({
        required_error: "Le modèle est requis",
    }),
    prompt: z.string({
        required_error: "Le prompt est requis",
    }),
    guidance: z.number({
        required_error: "Le guidance est requis",
    }),
    num_outputs: z.number().min(1, { message: "Le nombre de sorties doit être au moins 1" }).max(4, { message: "Le nombre de sorties ne peut pas dépasser 10" }),
    aspect_ratio: z.string({
        required_error: "Le ratio d'aspect est requis",
    }),
    output_format: z.string({
        required_error: "Le format de sortie est requis",
    }),
    output_quality: z.number().min(1, { message: "La qualité de sortie doit être au moins 1" }).max(100, { message: "La qualité de sortie ne peut pas dépasser 100" }),
    num_inference_steps: z.number().min(1, { message: "Le nombre d'étapes d'inférence doit être au moins 1" }).max(50, { message: "Le nombre d'étapes d'inférence ne peut pas dépasser 50" }),

})

const Configurations = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            model: "black-forest-labs/flux-dev",
            prompt: "",
            guidance: 3.5,
            num_outputs: 1,
            output_format: "jpg",
            aspect_ratio: "1:1",
            output_quality: 80,
            num_inference_steps: 28,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 sm:p-6 md:p-8 max-w-2xl mx-auto w-full">
                <fieldset className='grid gap-6 p-4 bg-background rounded-lg border'>
                    <legend className='text-sm -ml-1 px-1 font-medium'>
                        Parametres
                    </legend>
                    <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Model</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full" >
                                            <SelectValue placeholder="Selectionner un model" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="black-forest-labs/flux-dev">Flux Dev</SelectItem>
                                        <SelectItem value="black-forest-labs/flux-shnell">Flux Shnell</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <FormField
                            control={form.control}
                            name="aspect_ratio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Aspect Ratio</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selectionner un aspect ratio" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="1:1">1:1</SelectItem>
                                            <SelectItem value="16:9">16:9</SelectItem>
                                            <SelectItem value="9:16">9:16</SelectItem>
                                            <SelectItem value="21:9">21:9</SelectItem>
                                            <SelectItem value="9:21">9:21</SelectItem>
                                            <SelectItem value="4:5">4:5</SelectItem>
                                            <SelectItem value="5:4">5:4</SelectItem>
                                            <SelectItem value="4:3">4:3</SelectItem>
                                            <SelectItem value="3:4">3:4</SelectItem>
                                            <SelectItem value="2:3">2:3</SelectItem>
                                            <SelectItem value="3:1">3:1</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="num_outputs"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre de Sortie</FormLabel>
                                    <FormControl>
                                        <Input placeholder="nombres de sortie" type='number' min={1} max={4} {...field}
                                            onChange={(e) => field.onChange(+e.target.value)}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="guidance"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1'>
                                    <div>
                                        Guidance
                                    </div>
                                    <small className="text-xs text-muted-foreground">{field.value}</small>
                                </FormLabel>
                                <FormControl>
                                    <Slider defaultValue={[field.value]} min={0} max={10} step={0.5}
                                        onValueChange={value => field.onChange(value[0])}
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="num_inference_steps"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1'>
                                    <div>
                                        Le nombre d'étapes d'inférence
                                    </div>
                                    <small className="text-xs text-muted-foreground">{field.value}</small>
                                </FormLabel>
                                <FormControl>
                                    <Slider defaultValue={[field.value]} min={1} max={50} step={1}
                                        onValueChange={value => field.onChange(value[0])}
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="output_quality"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1'>
                                    <div>
                                        La qualité de sortie
                                    </div>
                                    <small className="text-xs text-muted-foreground">{field.value}</small>
                                </FormLabel>
                                <FormControl>
                                    <Slider defaultValue={[field.value]} min={50} max={100} step={1}
                                        onValueChange={value => field.onChange(value[0])}
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="output_format"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Le format de sortie</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selectionner un format de sortie" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="webp">WebP</SelectItem>
                                        <SelectItem value="png">PNG</SelectItem>
                                        <SelectItem value="jpg">JPG</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="prompt"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Prompt</FormLabel>
                                <FormControl>
                                    <Textarea {...field} rows={6} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full sm:w-auto">Generer</Button>
                </fieldset>
            </form>
        </Form>
    )
}

export default Configurations