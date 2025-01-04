import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(req) {
    try {
        await connectMongoDB();
        const users = await User.find();
        return Response.json(users);
    } catch (error) {
        return Response.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}
