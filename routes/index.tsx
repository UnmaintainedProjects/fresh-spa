import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <main class="main">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh-spa`. Visit <a href="/app" class="link">`/app`</a>
          {" "}
          to try out the the SPA part of this website.
        </p>
        <Counter start={1512} />
      </main>
    </>
  );
}
