import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {
    ArrowUpRight,
    CreditCard,
    Apple,
    Bean,
    Users
} from "lucide-react";
import * as React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";

function MainContent() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card x-chunk="dashboard-01-chunk-0">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Collected
                        </CardTitle>
                        <Apple className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">25,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            Tons from last month
                        </p>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Donators
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">350</div>
                        <p className="text-xs text-muted-foreground">
                            From last month
                        </p>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Beneficiaries</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">234</div>
                        <p className="text-xs text-muted-foreground">
                            From last month
                        </p>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-3">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Compost</CardTitle>
                        <Bean className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4,325</div>
                        <p className="text-xs text-muted-foreground">
                            Tons since last month
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card
                    className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
                >
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Donations</CardTitle>
                            <CardDescription>
                                Recent donations.
                            </CardDescription>
                        </div>
                        <Button asChild size="sm" className="ml-auto gap-1">
                            <Link href="#">
                                View All
                                <ArrowUpRight className="h-4 w-4"/>
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        Donators
                                    </TableHead>
                                    <TableHead className="hidden xl:table-column">
                                        Type
                                    </TableHead>
                                    <TableHead className="hidden xl:table-column">
                                        Status
                                    </TableHead>
                                    <TableHead className="hidden xl:table-column">
                                        Date
                                    </TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Walmart</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            &nbsp;&nbsp; North
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-23
                                    </TableCell>
                                    <TableCell className="text-right">250 tons</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Costco</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            &nbsp;&nbsp;  Arboledas
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Refund
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Declined
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-24
                                    </TableCell>
                                    <TableCell className="text-right">150 tons</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Chedraui</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            &nbsp;&nbsp;  Iztapalapa
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">

                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-25
                                    </TableCell>
                                    <TableCell className="text-right">350 tons</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Supply Center</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            &nbsp;&nbsp;  Iztapalapa
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-26
                                    </TableCell>
                                    <TableCell className="text-right">450 tons</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Soriana</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            &nbsp;&nbsp;  Viaducto
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-27
                                    </TableCell>
                                    <TableCell className="text-right">110 tons</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-5">
                    <CardHeader>
                        <CardTitle>Donations Received</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                <AvatarFallback>CS</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Comedor Samuel
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Repùblica de Venezuela 72 Edificio Mercado Pùblico
                                </p>
                            </div>
                            <div className="ml-auto font-medium">400 tons</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/02.png" alt="Avatar"/>
                                <AvatarFallback>CP</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Comedor Público Arenal 6
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Maxtla 11 B, 15640 Venustiano Carranza
                                </p>
                            </div>
                            <div className="ml-auto font-medium">39 tons</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/03.png" alt="Avatar"/>
                                <AvatarFallback>CG</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Comedor La Güera Local 36 Y 37
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Retorno 5 General Ignacio Zaragoza 240
                                </p>
                            </div>
                            <div className="ml-auto font-medium">50 tons</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/04.png" alt="Avatar"/>
                                <AvatarFallback>CT</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Comedor Popular Tichis
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Calle Puente Correo Mayor 15 Lote 12
                                </p>
                            </div>
                            <div className="ml-auto font-medium">99 tons</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/05.png" alt="Avatar"/>
                                <AvatarFallback>CV</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Comedor Comunitario 354 La Vikinga
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    15 94, 15000 Ciudad de México
                                </p>
                            </div>
                            <div className="ml-auto font-medium">40 tons</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

export default MainContent;
