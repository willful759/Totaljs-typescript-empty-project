# Totaljs-typescript-empty-project
A small empty totaljs project integrated with typescript, for reference.

## Installation

1. `npm install -g typescript` to install typescript
2. `npm install` to install all the dependencies

## Usage

Use the command `npm run debug` to run a debug session with live reloading and typescript watch running,
allowing recompilation on saving typescript files

If you don't wish to recompile when you save on a `.ts` file, you can run `npm run debug-no-w`
to run totaljs with live reload, but without typescript watch, in order to see your changes, you
will have to run `tsc --build` manually.

