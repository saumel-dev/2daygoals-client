"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { LuEye, LuEyeClosed, LuUpload } from "react-icons/lu";
import { FaKey } from "react-icons/fa";
import Image from "next/image";

const noop = () => { };

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    // Uploads the selected file to our own API route, which forwards it to
    // Cloudinary using the server-side secret. Returns the hosted image URL.
    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || "Image upload failed");
        }

        return data.url;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            const user = Object.fromEntries(formData.entries());

            let imageUrl = undefined;
            const imageFile = formData.get("image");

            if (imageFile instanceof File && imageFile.size > 0) {
                imageUrl = await uploadImageToCloudinary(imageFile);
            }

            const { data, error } = await authClient.signUp.email({
                name: user.name,
                email: user.email,
                password: user.password,
                image: imageUrl,
            });

            if (data) {
                toast.success("Account Created", {
                    actionProps: {
                        children: "",
                        className: "bg-success text-success-foreground",
                        onPress: noop,
                    },
                    description: "",
                });
                router.push('/')
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
        } catch (err) {
            toast.danger(err.message || "Something went wrong", {
                actionProps: {
                    children: "",
                    className: "bg-error text-error-foreground",
                    onPress: noop,
                },
                description: "",
            });
        } finally {
            setIsSubmitting(false);
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
                    <Image
                        src="/assets/login_logo.svg"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="mx-auto mb-2"
                    />
                    <h1 className="text-[#262626] font-semibold text-3xl">Create Account</h1>
                    <p className="text-gray-600 text-sm">Lets get you started</p>
                    <p className="text-gray-600 text-sm">Fill in your details to register</p>
                </div>

                <Form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (!value || value.trim().length < 2) {
                                return "Please enter your full name";
                            }
                            return null;
                        }}
                    >
                        <Label>Full Name</Label>
                        <div className="relative flex items-center w-full">
                            <HiOutlineUser className="absolute left-3 text-xl text-gray-500 z-10 pointer-events-none" />
                            <Input
                                className="bg-white pl-10 pr-3 w-full py-3"
                                placeholder="John Doe"
                            />
                        </div>
                        <FieldError />
                    </TextField>

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

                    <div className="flex flex-col gap-1 w-full">
                        <Label>Profile Picture (optional)</Label>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-[#F1FFE8] flex items-center justify-center overflow-hidden shrink-0 border border-gray-200">
                                {avatarPreview ? (
                                    <img src={avatarPreview} alt="Avatar preview" className="w-full h-full object-cover" />
                                ) : (
                                    <HiOutlineUser className="text-2xl text-gray-400" />
                                )}
                            </div>
                            <label
                                htmlFor="image"
                                className="flex items-center gap-2 cursor-pointer bg-white border border-gray-200 text-gray-600 text-sm px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <LuUpload className="text-base" />
                                Upload Photo
                            </label>
                            <input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleAvatarChange}
                            />
                        </div>
                    </div>

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

                    <Button
                        type="submit"
                        isDisabled={isSubmitting}
                        className="w-full bg-black text-white py-4 rounded-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
                    >
                        {isSubmitting ? "Creating Account..." : "Continue with Email"}
                    </Button>

                    <div className="flex flex-col gap-1 items-center text-sm mt-0.75">
                        <p>
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#328100] font-medium">
                                Login
                            </Link>
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-70 border-t border-gray-100"></div>
                    </div>

                    <Button onClick={handleGoogleLogin} type="button" className="w-80 mx-auto bg-[#F1FFE8] text-black py-4 rounded-lg flex items-center justify-center gap-2">
                        <FcGoogle className="text-xl" />
                        Continue with Gmail
                    </Button>
                    <p className="text-[10px] text-center xl:mt-21.75">By signing up, you agree the <span className="text-[#328100] font-medium cursor-pointer"><Link href="/terms-of-service">Terms of Service</Link></span> and <span className="text-[#328100] font-medium cursor-pointer"><Link href="/terms-of-service">Privacy Policy</Link></span></p>
                </Form>
            </div>
        </motion.div>
    );
};

export default RegisterPage;