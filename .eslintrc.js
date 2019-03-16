module.exports = {
	"env": {
		"browser": true,
    "es6": true,
    "jest": true,
	},
	"extends": "eslint-config-airbnb-base",
	"rules": {
    "arrow-parens": [
      "error",
      "always",
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allowAfterThis": true,
      },
    ],
    "class-methods-use-this": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
    ],
    "space-before-function-paren": [
      "error",
      "always",
    ],
    "no-unused-vars": [
      "off",
    ],
  },
};