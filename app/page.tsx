"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App"

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // default: true
		},
	},
});

export default function Home() {
	return (
		// Provide the client to application.
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);
}
