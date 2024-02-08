# Server Provider

---

- [Connecting Server Provider](#connecting-server-provider)
- [Supported Server Providers](#supported-server-providers)
    - [Amazon AWS](#amazon-aws)
    - [Digital Ocean](#digital-ocean)
    - [Hetzner](#hetzner)

## Connecting Server Provider

You can connect to any of the supported server providers when you need through Settings > Server Providers.

<img :src="$withBase('/assets/img/docs/creating-new-server-provider.png')">

## Supported Server Providers

Virtiz can create and manage servers on the cloud server providers listed below:

- [Amazon AWS](https://aws.amazon.com)
- [Digital Ocean](https://www.digitalocean.com)
- [Hetzner](https://www.hetzner.com/)

### Amazon AWS

It has a few steps for you to generate your Access key and Secret:

1. Sign in to the [AWS Management Console](https://console.aws.amazon.com).
2. Open the IAM console by searching for "IAM" in the AWS services search box or by directly navigating to the IAM service.
3. In the left navigation pane of the IAM console, click on "Users" to manage IAM users.
4. Click on "Add user" to create a new IAM user.
5. Enter a username for the new IAM user and select the access type.
6. Under the "Set permissions" section, choose the option "Attach existing policies directly."
7. In the search box, type "AmazonEC2FullAccess" to filter the available policies.
8. Select the "AmazonEC2FullAccess" policy from the list.
9. Click on "Next: Review" to review the user's configuration.
10. Review the user details and click on "Create user" to create the IAM user.
11. On the success page, you'll see the user's Access key ID and Secret access key. These are the credentials you need to use for programmatic access to AWS services. Make sure to add Access key and Secret to Virtiz.

There are a few requirements you should review to ensure Virtiz works correctly with your linked AWS account:

- AWS IAM users need to have the AmazonEC2FullAccess managed policies.
- If you are using an existing VPC, the subnet must be configured to auto-assign public IP addresses.
- If you are using an existing VPC, the default security group must allow Virtiz to SSH into the server.

List of rules you must add to your VPC security group:

| Type  | Protocol | Port Range | Source |                    | Description                |
|-------|----------|------------|--------|--------------------|----------------------------|
| SSH   | TCP      | 22         | Custom | 67.207.93.43       | Allow SSH from Virtiz      |
| SSH   | TCP      | 22         | Custom | YOUR-IP-ADDRESS/32 | Allow SSH from specific IP |
| HTTP  | TCP      | 80         | Custom | 0.0.0.0/0          | Allow HTTP from IPv4       |
| HTTP  | TCP      | 80         | Custom | ::/0               | Allow HTTP from IPv6       |
| HTTPS | TCP      | 433        | Custom | 0.0.0.0/0          | Allow HTTPS from IPv4      |
| HTTPS | TCP      | 433        | Custom | ::/0               | Allow HTTPS from IPv6      |

If you don't want to deal with these subnet and security group settings, just choose to create a new VPC when creating your new server which we will configure for you.

### Digital Ocean

Adding Digital Ocean as a provider is a straightforward process, generate your API Key on [Digital Ocean Panel](https://cloud.digitalocean.com/account/api/tokens) and then add in Virtiz.

### Hetzner

API tokens for Hetzner are project-specific. When working with Hetzner Projects, it's essential to verify that Virtiz holds an API token for each distinct Hetzner Project you're utilizing.
