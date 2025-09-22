// Auto-generated using scripts/gen-drivers.
// Do not manually edit!

import type { FSStorageOptions as FsLiteOptions } from "unstorage/drivers/fs-lite";
import type { FSStorageOptions as FsOptions } from "unstorage/drivers/fs";
import type { QueueDriverOptions as QueueOptions } from "unstorage/drivers/queue";

export type BuiltinDriverName = "fs-lite" | "fsLite" | "fs" | "memory" | "queue";

export type BuiltinDriverOptions = {
  "fs-lite": FsLiteOptions;
  "fsLite": FsLiteOptions;
  "fs": FsOptions;
  "queue": QueueOptions;
};

export const builtinDrivers = {
  "fs-lite": "unstorage/drivers/fs-lite",
  "fsLite": "unstorage/drivers/fs-lite",
  "fs": "unstorage/drivers/fs",
  "memory": "unstorage/drivers/memory",
  "queue": "unstorage/drivers/queue",
} as const;
