"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const node_fetch_1 = __importDefault(require("node-fetch"));
async function run() {
    const context = (0, core_1.getInput)("gh-context");
    console.log("GITHUB_CONTEXT", context);
    const url = "https://loud-views-clean.loca.lt/chartmanagement/context";
    const requestBody = JSON.stringify({ context });
    try {
        const response = await (0, node_fetch_1.default)(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: requestBody,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseBody = await response.json();
        console.log("Response from server:", responseBody);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
run();
