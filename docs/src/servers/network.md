# Network

---

- [Introduction](#introduction)
- [Port Ranges](#port-ranges)
- [Allow/Deny Rules](#allowdeny-rules)
- [Default Rules](#default-rules)

## Introduction
You can conveniently configure and oversee your server's firewall settings directly through the dashboard by accessing the Network tab within the server's management dashboard. Firewalls play a crucial role in controlling which ports on your server are accessible from the Internet.

## Port Ranges
This can be useful for managing network access more efficiently. For example, you might want to open a range of ports for a specific service or application.
When establishing new firewall rules, you have the option to specify a port range (e.g., 8000:8010), which effectively opens all ports within the defined range, spanning from 8000 to 8010.

## Allow/Deny Rules
This dictate if incoming or outgoing network traffic of specified port is permitted (allowed) or blocked (denied). By defining these rules, administrators can control and secure network access to their Linux servers, enhancing both security and network management.

## Default Rules

As part of the provisioning process, Virtiz will automatically set up three rules:

- **SSH:** Allow port 22 traffic from any IP Address
- **HTTP:** Allow port 80 traffic from any IP Address
- **HTTPS:** Allow port 443 traffic from any IP Address

> You should never removing the rule that permits SSH traffic to your server because doing so will prevent Virtiz from establishing a connection to or managing your server.
