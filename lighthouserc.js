module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:8000/blog"],
      collect: {
        numberOfRuns: 5,
      },
    },
    upload: {
      startServerCommand: "npm run start",
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
