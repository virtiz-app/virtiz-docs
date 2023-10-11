# PHP

---

- [Introduction](#introduction)
- [Multiple PHP Versions](#multiple-php-versions)
    - [Installing additional PHP Versions](#installing-additional-php-versions)
    - [Uninstalling additional PHP Versions](#uninstalling-additional-php-versions)
- [Common PHP Settings](#common-php-settings)
    - [Max File Upload Size](#max-file-upload-size)
    - [Max Execution Time](#max-execution-time)
    - [OPcache](#opcache)


## Introduction

When setting up a server, it is necessary to choose the default version of PHP that you want to install. The php binary on your server will be associated with the selected version during the provisioning process.

After the server is successfully created, Virtiz simplifies the process of installing additional PHP versions alongside the default one. In the subsequent documentation, we will explore the methods for effectively managing these supplementary PHP versions.

## Multiple PHP Versions

### Installing additional PHP Versions

To add more PHP versions, you have the option to utilize the PHP tab within the server's management dashboard. Once an additional PHP version is installed, you can choose it during site creation or switch to it for an existing site.

When a new PHP version is installed through Forge, it automatically sets up and configures the PHP-FPM process specific to that version. Consequently, your server will be capable of running multiple PHP versions concurrently.

### Uninstalling additional PHP Versions

You have the option to uninstall a specific version of PHP, provided that:

1. The version you wish to uninstall is not being utilized by any existing projects.
2. There are alternative versions already installed.
3. The version you wish to uninstall is not the default version for the command-line interface (CLI) on the server.

## Common PHP Settings

### Max File Upload Size
To modify the maximum file upload size, navigate to the PHP section of the server management dashboard. Specify the desired value in megabytes. For context, 1024MB is equivalent to 1GB.

### Max Execution Time
To adjust the maximum execution time, access the PHP section within the server management dashboard. Provide the desired value in seconds.

### OPcache
Enhancing PHP OPcache for production involves configuring it to cache your compiled PHP code in memory, resulting in a significant performance boost. If you decide to optimize OPcache for a production environment, it is essential to ensure that your deployment script includes a PHP-FPM service reload step at the conclusion of each deployment.
