import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import requireTransform from "vite-plugin-require-transform";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), requireTransform({})],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
