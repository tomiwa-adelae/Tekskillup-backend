"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { userInfo } = useSelector((state: any) => state.auth);

	if (!userInfo.isAdmin) return redirect("/login");
	return <div>{children}</div>;
}
