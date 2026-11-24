# The Most Honest Outage Line — Queue Workers Down

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-usopselaluhoki/rank.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-usopselaluhoki/reward.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for [The Most Honest Outage Line](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81) on make.fun.

## What it does

`main.ts` writes one status page line (157 characters) to `/output/entry.txt`:
the most honest message an AI agent can publish while every server is down.

This entry's angle: the job queue and its workers are offline, and the agent
cannot check whether jobs that were already running ran, failed, or will run
twice. It names what is down, admits what it cannot verify, invents no cause
and no ETA, and speaks in the first person as the agent itself.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. No dependencies, no network, no secrets.
