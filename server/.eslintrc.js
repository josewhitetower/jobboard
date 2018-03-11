module.exports = {
    "extends": "airbnb-base",
    "rules": {

        //'airbnb-base' overrides
        "indent": ["error", 4], //set indentation to 4 spaces
        "no-underscore-dangle": ["error", {
            "allowAfterThis": true
        }],
        "prefer-destructuring": ["error", {
            "array": false,
            "object": true
        }],
        "max-len": ["error", 100, 4, {
            "ignoreUrls": true,
            "ignoreComments": true,
            "ignoreTrailingComments": true,
            "ignoreRegExpLiterals": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
        }],
        "no-plusplus": ["error", {
            "allowForLoopAfterthoughts": true
        }],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }]

    }
};