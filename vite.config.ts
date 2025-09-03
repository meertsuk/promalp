import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import {imagetools} from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  base: "/promalp/",
  plugins: [react(), visualizer({open: true}), imagetools()],
})
