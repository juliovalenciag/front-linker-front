"use client";

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
import Navbar from "@/components/global/navbar";


const Shelters = () => {


    return (
        <main className="flex items-center justify-center flex-col">
            <Navbar/>
        </main>
    )
}

export default Shelters;
