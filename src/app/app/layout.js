"use client";

import UserDataContextProvider from "@/context/UserDataContext";
import { useState } from "react";

export default function AppLayout({ children }) {
	return (
		<UserDataContextProvider value={{}}>{children}</UserDataContextProvider>
	);
}
