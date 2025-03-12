import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      insertTypesEntry: true, // Esto inserta una entrada de types en package.json automáticamente
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: "src/index.ts", // Punto de entrada de tu librería
      name: "MyLibrary",
      fileName: (format) => `my-library.${format}.js`,
    },
    rollupOptions: {
      // Excluir dependencias externas para evitar duplicados en los microfrontends
      external: ["react", "react-dom", "primereact"],
    },
  },
});
