---
layout: ../../layouts/BlogPost.astro
title: i wrote code today and felt really good
pubDate: 2026-07-16
description: 'note: the "today" in question is actually july 13th, monday'
author: Biraj
---

like any privileged developer these days, i use coding agents to write code. it almost feels misleading to say "write code" in the previous sentence, because i hardly do it anymore.

i just test the thing, lazily skim over the diff, call it a retard (among other mean things) when it's broken, tell it (or other agent) to fix things, and sometimes even ask it to write commit messages. i just push the code and take the credit (and the blame when it's buggy).

### so what changed today?

nothing. i lied in the title. i use claude code again (Opus 4.8, high effort), and in fact did a much longer session that i had ever done before. then why did i say that i wrote code, and more importantly, why did i feel _really good_ today?

it's because i made all the decisions, and was constantly in loop. i reviewed each and every file in [this pr](https://github.com/shellular-org/server/pull/12), found issues, and told it to make A LOT of changes. in fact today, i didn't even cut corners in organizing the codebase _my way_, something that satisfied me a lot back in 2024 once done.

i didn't just tell it to "make no mistakes" or "just fix it" , i described _**how** i would like things to be_. this required some thinking from my end. i just sat for some time staring at the ceiling - planning, thinking, and then just told it how it should be done. i didn't even feel like "asking" any AI whether i was right or not. i just went with what i thought was right.

### the realization

it reminded me what programming used to be for me before AI. **it was the joy of figuring things out myself.**. the reason we felt so good seeing it finally work was because of every mistake, every idea, every decision that got it there. maybe god really is in the details.

the craft was never in typing out each line of code by hand, but in the _process of thinking_ that led to the code. and today, i felt that again. that's why it felt like i wrote code today, and why it felt really good.

### AI sycophancy

even though i like to believe that i don't fall for clanker flattery, i have to admit that claude's reactions probably contributed a little to the good feeling.

see this:

> That's a sharper design than mine, and it fixes a real inconsistency I'd glossed over.

and this:

> This is a genuinely better design — a persistent relay↔central WebSocket replaces the entire HTTP register/heartbeat/TTL dance.

### finale

is this the more efficient way to write software these days? nope.

will i always do this from now on? nope.

do i produce less buggy code than coding agents? sometimes. but when i do write the code myself, the bugs feel like mine. the decisions feel like mine. the tradeoffs feel like mine.

and honestly, even when AI writes the code, the bugs are still mine anyway. so why not enjoy the part that actually matters - thinking?

fin.
