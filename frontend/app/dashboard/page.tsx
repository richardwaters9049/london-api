import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <div className="text-red-500">Access Denied</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Welcome, {session.user?.name}</h1>
            {/* Add Product list component here */}
        </div>
    );
}
