---
title: Preparing a Conference Presentation
date:
layout: post
path: '/guides/speaking/presentation/'
image: https://drive.google.com/uc?id=11nJ2Hnc3CkmrU97ZV83nP0SB0EV80s_K
category: Guides
---

After being accepted to give your conference talk, the next big step is to create your presentation. Even if you've given the talk before, you should revisit it each time you deliver it to make sure it's appropriate for the specific audience and time allotted.

While your presentation should fulfill the expectations you [set forth in your abstract](../submitting/), there's a big difference between writing a one-paragraph outline and creating a 60-slide deck to fill an hour of stage time! In this section, I'll cover some tips for creating a great presentation for a technology conference.

<!--more-->

_This post is part of an 8-part guide to speaking at technology conferences. Be sure to [check out the other sections listed here](../)._

![](https://i.imgur.com/PCKPYrR.jpg)

<div class="card bg-info-light mb-3">
<div class="card-body">
  <h5 class="card-title">
    <strong>Never miss a speaking opportunity again.</strong><br/>
    Subscribe to get upcoming CFPs and new advice in your inbox every week!
  </h5>
  <form
    class="row"
    action="https://cfpland.us15.list-manage.com/subscribe/post?u=4eba8b205fc13380cd3e6f3fc&amp;id=258f553f4e"
    method="post"
  >
    <div class="col-sm-12 col-md-8">
      <input
        name="EMAIL"
        type="email"
        class="form-control mb-2"
        id="emailInput"
        aria-label="Enter email to get CFPs in your inbox every week"
        placeholder="Enter email"
        required
      />
    </div>
    <div class="col-sm-12 col-md-3">
      <button type="submit" class="btn btn-secondary btn-block mb-2">
        Sign Up
      </button>
    </div>
  </form>
</div>
</div>

## Formats

Before you start creating slides, it might help to determine a format that will work for your presentation. Your talk may not fit perfectly into any one of these archetypes, but it's helpful to start off with one of these formats and then branch out as your talk matures.

### 1. A novel solution to a common problem

> When a new framework becomes popular, there’s often a variety of opinions about the best way to do automated testing for code that uses it. Even if your solution isn’t the best, it can become a standard if you’re the first with a conference video.
> _[Nick Heiner](https://hackernoon.com/how-and-why-to-speak-at-tech-conferences-1d50a3f548e0)_

One of the fun things about working in technology today is that there are always new and (arguably) better solutions coming out for various problems. Most new solutions are viable candidates for a conference talk, so this format is pretty common.

While the specifics vary, a typical presentation of this format might start off by introducing a problem, then talk about existing solutions, and finally give the audience a new (and again arguably better) solution.

In the talk below, Pete Hunt introduces React by walking through several of the problems that the framework aims to solve. While an introductory talk on React probably won't get much interest at a conference now, in 2013 React was brand new, so this talk was very popular.

<div class='embed-container'><iframe src='https://www.youtube.com/embed/x7cQ3mrcKaY' frameborder='0' allowfullscreen></iframe></div>

_React: Rethinking best practices by Pete Hunt_

### 2. The hero's journey

> They learn that hey, this is hard, and it’s ok to struggle. This person, who must be smart because they’re up there on the stage, makes mistakes. I make mistakes too, so we’re kind of similar. They conquered their problem, so maybe I can conquer mine.
> _[Jeff Casimir](http://jumpstartlab.com/news/archives/2014/02/15/prototypical-conference-talks)_

A common pattern for storytelling is [the hero's journey](https://en.wikipedia.org/wiki/Hero%27s_journey). You may not have heard this term, but you've definitely seen it played out in hundreds of movies, TV shows, and books. The way it works in a conference talk is:

1.  You introduce yourself in a happy initial state,
2.  Something happens that upsets your initial state,
3.  You reluctantly start a journey to resolve the conflict,
4.  You reach a low point when your initial assumption fails,
5.  And finally, you emerge victorious by solving the problem.

There are variations on this theme, but if your talk is meant to be more personal or story-driven, this is a good format to use.

Hero's Journey Illustration: https://i.imgur.com/Bv2Quqe.png

In the talk below, TJ VanToll walks the audience through his process of changing his mind about Typescript. Along the way, we learn about the language and why it's ultimately superior in some cases.

<div class='embed-container'><iframe src='https://www.youtube.com/embed/w6rdLx2LYz8' frameborder='0' allowfullscreen></iframe></div>

_Why I Was Wrong About TypeScript by TJ VanToll_

### 3. The tech-heavy deep dive

> These talks focus on something that’s cool but that not many engineers get to work with on a day to day basis.
> [Nick Heiner](https://hackernoon.com/how-and-why-to-speak-at-tech-conferences-1d50a3f548e0)

A lot of tech people like technical deep dives because they're inspiring. Most of us don't use all the cutting edge technology available day-to-day, so we appreciate hearing from those who do.

Additionally, this structure of talk can show people how to use things better that they may already know at a surface level.

> One of my favorite forms is the deep dive. This is what I might call the Pat Shaughnessy talk. It’s been a long time since I studied undergrad Computer Science, and I didn’t understand a lot of it the first time around.
> _[Jeff Casimir](http://jumpstartlab.com/news/archives/2014/02/15/prototypical-conference-talks)_

Here's one of Pat Shaughnessy's talks - a deep dive into ActiveRecord. While most Ruby on Rails developers at the conference have used ActiveRecord, most of them probably don't know exactly how it works under the hood, so they get a lot of value out of learning these mysterious internals.

<div class='embed-container'><iframe src='https://www.youtube.com/embed/rnLnRPZZ1Q4' frameborder='0' allowfullscreen></iframe></div>

_Twenty Thousand Leagues Under ActiveRecord by Pat Shaughnessy_

### 4. The live demo

Live demos are among the most impressive (when they work) and the most underwhelming (when they don't) talks I've ever seen at a conference.

On the one hand, live coding a working application and showing the audience the results is a great way to illustrate how easy a new framework or tool can be. It's inspiring and impressive to watch, and you'll get some big "oohs" and "ahhs" when it goes perfectly.

On the other hand, it rarely goes perfectly.

> "Have backups. If your demo breaks on stage, revert to showing the video of the same thing in action."
> _[Tomasz Lakomy](https://dev.to/tlakomy/what-i-wished-someone-told-me-about-speaking-at-tech-conferences-3opp)_

I saw one live coding talk where the presenter accidentally deleted his whole template and all his notes just minutes before the talk. He was so flustered that he had to bow out early and apologize for being ill-prepared. That's probably the worst-case scenario.

If you do choose to attempt a live demo have a robust backup plan, practice a ton, and make sure you can test it out on the same equipment you'll use for the actual presentation.

In this example, Andrew Sorensen live codes a concert for his audience. While he's working, he explains what's happening and never drops a note. Best of all, he keeps the whole show to a tight 10-minute time slot. This is really impressive, and I can't imagine how much preparation has gone into it.

<div class='embed-container'><iframe src='https://www.youtube.com/embed/yY1FSsUV-8c' frameborder='0' allowfullscreen></iframe></div>

_The Concert Programmer by Andrew Sorensen_

<div class="card bg-info-light mb-3">
<div class="card-body">
  <h5 class="card-title">
    <strong>Like this guide?</strong><br/>
    Subscribe to get advice, interviews with conference speakers, and new speaking opportunities in your inbox every week!
  </h5>
  <form
    class="row"
    action="https://cfpland.us15.list-manage.com/subscribe/post?u=4eba8b205fc13380cd3e6f3fc&amp;id=258f553f4e"
    method="post"
  >
    <div class="col-sm-12 col-md-8">
      <input
        name="EMAIL"
        type="email"
        class="form-control mb-2"
        id="emailInput"
        aria-label="Enter email to get CFPs in your inbox every week"
        placeholder="Enter email"
        required
      />
    </div>
    <div class="col-sm-12 col-md-3">
      <button type="submit" class="btn btn-secondary btn-block mb-2">
        Sign Up
      </button>
    </div>
  </form>
</div>
</div>

## Conference Presentation Tools

Once you land on a format for your talk, you'll need to decide which tools you want to use to give the presentation. I'd recommend using the tools you're most familiar with until you get really comfortable speaking on stage. Once you've done this a few times, you can try to get creative, but don't buck the system your first time.

### 1. Slides

Most talks center around a slideshow. PowerPoint and Google Slides are probably the most common options, but [Prezi](https://prezi.com/) and [Reveal](https://revealjs.com/#/) are also good choices. Again, start with the tools you're most comfortable with and experiment later.

### 2. Audio-Visual Aids

Some speakers like to show short video clips during their presentation. If you do this, be very certain you know the audio will work once it's up on the big screen. There's nothing worse than trying to put the microphone near your tiny laptop speakers to amplify the sound.

### 3. Microphone

Generally, the conference will provide a microphone if it's necessary, but I've met a few speakers who bring their own because they want to be sure it's a device they're used to. The downside to this is that you'll have to coordinate with the conference's AV team, and some conferences may not make special accommodations like this.

### 4. Remote

I like to walk around while I'm on stage, so when possible, I bring a remote to advance my slides. You can get one for cheap online, or you could try to use a wireless mouse in a pinch. Most conferences don't provide this for you.

### 5. Laptop

Finally, you'll likely need a device to present from. While occasionally conferences will provide one, most prefer you connect your own before you speak. Be sure your battery will last for the duration of your talk and don't count on a charger being available.

I mention all these accessories here because you probably want to practice with the same devices you use for the real thing.

## Building Your Presentation

Much of the same advice that applies when [writing your abstract](../submitting/) also applies when creating your presentation, but I'd like to point out a few key tips for creating your slide deck and delivering your presentation.

### 1. Mix stories and information

> Stories, metaphors, examples, jokes, pictures, videos and other props are all excellent ways to keep things interesting, but make sure that they clearly relate to your core takeaways.
> _[Mark Walker](https://blog.prezi.com/speaking-at-a-conference-here-are-10-things-the-organizer-wants-you-to-keep-in-mind/)_

No matter what format you use for your presentation, the best ones are a mix of stories and factual guidance or information. The most common weakness that technology speakers present is not including any interesting anecdotes to help capture their audience's attention.

Every speaker and talk is different, but as you build your presentation, make sure that you're weaving in stories that illustrate your points.

### 2. Use slides for illustrations

> People can only process one inbound message at a time. They will either listen to you or read your slides; they cannot do both.
> _[Mark Duarte](https://www.duarte.com/wean-yourself-from-presentation-slides/)_

Another common mistake speakers make is to fill every slide with bullet points. Because your audience can only listen _or_ read, you should be very careful with the amount of text you cram into a slide.

This can be a hard habit to break, but it might help to set up speaker notes so that you can look at your bullet points while your audience can actually listen to you or look at an image that frames your topic on the screen.

> Your slides only really serve three good purposes: entertainment, illustration, and roadmap. Anything else is distracting your audience from listening to you.
> _[Cassie Kozyrkov](https://hackernoon.com/dressing-for-the-stage-theatre-rules-apply-90a29614ad67)_

### 3. First and last slides

> I always set the conference logo on the cover slide. The people behind the conference have put a lot of effort into the organization, it’s only fair play to promote their brand by doing so. Plus, they generally provide logos, so it’s a no-brainer.
> _[Nicolas Fränkel](https://blog.frankel.ch/advices-junior-conference-speakers/)_

Your cover slide will spend a little time on screen while you get set up and your audience gets settled. For that reason, you should probably include the title of your talk (that way people will know they're in the right place), your name, and the name or logo of the conference you're speaking at. If the talk is being recorded this is especially important as it will serve to introduce future online viewers as well.

Your last slide should probably include contact information (if you want to provide it) and a link to your slides or notes so that anyone who wants more detail can go find it. This last slide will probably be up for Q&A and until the next speaker is ready to take the stage.

### 4. Humor

> Keep politics and religion out of your sessions. Also, avoid sexualized imagery, and try not to be an asshole about other people to make a point.
> _[Jono Bacon](https://www.jonobacon.com/2019/01/21/get-your-cfp-session-picked/)_

<img src="https://i.imgur.com/Uk7Zl4m.jpg" class="right" />

While you want to be an entertaining speaker, you were not invited to this conference as a standup comedian. Making a programming joke or two during a technical talk is probably okay, but anything that could be considered "dark", "edgy", or "controversial" should probably not be included.

If you are unsure, practice your jokes with a trusted friend or colleague first. Everyone likes a funny speaker, but you don't want to be remembered as the speaker who offended half the room by going too far.

### 5. Practice

> Stand up and practice out loud. If you screw something up, do not stop. You won't get to repeat the whole talk on stage so having those prep sessions at home will make you well prepared for any mishap that might happen on stage.
> _[Tomasz Łakomy](https://dev.to/tlakomy/what-i-wished-someone-told-me-about-speaking-at-tech-conferences-3opp)_

I've met a few speakers who know their subject matter so well that they don't really practice anymore, but this is rare. Almost all of the best speakers I've talked with practice a lot, especially with a new talk. I typically run through my talk at least 25 times before I give it on stage at a conference.

At the same time, you don't want to sound robotic, so don't memorize a speech word-for-word. Instead, work of bullet points or notes to give you a good idea of which stories and information come at what times. The only things you might want to rehearse to the point of memorization are your opening line, your closing line, and key transition points.

> Local user group meetups are always looking for speakers so if you approach them you will rarely hear a, 'no.'
> _[Geshan Manandhar](https://www.cfpland.com/blog/speakers-story-geshan-manandhar/)_

Practicing alone in front of a mirror is step 1, but most speakers recommend also getting some practice in front of a real group of people. Invite a few of your coworkers to a lunch-and-learn or submit your talk to a Meetup group. As the organizer of a Meetup in Chicago, I can tell you that we always like getting talks submitted by the community.

### 6. Smile and look like you're having fun

> Enjoy being on the stage and sharing your learnings and experience. Smile! Tell a joke. Be human, and you’ll notice the audience respond to you.
> _[Mark Walker](https://blog.prezi.com/speaking-at-a-conference-here-are-10-things-the-organizer-wants-you-to-keep-in-mind/)_

Finally, as you practice the transitions and mechanics of your talk, remember to smile and convey enthusiasm. Even if you're actually a nervous wreck underneath, people in the audience can rarely tell if you put on a brave face. Faking enthusiasm and calm usually helps keep you that way, so it's okay if this doesn't feel natural at first.

Creating a presentation for a conference talk is a never-ending job. You'll probably refine your talks each time you give them, customize them based on the time slot and audience, and learn new things to add every year. As you do, keep in mind the presentation tips above.

Now that you've started preparing your presentation, it's time to get ready for the conference itself. In the next section, we'll talk about the pre-conference and pre-talk logistics and best practices you should know about as a new speaker.

<a class="text-left d-block" href="../success-rejection/">Previous: Dealing with Success or Rejection</a>
<a class="text-right d-block" href="../pre-conference/">Next: Preparing for the Conference</a>
