cli:
	deno run cli.ts
run:
	deno run --watch --allow-net src/main.ts
lint:
	deno lint --unstable
test: tests
tests:
	deno test --coverage=.coverage --unstable
	deno coverage .coverage
.PHONY: cli run lint test tests