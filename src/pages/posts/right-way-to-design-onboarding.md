---
layout: ../../layouts/BlogPost.astro
title: the right way to design onboarding
pubDate: 2026-08-27
description: "derive onboarding UI from the real data your backend already stores"
author: Biraj
---

onboarding sounds like one of those very simple startup problems, and it is.

you show new users three screens, they fill in some stuff, and now they are onboarded. done.

but startups change fast. maybe you add a step next week. maybe inviting a teammate stops being mandatory. maybe connecting an integration only matters for teams on a certain plan.

and suddenly you have a backend that looks like this:

```ts
user.completedStepOne = true;
user.completedStepTwo = true;
user.completedStepThree = false;
```

now you want to insert a new step between one and two, or move a field from step two to step three. good luck lol.

### the wrong approach

the easy mistake is treating onboarding like a sequence of backend steps.

```text
1. create workspace
2. invite teammate
3. connect slack
```

and then saving that a user completed step one, but not step two.

this is wrong in my opinion because `step two` is not a real thing in your product... it's just where you happened to put something in a wizard one day.

also that flag is redundant because usually it's just a shadow of data you already store.

"create a workspace" means a workspace should exist in your database.

"verify your email" means their email should be verified.

"connect slack" means there should be a valid slack connection in your db.

so if you also save `completedStepThree = true` or `teammateInvited = true`, you now have two sources of truth.

and two sources of truth always find a way to disagree.

```ts
workspace.hasActiveSlackIntegration();
!user.completedStepThree;
```

which one wins?

### derive from the data

instead of saving `completedStepTwo`, ask the backend what is actually true.

```ts
hasWorkspace(user);
user.emailVerifiedAt !== null;
workspace.hasActiveSlackIntegration();
workspace.sentInvitesTo.length > 0;
```

you can then derive the UI from the presence or absence of that data.

if the workspace exists, do not show "create a workspace" step. if slack is connected, do not show "connect slack". simple.

onboarding is now just a function of the things you have for the user in your database, instead of a second system trying to describe the same thing.

### why this matters for startups

you are probably not changing onboarding every day, but you _will_ change your mind about it.

you might go from:

```text
create workspace -> invite teammate -> connect integration
```

to:

```text
connect integration -> create workspace -> invite teammate
```

or make the invite optional. or only show an integration step to a particular kind of customer.

when you work this way, changing onboarding is mostly changing the rules for what to show.

maybe inviting a teammate used to be required and now it is optional. fine. change the rule without having to migrate every user's `completed_step_2` value because step 2 now means something else.

small caveat: some reordering still needs real backend support. if an integration must belong to a workspace, you cannot show "connect integration" before "create workspace" unless your backend supports that. but that is a real product dependency, not an onboarding flag problem.

```ts
hasVerifiedEmail(user); // show the email verification step if false
hasUsableWorkspace(user); // show the workspace setup step if false
hasConnectedIntegration(workspace); // show the integration step if false
```

### what should you save separately?

you can still save onboarding events. just save them for what they are: analytics and behavior, not truth about product setup.

also, not every onboarding action maps cleanly to data you can derive later.

maybe the goal is educational, like watching an intro video or reading a short guide. maybe the user needs to pick a timezone or theme, but your app already filled in a default, so you cannot tell whether they chose it or you guessed it.

in those cases, save the action explicitly. just name it after the thing that happened, not the step where it happened.

```text
user dismissed the checklist
user skipped inviting teammates
user watched the tutorial
user confirmed their timezone
user belongs to onboarding flow v2
user was assigned to experiment B
```

this helps you understand how users behave during onboarding: what they skip, where they drop off, and which flow works better.

but it should not decide whether slack is actually connected.

that should still come from the slack connection in your database.

### finale

onboarding is UI that helps someone get your product into a useful state. usually that means creating or confirming some data. sometimes it means teaching them something.

your backend should know the more boring, permanent thing: what exists, what is missing, and which onboarding-only actions happened.

derive the UI from the data you already trust. save the bits that are genuinely about the journey separately.

then when your startup inevitably decides that step two should actually be step five, you change the rule for what to show instead of explaining to your team why `completedStepTwo` somehow means "connected slack" now.

honestly, you could probably give this post to your coding agent and ask it to design onboarding this way.

fin.
