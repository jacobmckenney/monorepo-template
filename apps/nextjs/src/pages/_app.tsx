import type { AppProps } from "next/app";
import { trpc } from "~/client/trpc";
import "~/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
