import { Handler, PageProps } from "$fresh/server.ts";
import App from "../../islands/App.tsx";
import { removeBase } from "../../utils.ts";

export const handler: Handler = (req, ctx) => ctx.render(req.url);

export default function _App({ data: url }: PageProps<string>) {
  return <App url={url} path={removeBase(url, "/app")} />;
}
