.PHONY: cli
cli:
	deno run cli.ts
.PHONY: run
run:
	deno run --allow-net server.ts
tests:
	deno test --coverage --unstable