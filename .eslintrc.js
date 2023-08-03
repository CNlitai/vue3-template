module.exports = {
	root: true,
	env: {
		node: true,
		'vue/setup-compiler-macros': true,
	},
	globals: {
		$ref: 'readonly',
		$computed: 'readonly',
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@unocss'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		// 'prettier/prettier': 'error',
		'no-console': 'warn',
		'no-debugger': 'warn',
		//是否明确返回值
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'comma-dangle': ['error', 'only-multiline'],
		'@typescript-eslint/no-this-alias': 'warn',
		'vue/multi-word-component-names': 'warn',
		'prefer-const': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'off',
	},
}
