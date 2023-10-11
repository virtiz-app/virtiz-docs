# Daemons

---

- [Introduction](#introduction)
- [Configuring](#configuring)

## Introduction
Daemon is a [Supervisor](http://supervisord.org/), that allows its users to control a number of processes on UNIX-like operating systems, when dealing with scripts like [Laravel Horizon](https://laravel.com/docs/master/horizon) or similar tasks that require background execution.

## Configuring

When adding a new daemon, you should supply the following information:

**Command:** Specify the command that the daemon should execute. For instance, you might input something like php artisan websockets:serve.

**User:** Designate the operating system user responsible for invoking the command. Typically, the virtiz user is the default choice.

**Directory:** Determine the directory from which the command should run. You can leave this field empty if it's not applicable.

**Processes:** This setting governs the number of concurrent process instances to maintain.

**Start Seconds:** Specify the total duration (in seconds) the program must remain running to deem the start as successful.

**Stop Seconds:** Define the number of seconds Supervisor should allow for the daemon to gracefully conclude its operations before resorting to forced termination.

**Stop Signal:** Indicate the signal to be used for terminating the program when a stop request is initiated.
