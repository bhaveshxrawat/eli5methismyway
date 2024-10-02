"use client";
import AppNavBar from "./components/AppNavBar";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lightbulb, BookOpen, UserCircle } from "lucide-react";

export default function Home() {
    return (
        <div>
            <AppNavBar />
            <main>
                <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900">
                    <div className="text-center container px-4 md:px-6 h-full min-h-[calc(100svh-12.5rem)] py-12 md:py-24 lg:py-32 xl:py-48">
                        <div className="space-y-5">
                            <h1 className="text-4xl lg:font-extrabold tracking-tight leading-normal sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-white">
                                Learn Anything
                                <br />
                                Understand Everything
                            </h1>
                            <p className="mx-auto max-w-[45ch] text-gray-500 md:text-xl dark:text-gray-400 font-mono">
                                Your AI-powered learning companion that explains
                                complex topics in simple terms and tailors
                                content to your interests.
                            </p>
                            <Button onClick={() => signIn()}>
                                <Lightbulb className="mr-2 h-4 w-4" /> Try Now
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                    <Lightbulb className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    ELI5 Explanations
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Complex topics broken down into simple,
                                    easy-to-understand explanations, as if
                                    you&apos;re five years old.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                                    <UserCircle className="h-6 w-6 text-green-500 dark:text-green-400" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Interest Questionnaire
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Personalize your learning experience by
                                    telling us about your interests and goals.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                                    <BookOpen className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Interest Based Content
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Discover curated learning materials and
                                    explanations tailored to your specific
                                    interests.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                                        Powered by Generative AI
                                    </h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Our learning companion uses
                                        Gemini&apos;s advanced language
                                        understanding to provide accurate,
                                        engaging, and personalized explanations.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button onClick={() => signIn()}>
                                        Try It Now
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-[300px] h-[300px] bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 rounded-lg shadow-lg overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                                        AI
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                                    Start Your Learning Journey Today
                                </h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Join thousands of learners who are expanding
                                    their knowledge with ELI5 Me.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input
                                        className="max-w-lg flex-1 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                    <Button type="submit">Sign Up</Button>
                                </form>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    By signing up, you agree to our{" "}
                                    <Link
                                        className="underline underline-offset-2"
                                        href="#"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; 2024 ELI5 Me. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
                        href="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
                        href="#"
                    >
                        Privacy Policy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}