test:
	NODE_ENV=test ./node_modules/.bin/istanbul test \
		./node_modules/.bin/_mocha -- -R spec
.PHONY: test
