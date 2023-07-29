import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "shared",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `shared.${format}.js`,
    },
  },
  plugins: [
    dts({
        outDir: ['dist'],
        entryRoot: 'src',
        // include: ['src/index.ts']
    }),
  ],
});
