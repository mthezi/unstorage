# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Building

- `pnpm build` - Full build (generates drivers + builds with unbuild)
- `pnpm gen-drivers` - Generate driver metadata file (src/\_drivers.ts)

### Development & Testing

- `pnpm dev` - Start Vitest in watch mode
- `pnpm test` - Run full test suite (lint + type check + vitest with coverage)
- `pnpm test:types` - TypeScript compilation check only
- `pnpm lint` - Run ESLint and Prettier checks
- `pnpm lint:fix` - Auto-fix ESLint and Prettier issues

### CLI

- `pnpm unstorage [dir]` - Start HTTP storage server on port 8080

## Architecture Overview

Unstorage is a universal key-value storage layer with a pluggable driver system that works across Browser, Node.js, and Workers environments.

### Core Components

**Storage Layer** (`src/storage.ts`):

- Universal Storage interface with mount points for different drivers
- Supports watching, transactions, metadata, and batch operations
- Uses superjson for serialization instead of native JSON
- Includes storage migration system with version tracking

**Driver System** (`src/drivers/`):

- Pluggable drivers (memory, fs, fs-lite, etc.)
- Each driver implements the Driver interface from `src/types.ts`
- Driver registry auto-generated in `src/_drivers.ts` (never edit manually)
- Generation script: `scripts/gen-drivers.ts`

**Server Component** (`src/server.ts`):

- H3-based HTTP storage server with REST API
- Supports authorization and custom path resolution
- Can be used as EventHandler in h3/Nitro applications

**Build System**:

- Uses unbuild for dual ESM/CJS output
- Drivers built separately to `/drivers` directory for tree-shaking
- TypeScript with strict configuration and bundler module resolution

### Key Files

- `src/index.ts` - Main exports
- `src/storage.ts` - Core storage implementation
- `src/types.ts` - TypeScript definitions
- `src/_drivers.ts` - Auto-generated driver registry (DO NOT EDIT)
- `src/cli.ts` - CLI implementation
- `build.config.ts` - Unbuild configuration

### Development Notes

- Always run `pnpm gen-drivers` after adding/modifying drivers
- Driver tests use common utilities from `test/drivers/utils.ts`
- The `src/_drivers.ts` file is auto-generated - modify `scripts/gen-drivers.ts` instead
- Uses pnpm as package manager with workspace configuration
