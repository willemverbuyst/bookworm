import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react(), viteTsconfigPaths()],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
  });
};
