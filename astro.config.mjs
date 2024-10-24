// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	vite: {
		ssr: {
			external: [
				"url",
				"crypto",
				"http",
				"https",
				"fs",
				"http2",
				"events",
				"zlib",
				"node:stream",
				"node:util",
				"os",
				"path",
				"node:events",
				"util",
				"stream",
				"buffer",
			],
		},
	},
	output: "server",
	adapter: cloudflare(),
});
