"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = run;
const core_1 = require("@actions/core");
async function run() {
    const context = (0, core_1.getInput)("gh-context");
    console.log("GITHUB_CONTEXT", context);
}
run();
