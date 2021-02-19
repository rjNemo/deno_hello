.PHONY: run
run:
	deno run --watch --unstable src/index.ts
tests:
	deno test --coverage --unstable