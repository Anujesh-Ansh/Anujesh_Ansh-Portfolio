// The vite.config.js file is used to configure the Vite development server for your JavaScript project. 
// It allows you to customize various aspects of your project, such as specifying entry points, configuring plugins, setting up proxy servers, and more. 
// It acts as a central configuration file that helps you tailor the development environment to your specific needs.

import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    build: {
        minify: "terser",
    },
})