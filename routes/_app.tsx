import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <style>{`a::before{content: ''}pre::before{content:'$ '}`}</style>
      </Head>
      <Component />
    </>
  );
}
