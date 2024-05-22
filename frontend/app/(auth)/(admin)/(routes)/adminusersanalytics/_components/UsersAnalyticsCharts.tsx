"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const UserAnalyticsCharts = ({ users }: any) => {
	// Extract dates and count occurrences
	const dateCounts = users.reduce((acc: any, user: any) => {
		const date = new Date(user.createdAt).toISOString().split("T")[0]; // Extract date part
		acc[date] = (acc[date] || 0) + 1; // Count occurrences
		return acc;
	}, {});

	// Prepare data for Recharts
	const chartData = Object.keys(dateCounts).map((date) => ({
		date,
		Number: dateCounts[date],
	}));

	return (
		<ResponsiveContainer width="100%" height={400}>
			<BarChart
				data={chartData}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="date"
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="Number" fill="#104F19" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default UserAnalyticsCharts;
