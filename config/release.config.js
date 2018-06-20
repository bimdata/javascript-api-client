/* eslint-disable no-useless-escape */
module.exports = {
  verifyConditions: ["@semantic-release/npm"],
    analyzeCommits: {
      releaseRules: './config/release-rules.js',
      parserOpts: {
        headerPattern: /^(\[.+\])(.+)$/,
        headerCorrespondence: [
          'tag',
          'message',
        ],
      },
    },
    publish: ["@semantic-release/npm"]
};
