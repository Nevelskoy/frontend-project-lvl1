install:
	npm install
start:
	bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
