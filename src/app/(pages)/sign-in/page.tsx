"use client"
import React from 'react';
import {useState} from "react";
import {Home, Eye, EyeOff, Apple} from 'lucide-react';
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {useRouter} from "next/navigation";
const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('https://foodlinker-921f63db6b7b.herokuapp.com/token', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                console.log('Login successful', data);
                router.push('/dashboard');
            } else {
                console.error('Login failed', data);
                alert(data.message || 'Invalid username or password');
            }
        } catch (error) {
            console.error('Network error', error);
            alert('Network error');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <Card className="w-[350px]">
                <CardHeader>
                    <Link href="/">
                        <aside className="flex items-center gap-[2px]">
                            <p className="text-3xl font-bold">Fo</p>
                            <Apple className="text-primary"/>
                            <p className="text-3xl font-bold">dLinker</p>
                        </aside>
                        <div className="absolute top-0 left-0 p-4">
                            <Link href="/"><Home/></Link>
                        </div>
                    </Link>
                    <br/>
                    <Separator/>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Welcome back.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" placeholder="example@email.com" value={formData.email} onChange={handleChange}/>
                            </div>
                            <div className="flex flex-col space-y-1.5 relative">
                                <Label htmlFor="password">Password</Label>
                                <Input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                                <span className="absolute inset-y-8 right-0 flex items-center pr-3">
                                    <button type="button" onClick={togglePasswordVisibility}
                                            className="text-gray-500 hover:text-gray-700">
                                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                    </button>
                                </span>
                            </div>
                        </div>
                        <Button type="submit" className="w-full mt-4"><Link href="/dashboard">Sign-in</Link></Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <div>
                        <Link href="/signup">
                            <p className="text-xs text-gray-500">Don´t have an account?</p>
                        </Link>
                        <Button variant="outline">
                            <Link href='/sign-up'>Sign Up</Link>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginPage;
