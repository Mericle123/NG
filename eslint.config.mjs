import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: ["packages/**", "index.html"],
  },
  ...nextVitals,
  ...nextTypescript,
];

export default eslintConfig;
