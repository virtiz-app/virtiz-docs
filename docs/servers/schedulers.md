# Schedulers

---

- [Introduction](#introduction)
- [Adding Scheduler](#adding-scheduler)

## Introduction

Scheduler is a [Cron Job](https://en.wikipedia.org/wiki/Cron), functions as a job scheduler based on time within UNIX-like operating systems. 
Individuals who establish and manage software environments employ cron to arrange for jobs, such as commands or shell scripts, to be executed at regular, predetermined times, dates, or intervals.
Setting a particular command to a cron job ensures that the command is executed in accordance with the scheduled time you've established.

# Adding Scheduler

When adding a new scheduler, you should supply the following information:

| Field     | Description                                | 
|-----------|--------------------------------------------|
| User      | Username of user that execute the command. |
| Command   | The specific command or script to execute. | 
| Frequency | The frequency to run the command at.       | 

If you choose custom in the frequency field, you need to define it in expression format, use [Crontab Guru](https://crontab.guru/) for better understanding.