import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { tmpdir } from "node:os";

export default defineConfig({
  plugins: [react()],
  cacheDir: resolve(tmpdir(), "05-notehub-vite-cache"),
});
