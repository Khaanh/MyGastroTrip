import PageNav from "./PageNav";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
	return (
		<div>
			<PageNav />
			<Outlet />
		</div>
	);
}
