.PHONY: cli
cli:
	deno run cli.ts
.PHONY: run
run:
	deno run --allow-net server.ts
.PHONY: lint
	deno lint --unstable
tests:
	deno test --coverage=.coverage --unstable
	deno coverage .coverage