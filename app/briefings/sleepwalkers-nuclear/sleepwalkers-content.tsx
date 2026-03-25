"use client"

export default function SleepwalkersContent() {
  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">

        {/* Hero section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sovereign-gold/10 text-sovereign-gold rounded-full text-sm font-medium tracking-widest uppercase">
            White Tiger Publications
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#f0ebe3]">
            Sleepwalkers With Nuclear Weapons
          </h1>
          <p className="text-xl text-[#a0b4c8] max-w-2xl mx-auto italic">
            How Groupthink, Conformity &amp; Drunken Hubris Are Steering Civilization Toward the Abyss
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[#a0b4c8]">
            <span>February 2026</span>
            <span className="text-sovereign-gold">|</span>
            <span>A Deep Dive by J Panda</span>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-sovereign-gold">
            The Numbers That Should Terrify You
          </h2>
          <div className="not-prose grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-muted/30 border border-sovereign-gold/20 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-sovereign-gold">75%</p>
              <p className="text-sm text-[#a0b4c8] mt-1">Conformed to Obviously Wrong Answers (Asch)</p>
            </div>
            <div className="bg-muted/30 border border-korean-red/20 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-korean-red">65%</p>
              <p className="text-sm text-[#a0b4c8] mt-1">Administered Maximum 450V Shock (Milgram)</p>
            </div>
            <div className="bg-muted/30 border border-sovereign-gold/20 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-sovereign-gold">8</p>
              <p className="text-sm text-[#a0b4c8] mt-1">Symptoms of Groupthink (Janis)</p>
            </div>
            <div className="bg-muted/30 border border-korean-red/20 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-korean-red">20M</p>
              <p className="text-sm text-[#a0b4c8] mt-1">Dead from WWI Sleepwalking</p>
            </div>
            <div className="bg-muted/30 border border-sovereign-gold/20 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-sovereign-gold">92.5%</p>
              <p className="text-sm text-[#a0b4c8] mt-1">Obeyed When Distanced from Consequences</p>
            </div>
            <div className="bg-muted/30 border border-korean-red/20 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-korean-red">1</p>
              <p className="text-sm text-[#a0b4c8] mt-1">Dissenter Needed to Break the Spell</p>
            </div>
          </div>
        </div>

        {/* Editor's Note */}
        <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
          <p className="text-sm font-medium text-sovereign-gold uppercase tracking-wider mb-2">A Note from the Editor</p>
          <p className="text-[#f0ebe3]/90 leading-relaxed italic">
            You know what&rsquo;s wilder than any conspiracy theory? The documented, peer-reviewed, experimentally verified science of how entire civilizations can collectively lose their minds while being absolutely certain they&rsquo;re the smartest people in the room. This isn&rsquo;t speculation. This is decades of research by psychologists, historians, and political scientists who&rsquo;ve been screaming into the void about the exact mechanisms that are playing out right now on the world stage. Grab a coffee. You&rsquo;re gonna need it.
          </p>
          <p className="text-[#a0b4c8] text-sm mt-3">&mdash; J Panda, White Tiger Publications</p>
        </div>

        {/* Epigraph */}
        <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
          &ldquo;The first rule of the Dunning-Kruger club is you don&rsquo;t know you&rsquo;re a member.&rdquo;
        </blockquote>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Chapter 01: The Groupthink Machine */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sovereign-gold text-lg">01</span>
            <span className="text-sm text-[#a0b4c8] uppercase tracking-widest">Chapter</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">The Groupthink Machine</h2>
          <p className="text-lg text-[#a0b4c8] italic mb-6">How Irving Janis Decoded Elite Stupidity</p>

          <p className="text-lg leading-relaxed mb-6">
            In 1961, President John F. Kennedy assembled the most brilliant advisory team in American history. These were not idiots. Harvard graduates, Rhodes Scholars, seasoned diplomats, military strategists with decades of experience. And they unanimously approved what Janis himself would later call a &ldquo;stupid, patchwork plan&rdquo; to invade Cuba at the Bay of Pigs. The result was one of the most embarrassing foreign policy disasters in American history.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Yale psychologist Irving Janis spent years trying to understand how this happened. His answer, published in 1972&rsquo;s <em>Victims of Groupthink</em>, gave us a word that should be tattooed on the forehead of every policymaker on earth: <strong className="text-sovereign-gold">groupthink</strong>.
          </p>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;I use the term groupthink as a quick and easy way to refer to the mode of thinking that persons engage in when concurrence-seeking becomes so dominant in a cohesive ingroup that it tends to override realistic appraisal of alternative courses of action.&rdquo;
            <footer className="text-sm text-[#a0b4c8] mt-2 not-italic">&mdash; Irving Janis, 1972</footer>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Translation for the rest of us: when everyone in the room agrees with each other too much, they stop thinking. Not because they&rsquo;re stupid. Because they&rsquo;re human.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Eight Symptoms That Should Keep You Up at Night</h3>

          <p className="text-lg leading-relaxed mb-6">
            Janis didn&rsquo;t just name the disease. He dissected it. He identified eight symptoms that appear with terrifying consistency across every catastrophic group decision from Pearl Harbor to Vietnam to Watergate.
          </p>

          {/* Groupthink Symptoms Table */}
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-sovereign-gold">
                  <th className="text-left p-3 text-sovereign-gold font-mono text-sm">#</th>
                  <th className="text-left p-3 text-sovereign-gold font-bold">Symptom</th>
                  <th className="text-left p-3 text-sovereign-gold font-bold">Description</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/90">
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-sovereign-gold">1</td>
                  <td className="p-3 font-semibold">Illusion of Invulnerability</td>
                  <td className="p-3">The group believes it cannot fail. We&rsquo;re too smart, too powerful, too exceptional.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-sovereign-gold">2</td>
                  <td className="p-3 font-semibold">Collective Rationalization</td>
                  <td className="p-3">Evidence that contradicts the group&rsquo;s beliefs gets explained away. Every. Single. Time.</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-sovereign-gold">3</td>
                  <td className="p-3 font-semibold">Unquestioned Belief in Group Morality</td>
                  <td className="p-3">We&rsquo;re the good guys. Our cause is just. Therefore anything we do is justified.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-sovereign-gold">4</td>
                  <td className="p-3 font-semibold">Stereotyping of Out-Groups</td>
                  <td className="p-3">The enemy is stupid, evil, irrational. We don&rsquo;t need to understand them because they&rsquo;re beneath us.</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-sovereign-gold">5</td>
                  <td className="p-3 font-semibold">Mindguards</td>
                  <td className="p-3">Gatekeepers who filter out inconvenient information before it reaches the group. Think tank editors, media gatekeepers, social media algorithms.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-sovereign-gold">6</td>
                  <td className="p-3 font-semibold">Self-Censorship</td>
                  <td className="p-3">Members who disagree keep quiet. They don&rsquo;t want to be &ldquo;that person.&rdquo; Career suicide isn&rsquo;t worth one meeting.</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-sovereign-gold">7</td>
                  <td className="p-3 font-semibold">Illusion of Unanimity</td>
                  <td className="p-3">Silence is interpreted as agreement. Nobody spoke up, so everyone must agree. Right?</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-sovereign-gold">8</td>
                  <td className="p-3 font-semibold">Direct Pressure on Dissenters</td>
                  <td className="p-3">Anyone who does speak up gets labeled. &ldquo;Putin apologist.&rdquo; &ldquo;Useful idiot.&rdquo; &ldquo;Isolationist.&rdquo; Career over.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4">The Bay of Pigs to Cuban Missile Crisis: A Study in Learning</h3>

          <p className="text-lg leading-relaxed mb-6">
            Here&rsquo;s the plot twist that should give everyone hope: Kennedy learned. After the Bay of Pigs humiliation, he completely restructured how his team made decisions. He invited outside experts. He held informal meetings. He formed subgroups. He sometimes left the room entirely so his presence wouldn&rsquo;t influence the discussion.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Eighteen months later, during the Cuban Missile Crisis&mdash;arguably the closest humanity has ever come to nuclear annihilation&mdash;his reformed process produced brilliant, calibrated decision-making. Janis found <strong className="text-sovereign-gold">zero symptoms of groupthink</strong>. Kennedy&rsquo;s team saved the world precisely because they&rsquo;d learned from their worst mistake.
          </p>

          <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed font-semibold">
              The question is: who&rsquo;s learning now?
            </p>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Chapter 02: Calling White Black */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sovereign-gold text-lg">02</span>
            <span className="text-sm text-[#a0b4c8] uppercase tracking-widest">Chapter</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Calling White Black</h2>
          <p className="text-lg text-[#a0b4c8] italic mb-6">Asch&rsquo;s Conformity Experiments &amp; Why Smart People Lie</p>

          <p className="text-lg leading-relaxed mb-6">
            Solomon Asch wanted to prove something reassuring about human nature. In 1951, this Polish-American psychologist at Swarthmore College set up what he thought would be a slam-dunk demonstration that rational people resist social pressure when the truth is obvious. Instead, he accidentally proved the opposite and spent the rest of his career disturbed by what he found.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The setup was diabolically simple. Show people two cards. One has a single line on it. The other has three lines of obviously different lengths. Ask them which line matches. A child could get this right. And in the control group, with no social pressure, the error rate was less than 0.7%. Basically nobody got it wrong.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            But here&rsquo;s the twist: Asch planted seven actors in each group. These confederates were instructed to unanimously give the wrong answer on 12 of 18 trials. The real subject always answered last or second-to-last, after hearing everyone else confidently state an answer that was clearly, obviously, mathematically wrong.
          </p>

          {/* Big Stat Callout */}
          <div className="not-prose my-8 p-8 bg-korean-red/5 border-l-4 border-korean-red rounded-r-lg text-center">
            <p className="text-6xl font-bold text-korean-red mb-2">75%</p>
            <p className="text-lg text-[#f0ebe3]/90 font-semibold">of participants conformed at least once to an obviously wrong answer</p>
            <p className="text-sm text-[#a0b4c8] mt-2">Average conformity rate across all critical trials: 36.8% &bull; Only 24% never conformed at all</p>
          </div>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;The tendency to conformity in our society is so strong that reasonably intelligent and well-meaning young people are willing to call white black. This is a matter of concern.&rdquo;
            <footer className="text-sm text-[#a0b4c8] mt-2 not-italic">&mdash; Solomon Asch, 1955</footer>
          </blockquote>

          <h3 className="text-2xl font-bold mb-4">They Knew They Were Lying</h3>

          <p className="text-lg leading-relaxed mb-6">
            Post-experiment interviews revealed the most disturbing part: most conformers <em>knew</em> their answers were wrong. They weren&rsquo;t confused. They weren&rsquo;t persuaded. They just didn&rsquo;t want to be the weirdo who disagreed with everyone else. They prioritized social harmony over observable reality.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Psychologists identified two mechanisms at work. <strong className="text-sovereign-gold">Normative influence</strong>: conforming to be liked and accepted, even while privately disagreeing. And <strong className="text-sovereign-gold">informational influence</strong>: assuming the group must know something you don&rsquo;t, especially when the situation is ambiguous. The second one gets exponentially more dangerous in complex domains like foreign policy, where the &ldquo;answer&rdquo; isn&rsquo;t printed on a card.
          </p>

          <h3 className="text-2xl font-bold mb-4">The One Finding That Should Change Everything</h3>

          <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed">
              A <strong>single dissenter</strong>&mdash;just one person in the room saying the correct answer&mdash;reduced conformity by <strong className="text-sovereign-gold">75%</strong>. One voice. That&rsquo;s all it takes to break the spell. But when that one voice gets labeled a &ldquo;Putin apologist&rdquo; or a &ldquo;useful idiot&rdquo; and drummed out of the room? The conformity snaps right back. And everyone in the room starts calling white, black.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            A 2023 replication study confirmed the effect remains robust: 33% error rate in the standard condition, 38% for political opinions. Human psychology hasn&rsquo;t evolved in seventy years. We&rsquo;re still the same conforming primates we&rsquo;ve always been.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Chapter 03: Just Following Orders */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sovereign-gold text-lg">03</span>
            <span className="text-sm text-[#a0b4c8] uppercase tracking-widest">Chapter</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Just Following Orders</h2>
          <p className="text-lg text-[#a0b4c8] italic mb-6">Milgram&rsquo;s Obedience Studies &amp; the Banality of Evil</p>

          <p className="text-lg leading-relaxed mb-6">
            In 1961, while Adolf Eichmann sat in a bulletproof glass booth in Jerusalem claiming he was &ldquo;just following orders,&rdquo; Yale psychologist Stanley Milgram was asking the most dangerous question in social psychology: would ordinary Americans do the same thing?
          </p>

          <p className="text-lg leading-relaxed mb-6">
            He expected the answer to be no. He surveyed psychiatrists beforehand. They predicted that at most 1&ndash;3% of subjects would administer the maximum shock. Americans, after all, were different. Exceptional. We would never blindly follow immoral orders.
          </p>

          <div className="not-prose my-8 p-8 bg-korean-red/5 border-l-4 border-korean-red rounded-r-lg text-center">
            <p className="text-6xl font-bold text-korean-red mb-2">65%</p>
            <p className="text-lg text-[#f0ebe3]/90 font-semibold">of participants administered the maximum 450-volt shock</p>
            <p className="text-sm text-[#a0b4c8] mt-2">100% went to at least 300 volts</p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            These were not sadists. They sweated. They trembled. They laughed nervously. They begged the experimenter to stop. But when the man in the lab coat said &ldquo;The experiment requires that you continue,&rdquo; they continued. They pressed the button while another human being (an actor, but they didn&rsquo;t know that) screamed in agony, pounded on the wall, and eventually went silent.
          </p>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;Ordinary people, simply doing their jobs, and without any particular hostility on their part, can become agents in a terrible destructive process.&rdquo;
            <footer className="text-sm text-[#a0b4c8] mt-2 not-italic">&mdash; Stanley Milgram, 1974</footer>
          </blockquote>

          <h3 className="text-2xl font-bold mb-4">The Variations Tell the Real Story</h3>

          <p className="text-lg leading-relaxed mb-6">
            Milgram didn&rsquo;t stop at one experiment. He ran variations to find what would break the obedience.
          </p>

          {/* Milgram Variations Table */}
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-sovereign-gold">
                  <th className="text-left p-3 text-sovereign-gold font-bold">Variation</th>
                  <th className="text-left p-3 text-sovereign-gold font-bold">Obedience Rate</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/90">
                <tr className="border-b border-muted">
                  <td className="p-3">Original experiment (Yale laboratory)</td>
                  <td className="p-3 font-mono text-korean-red font-bold">65%</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3">Moved to run-down office (reduced authority)</td>
                  <td className="p-3 font-mono text-korean-red font-bold">47.5%</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3">Learner in the same room</td>
                  <td className="p-3 font-mono text-korean-red font-bold">40%</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3">Teacher holds learner&rsquo;s hand on shock plate</td>
                  <td className="p-3 font-mono text-korean-red font-bold">30%</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3">Someone else pushes button (teacher gives instructions)</td>
                  <td className="p-3 font-mono text-korean-red font-bold">92.5%</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-semibold text-sovereign-gold">Two confederates refuse to continue</td>
                  <td className="p-3 font-mono text-sovereign-gold font-bold">~10%</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-semibold text-sovereign-gold">Told they&rsquo;d be personally responsible for harm</td>
                  <td className="p-3 font-mono text-sovereign-gold font-bold">~0%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed">
              <strong>The crucial finding:</strong> Social support&mdash;other people saying &ldquo;no&rdquo;&mdash;was the most powerful defense against obedience. And when participants were told they would be <em>personally responsible</em> for any harm caused? Almost nobody obeyed.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            A 2012 French television replication dressed up as a game show achieved 81% obedience&mdash;even higher than Milgram&rsquo;s original 65%. The 21st century didn&rsquo;t make us better. If anything, the authority structures got more diffuse and harder to identify, making them harder to resist.
          </p>

          <h3 className="text-2xl font-bold mb-4">Agency Theory: The Mechanism of Moral Abdication</h3>

          <p className="text-lg leading-relaxed mb-6">
            Milgram&rsquo;s explanation was elegant and terrifying: people obey when they believe the authority will take responsibility for consequences. They enter what he called an <strong className="text-sovereign-gold">&ldquo;agentic state&rdquo;</strong>&mdash;they stop seeing themselves as moral actors and start seeing themselves as instruments of someone else&rsquo;s will. The bureaucrat who processes the paperwork. The analyst who writes the memo. The diplomat who transmits the talking points. None of them feel personally responsible for the policy. They&rsquo;re just following the process.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Chapter 04: The Mob Inside */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sovereign-gold text-lg">04</span>
            <span className="text-sm text-[#a0b4c8] uppercase tracking-widest">Chapter</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">The Mob Inside</h2>
          <p className="text-lg text-[#a0b4c8] italic mb-6">Deindividuation &amp; the Death of Personal Accountability</p>

          <p className="text-lg leading-relaxed mb-6">
            In 1895, French social psychologist Gustave Le Bon published <em>The Crowd: A Study of the Popular Mind</em> and freaked everyone out. His core insight: anonymity plus collective emotion equals the dissolution of individual moral restraint. When you become part of a group&mdash;any group&mdash;your personal identity gets submerged. You stop thinking with your own brain and start thinking with the group&rsquo;s brain.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Le Bon was writing about literal mobs in the streets, but the principle scales beautifully to elite institutions. Festinger, Pepitone, and Newcomb formalized the concept in 1952 as <strong className="text-sovereign-gold">&ldquo;deindividuation&rdquo;</strong>&mdash;a psychological state where personal identity becomes submerged in group identity.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Five Mechanisms of Moral Dissolution</h3>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-sovereign-gold">
                  <th className="text-left p-3 text-sovereign-gold font-mono text-sm">#</th>
                  <th className="text-left p-3 text-sovereign-gold font-bold">Mechanism</th>
                  <th className="text-left p-3 text-sovereign-gold font-bold">How It Works</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/90">
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-sovereign-gold">1</td>
                  <td className="p-3 font-semibold">Anonymity</td>
                  <td className="p-3">Not physical anonymity&mdash;psychological anonymity. The feeling that you&rsquo;re just one voice among many. Nobody will single you out.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-sovereign-gold">2</td>
                  <td className="p-3 font-semibold">Diffusion of Responsibility</td>
                  <td className="p-3">&ldquo;Everyone&rsquo;s doing it, so I&rsquo;m not personally accountable.&rdquo; The entire NATO alliance agrees. Who am I to dissent?</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-sovereign-gold">3</td>
                  <td className="p-3 font-semibold">Emotional Contagion</td>
                  <td className="p-3">Intense emotions spread through groups like wildfire. Fear, outrage, righteous anger&mdash;they bypass rational thought.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-sovereign-gold">4</td>
                  <td className="p-3 font-semibold">Reduced Self-Awareness</td>
                  <td className="p-3">Attention shifts from &ldquo;What do I actually think about this?&rdquo; to &ldquo;What is everyone else doing?&rdquo;</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-sovereign-gold">5</td>
                  <td className="p-3 font-semibold">Norm Substitution</td>
                  <td className="p-3">Personal moral standards get replaced by group norms. Deindividuation doesn&rsquo;t cause chaos&mdash;it shifts <em>which norms</em> govern behavior. And if the group&rsquo;s norms are insane&hellip;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose my-8 p-6 bg-korean-red/5 border-l-4 border-korean-red rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed">
              <strong>The critical revision:</strong> Crowds aren&rsquo;t actually irrational. Historical analysis shows crowds typically act on moral principles and popular consensus. The behavior is governed by whatever norms the group has adopted. If the group&rsquo;s norms are &ldquo;expand NATO, contain Russia, maintain American primacy at all costs,&rdquo; then every member will act rationally <em>within that framework</em>&mdash;while the framework itself is catastrophically detached from reality.
            </p>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Chapter 05: The Sleepwalkers */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sovereign-gold text-lg">05</span>
            <span className="text-sm text-[#a0b4c8] uppercase tracking-widest">Chapter</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">The Sleepwalkers</h2>
          <p className="text-lg text-[#a0b4c8] italic mb-6">How Europe Stumbled Into WWI Without Meaning To</p>

          <p className="text-lg leading-relaxed mb-6">
            Christopher Clark&rsquo;s magisterial 2012 study <em>The Sleepwalkers: How Europe Went to War in 1914</em> remains the most chilling book you can read in the current geopolitical moment. Not because it&rsquo;s about 1914. Because it&rsquo;s about right now.
          </p>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;The protagonists of 1914 were sleepwalkers, watchful but unseeing, haunted by dreams, yet blind to the reality of the horror they were about to bring into the world.&rdquo;
            <footer className="text-sm text-[#a0b4c8] mt-2 not-italic">&mdash; Christopher Clark, <em>The Sleepwalkers</em></footer>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Clark&rsquo;s core thesis is that no single country was solely responsible for WWI. It was a chain of decisions by different actors, by no means inevitable, where each power acted rationally within their subjective logic but failed to grasp the immensity of consequences. Every leader thought they were being prudent. Every general staff believed their plans were sound. Every diplomat thought the crisis could be &ldquo;localized.&rdquo;
          </p>

          <div className="not-prose my-8 p-8 bg-korean-red/5 border-l-4 border-korean-red rounded-r-lg text-center">
            <p className="text-4xl font-bold text-korean-red mb-2">Twenty million dead. Three empires destroyed.</p>
            <p className="text-lg text-[#f0ebe3]/90">The seeds of an even worse war planted. All because nobody in any of the decision-making rooms could step outside their own assumptions long enough to see what they were actually building.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4">The Austrian Hedgehog Syndrome</h3>

          <p className="text-lg leading-relaxed mb-6">
            Clark&rsquo;s description of Austrian decision-making should be required reading for every national security advisor on the planet: the Austrians &ldquo;resembled hedgehogs scurrying across a highway with their eyes averted from the rushing traffic.&rdquo; They glimpsed the possibility of Russian mobilization and general European war but&mdash;and this is the critical part&mdash;they never integrated it into their actual decision-making process. They saw the oncoming truck. They chose not to think about it.
          </p>

          <h3 className="text-2xl font-bold mb-4">The German Contribution: Blithe Confidence</h3>

          <p className="text-lg leading-relaxed mb-6">
            Germany&rsquo;s role was defined by what Clark calls <strong className="text-sovereign-gold">&ldquo;blithe confidence in the feasibility of localisation.&rdquo;</strong> They supported Austria-Hungary while assuming the resulting war could be kept small and contained. They misjudged Austria&rsquo;s chances of a quick war with Serbia. They discounted Belgian resistance. They believed Britain would stay neutral. And above all&mdash;like every other power&mdash;they showed no real grasp of the immensity of the war they were about to unleash.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Contemporary Parallel That Clark Himself Drew</h3>

          <p className="text-lg leading-relaxed mb-6">
            In a 2014 interview, Clark noted the parallel: all leaders feared a catastrophic outcome, but that shared fear wasn&rsquo;t enough to force collaboration. None of the individuals who brought about WWI actually wanted war. Certainly none wanted the war that actually happened. Yet they got it anyway, because the structures they operated within&mdash;the alliances, the mobilization timetables, the assumptions about honor and credibility&mdash;had a momentum of their own.
          </p>

          <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed">
              Replace &ldquo;mobilization timetables&rdquo; with &ldquo;NATO expansion commitments&rdquo; and &ldquo;alliance obligations&rdquo; with &ldquo;escalation ladders,&rdquo; and you have a pretty accurate description of where we are in 2026.
            </p>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Chapter 06: The Blob */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sovereign-gold text-lg">06</span>
            <span className="text-sm text-[#a0b4c8] uppercase tracking-widest">Chapter</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">The Blob</h2>
          <p className="text-lg text-[#a0b4c8] italic mb-6">Washington&rsquo;s Self-Licking Ice Cream Cone</p>

          <p className="text-lg leading-relaxed mb-6">
            In 2016, Ben Rhodes&mdash;Obama&rsquo;s Deputy National Security Advisor&mdash;gave the foreign policy establishment a nickname that stuck: <strong className="text-sovereign-gold">&ldquo;The Blob.&rdquo;</strong> He meant the permanent DC foreign policy class committed to perpetuating its own power and reinforcing the status quo. Career officials at State and the Pentagon. Think tank analysts at CFR, Brookings, AEI. Congressional staffers. Media figures. All promoting the same basic worldview: American primacy, military interventionism, NATO expansion, regime change.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The irony? Rhodes himself was part of the Blob. Despite positioning the Obama administration as challengers to the establishment consensus, they ended up conforming at almost every turn. More troops to Afghanistan. Failed to close Guant&aacute;namo. Continued most Bush-era policies. The Blob absorbs its critics. That&rsquo;s what it does.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Revolving Door of Consensus</h3>

          <p className="text-lg leading-relaxed mb-6">
            The mechanism is beautifully self-perpetuating. Career advancement depends on conformity. From undergraduate internships to NSC positions, access to opportunities flows through top mentors who prefer similar worldviews. Challenge the consensus? Good luck getting that Brookings fellowship. Question NATO expansion? Forget that State Department appointment. The rewards for conformity are proximity to power when your party&rsquo;s in office, and lucrative consulting or think tank positions when you&rsquo;re out.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            WestExec Advisors, the consulting firm founded by Antony Blinken, is the perfect symbol. A revolving door between government positions and private-sector influence-peddling, where the same people cycle through the same institutions reinforcing the same assumptions decade after decade. Albright Stonebridge Group, same thing. The Center for American Progress, the American Enterprise Institute&mdash;nominally left and right, but remarkably aligned on the fundamentals of American global military dominance.
          </p>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;What Biden needs is not mechanics but architects: people with the imagination and vision to create new arrangements and approaches. Unfortunately, because today&rsquo;s establishment places a high priority on conformity and remaining within a safe and increasingly nostalgic consensus, these are not the sort of people who rise to positions of power.&rdquo;
            <footer className="text-sm text-[#a0b4c8] mt-2 not-italic">&mdash; Stephen Walt, <em>Foreign Policy</em>, 2022</footer>
          </blockquote>

          <h3 className="text-2xl font-bold mb-4">The 16-Hour Blindfold</h3>

          <p className="text-lg leading-relaxed mb-6">
            One of the most underappreciated mechanisms: these people work 16-hour days. They don&rsquo;t have time to question whether the entire policy heading is catastrophically wrong. They&rsquo;re too busy executing. The system runs on momentum&mdash;a trillion-dollar annual enterprise that plows forward like an ocean liner. By the time anyone looks up from their desk long enough to ask &ldquo;Are we sure about this?,&rdquo; the ship has already turned toward the iceberg. And everyone else in the room is nodding approvingly.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Chapter 07: The Foam Finger Problem */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sovereign-gold text-lg">07</span>
            <span className="text-sm text-[#a0b4c8] uppercase tracking-widest">Chapter</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">The Foam Finger Problem</h2>
          <p className="text-lg text-[#a0b4c8] italic mb-6">Dunning-Kruger at a Civilizational Scale</p>

          <p className="text-lg leading-relaxed mb-6">
            Here&rsquo;s where it gets personal. The average American waves a big foam finger and chants &ldquo;We&rsquo;re Number One!&rdquo; while living in a country that can&rsquo;t land on the Moon anymore (despite having done it in 1969 with slide rules and less computing power than a modern phone), can&rsquo;t build a hypersonic missile that works reliably, can&rsquo;t produce enough artillery shells to sustain a single proxy war, and can&rsquo;t build new ships fast enough to replace peacetime losses, let alone wartime ones.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            This is the <strong className="text-sovereign-gold">Dunning-Kruger effect</strong> operating at civilizational scale. In 1999, psychologists David Dunning and Justin Kruger demonstrated that people who are bad at something systematically overestimate their competence&mdash;precisely because they lack the knowledge to recognize what they&rsquo;re missing. The first rule of the Dunning-Kruger club is you don&rsquo;t know you&rsquo;re a member.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Material Reality vs. The Mythology</h3>

          <p className="text-lg leading-relaxed mb-6">
            The foam-finger crowd still operates on a mythology built during the unipolar moment of the 1990s, when America genuinely had no peer competitors. That moment is over. The material basis for dominance has been eroding for decades, and the erosion is accelerating.
          </p>

          {/* Material Reality Stats */}
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-korean-red">
                  <th className="text-left p-3 text-korean-red font-bold">Metric</th>
                  <th className="text-left p-3 text-korean-red font-bold">Reality</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/90">
                <tr className="border-b border-muted">
                  <td className="p-3 font-semibold">Steel Production</td>
                  <td className="p-3">China produces more than the rest of the world combined</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-semibold">Shipbuilding Capacity</td>
                  <td className="p-3">Chinese shipyards have roughly <strong className="text-korean-red">230x</strong> US capacity</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-semibold">Artillery Production</td>
                  <td className="p-3">Russia sustains levels the entire Western alliance can&rsquo;t match</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-semibold">Defense Industrial Base</td>
                  <td className="p-3">Optimized for small numbers of expensive platforms; cannot surge to wartime levels</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-semibold">Supply Chains</td>
                  <td className="p-3">Run through countries that would be adversaries in a great-power war</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            As Stephen Walt wrote, every great power in history has succumbed to the hubris of believing its situation was exceptional. Athens did it. Napoleonic France did it. Imperial Japan did it. And in each case, the gap between perceived capability and actual capability produced catastrophic miscalculation.
          </p>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;Most great powers have considered themselves superior to their rivals and have believed that they were advancing some greater good when they imposed their preferences on others. The British thought they were bearing the &lsquo;white man&rsquo;s burden.&rsquo; The French invoked la mission civilisatrice. Even officials of the Soviet Union genuinely believed they were leading the world toward a socialist utopia.&rdquo;
            <footer className="text-sm text-[#a0b4c8] mt-2 not-italic">&mdash; Stephen Walt, <em>The Myth of American Exceptionalism</em></footer>
          </blockquote>

          <h3 className="text-2xl font-bold mb-4">The Double Standard Nobody Talks About</h3>

          <p className="text-lg leading-relaxed mb-6">
            A retired Chinese admiral once described the US Navy in East Asia as being like a man with a criminal record wandering just outside the gates of a family home. Imagine another great power operating warships in the Caribbean, lecturing America about its behavior, and appointing itself neutral arbiter of the region. The scenario is absurd precisely because Americans can&rsquo;t see their own behavior the way others see it. That&rsquo;s not malice&mdash;it&rsquo;s Dunning-Kruger. You can&rsquo;t recognize what you don&rsquo;t know you don&rsquo;t know.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The exceptionalist mythology insists that the United States is the primary guardian of international law. Yet the putative rule-maker has more often broken rules and acted in ways it would never tolerate from any other nation. The invasion of Iraq. The drone assassination program. The NSA&rsquo;s global surveillance apparatus. Extraordinary rendition. Each of these would be considered acts of war or crimes against sovereignty if conducted by Russia or China. But when America does it, it&rsquo;s &ldquo;leadership.&rdquo;
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Chapter 08: Synthesis */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sovereign-gold text-lg">08</span>
            <span className="text-sm text-[#a0b4c8] uppercase tracking-widest">Chapter</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Synthesis</h2>
          <p className="text-lg text-[#a0b4c8] italic mb-6">Drunken Hubris + Groupthink + Nuclear Weapons = &hellip;</p>

          <p className="text-lg leading-relaxed mb-6">
            Now put it all together. Every psychological mechanism we&rsquo;ve examined is operating simultaneously in the Western foreign policy establishment right now. This isn&rsquo;t conspiracy theory. This is documented, peer-reviewed social science applied to observable behavior.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Groupthink Checklist Applied to Current Western Policy</h3>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-korean-red">
                  <th className="text-left p-3 text-korean-red font-mono text-sm">#</th>
                  <th className="text-left p-3 text-korean-red font-bold">Symptom</th>
                  <th className="text-left p-3 text-korean-red font-bold">Current Manifestation</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/90">
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-korean-red">1</td>
                  <td className="p-3 font-semibold">Illusion of Invulnerability</td>
                  <td className="p-3">Belief in continued US primacy despite eroding material basis. The foam finger waves even as the factories close.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-korean-red">2</td>
                  <td className="p-3 font-semibold">Collective Rationalization</td>
                  <td className="p-3">All problems attributed to Putin&rsquo;s personal pathology, none to NATO expansion or Western policy choices.</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-korean-red">3</td>
                  <td className="p-3 font-semibold">Unquestioned Morality</td>
                  <td className="p-3">&ldquo;Rules-based international order&rdquo; = rules written by us, for us, enforced selectively by us.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-korean-red">4</td>
                  <td className="p-3 font-semibold">Stereotyping Opponents</td>
                  <td className="p-3">Russia as inherently, incorrigibly expansionist. China as existential threat. No need to understand their security concerns.</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-korean-red">5</td>
                  <td className="p-3 font-semibold">Mindguards</td>
                  <td className="p-3">Think tank consensus, editorial page gatekeepers, career consequences for dissent filter out alternative views.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-korean-red">6</td>
                  <td className="p-3 font-semibold">Self-Censorship</td>
                  <td className="p-3">Even critics like Rhodes end up conforming. The cost of dissent is too high.</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-3 font-mono text-korean-red">7</td>
                  <td className="p-3 font-semibold">Illusion of Unanimity</td>
                  <td className="p-3">Bipartisan agreement on hawkish policy mistaken for wisdom. If Democrats and Republicans agree, it must be right.</td>
                </tr>
                <tr className="border-b border-muted bg-muted/10">
                  <td className="p-3 font-mono text-korean-red">8</td>
                  <td className="p-3 font-semibold">Pressure on Dissenters</td>
                  <td className="p-3">Labeled as Putin apologists, useful idiots, isolationists, or fifth columnists. Career destruction guaranteed.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4">The 1914 Parallel Is Not Metaphorical</h3>

          <p className="text-lg leading-relaxed mb-6">
            Multiple powers viewing themselves as threatened and dominated. Overinterpretation of diplomatic signals. Blithe confidence in &ldquo;localization&rdquo; of conflicts. No grasp of the immensity of potential war. Elites on autopilot, not scrutinizing unprecedented dangers. Each side acting &ldquo;rationally&rdquo; within subjective logic while sleepwalking toward catastrophe. Every single element Clark identified in 1914 is present today, with one critical difference: <strong className="text-korean-red">the powers involved now have nuclear weapons</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The architects of Cold War containment, senior defense officials, former ambassadors to Moscow&mdash;all warned in the 1990s that NATO expansion would create exactly the crisis we&rsquo;re living through now. Owen Harries warned in 1996 that humiliating Russia further would be like making a wounded animal desperate. He was right. They were all right. And they were all ignored, because the Blob&rsquo;s consensus said otherwise, and 75% of people in any room will call white black rather than be the one dissenter.
          </p>

          {/* The Equation */}
          <div className="not-prose my-8 p-8 bg-korean-red/5 border-l-4 border-korean-red rounded-r-lg">
            <p className="text-sm font-medium text-korean-red uppercase tracking-wider mb-4">The Equation Nobody Wants to Solve</p>
            <div className="space-y-2 text-[#f0ebe3]/90 font-mono text-sm md:text-base">
              <p>&nbsp;&nbsp;75% conformity rate <span className="text-[#a0b4c8]">(Asch)</span></p>
              <p>+ 65% blind obedience <span className="text-[#a0b4c8]">(Milgram)</span></p>
              <p>+ Groupthink consensus machine <span className="text-[#a0b4c8]">(Janis)</span></p>
              <p>+ Deindividuated moral abdication <span className="text-[#a0b4c8]">(Le Bon)</span></p>
              <p>+ Self-perpetuating elite consensus <span className="text-[#a0b4c8]">(The Blob)</span></p>
              <p>+ Civilizational Dunning-Kruger <span className="text-[#a0b4c8]">(Foam Finger)</span></p>
              <p className="border-t border-korean-red/30 pt-2 text-korean-red font-bold text-lg">= EXISTENTIAL DANGER</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            When intelligent, credentialed people in positions of authority all reinforce each other&rsquo;s assumptions&mdash;when dissent is career suicide, when three-quarters of people conform to obviously wrong answers to avoid social disapproval, when two-thirds obey authority figures even when administering potentially lethal shocks, when group membership dissolves personal accountability&mdash;the result is not wisdom but collective insanity dressed in a three-piece suit.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            And when that collective insanity is steering great powers with nuclear arsenals toward confrontation based on an inflated sense of power and moral righteousness&mdash;when the material basis for that power is eroding while the mythology remains intact&mdash;the consequences won&rsquo;t be another Bay of Pigs embarrassment. They&rsquo;ll be civilizational.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Way Out</h3>

          <p className="text-lg leading-relaxed mb-6">
            Kennedy learned after the Bay of Pigs. He reformed. He invited dissenters. He created structures that forced his team to consider alternatives. A single dissenter in Asch&rsquo;s experiments reduced conformity by 75%. Reminding Milgram&rsquo;s subjects of their personal responsibility eliminated obedience almost entirely. The antidotes exist.
          </p>

          <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed text-lg">
              What&rsquo;s needed are people with the courage to be that <strong className="text-sovereign-gold">one dissenter</strong> in the room. People willing to call white, white&mdash;even when every credentialed expert around them is calling it black. People who understand that the deepest form of patriotism isn&rsquo;t waving a foam finger. It&rsquo;s having the intellectual honesty to ask whether the emperor has clothes.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The sleepwalkers of 1914 were watchful but unseeing. They acted within their subjective logic without grasping the horror they were building. We have no excuse. We have the research. We have the historical examples. We have the documented mechanisms. The only question is whether anyone with power will read them in time.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Footer */}
        <div className="text-center mt-16 mb-8">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sovereign-gold/10 text-sovereign-gold rounded-full text-sm font-medium tracking-widest uppercase">
            White Tiger Publications
          </div>
          <p className="text-[#a0b4c8] text-sm">iPurpose Consulting &bull; Victoria, BC &bull; February 2026</p>
          <p className="text-sovereign-gold text-sm italic mt-2">Stand out. Don&rsquo;t fit in.</p>
        </div>

      </div>
    </article>
  )
}
