import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "main.js",
  output: [
    {
      file: "index.js",
      format: "esm",
    },
  ],
  plugins: [nodeResolve()],
};
