.PHONY: cli
cli:
	deno run cli.ts
tests:
	deno test --coverage --unstable