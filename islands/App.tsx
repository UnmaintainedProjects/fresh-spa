import { IS_BROWSER } from "$fresh/runtime.ts";
import { Link, Route, Router, Switch, useLocation } from "wouter-preact";
import staticLocationHook from "wouter-preact/static-location";
import _404 from "../components/404.tsx";

const navLinks = {
  "/": "Home",
  "/this": "Check This",
  "/dedication": "Dedication",
  "/something-strange": "There is 404, too!",
};

export default function App(
  { url, base }: { url: string; base?: string },
) {
  let location = new URL(url).pathname;

  if (IS_BROWSER) {
    location = useLocation()[0];
  }

  return (
    <Router
      base={base}
      hook={IS_BROWSER ? undefined : staticLocationHook(location)}
    >
      <header class="w-full relative">
        <div className="absolute w-full bg-fresh opacity-25 h-full z-[-1]">
        </div>
        <ul class="main flex flex-wrap gap-5">
          {Object.entries(navLinks).map(([k, v]) => (
            <li key={k}>
              {(location.slice(base?.length ?? 0) || "/") == k
                ? <span class="font-bold select-none">{v}</span>
                : <Link class="link" href={k}>{v}</Link>}
            </li>
          ))}
        </ul>
      </header>
      <main class="main">
        <Switch>
          <Route path="/">
            Welcome home!
          </Route>
          <Route path="/this">
            <p class="pb-5">
              The routes are rendered on the server! If it’s hard to tell with
              your eyes, try this:
            </p>
            <pre class="bg-gray-100 rounded-xl p-5 whitespace-pre-wrap">
                curl -s {new URL("/", url).href} | sed "s/&lt;/\n/g" | grep Welcome
            </pre>
          </Route>
          <Route path="/dedication">
            This is dedicated to{" "}
            <a
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/denoland/fresh/issues/846"
            >
              Its Rationality denoland/fresh#846
            </a>.
          </Route>
          <Route>
            <_404 />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
