import { defineConfig, loadEnv } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

import fs from "fs";
import path from "path";

// Configuration for HTTPS certificates
const baseFolder =
  process.env.APPDATA !== undefined && process.env.APPDATA !== ""
    ? `${process.env.APPDATA}/ASP.NET/https`
    : `${process.env.HOME}/.aspnet/https`;

// Parse command line arguments for certificate name
const certificateArg = process.argv
  .map((arg) => arg.match(/--name=(?<value>.+)/i))
  .filter(Boolean)[0];

console.log("Certificate Arg: ", certificateArg);
const certificateName = certificateArg
  ? certificateArg.groups.value
  : "Sample.Svelte";
console.log("Certificate Name: ", certificateName);

// Validate certificate name
if (!certificateName) {
  console.error(
    "Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly."
  );
  process.exit(-1);
}

// Construct paths for certificate and key files
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);


export default defineConfig(({ command, mode }) => {
  // Development mode configuration
  if (command === "serve") {
    console.log("Development mode");
    return {
      plugins: [sveltekit()],
      build: {
        sourcemap: true,
      },
      server: {
        // Proxy configuration for API calls
        proxy: {
          "^/api/*": {
            target: "https://localhost:7277/",
            secure: false,
          },
        },
        port: 5173,
        // HTTPS configuration for local development
        https: {
          key: fs.readFileSync(keyFilePath),
          cert: fs.readFileSync(certFilePath),
        },
      },
    };
  }
  // Production mode configuration (for deploying to Azure)
  else if (command === "build" && mode === "production") {
    console.log("Production mode");
    return {
      plugins: [sveltekit()],
      build: {
        sourcemap: true,
      },
    };
  }
});
