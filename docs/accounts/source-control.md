# Source Control

---

- [Introduction](#introduction)
- [Supported Providers](#supported-providers)
- [Provider Management](#provider-management)
  - [Connecting Provider](#connecting-providers)
  - [Unlinking Provider](#unlinking-providers)
- [Common Problems](#common-problems)
  - [GitHub Repository Is Not Listing](#github-repository-is-not-listing)

## Introduction

Virtiz can use source providers to access your project's codebase, allowing for continuous and easy application deployment. Currently supports github and gitlab, but we intend to add more git providers in the future.

## Supported Providers

Currently supported providers

- [GitHub](https://github.com)
- [GitLab](https://gitlab.com)
- [Bitbucket](https://bitbucket.com)

## Provider Management

### Connecting Providers

You can connect to any of the supported source control providers when you need through Settings > Source Controls.

<img :src="$withBase('/assets/img/docs/setting-source-control.png')"  width="350">

### Unlinking Providers

You can unlink a connected source control provider by clicking the Disconnect button.
::: warning
If you unlink a source control provider, you will be unable to deploy projects that depend on it in the future. Existing deployments will be unaffected.
:::

## Common Problems

### GitHub Repository Is Not Listing

If after connecting your GitHub to Virtiz you end up creating future organizations, 
the application may not have access permission to connect to its repositories, to give permission you need to go to [Applications](https://github.com/settings/connections/applications/de1ff91925f0a5fd5c19)
and grant the organization access.
