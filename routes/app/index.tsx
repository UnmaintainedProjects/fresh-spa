import { Handler, PageProps } from "$fresh/server.ts";
import App from "../../islands/App.tsx";

export const handler: Handler = (req, ctx) => ctx.render(req.url);

export default function _App({ data: url }: PageProps<string>) {
  return <App base="/app" url={url} />;
}
