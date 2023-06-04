module.exports = {
	extends: ['stylelint-config-recess-order', 'stylelint-config-standard-scss'],
	rules: {
		// インデントとクォーツの設定
		indentation: 'tab',
		'string-quotes': 'single',

		// CSSブロックの設定
		'block-opening-brace-space-before': 'always',
		'block-opening-brace-newline-after': 'always',
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-before': 'always',
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-before': 'never',
		'function-comma-space-after': 'always',
		'function-parentheses-newline-inside': 'never-multi-line',
		'function-parentheses-space-inside': 'never',
		'function-max-empty-lines': 0,

		// セレクタ
		'selector-pseudo-element-colon-notation': 'double',
		'selector-combinator-space-before': 'always',
		'selector-combinator-space-after': 'always',
		'selector-list-comma-newline-after': 'always',
		'selector-max-empty-lines': 0,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',

		// プロパティ記述の際の設定
		'property-case': 'lower',
		'declaration-colon-space-after': 'always',
		'length-zero-no-unit': true,
		'number-leading-zero': 'never',
		'rule-empty-line-before': ['always-multi-line', { ignore: ['after-comment', 'first-nested'] }],
		'shorthand-property-no-redundant-values': true,
		'unit-case': 'lower',
		'value-list-comma-space-after': 'always',
		'number-no-trailing-zeros': true,
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'alpha-value-notation': 'number',
		'font-family-name-quotes': 'always-where-recommended',
		'no-descending-specificity': null,
		'color-function-notation': 'modern',
		'declaration-block-no-redundant-longhand-properties': null,
		'value-keyword-case': 'lower',
		'scss/at-mixin-argumentless-call-parentheses': 'always',
		'scss/no-global-function-names': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'layer', 'apply'],
			},
		],
	},
	ignoreFiles: ['**/node_modules/**'],
};
