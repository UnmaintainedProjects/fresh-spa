import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: { fresh: "#FFDB1E" },
    },
  },
  plugins: {
    main: "p-4 mx-auto max-w-screen-md",
    link:
      "relative font-bold before:z-[-1] before:absolute before:bottom-0 before:duration-200 before:w-full before:h-1/5 before:bg-fresh hover:before:h-full",
  },
} as Options;
