"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc"; // standard react-icons/fc
import { motion } from "motion/react";
import { HiOutlineMail } from "react-icons/hi";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FaKey } from "react-icons/fa";

const noop = () => { };

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        });
        if (data) {
            toast.success("Login Successful", {
                actionProps: {
                    children: "",
                    className: "bg-success text-success-foreground",
                    onPress: noop,
                },
                description: "",
            });
            redirect('/');
        }

        if (error) {
            toast.danger(error.message, {
                actionProps: {
                    children: "",
                    className: "bg-error text-error-foreground",
                    onPress: noop,
                },
                description: "",
            });
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackUrl: "/",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex justify-center items-center p-4">

            <div className="flex flex-col justify-center items-center w-full max-w-md rounded-2xl p-8 bg-white shadow-lg space-y-4">
                <div className="space-y-1 flex flex-col text-center">
                    <h1 className="text-[#262626] font-semibold text-3xl">Welcome Back</h1>
                    <p className="text-gray-600 text-sm">Its great to see you</p>
                    <p className="text-gray-600 text-sm">Login your account below</p>
                </div>

                <Form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <div className="relative flex items-center w-full">
                            <HiOutlineMail className="absolute left-3 text-xl text-gray-500 z-10 pointer-events-none" />
                            <Input
                                className="bg-white pl-10 pr-3 w-full py-3"
                                placeholder="john@example.com"
                            />
                        </div>
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type={isVisible ? "text" : "password"}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <div className="relative flex items-center w-full">
                            <FaKey className="absolute left-3 text-lg text-gray-500 z-10 pointer-events-none" />
                            <Input
                                className="bg-white pl-10 pr-3 w-full py-3"
                                placeholder="Enter your password"
                            />
                            <button
                                className="absolute right-3 focus:outline-none z-10"
                                type="button"
                                onClick={toggleVisibility}
                                aria-label="toggle password visibility"
                            >
                                {isVisible ? (
                                    <LuEye className="text-xl text-gray-500 hover:text-gray-700" />
                                ) : (
                                    <LuEyeClosed className="text-xl text-gray-500 hover:text-gray-700" />
                                )}
                            </button>
                        </div>
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <Button type="submit" className="w-full bg-black text-white py-4 rounded-lg flex items-center justify-center gap-2 mt-2">
                        Continue with Email
                    </Button>

                    <div className="flex flex-col gap-1 items-center text-sm mt-[3px]">
                        <p>
                            Dont have an account?{" "}
                            <Link href="/register" className="text-[#328100] font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-70 border-t border-gray-100"></div>
                    </div>
                    <Link href="/forgot-password" className="text-[#328100] font-medium text-sm mb-2 text-center">
                        Forgot Password?
                    </Link>

                    <Button onClick={handleGoogleLogin} type="button" className="w-80 mx-auto bg-[#F1FFE8] text-black py-4 rounded-lg flex items-center justify-center gap-2">
                        <FcGoogle className="text-xl" />
                        Continue with Gmail
                    </Button>
                    <p className="text-[10px] text-center xl:mt-[87px]">By signing in, you agree the <span className="text-[#328100] font-medium cursor-pointer">Terms of Service</span> and <span className="text-[#328100] font-medium cursor-pointer">Privacy Policy</span></p>
                </Form>
            </div>
        </motion.div>
    );
};

export default LoginPage;