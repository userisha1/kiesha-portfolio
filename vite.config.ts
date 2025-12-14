import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins: any[] = [react()];
  
  // Only include lovable-tagger in development mode
  if (mode === "development") {
    try {
      const { componentTagger } = await import("lovable-tagger");
      plugins.push(componentTagger());
    } catch {
      // Silently fail if lovable-tagger is not available (e.g., in CI/CD)
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.jpeg", "**/*.PNG", "**/*.png"],
  };
});
