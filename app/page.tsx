"use client";
import Calendar from "./components/ui/Calendar/Calendar";
import Table from "./components/ui/Table/Table";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // default: true
			staleTime: 60000, // 1 minute refresh
		},
	},
});

export default function Home() {
	return (
		// Provide the client to application.
			<QueryClientProvider client={queryClient}>
				<Table />
			</QueryClientProvider>
	);
}
