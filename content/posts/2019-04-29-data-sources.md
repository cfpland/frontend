---
title: 'CFP Land Data Sources & Sharing'
date: '2019-04-29'
layout: post
path: '/blog/data/'
image: 'https://i.imgur.com/TU40Hf6.jpg'
category: Updates
tags:
  - Data
  - Website
---

Last week, I added a couple new sources that more than tripled the number of [conference CFPs listed on our site](https://www.cfpland.com/conferences).
Unfortunately, I made an assumption that any publicly available API would be okay to integrate with, and one of the new sources
got a little bothered about my cross-posting their listings. In order to increase transparency, I'm going to show you where
I get all the data for this site, and outline my policy on sharing this data.

<!--more-->

### CFP Source Data

First of all, **my immediate goal for CFP Land is to provide a free feed of all the upcoming CFPs for tech conferences that I can find**.

With that in mind, I want to give credit to the sources I use to find out about CFPs:

- **[Confs.tech](https://confs.tech/)** - An open source list of conferences that I and many others have contributed to.
- **[Calling All Papers](https://callingallpapers.com/)** - An open source list and API that aggregates CFPs from joind.in, papercall.io, and lanyrd (which I believe is now defunct).
- **Twitter searches and retweets** - People often mention [@cfp_land](https://twitter.com/cfp_land) with new conferences, but I also have a few Twitter searches set up to help me find new CFPs.
- **Conference Speaker Slack channel** - I am a part of a Slack channel for conference speakers where we often pass CFPs around. I add many of these to my list as well.
- **User submissions** - Finally, I'm getting an increasing number of [submissions from subscribers](https://www.cfpland.com/submit). This is really helpful, and I plan on making it even easier to do in the future.

### Enhancing Source Data

Getting the upcoming CFPs is the first part of the process. Next, I manually review each one, make sure it's categorized, that the location
is accurate, and I add data about whether they cover travel and hotel costs for speakers. This takes me an increasing amount of time
each week, but I'm working to automate it. 🤖

I also have scripts that add logos, Twitter accounts, descriptions, and other metadata.

<img src="https://i.imgur.com/TU40Hf6.jpg" class="right" />

### Acceptable Data Use

All the data I have is available to the public for any purpose (including building tools that directly compete with CFP Land!) [here on the website](https://www.cfpland.com/conferences) or [in this RSS feed](https://feeds.cfpland.com/v2/rss/cfps). Seriously, if you want to build something cool with it, go for it. I'd love to hear about it! One guy sent me a message about a [CFP Land Telegram Bot](https://github.com/jonatasbaldin/cfpland-telegram-bot) that he built. 👍

I don't currently show CFPs that have closed or CFPs that are closing in more than 3 weeks, but I can send you that if you'd like. Just [email me](mailto:karl@cfpland.com).

### Monetization

**My long-term goal for this project is to make it self-sustaining.**

I'm not sure what that will look like yet, but I am looking into getting sponsors, collecting extra data for paid subscribers, or building a CFP submission management tool for speakers. If it makes enough to pay for my hosting and email client bills someday, that would be pretty cool. If not, I'll probably try to do as much as can be fully automated and stop doing as much cleanup.

If you have questions or problems with any of this, I am a real person. My name is Karl. I live in Chicago, USA and have [a dog named Chili](https://www.instagram.com/urbanmutt_chilidog/). Just [email me](mailto:karl@cfpland.com) and I'd love to talk. 💌
