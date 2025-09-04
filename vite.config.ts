import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' now represents the 'src' directory
      // Add more aliases as needed, e.g., '@components': path.resolve(__dirname, './src/components')
    },
  },
  // It will be a our domain
  base: "/keyboard_tapuri/",
});
