"use client"
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {NextPage} from 'next';
import {Apple, Eye, EyeOff, Home} from 'lucide-react';
import {Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter} from '@/components/ui/card';
import {Select, SelectTrigger, SelectContent, SelectItem, SelectValue} from '@/components/ui/select';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Separator} from "@/components/ui/separator";

const RegisterPage: NextPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: ''
    });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Cambio de currentTarget a target
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://foodlinker-921f63db6b7b.herokuapp.com/create-user/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          // Asegúrate de enviar solo los campos requeridos por tu API
        })
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful', data);
        router.push('/auth/login'); // Actualiza esto a tu ruta de login
      } else {
        console.error('Registration failed', data);
        alert(data.message || 'An unexpected error occurred');
      }
    } catch (error) {
      console.error('Network error', error);
      alert('Network error');
    }
  };

    return (
        <div className="flex min-h-screen items-center justify-center  px-4">

            <Card className="w-[350px]">
                <CardHeader>
                    <Link href="/">
                        <aside className="flex items-center gap-[2px]">
                            <p className="text-3xl font-bold">Fo</p>
                            <Apple className="text-primary"/>
                            <p className="text-3xl font-bold">dLinker</p>
                        </aside>
                        <div className="absolute top-0 left-0 p-4">
                            <Link href="/public"><Home/></Link>
                        </div>
                    </Link>
                    <Separator/>
                    <br/>

                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Get Started</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="name"/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="example@email.com"/>
                            </div>
                            <div className="flex flex-col space-y-1.5 relative">
                                <Label htmlFor="password">Password</Label>
                                <Input type={showPassword ? "text" : "password"} id="password" placeholder="Password"/>
                                <span className="absolute inset-y-8 right-0 flex items-center pr-3">
                                    <button type="button" onClick={togglePasswordVisibility}
                                            className="text-gray-500 hover:text-gray-700">
                                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                    </button>
                                </span>
                            </div>

                            <div className="flex flex-col space-y-1.5 relative">
                                <Label htmlFor="password">Confirm Password</Label>
                                <Input type={showPassword ? "text" : "password"} id="password"
                                       placeholder="Confirm Password"/>
                                <span className="absolute inset-y-8 right-0 flex items-center pr-3">
                                    <button type="button" onClick={togglePasswordVisibility}
                                            className="text-gray-500 hover:text-gray-700">
                                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                    </button>
                                </span>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Tipo</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select"/>
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div>
                        <Link href="/sign-in">
                            <p className="text-xs text-gray-500">Already have an account?</p>
                        </Link>
                        <Button variant="outline">
                            <Link href='/sign-in'>Sign In</Link>
                        </Button>
                    </div>
                    <Button className="group-hover:bg-amber-400" type="submit">
                        <Link href="/sign-in" className="text-white">Sign Up</Link>
                    </Button>
                </CardFooter>
            </Card>

        </div>
    );
};

export default RegisterPage;
