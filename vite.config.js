import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Se o repositório tiver outro nome, troque o valor de "base" abaixo
// para "/nome-do-repositorio/" (com as barras no início e no fim).
export default defineConfig({
  plugins: [react()],
  base: "/nutri-gisellemoretti/",
});
