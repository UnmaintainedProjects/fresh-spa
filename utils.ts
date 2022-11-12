export function removeBase(url: string | URL, base = "/") {
  let pathname: string;
  if (typeof url === "string") {
    pathname = url;
    try {
      pathname = new URL(url).pathname;
    } catch (_err) {
      //
    }
  } else {
    pathname = url.pathname;
  }
  const path = pathname.slice(base.length);
  return path == "" ? "/" : path;
}
