import { getInput } from "@actions/core"


export async function run() {
  
    const context = getInput("gh-context")
    
    console.log("GITHUB_CONTEXT", context)
}


run();