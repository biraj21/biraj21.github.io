---
layout: ../../layouts/BlogPost.astro
title: Redis Keyspace Notifications
pubDate: 2024-02-26
author: Biraj
---

🤯 today i learnt about an awesome feature Redis has called Keyspace notifications.

firstly i learnt that Redis supports 16 logical databases, numbered from 0 to 15. by default, we connect to database 0. felt kinda stupid that i didn't know something so fundamental. 🤡

coming back to keyspace notifications, it's a feature that allows clients to receive events affecting the Redis data set in some way. meaning, when something happens like some key is set, deleted or expired, an event would be generated which would then be published to a channel.

_from [redis docs](https://redis.io/docs/latest/develop/pubsub/keyspace-notifications/):_

<blockquote>
Keyspace notifications allow clients to subscribe to Pub/Sub channels in order to receive events affecting the Redis data set in some way.

Examples of events that can be received are:

- All the commands affecting a given key.
- All the keys receiving an LPUSH operation.
- All the keys expiring in the database 0.
</blockquote>

by default they are disabled 'cause they use some CPU power (obviously). but they can be enabled via notify-keyspace-events configuration.

now let's say i've some value stored in Redis which expires after 1 hour & for whatever reason, i need to know when a key is expired. i can create a subscriber which will subscribe to `\_\_keyevent@0\_\_:expired` channel ([read the docs](https://redis.io/docs/latest/develop/pubsub/keyspace-notifications/) to understand more).

now when my data expires, i will be notified & get the key which was just expired.

`\_\_keyevent@0\_\_:expired` - here 0 is my database & expired is the event which is generated when a key is expired.

pretty good stuff!

[docs here.](https://redis.io/docs/latest/develop/pubsub/keyspace-notifications/)
