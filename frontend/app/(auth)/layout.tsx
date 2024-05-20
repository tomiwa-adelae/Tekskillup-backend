"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { toast } = useToast();
	const { userInfo } = useSelector((state: any) => state.auth);

	if (userInfo === null) return redirect("/login");
	return <div>{children}</div>;
}
