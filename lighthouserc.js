module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:9000/blog"],
      collect: {
        numberOfRuns: 3,
      },
    },
    upload: {
      startServerCommand: "yarn clean && yarn build && yarn serve",
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": ["warn", { minScore: 1 }],
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
  },
}
