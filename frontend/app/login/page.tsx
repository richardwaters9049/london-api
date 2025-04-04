"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await signIn("credentials", {
            username,
            password,
            callbackUrl: "/dashboard"
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen px-4">
            <div className="w-full max-w-sm space-y-4">
                <h1 className="text-2xl font-bold text-center">Admin Login</h1>
                <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleLogin} className="w-full">Login</Button>
            </div>
        </div>
    );
}
