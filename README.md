# Finando | SSO Web

[![semantic-release: conventionalcommits](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![GitHub Actions](https://github.com/finando/sso-web/actions/workflows/release.yaml/badge.svg)](https://github.com/finando/sso-web/actions/workflows/release.yaml)

## Description

Main entry point for Single Sign-On (SSO).

## Installation and Usage

- Required tools to run this project:
  - Node.js 18 and npm to run locally on a host machine

#### Running application locally on a host machine

- Install dependencies by running `npm install`
- Run `npm start` to start local development server

## Environment Variables

- `ENV` - current environment
  - `development`
  - `production`
- `GRAPHQL_ENDPOINT` - GraphQL API endpoint
- `TRANSLATIONS_DOCUMENT` - name of the translations document
- `AUTH_REST_API_HOST` - auth-rest-api hostname

## Contributing

#### Branching Strategy

Whenever a new change is to be implemented, follow these steps:
  - Create a new branch from the `master` branch
  - Implement and commit changes
  - Create a pull request for code review

#### Commits

This repository uses conventional commmit format. In order to commit, follow these steps:
  - Stage files to be committed
  - Run `npm run commit` script

Avoid using `--no-verify` flag when making commits.
