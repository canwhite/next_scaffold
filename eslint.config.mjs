import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  // ====== 配置ESLint忽略指定目录的文件 =======
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**", "**/out/**"]
  },
  // ====== 配置ESLint忽略指定目录的文件 ======
  js.configs.recommended,
  // ====== 启用TypeScript推荐规则集 =======
  ...tseslint.configs.recommended,
  // ====== 为所有JS/TS文件启用浏览器全局变量 =====
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser }
  },
  // ===== 启用React推荐规则，自动检测React版本 ====
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  // ====== // 配置Prettier格式化规则，启用React Hooks检查，关闭部分严格规则 ====
  {
    plugins: {
      prettier: pluginPrettier,
      "react-hooks": pluginReactHooks
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 100,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: false,
          trailingComma: "none",
          bracketSameLine: true,
          jsxSingleQuote: false,
          bracketSpacing: true
        }
      ],
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
]);
