import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-no-undef": "error",
            "react/no-unescaped-entities": "off",
            "react/jsx-filename-extension": [
                "error",
                { extensions: [".js", ".jsx"] },
            ],
        },
    },
];
