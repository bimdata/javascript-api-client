/* eslint-disable no-useless-escape */
module.exports = {
  verifyConditions: ['@semantic-release/npm', '@semantic-release/github'],
    analyzeCommits: {
      preset: 'eslint',
      releaseRules: [
        {tag: 'MINOR', release: 'minor'},
        {tag: 'PATCH', release: 'patch'},
        {tag: 'MAJOR', release: 'major'},
      ],
      parserOpts: {
        headerCorrespondence: [
          'tag',
          'message',
        ],
      },
    },
    prepare: ['@semantic-release/npm'],
    publish: ['@semantic-release/npm', '@semantic-release/github'],
};
