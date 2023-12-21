import React from "react";
import { trpc } from "~/client/trpc";

const Home = () => {
    const utils = trpc.useUtils();
    const [email, setEmail] = React.useState("");

    const { data } = trpc.users.list.useQuery({});
    const createUser = trpc.users.create.useMutation({
        onSuccess: ({ user }) => {
            utils.users.list.invalidate();
            console.log(user?.[0].email);
        },
    });

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ol>
                {data.users.map((user) => (
                    <li key={user.email}>{user.email}</li>
                ))}
            </ol>
            <input
                className="text-black"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <button onClick={async () => {}}>Create User!</button>
        </div>
    );
};

export default Home;
