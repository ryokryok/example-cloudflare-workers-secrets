# Cloudflare Workers Secrets Example

This repository serves as an example for the accompanying article.

<https://zenn.dev/mr_ozin/articles/c9ca0e7b9cf242>

## Setup

### Local Development

A `.dev.vars` file is required for local development.

```shell
touch .dev.vars
echo 'MY_VARIABLE="development_value"' > .dev.vars
```

### Unit Tests

Unit tests utilize the `.dev.vars.test` file. **Please avoid committing sensitive information to this file for Git management.**

## CLI

```shell
# Generate TypeScript types based on `.dev.vars`
pnpm wrangler types

# Start the development server (using `.dev.vars`)
pnpm dev

# Run unit tests (using `.dev.vars.test`)
pnpm test
```

## GitHub Actions

You will need to configure Repository secrets using the GitHub CLI.

Refer to the following Cloudflare documentation for detailed instructions:

<https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/#2-set-up-cicd>

```shell
gh secret set CLOUDFLARE_ACCOUNT_ID
gh secret set CLOUDFLARE_API_TOKEN
gh secret set MY_VARIABLE
```

## License

MIT
