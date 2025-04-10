import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    dts(),
    tailwindcss(),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: 'src/index.ts', // Punto de entrada de tu librería
      name: 'MyLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `my-library.${format}.js`
    },
    rollupOptions: {
      // Excluir dependencias externas para evitar duplicados en los microfrontends
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        'react/jsx-runtime',
        'primereact'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'primereact': 'PrimeReact'
        }
      }
    }
  }
});