module.exports =
{
	'env':
  {
		'browser': true,
		'node': true,
    'es6': true
  },
	'plugins': 
	[
		'node'
	],
	'extends':
	[
		'eslint:recommended',
		'plugin:node/recommended'
	],
  'parserOptions':
  {
      'sourceType': 'module'
  },
	'rules':
	{
		'node/no-unsupported-features': 0,
		'array-bracket-spacing': [1, 'never'],
		'arrow-spacing': [1, { before: true, 'after': true }],
		'block-spacing': [1, 'always'],
		'brace-style': [1, 'allman'],
		'camelcase': [1, { properties: 'always' }],
		'indent': [1, 'tab'],
		'one-var-declaration-per-line': [1, 'initializations'],
		'quotes': [1, 'single'],
		'semi': [1, 'never'],
		'space-before-blocks': [1, 'always'],
		'space-in-parens': [1, 'never'],
		'no-alert': 1,
		'no-console': 1,
		'no-trailing-spaces':[1, { 'skipBlankLines': true }],
		'no-var': 2,
		'no-whitespace-before-property': 1,
	}
}