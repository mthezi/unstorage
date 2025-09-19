// Auto-generated using scripts/gen-drivers.
// Do not manually edit!

import type { FSStorageOptions as FsLiteOptions } from "unstorage/drivers/fs-lite";
import type { FSStorageOptions as FsOptions } from "unstorage/drivers/fs";

export type BuiltinDriverName = "fs-lite" | "fsLite" | "fs" | "memory";

export type BuiltinDriverOptions = {
  "fs-lite": FsLiteOptions;
  "fsLite": FsLiteOptions;
  "fs": FsOptions;
};

export const builtinDrivers = {
  "fs-lite": "unstorage/drivers/fs-lite",
  "fsLite": "unstorage/drivers/fs-lite",
  "fs": "unstorage/drivers/fs",
  "memory": "unstorage/drivers/memory",
} as const;
