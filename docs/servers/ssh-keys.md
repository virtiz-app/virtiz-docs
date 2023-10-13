# SSH Keys

---

- [Introduction](#introduction)
- [Generating SSH Key](#generating-ssh-key)
- [Adding SSH Key](#adding-ssh-key)
- [Deleting SSH Key](#deleting-ssh-key)

## Introduction

SSH, or Secure Shell, is a protocol that grants access to your server through a command line terminal.
It uses SSH keys to verify and establish a secure connection over this protocol with your server.

After adding your SSH key to your server, you may SSH into the server using username `virtiz` without a password:

```shell
  ssh virtiz@SERVERS_PUBLIC_IP_ADDRESS
```

## Generating SSH Key

If you do not have any SSH key pair inside your computer, simply enter `ssh-keygen -t RSA` into the terminal (
applicable for Linux & MacOS).
You can then retrieve the SSH public key by typing `cat ~/.ssh/id_rsa.pub`. This public key can be registered inside
Virtiz.

## Adding SSH Key

To add the SSH Key to your server, you need to fill in the data below:

| Field   | Description                                         | 
|---------|-----------------------------------------------------|
| Alias   | Help identify the key.                              | 
| SSH Key | The SSH public key get from `cat ~/.ssh/id_rsa.pub` | 

## Deleting SSH Key

Removing an SSH Key will result in its deletion from the server. However, it's important to note that this action will not lead to the automatic logout of the user associated with the key.