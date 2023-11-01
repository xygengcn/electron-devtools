const typescript = require("rollup-plugin-typescript2");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = [
  {
    input: {
      "content-script": "./script/content-script/index.ts",
      preload: "./script/preload/index.ts",
      "service-worker": "./script/service-worker/index.ts",
    },
    output: [
      {
        dir: "./public",
        format: "cjs",
        entryFileNames: "[name].js",
      },
    ],
    plugins: [typescript(), commonjs(), resolve()],
    external: [],
  },
];
