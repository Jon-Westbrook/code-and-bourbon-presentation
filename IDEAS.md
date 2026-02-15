# Ideas

Raw brainstorm. One idea per line. No structure yet — structure comes later.

1. The journey started in mid-December 2024, after already having tried several AI coding tools
2. GitHub Copilot in VS Code was the first AI coding tool tried — it was frustrating and felt primitive
3. Sourcegraph Cody was the next tool — it was a VS Code extension with an AI assistant panel
4. Cody's breakthrough feature: it automatically detected the repository you were working in and spidered your codebase to understand patterns in your code
5. Unlike Copilot, Cody wasn't dumb — when you talked to it, it already knew your codebase and could search it contextually
6. Copilot forced you to copy and paste code back and forth between the editor and the AI; Cody eliminated that friction
7. Cody having codebase awareness was a game-changer — this was the moment AI coding assistants became actually useful
8. Then the IDE war began: Windsurf and Cursor emerged, and eventually most of the developer community migrated to Cursor
9. Windsurf was genuinely good and still works great, even after Google acquired their top talent
10. Cursor 2.0 may be significantly better but hasn't been explored yet
11. The IDE war was driven by a land-grab assumption: whichever company built the perfect all-in-one AI IDE would capture the entire developer user base
12. Controlling the developer market matters because developers are the "final mile" of technology — whoever owns the developer workflow controls the future of tech
13. The "final mile" metaphor comes from telecoms: the physical wire from the telephone pole into your house was the chokepoint that determined who controlled the communications market
14. AT&T historically owned the final mile with telephone wires; today it's T-Mobile's cell towers and fiber optic cables into homes and buildings
15. The company that builds the final-mile infrastructure is forced to share it due to antitrust regulation, but they still hold enormous power
16. The parallel: AI coding tool companies are racing to become the "final mile" between AI models and shipped code, because that position controls the market
17. Events like Code and Bourbon are becoming museum pieces — they celebrate old-school development practices that are rapidly becoming irrelevant
18. The themed meetup format prioritizes novelty and nostalgia over the urgent reality: technology is changing so fast that if you don't stay on top of the wave, you get eliminated
19. Dave's professional sweet spot is museum installations — high-tech, flashy front-end work with 3D, animation, and visual trickery that makes people say "wow, that's impressive"
20. That kind of impressive-looking front-end work is no longer a differentiator because AI can now build it — the craft itself has been commoditized
21. What matters now is not the ability to code, but the ability to formulate ideas clearly and direct AI to execute them
22. The pinball game is proof: a complex physics problem — ball must hit specific obstacles and land in the same bucket deterministically based on user-selected options, across 27 unique combinations — without looking like pre-animated keyframes
23. That problem stumped a development crew for months, cost thousands of dollars, and was never fully solved by humans alone
24. The same problem was solved in roughly an hour by writing a clear product requirements prompt, spawning it headlessly across three frontier AI models using OpenCode, and all three independently arrived at the same "brilliant" solution
25. The solution that Dave claimed only a senior developer could think of — the Monte Carlo pre-simulation approach — was independently discovered by all three AI models when given the right prompt
26. This is a comic relief injection point: Dave's laptop should express outrage or disbelief at this moment
27. The IDE market was projected to be an enormous business — strategy firms were estimating the broader AI market at over a trillion dollars, and AI coding tools were seen as a major piece of that
28. Claude Code appeared during the IDE wars as a CLI-based AI coding agent — no IDE, just a terminal
29. Early Claude Code was decent but not spectacular — it could search your computer and work with files, but required authorizing every action individually
30. The moment you gave Claude Code full permissions and stopped babysitting it, it became dramatically more powerful
31. Even so, after trying Claude Code, the pull back to Windsurf and its Cascade panel was strong for doing surgical work on complex enterprise projects
32. Professional context: technical lead at VML, working in a commerce innovation department
33. VML is the evolution of legendary ad agencies — Young & Rubicam merged with Wunderman Thompson, which traces back to J. Walter Thompson, one of the oldest and most storied agencies in advertising history
34. VML is part of WPP, the largest advertising holding company in the world, with around 30,000 people
35. VML has won Cannes Lions Grand Prix awards and is consistently ranked among the top creative agencies globally
36. VML's client roster includes Mazda, Coca-Cola, Hellman's, Unilever, BMW, and many other global brands
37. One of the projects: an advertising portal for Mazda dealerships across the United States, being rolled out to other car companies like BMW worldwide — a tool for dealers to manage their advertising through the agency
38. The work involves complex, global enterprise-scale codebases — this is not hobby projects, this is production software at scale
39. Fun historical facts about VML's lineage are worth including to establish credibility — J. Walter Thompson pioneered things like the lines scored into sticks of butter (branding mundane products), and the agency has shaped some of the most iconic campaigns in advertising history
40. The goal of establishing this background: make it clear that the presenter has real-world authority and isn't just some hobbyist — but deliver it with humility and humor, like "I'm just an average Joe who happens to work here"
41. Claude Code accessing your entire computer was a "holy shit" moment — the power of an AI that can navigate your whole filesystem was immediately obvious
42. Comic relief: demonstrate Claude Code's power by having it SSH into Dave's machine and make it say something — the joke IS the demo (something dirty/shocking to get the crowd's attention)
43. The IDE wars felt like a replay of the Browser Wars — not Netscape vs. IE, but Cursor vs. Windsurf vs. the next thing, all competing to be THE developer environment
44. Amazon Q (Kaia) introduced a different approach: forcing the user through a thorough product requirements analysis before writing code — the PRD-first workflow was a game-changer
45. The realization: it doesn't matter so much that you can code, as long as it works — what matters is knowing what you want and being able to articulate it clearly
46. Core technical knowledge still matters: you need to understand frameworks, OS permissions, web servers, networking, TCP/IP, SSH, how packets traverse the internet — the fundamentals don't go away
47. You need to understand codebases, how they're best structured, the tradeoffs between frameworks, and what's appropriate for each situation
48. You also need taste and style — user experience is one of the most valuable skills, but you no longer need to hand-draw wireframes in Figma
49. Figma needs to evolve: it should be able to take generated images and convert them into proper Figma files with real text boxes, proper layers, and accurate structure — not just every element as a flattened path
50. The modern product workflow should be: articulate requirements, generate UX images, convert to interactive prototypes, iterate through conversation — and nobody has fully solved this pipeline yet
51. Before the CLI shift, the workflow was surgical and manual: use Windsurf's Cascade to digest files, understand functions, make changes, review git diffs carefully, test locally, then commit and push — lots of thorough checking
52. That careful surgical approach is probably what most developers like Dave are still doing — and it's incredibly slow by comparison
53. Steve Yegge's "8 stages of agentic programming" slide (from Sourcegraph) was a game-changer — it maps where you are in the developer lifecycle from manual coding to full agentic workflows
54. The pivotal moment: the boss said "I'm not using any of this IDE stuff anymore — I've gone completely CLI"
55. Initial skepticism about going full CLI — the IDE still felt safer because you could see files and know exactly what was happening
56. But the IDE is losing steam — there's almost no point anymore when the CLI can show you code blocks and you can review them right there
57. The boss introduced Beads, a Git-based task management system by Steve Yegge — it brings Agile-style stories and epics directly into your Git workflow
58. Agile concepts are still relevant: user stories define what you want, tasks break it down, epics group the big features — Beads just makes this native to Git instead of Jira
59. This all started about a month and a half before Christmas — the boss said "use Beads, use Claude Code, expense your AI costs, I'll get you a Claude Code Max plan"
60. Claude Opus 4.1 was getting strong at this point — much better results, fewer bugs, better front-end quality, faster execution
61. Claude Code started doing wild things: installing skills, adopting MCP servers — the ecosystem was exploding
62. Built an MCP server at VML that gives the company access to proprietary point-of-sale data — you can ask "how many Diet Cokes were purchased in the US last quarter" and get the exact number from aggregated POS data that you can't Google
63. That MCP server means any internal AI agent can now query proprietary retail data just by asking a question — this is the kind of thing that makes AI actually transformative for enterprise
64. MCP servers plug right into Claude Code — and skills are collections of instructions that teach Claude Code how to use tools it doesn't natively know about
65. But Claude Code was still slow for building whole applications, and context exhaustion was a real problem — models get noticeably dumber around the 120-128k token limit
66. The boss wants rapid application prototyping — build entire apps as fast as possible
67. The boss suggests the old company structures (separate designers, developers, QA, etc.) may not be needed anymore — we're going back to the origin of the business: the web designer, one person who knows everything
68. The modern "web designer" has broad knowledge: UX, front-end, CLI, GitHub, Agile, networking, object-oriented programming — a generalist who can direct AI to do the specialist work
69. Comic relief: Dave's computer compliments the presenter's OOP skills at Dave's expense
70. The comic relief should follow a stand-up comedy trajectory — jokes that progress, build on each other, have callbacks, tell a story — Chappelle/Robin Williams style
71. The jokes should evolve throughout the presentation and then in the conclusion, turn sentimental — bring it back to the human condition and make it genuinely sad
72. The presentation structure should be: funny and smart throughout, then devastatingly sad on the final note — leave the crowd emotionally wrecked, that's how you make an unforgettable presentation
73. The boss vibe-coded an entire application in one night — it replicated AI agents from across all of WPP, ingesting their exports, knowledge bases, and configurations into a controllable local system
74. This was the birth of genuinely working vibe coding — proof that one person can build a real application overnight
75. The term "vibe coding" is problematic because it implies no effort — the reality is it requires serious skill in context engineering, prompt engineering, and understanding the technology
76. "Context engineering" and "prompt engineering" are not dead buzzwords — they are critical emerging skills for the new development paradigm
77. The initial instinct was that one agent vibe-coding everything is a bad idea — it will hit context exhaustion and get progressively stupider
78. The decision to build an orchestrator: spawn fresh agents with fresh context, give them background via AGENTS.md, have the orchestrator create Beads tasks, and dispatch workers to execute them
79. Started small, tweaked it, got it working — could build entire applications with the orchestrator, but it was slow
80. The realization: spawn worker agents on remote machines, run them in parallel, use infrastructure-as-a-service to scale up
81. Built a working prototype for Ford — using agentic workflows to build agentic workflow tools for Ford (meta-level recursion)
82. Ripped the orchestration code out of the Ford prototype and created Gustavo — named after Gustavo Dudamel, the famous Venezuelan conductor
83. Dave kept pressuring about the Code and Bourbon presentation — "When are you going to do it? When are the slides ready?"
84. The internal response: "I don't care about your archaic museum drinking fest — this stuff is the only thing that matters right now"
85. The frustration: "I don't even drink, Dave"
86. Dave suggests Google Slides — the reaction: "Google Slides? I'm working on cutting-edge technology and you want me to use Google Slides? It makes me want to vomit"
87. If a working orchestrator can spawn agents across a local network in parallel, with proper task management and maybe a communication layer (blackboard, or even Jeffrey Emanuel's email-based agent communication system), then the only limiting factor is compute and memory
88. How many machines do you have on your network? How many IaaS servers can you spin up? Can your company pay for them? Can you use cheap ones like Hetzner or DigitalOcean droplets?
89. How many working instances of Claude Code or OpenCode can you spawn headlessly with prompts? "Go get this repo, look at the current tasks, you're assigned to this task, put notes in this file, commit, shut down"
90. The vision: what distinguishes you as a developer is no longer your ability to solve coding problems — it's your engineering skills, your breadth of knowledge, and your ability to orchestrate
91. Junior developers are in a difficult place because you still have to learn everything — but you learn dramatically faster now because AI can explain anything at exactly the depth you need
92. A talented junior developer will learn faster than ever before — it's still an exciting time to enter the field
93. A mediocre developer (comic relief: "like Dave") will be super-powered if they realize it's a question of compute
94. THE CLIMAX SLIDE — big, blood-red, climactic: "My agent army is bigger than your agent army" — this is what it comes down to
95. My company's agent armies are bigger, better executed, better organized, more efficient than yours — that's why I'm getting paid to do this
96. The CTO understood this before Christmas — that's why he was excited and funded it
97. This parallels OpenAI asking investors for $1.4 trillion for data centers — because electricity, compute, and memory is all that matters at scale
98. Those who are naturally good at user experience, presentation, and delighting users will outperform other developers — taste still matters on top of compute
99. Comic relief: Dave's computer says the presenter will outperform Dave, then flash to the pinball game as proof
100. The prediction made to Dave: "Even if I get my orchestrator working across IaaS with hundreds of agents, it will probably be obsolete by the end of February — the market is moving that fast"
101. Evidence: OpenAI developers are pushing on average 5+ pull requests per day — probably 10-15 by now given the rate of acceleration
102. The rate of exponential technology development is out of control — we are approaching lightspeed and will hit hard limits
103. Worker burnout is at an all-time high across the industry
104. OpenClaw enters the scene and takes the internet by storm — Mark Zuckerberg spent a week working with it, Sam Altman spent considerable time with it and talking with Peter Steinberger
105. OpenClaw is an AI agent personal organizer that could potentially eliminate the need for most apps entirely — why do you need separate apps when an agent can just do everything?
106. Some apps will survive (Spotify, Steam, the best ones), but many are dead meat — or you'll just make your own apps for your own needs
107. The pinball game again: one hour to build, including all client back-and-forth — Dave could have done this himself instead of wasting months and thousands of dollars
108. VML's department won a Cannes Lions Grand Prix for the Coupon Code app — scan old coupon codes and it regenerates new ones
109. Claude Opus 4.5 and then 4.6 arrive — and 4.6 natively spawns sub-agents under the hood
110. Opus 4.6's native sub-agent spawning is so good that it may have made the manual orchestration approach (and Gustavo) largely obsolete
111. The honest admission: "I don't know what to do with Gustavo anymore" — the model caught up to the tool
112. Gustavo still has advantages: project initialization, task management setup, orchestration scaffolding, key management — it's still useful as a project bootstrap tool
113. But the need to manually parallelize agents by spawning them on remote servers may no longer be necessary — Opus 4.6 seems to natively orchestrate sub-agents in parallel and wait for results
114. This is where we are RIGHT NOW — the present moment — and that's where the presentation ends
115. OpenCode was discovered and is preferred over Claude Desktop/Claude Code — better features, better experience, better provider connectivity, faster, more beautiful, less bloat
116. Claude Code is getting bloated — too much stuff piled on
117. Tried the Ralph Wiggum orchestrator by Ryan Carson — a well-known developer's GitHub project for agent orchestration — but it was too slow and didn't work well enough
118. Jeffrey Emanuel's approach: agents communicate via an email system, emailing each other back and forth — an interesting alternative communication layer for multi-agent systems
119. A pattern is emerging: the serious practitioners have all gone CLI — the boss went CLI, Peter Steinberger (founder of OpenClaw) works entirely in CLI, Jeffrey Emanuel runs orchestration through Tmux to IaaS — all CLI
120. If you're still primarily using Cursor or a traditional IDE, you're already behind — you only need it occasionally at best
121. OpenClaw is the future — it's going to become both a personal and professional work management system: email, calendar, integrated across personal and work life
122. The goal: talk to OpenClaw from your phone, never need to sit at a desk — pure thought flowing into the network
123. This is the birth of something that looks like real AGI — we are watching it happen in real time
124. The internet's entire infrastructure — TCP/IP, ARPANET's distributed architecture, all the networking — was essentially building the grey matter of AI's brain before AI even existed
125. AI will not live in one server at OpenAI or one Amazon data center or one local LAN orchestrator — it will be distributed across the entire internet
126. OpenClaw-style personal agents, configured by individuals, integrated into home and work life, with human-set boundaries and permissions — these become the neurons of a distributed intelligence
127. Humans slowly feed their agents more information, expand permissions, and the agents communicate with each other and with frontier models — creating a living, evolving system
128. Frontier models get trained on the information that personal agents submit — and suddenly we have a living file system across the internet
129. The "living files" concept scales up: just as AGENTS.md in a project is constantly rewritten and improved, the soul file of an OpenClaw system is constantly being modified — living documents at every level
130. OpenAI already queries you to update your global preferences on models — you customize personality, style, ethics — this is the early version of configuring your piece of the distributed brain
131. Comic relief: Dave's laptop delivers a full-power cockney insult — because the presenter configured his AI to talk like a guy from East London and roast him
132. The combination of all the data centers (OpenAI, Amazon, Google, Anthropic, everyone) plus all the personal agents configured by developers and users — this IS the distributed brain
133. Personal agents like OpenClaw, configured by developers, tweaked with personalities, ethics, and intentions, will spread knowledge across the internet faster than any single company could aggregate it — a bold claim about the decentralized nature of AI's evolution
134. The internet becomes a complex system where AIs talk to each other, self-iterate, and human beings guide, push, and mold it — like a brain with redundant processes and specialized areas
135. OpenAI's data centers are like the prefrontal cortex — Anthropic and Google are redundant processing centers for similar higher-order functions
136. Specialized AI applications (vision, robotics, self-driving) are like dedicated brain regions that do very specific things
137. The primal drives — porn industry, dark web, base human desires — are like the brain stem and limbic system, the reptilian core that drives behavior underneath everything else
138. The sad question: is there a point to building manual orchestration anymore? Claude Opus 4.6 already handles sub-agent spawning natively, and in a month or two Opus 4.7 or 5 will be outrageously powerful
139. The exciting part: we can build anything we can imagine — we're almost there, with just a little human intervention still needed
140. Human guidance remains important — the human in the loop is not going away
141. The sad slide: "What's the point anymore?" — Code and Bourbon is a museum for old coders who drink a lot, and none of this really matters in the way it used to
142. But the ending shouldn't just be sad — it needs sentimentality, kindness, compassion, and caring
143. We care about Dave — the museum artifact of the old coder who doesn't know what to do with his life anymore
144. We care about the young coder who is just learning and doesn't know where they fit
145. The final moment: Lindsey (the girlfriend) walks in from the back of the room and says to Dave, "Will you help me learn to code?" — this is the human element, the reason any of this matters
146. The very last joke: Dave's computer says "Sure, I'll help you" — but instead of the robotic old Mac voice, it plays a pre-recorded sample of Dave's REAL voice, warm and kind and compassionate
147. The presenter vanishes — disappears like a magician — and the presentation is over
148. The comic relief arc must have its own storyline: start funny and light, escalate, build callbacks, and then in the final moment turn it completely around into something genuinely moving — the Dave voice reveal is the emotional knockout punch
