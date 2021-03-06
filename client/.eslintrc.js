module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-style": ["error", "last"],
        "semi": ["error", "always"],
        "react/prop-types": 0,
        "react/jsx-key": 0,
        "react/react-in-jsx-scope": 0
    }
};
