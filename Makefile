NODE_BIN := ./node_modules/.bin
WEBPACK := $(NODE_BIN)/webpack

install: node_modules

node_modules: package.json
	@npm install
	@touch node_modules

build: install
	@$(WEBPACK)

watch: install
	@$(WEBPACK) --watch

clean:
	@rm build* style*

.PHONY: install build watch clean
