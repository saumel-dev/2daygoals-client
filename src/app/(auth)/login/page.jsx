"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const noop = () => { };

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })
        if (data) {
            toast.success("Login Successful", {
                actionProps: {
                    children: "",
                    className: "bg-success text-success-foreground",
                    onPress: noop,
                },
                description: "",
            })
            redirect('/');
        }

        if (error) {
            alert(error.message);
        }
    }
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackUrl: "/",
        });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center max-w-full rounded-xl p-10 border-none bg-white space-y-3">
                <div className="space-y-2 flex flex-col text-center">
                    <div>
                        <h1 className="text-[#262626] font-semibold text-3xl">Welcome Back</h1>
                    </div>
                    <div>
                        <p>Its great to see you</p>
                        <p>Login your account below</p>
                    </div>
                </div>
                <Form className="flex w-80 flex-col gap-3" onSubmit={onSubmit}>
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
                        <Input className="bg-[#EBEBEB]/40" placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
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
                        <Input className="bg-[#EBEBEB]/40" placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2 justify-center">
                        <Button type="submit" className="w-70 bg-black">
                            <Check />
                            Login
                        </Button>
                    </div>
                    <p className="text-center text-sm">or</p>
                    <div className="flex gap-2 justify-center">
                        <Button onClick={handleGoogleLogin} className="w-70 bg-[#F1FFE8] text-black">
                            <FcGoogle></FcGoogle>
                            Continue with Gmail
                        </Button>
                    </div>
                    <p className="text-sm text-center">Dont have an account? <Link href="/register" className="text-[#328100]">Sign up</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;