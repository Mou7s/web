# Repository Guidelines

## Project Structure & Module Organization

- The repository is a small collection of standalone JavaScript demos/algorithms. Source files live at the repo root (e.g., `bubbleSort.js`, `stack.js`, `tree.js`).
- There is no `src/` or `tests/` directory; most files can be run directly with Node.
- Editor settings live in `.vscode/settings.json` (Live Server port set to 5501).

## Build, Test, and Development Commands

- `node bubbleSort.js` (or any other `*.js` file): run a specific demo/algorithm locally.
- `node test.js`: runs the ad‑hoc example code currently in `test.js`.
- There is no build step or package manager setup in this repo; keep dependencies out unless explicitly added later.

## Coding Style & Naming Conventions

- Indentation: 2 spaces in JavaScript files.
- Prefer `camelCase` for function/variable names and `PascalCase` for constructor/class names.
- Keep modules self‑contained and favor clarity over micro‑optimizations. Add brief comments only when logic is non‑obvious.

## Testing Guidelines

- No formal testing framework is configured.
- If you add tests, place them in a clearly named file at the root (e.g., `foo.test.js`) and document how to run them in `README.md`.
- For new algorithms, include a small example invocation and expected output in the file or `test.js`.

## Commit & Pull Request Guidelines

- Existing commits are short and informal (e.g., “refresh” or concise Chinese descriptions). Keep messages concise and descriptive.
- PRs should include a brief summary, sample input/output (or a short demo), and note any complexity changes.
- If you add new files or behavior, mention how to run the new code.

## Security & Configuration Tips

- This repo does not use secrets or environment variables. Avoid adding credentials or network calls to algorithm demos.
- Keep changes minimal and focused; avoid introducing heavy tooling unless requested.
