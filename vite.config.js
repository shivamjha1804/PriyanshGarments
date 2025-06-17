import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  base: "/", // Must be a string starting and ending with a slash
  assetsInclude: ["**/*.JPG"],
};
