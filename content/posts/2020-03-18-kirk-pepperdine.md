---
title: 'Speaker’s Story: Kirk Pepperdine, Founder and Principal Engineer'
date: '2020-03-18'
layout: post
path: '/blog/speaker-kirk-pepperdine/'
image: 'https://drive.google.com/uc?id=1PzxbxD-GRJu4Z3fp-tV5whC-y6POyS9D'
category: "Speaker's Story"
---

[GOTO Chicago](https://gotochgo.com/2020/) will be more accessible than ever now that it's [all online](https://blog.gotocon.com/2020/03/16/better-than-the-real-thing:-goto-chicago-goes-virtual/), so I'm excited to
bring you a speaker story from one of the many great speakers scheduled for the event. Kirk Pepperdine sold the company he founded
to Microsoft, and now helps build the Java experience for Azure.

Kirk has spoken at countless conferences (as evidenced by his trove of event badges), and is currently talking about performance
tuning for Java. In his interview below, he talks about his current work, how he has built up a workshop over years, and what he's learned about what people expect out of conference speakers. Read on for more of Kirk's story.

<!--more-->

### Tell me about yourself. What's your job and how did you get into speaking?

<img src="https://drive.google.com/uc?id=1PzxbxD-GRJu4Z3fp-tV5whC-y6POyS9D" class="right" />

I’m a principle engineer at Microsoft. This all came about as a result of Microsoft acquiring jClarity, a small performance tooling company that I co-founded. Microsoft was looking to build a team of Java experts to help them create the best experience possible for Java in Azure. Plus, Microsoft owns a surprising number of Java assets so adding more Java expertise makes sense. I’m very humbled to be part of a groundbreaking team inside Microsoft. Right now we’re tuning a number of internal applications as well as continuing to build out performance diagnostic tooling that we were developing at jClarity.

As for side projects, I’m picking at a few ideas in the performance tooling and diagnostic space at the moment. Difficult to say what will see the light of day at the moment but I expect at least one of them will be released sometime this year.

And there is always [jCrete](https://www.jcrete.org/), an unconference that I cofounded with [Dr. Heinz Kabutz](https://twitter.com/heinzkabutz). I don’t know how, but we’ve managed to create an environment that has attracted a significant number of the most notable names in the Java space. It’s been very satisfying to watch people come to jCrete, be inspired by the incredible amount of talent and then take that energy and create things with it.

[JITWatch](https://github.com/AdoptOpenJDK/jitwatch) is an amazing tool that was inspired by Chris Newland's understanding of some of the compiler people that he was speaking to. Even more satisfying was watching some of the kids who were tagging along with mum or dad to the conference gain interest in what was going on to the point where they’d start participating. At least one of the kids took the ideas from jCrete back to her high school and setup an unconference there for a completely un-IT subject.

That brings me back to the point, when we invite a person to attend jCrete, we don’t only invite the person, we have invited his or her’s family or partner whom are perfectly accepted to attend sessions. In a few cases we’ve had spouses and partners propose and lead sessions on topics related to their profession that has relevance to our everyday lives. Having spouses, partners, kids all about creates an amazing atmosphere which is surprisingly beneficial for learning and sharing experiences.

### What do you like about speaking at conferences?

I like sharing knowledge. To have the chance to share something that may help make a developers life easier or help them better understand how something works is very fulfilling. It’s also a great time to connect with people, attendees and other speakers to talk tech, toss around ideas, and see the progress others have made on their pet projects.

### What makes Java performance tuning such an interesting topic for you?

To be honest, early on in my career I was not interested performance tuning. I just became the “goto” guy because I was perceived as having some knack of seeing the source of performance problems and so people kept coming to me when they had issues and I just kept solving them.

This is how I came to work with Jack Shirazi. We were working together on a project in a bank and after a disastrous false start, management came to Jack and myself and assigned us the glorious task of tuning it. Jack took the experience and our notes to write Java Performance Tuning which was a perennial best seller for O’Reilly for the longest time. Jack then started [the companion site (www.javaperformancetuning.com)](http://www.javaperformancetuning.com/) where I helped him launch. Afterwards we worked together to get the first version of a performance tuning workshop together and before we were ready, people started asking for it. After launch I continued on with the workshop and it’s been a living work in progress ever since.

A big part of maintaining and evolving the workshop has been, how can I better describe this point so that I can get a better success rate when people try it out on life like problems.

From this and my consulting practice I eventually formed the seals of a performance diagnostic process. This immediately had an effect on attendees. I had a tuning exercise that took a couple of hours each day over the 4 days to work through. After I introduced the methodology I started seeing attendees complete the entire exercise in 2 to 3 hours.

It was an amazing productivity boost. Even better were the emails I’d get after the workshop ended. People were telling me that they were able to solve long standing nagging problems in minutes. It’s funny but when people try to customize the workshop for their own companies “special” needs they almost always want do drop the methodology section. I never let them do that. It is my opinion that the methodology is the _most_ important topic of the workshop and the final exercises are there just to deepen the understanding of that process.

I’m not going to claim that my methodology is a silver bullet and there isn’t any other way to tune. Certainly there are others in the industry such as Branden Gregg that has a well thought out methodology. And of course there are others such as Heinz Kabutz, Peter Lawrey, Martin Thompson, Charlie Hunt, Monica Beckwith, Todd Montgomery, Cliff Click, Gil Tene and of course Jack Shirazi and others that I’ve taken inspiration from that have a lot to say on the subject.

### Do you remember your first conference talk?

My first conference talk was at one of the first Devoxx. Jack and I had a two hour session. I remember the room was pretty big and pretty full. **I remember being very nervous about the entire thing and I was very happy when it was over.** I remember the immediate feedback was friendly but I’d have to say that the materials have matured considerably since then.

### How many conferences have you applied to and spoken at?

I’ve no idea as I’ve completely lost track. I did keep all of the conference badges. Here's a picture of some of them:

![Conference Badges](https://drive.google.com/uc?id=1slhdy-kQPgrV7SKJ3P8NdxjTc32eis5V)

### Do you have a pre-talk routine?

Good question, I guess I do. After getting wired up…If there is someone in the audience that I know I’ll sit with them and just talk about nothing in particular. Otherwise I generally just try to clear my mind and relax.

### What advice do you have for new speakers?

We generally always have a a session at [jCrete](https://www.jcrete.org/) about becoming a better speaker.

From the years of attending these the common conclusion is **people like stories, they like to be entertained and most importantly they are there to learn something that is relevant to their day to day existence as a developer.** If you can combine all of these elements into a talk then you’re generally going to be well received and the talk will be memorable.

For effects, I use diagrams in favor of words, single words instead of walls of text, blank slides when the audience should be focusing on your voice and not be distracted reading a wall of text. When you believe your slide deck is finished, that is the time to start thinking about presentation and how the material fits onto the slides and what can be done to improve the visual aspects of the talk. In my experience, Audiences tend to respond well to desks that say, I cared enough to take the extra time to make this visual appealing.

### Are there any other speakers you look up to? Anyone who's inspired you?

There is a long list of speakers that I look up to for many different reasons. [Dr. Heinz Kabutz](https://twitter.com/heinzkabutz) for his mastery of his subject matter, [Dr. Venkat Subramaniam](https://twitter.com/venkat_s) for his ability to take an audience on amazing journeys, Adam Bien one of the original live coders, Josh Long, amazing energy and his ability to project it onto the audience, Ted Neward, Cameron Prudy, and the list goes on and on.

Learn more about [Kirk Pepperdine and his upcoming talk at GOTO Chicago here](https://gotochgo.com/2020/speakers/1323/kirk-pepperdine).

---

_Technology conference speakers come from a wide range of backgrounds, experience levels, and interests. At [CFP Land](https://www.cfpland.com/), we highlight different speakers every week in our Speaker’s Story blog posts. If you’re a tech conference speaker, email [karl@cfpland.com](mailto:karl@cfpland.com) to tell your story._ 💌
