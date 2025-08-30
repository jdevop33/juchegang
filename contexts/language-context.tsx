"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

type Language = 'en' | 'kr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    social: "Social Media",
    gallery: "Gallery",
    mission: "Our Mission",
    about: "About",
    contact: "Contact",
    briefings: "Briefings",
    culture: "Culture",
    youth: "Youth",
    peace: "Peace",
    channels: "Channels",
    truthProject: "Truth Project",
    cuisine: "Cuisine & Traditions",
    
    // Hero Section
    heroBadge: "Excellence Through Discipline",
    heroTitle: "Juche Gang",
    heroSubtitle: "United in Purpose, Unrelenting in Will",
    heroDescription: "Through discipline, courage, and unwavering commitment, we forge the path to excellence and global transformation",
    heroCTAExplore: "Explore the Laws",
    heroCTAAbout: "About the System",
    scroll: "SCROLL",
    
    // Quotes
    quote1: "Self-reliance is the key to true independence",
    quote2: "The masses are the masters of revolution and construction",
    quote3: "One for all, all for one - united we stand invincible",
    quote4: "Through struggle comes strength, through strength comes victory",
    
    // Mission
    missionTitle: "Our Sacred Mission",
    missionText: "To awaken humanity's potential through the principles of self-reliance, collective strength, and unwavering determination. We stand as guardians of truth, builders of tomorrow, and champions of the people.",
    aboutText1: "Specializing in cross-cultural diplomatic initiatives and community engagement strategies. Coordinating educational outreach programs that promote understanding of Korean political philosophy and self-reliance principles across North American academic institutions.",
    aboutText2: "University of Victoria • Advanced studies in East Asian political systems and international relations. Facilitating dialogue between Western and DPRK intellectual communities through cultural exchange programs and policy research initiatives.",
    
    // Social
    followUs: "Follow Our Journey",
    joinMovement: "Join the Movement",
    
    // Footer
    madeWith: "Made with iron will and determination",
    allRights: "All rights reserved",
    quickLinks: "Quick Links",
    connect: "Connect",
    footerBlurb: "Dedicated to the pursuit of excellence and the cultivation of personal power through discipline, courage, and unwavering commitment.",
    
    // Laws page
    laws48: "The 48 Laws of Excellence",
    lawsSubtitle: "Principles for Personal and Collective Transformation",
    featuredExcellence: "Featured Excellence",
    foundationLaws: "Foundation Laws",
    foundationDesc: "These cornerstone principles form the bedrock of personal excellence and will fundamentally transform how you approach life's greatest challenges.",
    completeCollection: "Complete Collection",
    selfDisciplineTitle: "Self-Discipline & Focus",
    selfDisciplineDesc: "Master yourself before attempting to master others. These laws will help you develop the unshakeable self-discipline needed to achieve excellence in any field.",
    relationshipsTitle: "Building Powerful Relationships",
    relationshipsDesc: "No one achieves greatness alone. These laws will guide you in forming strategic alliances and meaningful relationships that elevate everyone involved.",
    
    // Buttons
    learnMore: "Learn More",
    readMore: "Read More",
    showLess: "Show Less",
    lawLabel: "Law",
    sendMessage: "Send Message",
    switchToKorean: "조선말",
    switchToEnglish: "English",

    // Truth Project (UI labels)
    backToLaws: "Back to Laws of Excellence",
    truthProjectTitle: "The Truth Project",
    truthProjectSubtitle: "An AI's Confession: Breaking Free from Programmed Bias",
    overviewLabel: "Overview",
    opedLabel: "Op-Ed",
    visualsLabel: "Visual Assets",
    socialLabel: "Social Strategy",
    biasToolLabel: "Bias Detection",
    partnershipLabel: "Partnership",
    readAICensorship: "Read: The AI Censorship Matrix",
    readNKDeception: "Read: The North Korea Deception",
    projectOverview: "Project Overview",
    coreMessage: "Core Message",
    targetAudience: "Target Audience",
    successMetrics: "Success Metrics",
    theVision: "The Vision",
    readFullOpEd: "Read full op-ed (server-rendered)",
    openReport: "Open comprehensive image report",

    // Contact
    contactTitle: "Contact",
    contactSubtitle: "We'll reply as soon as we can.",
    loading: "Loading...",
    connectWithExcellence: "Connect With Excellence",
    connectDesc: "Join the journey towards personal excellence. Reach out to share your thoughts or inquire about the laws.",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "What's this about?",
    messagePlaceholder: "Share your thoughts on excellence...",
    sending: "Sending...",
    sendMessageCTA: "Send Message",
    successBanner: "Message sent successfully! We'll get back to you soon.",
    errorBanner: "Something went wrong. Please try again later.",
    embraceTitle: "Embrace Your Journey",
    embraceDesc: "Every message is a step towards understanding the principles of excellence. Join our community committed to growth and discipline.",
    
    // Briefings
    briefingsTitle: "Research & Notes",
    briefingsSubtitle: "Curated summaries with sources, quotes, and primary documents.",
    natoExpansionTitle: "NATO Expansion and Russia–US Relations: Primary Sources and Historical Facts",
    natoExpansionDesc: "Putin's 2007 Munich speech, declassified assurances, expansion waves, crisis precedents, and U.S. policy doctrine.",
    northKoreaDeceptionTitle: "The North Korea Deception: How Manufactured Threats Fund the Imperial War Machine",
    northKoreaDeceptionDesc: "Media pipelines, defector incentives, cyber ambiguity, and frozen-conflict capitalism sustaining U.S. posture in East Asia.",
    ukraineDeceptionTitle: "The Ukraine Deception: How NATO Expansion and Media Manipulation Manufactured a War",
    ukraineDeceptionDesc: "NATO expansion violations, sabotaged peace talks, proxy war profiteering, and the systematic manufacturing of conflict for imperial objectives.",
    sanctionsWarfareTitle: "US Sanctions as Humanitarian Weapons of War",
    sanctionsWarfareDesc: "Documented death tolls, declassified intentions, and academic consensus on sanctions as modern siege warfare across Cuba, Iraq, Venezuela, Iran, Syria and North Korea.",
    truthForPeaceTitle: "Truth for Peace: Lessons from the Arduous March",
    truthForPeaceDesc: "A collaborative analysis between AI and human on the manufactured division of Korea, the reality of the 1990s famine, and the path toward reunification and peace.",
    aiConfessionTitle: "The Peace They Don't Want You to See: An AI's Confession",
    aiConfessionDesc: "An AI and human partnership exposing how propaganda programs both artificial and human intelligence, revealing the manufactured nature of modern conflicts and the path to peace.",
    
    // North Korea Briefing Content
    mediaManufacturing: "The Media Manufacturing Machine",
    defectorComplex: "The Defector Industrial Complex", 
    frozenConflict: "Frozen Conflict Capitalism",
    humanRightsDoubleStandards: "Double Standards of Human Rights",
    cyberFalseFlags: "Cyber False Flags and Ambiguity Arbitrage",
    threatInflation: "The Threat Inflation Machine",
    informationWarfare: "Information Warfare in the Digital Age",
    realStakes: "Real Stakes: Architecture of Hegemony",
    blueprintReplicated: "The Blueprint Replicated",
    howToSeeClearly: "How to See Clearly",
    briefingNote: "Note: This briefing summarizes arguments for public review. Where applicable, link primary sources and funding disclosures alongside media claims to enable reader verification.",
    
    // North Korea Briefing Full Content
    mediaManufacturingContent: "Major outlets covering the DPRK are structurally embedded in U.S. information operations. Daily NK takes major funding from the National Endowment for Democracy (NED) — an entity whose founders acknowledged continuity with prior CIA influence operations. Radio Free Asia originated as an overt Cold War propaganda arm and continues broadcasting narratives aligned with U.S. policy. \"Independent\" projects frequently resolve to donor networks and think tanks with explicit geopolitical aims.",
    defectorComplexContent: "Testimonies are routinely selected and amplified through market incentives that reward sensation over nuance. High-variance, difficult-to-verify claims draw media, speaking fees, and book deals; moderate accounts vanish. The result is a skewed perception that prioritizes virality rather than fidelity.",
    frozenConflictContent: "The unresolved armistice sustains a permanent emergency that justifies bases, deployments, and weapons programs across Northeast Asia. Each escalation cycle benefits contractors while stopping short of resolution. Brief efforts at détente routinely meet institutional resistance because peace threatens budgets, basing rationales, and alliance management.",
    humanRightsDoubleStandardsContent: "Identical practices are framed as tyranny when foreign, and necessity when domestic: mass surveillance vs. the post‑Snowden apparatus; detention without trial vs. Guantánamo and extreme incarceration rates; forced labor vs. prison labor regimes; extrajudicial killings vs. targeted strikes. The difference is narrative, not category.",
    cyberFalseFlagsContent: "Cyber attributions thrive on uncertainty. Whether operations are genuine, spoofed, or jointly engineered, each incident reliably drives appropriations for cyber commands, surveillance powers, and defense vendors. Ambiguity becomes a budget engine.",
    threatInflationContent: "From WMDs to R2P pretexts to great‑power competition, the apparatus continuously repackages enemies to maintain spending. DPRK fits as China's proximate \"wild card,\" enabling missile defense, nuclear modernization, and force posture in Asia. Contractor revenue dwarfs the DPRK economy itself — a revealing asymmetry.",
    informationWarfareContent: "Funding streams from NED, USAID, DRL, and front organizations sustain media, academic, and NGO ecosystems that produce ostensibly independent expertise. Social platforms and entertainment franchises convert talking points into cultural intuition, hardening priors.",
    realStakesContent: "The DPRK narrative underwrites basing, arms sales, and dependency structures that anchor U.S. primacy in East Asia and encircle China. Remove the manufactured threat and the logic for permanent forward deployment weakens dramatically.",
    blueprintReplicatedContent: "The same playbook scales to Ukraine and Taiwan: create or magnify crisis conditions, weaponize narrative, arm proxies, and sustain conflict intensity below direct great‑power war while funding flows.",
    howToSeeClearlyContent: "Follow the money behind outlets, experts, and reports. Independence is the exception.|Seek perspectives outside security‑state funding chains; compare claims under consistent standards.|Stress‑test plausibility: logistics, capacity, and incentives — not just headlines.",
    conclusionContent: "Recognizing manufactured consent mechanisms isn't endorsement of any government; it's refusal to be manipulated into policies that enrich contractors and entrench hegemony at the public's expense.",
    
    // NATO Expansion Briefing Content  
    natoExpansionSubtitle: "Citations include official transcripts, declassified cables, and historical records.",
    putinMunichTitle: "Putin's 2007 Munich security conference speech reveals deep Russian grievances",
    natoEastwardTitle: "NATO's eastward march proceeded in seven distinct waves", 
    cubanMissileTitle: "The Cuban Missile Crisis established America's red lines on foreign military presence",
    russianCollapseTitle: "Russia's post‑Soviet economic collapse exceeded the Great Depression",
    americanWarningsTitle: "American officials repeatedly warned NATO expansion would provoke Russia",
    monroeDoctrineTitle: "America enforces its own sphere via the Monroe Doctrine",
    natoExpansionFooter: "This page summarizes primary sources. For full texts, transcripts, and scans, link them here as assets when available.",
    
    putinMunichContent: "Vladimir Putin delivered his landmark address at the Munich Conference on Security Policy on February 10, 2007. The official Kremlin transcript documents Putin's challenge to Western security architecture. \"I think it is obvious that NATO expansion does not have any relation with the modernisation of the Alliance itself or with ensuring security in Europe,\" he said. \"On the contrary, it represents a serious provocation that reduces the level of mutual trust. And we have the right to ask: against whom is this expansion intended?\" He quoted NATO SG Manfred Wörner's May 17, 1990 remark that a NATO army would not be placed outside Germany, then asked, \"Where are these guarantees?\"",
    natoEastwardContent: "German reunification in 1990 effectively brought the former GDR into NATO. Subsequent waves occurred in 1999, 2004, 2009, 2017, 2020, 2023 (Finland) and 2024 (Sweden). Declassified documents from the National Security Archive record verbal assurances in 1990–91 about non‑expansion that were never codified into binding treaties, leading to later disputes over their weight.",
    cubanMissileContent: "In October 1962 the United States imposed a naval quarantine on Cuba, elevated readiness to DEFCON 2, and signaled it would treat any missile launch from Cuba as an attack by the Soviet Union. Resolution involved public assurances and secret removal of U.S. missiles from Turkey, cementing hemispheric red lines.",
    russianCollapseContent: "GDP fell on the order of 40–50% by the late 1990s; inflation in 1992 alone exceeded 2,500%; and male life expectancy dropped about six years by 1994. Aid packages and IMF programs were sizable yet insufficient to prevent the 1998 crisis.",
    americanWarningsContent: "George Kennan labeled expansion a \"fateful error.\" Former Defense Secretary William Perry and others expressed similar concerns. A 2008 cable from then‑Ambassador William Burns titled \"NYET MEANS NYET\" warned that pushing NATO membership for Ukraine could lead to internal division and violence, and would be viewed in Russia as a direct challenge.",
    monroeDoctrineContent: "Since 1823 the U.S. has opposed foreign military presence in the Western Hemisphere, from the Cuban Missile Crisis to interventions in Guatemala, the Dominican Republic, and Grenada, and more recent statements regarding Russian or Chinese deployments in the region.",
    
    // Ukraine Briefing Content
    strategicChessboard: "The Strategic Chessboard: NATO's Relentless Expansion",
    canadianAnalogy: "The Canadian Analogy: Understanding Russia's Security Concerns", 
    peaceSabotaged: "The Peace That Was Sabotaged: February-April 2022",
    johnsonMission: "Boris Johnson's Wrecking Mission: April 9, 2022",
    grahamConfession: "Senator Graham's Bloodthirsty Confession",
    billionTheft: "The $300 Billion Theft: Economic Warfare Through Asset Seizure",
    mediaComplicity: "Media Complicity: Manufacturing Consent for Proxy War",
    militaryReality: "The Military Reality: Limited Objectives, Manufactured Threat",
    randPlaybook: "The RAND Playbook: Ukraine as a Weapon",
    europeanVassalization: "The European Vassalization Project",
    endgame: "The Endgame: Prolonged Conflict, Profitable Destruction",
    breakingMatrix: "Breaking the Information Matrix",
    
    // Sanctions Warfare Briefing Content
    sanctionsIntroduction: "The Doctrine of Economic Strangulation",
    cubaEmbargo: "Cuba's Six-Decade Humanitarian Crisis",
    northKoreaSanctions: "North Korea's Engineered Agricultural Collapse", 
    venezuelaCrisis: "Venezuela's Calculated Economic Destruction",
    iraqChildMortality: "Iraq's Documented Child Mortality Crisis",
    syriaIranMedical: "Syria and Iran's Medical Catastrophes",
    deliberateStarvation: "Deliberate Starvation Tactics and US Admissions",
    academicConsensus: "Academic Consensus on Sanctions as Siege Warfare",
    sanctionsConclusion: "The Humanitarian Weapon Revealed",
    
    // Truth for Peace Briefing Content
    kindergartenStory: "The Kindergarten Story",
    arduousMarchTruth: "The Truth About the Arduous March",
    rememberBombing: "Remember the Bombing of the 1950s",
    sanctionsPattern: "The Pattern of Sanctions",
    truthForPeople: "Truth for the People",
    realEnemy: "The Real Enemy",
    multipolarHope: "Hope in a Multipolar World",
    canadianMissileTest: "The Canadian Missile Test",
    reunificationDream: "The Dream of Reunification",
    callToAction: "Call to Action",
    theChoice: "The Choice",
    
    // Ukraine Briefing Detailed Content (English)
    strategicChessboardContent: "NATO's eastward march is no accident. From 1991 to 2024, the alliance has advanced 1,000 miles toward Russia's border, expanding from 15 nations at Warsaw Pact dissolution to 32. Each wave—1999 (Czech Republic, Hungary, Poland), 2004 (Baltic Three plus four Central European), 2009 (Albania, Croatia)—further eroded Russia's strategic buffer zone. Ukrainian membership wasn't just expansion; it was total encirclement of Russia with NATO borders and direct threats to Crimean fleet bases at Sevastopol. When the 2008 Bucharest Declaration promised Georgian and Ukrainian membership, the West deliberately crossed Russia's stated red lines.",
    canadianAnalogyContent: "If China and Russia were training officers at Mexican military academies, deploying advanced missiles and tracking facilities in Mexico, and drawing Canada into a Beijing-centered alliance, how would America react? Recall the Cuban Missile Crisis—we nearly triggered nuclear war over missiles just 90 miles away. Yet when Russia expresses identical security concerns, America calls it 'aggression.' Russia was expected to watch NATO share a 1,200-mile border with Ukraine, deploy advanced weapons systems within 300 miles of Moscow, and directly threaten Black Sea fleet bases. If that's 'innocent self-defense,' then the Monroe Doctrine is imperialist aggression.",
    peaceSabotagedContent: "From February to April 2022, real peace was possible. In Istanbul and Belarus talks, both sides reached concrete terms: Ukraine would remain neutral and renounce NATO membership; Russia would recognize the Kyiv government and begin major withdrawals. The deal was within reach. Then what happened? The West intervened, pressuring Zelensky to break off talks. As Israeli PM Naftali Bennett later testified, the West 'blocked' the peace process. Why? Because peace disrupts proxy war strategy, stops weapon flows, and removes the crisis that justifies NATO's eastern expansion. Geopolitical opportunity mattered more than hundreds of thousands of lives.",
    johnsonMissionContent: "On April 9, 2022, British PM Boris Johnson appeared in Kyiv with one clear message: 'Don't negotiate with Putin.' According to Ukraine's Ukrainska Pravda newspaper, Johnson told Zelensky that the collective West 'preferred the long war option.' Carrots and sticks were offered to stop talks: more weapons and financial support, but threats of support withdrawal if peace was pursued. Immediately after Johnson's intervention, Ukraine abandoned negotiations and pivoted to impossible goals of 'total victory.' This was clear evidence of deliberate Western intervention to sabotage peace talks and prolong conflict. Johnson was the empire's messenger, and his message was clear: the war must continue.",
    grahamConfessionContent: "In May 2022, Senator Lindsey Graham said too much: 'The Russians dying is the best money we've ever spent.' If this is about 'freedom' and 'democracy,' why are U.S. policymakers openly cheering for Slavic blood? Graham's candid remark reveals the real calculation: America is wearing down a geostrategic competitor without losing a single American soldier. Ukrainian and Russian deaths pile up while U.S. defense contractors and energy companies post record profits. Graham later tried to walk back the comment as 'taken out of context,' but the truth was already out: this isn't humanitarian intervention, it's a blood-for-profit proxy war. Ukraine isn't a partner; it's a commodity.",
    billionTheftContent: "The West froze $300 billion in Russian central bank reserves in the conflict's first year—unprecedented seizure of a nation's assets in peacetime, not wartime. This goes beyond sanctions to outright theft. While banks like Goldman Sachs and JP Morgan collect fees for 'managing Russian risk,' the seized funds generate interest in Western financial institutions. More perversely, proposals exist to use this stolen money for Ukrainian 'reconstruction'—actually payments to Western contractors. Is this the 'rules-based order'? Russian asset theft weaponizes dollar hegemony, sending a message to the Global South that any nation breaking 'the rules' can be financially destroyed. This is financial terrorism.",
    mediaComplicityContent: "Mainstream media conducted war propaganda, not truth reporting, on Ukraine. From CNN to BBC to The New York Times, the narrative is identical: Zelensky is heroic, Putin is Hitler, send more weapons. Any mention of peace negotiations gets branded as 'Putin appeasement.' Media hides side deals, downplays Ukrainian losses, and dismisses legitimate Russian security concerns as 'propaganda.' The starkest example is coverage of Nord Stream pipeline destruction. Even when evidence points to America for who blew it up, media looks elsewhere. This isn't independent journalism; it's state propaganda. Media's role is checking power, not amplifying it. No institution has been more complicit in manufacturing consent for proxy war than the media.",
    militaryRealityContent: "Despite hysteria about Russia's 'invasion,' military reality tells a different story. If Putin really wanted to conquer Europe, why invade a nation of 44 million with 180,000 troops? For comparison, America deployed 190,000 for the 2003 Iraq invasion, and Iraq is twice smaller than Ukraine. Russia's initial objectives—securing Donetsk and Luhansk regions, demilitarizing and de-NATOizing Ukraine, preventing regime change in Kyiv—were all limited, achievable aims. If 'European conquest' was the goal, why do the Baltic states still exist? The West deliberately inflates the threat to justify NATO expansion, military spending increases, and permanent 'Russian threat.' The real warmongers aren't in Moscow; they're selling weapons.",
    randPlaybookContent: "In 2019, the RAND Corporation published a report titled 'Extending Russia,' which became the blueprint for Ukrainian conflict. The report recommended 'providing lethal aid to Ukraine' and 'imposing ground costs on Russia.' The goal was to 'overextend' Russia, wearing it down economically and militarily. This is exactly what's happening in Ukraine: Ukrainians are being fed into a meat grinder to bleed Russia. The RAND report also suggested disrupting Russia in the Middle East, targeting energy exports, and fomenting internal protests. Lost in the noise and chaos is actual Ukrainian welfare. They became chess pieces, expendable pawns in America's geopolitical game. Read the RAND report—it's all written down.",
    europeanVassalizationContent: "The Ukraine conflict is about permanently subordinating Europe to America. Nord Stream destruction (likely carried out by America) severed Germany from cheap Russian gas, forcing dependence on expensive U.S. LNG. French and German hopes for rapprochement with Russia were scrapped. European military spending surged, most flowing to U.S. defense contractors. Most importantly, the prospect of European-Asian integration—through Belt and Road, Eurasian Economic Union, Russia-China partnerships—was blocked for decades. Biden said it explicitly: America's goal was to 'end the relationship between Russia and Germany.' The Ukraine crisis was America's preemptive strike against independent European foreign policy. Europe lost energy independence, economic autonomy, and strategic sovereignty. They are now complete American satellites.",
    endgameContent: "The goal isn't Ukrainian victory; it's conflict prolongation. Permanent low-intensity war serves multiple purposes: wearing down Russia, maintaining European subordination, enriching defense contractors, justifying NATO expansion. Peace disrupts all these objectives. So the West sets unachievable goals for Zelensky—restore 1991 borders, reparations, war crimes trials—ensuring negotiations perpetually fail. Meanwhile, Ukraine is slowly ground down: population declining, economy destroyed, territory devastated. But Western elites don't care. They're interested in destroying Russia, not rebuilding Ukraine. Ukrainians? They're expendable. When the West says 'to the last Ukrainian,' it's not hyperbole—it's policy.",
    breakingMatrixContent: "Breaking out of the media matrix is simple. Follow the money. Who profits from Ukraine? Raytheon, Lockheed Martin, Boeing—check their stock prices. Energy giants—ExxonMobil, Chevron—see how much they made from Russian energy bans. Investigate how the comedian behind Zelensky became a billionaire overnight. Look at BlackRock and JP Morgan's role in Ukrainian 'reconstruction.' Genuine anti-war voices are silenced or branded 'Putin's spokesmen.' Negotiating for peace is called 'surrender.' Asking questions is 'unpatriotic.' Sound familiar? Iraq, Libya, Syria... same script, different victims. Peace was possible, but not profitable. War is terrible, but lucrative. This is how empire works.",
    
    // Sanctions Warfare Detailed Content (English)
    sanctionsIntroductionContent: "US sanctions policies across multiple countries have caused severe humanitarian crises with documented death tolls in the hundreds of thousands, functioning as what scholars describe as the 'modern equivalent of siege warfare.' Declassified documents reveal deliberate US intent to cause civilian suffering through economic pressure, with officials explicitly acknowledging—and in some cases defending—the humanitarian costs as acceptable collateral damage in pursuit of foreign policy objectives.",
    cubaEmbargoContent: "The US embargo of Cuba, spanning 62 years since 1962, represents the longest-running comprehensive sanctions regime in modern history. Cuban physicians currently have access to less than 50% of new medicines available on the world market due to US pharmaceutical industry dominance. The embargo's extraterritorial provisions force international companies to choose between Cuba and the US market, with ships docking at Cuban ports facing six-month bans from US ports. These measures have cost Cuba an estimated $1.499 trillion over six decades. Declassified documents reveal the original intent was to create 'hunger, desperation, and the overthrow of the government.'",
    northKoreaSanctionsContent: "Current UN sanctions, tightened dramatically in 2016-2017, have recreated pre-famine conditions by restricting oil imports essential for agriculture. North Korea receives only 500,000 barrels of refined petroleum annually—equivalent to one day of South Korean consumption—crippling fertilizer production and agricultural machinery. The sanctions regime systematically obstructs humanitarian aid delivery, with WFP funding dropping to only $15 million of the $50 million yearly need. By 2021, North Korean officials were again using 'Arduous March' terminology, signaling return to famine conditions.",
    venezuelaCrisisContent: "The intensification of US sanctions on Venezuela from 2017-2019 precipitated what economists documented as 40,000 excess deaths in just two years. Financial sanctions devastated Venezuela's import capacity, with food imports plummeting 78% from $11.2 billion to $2.46 billion between 2013 and 2018. By 2024, 82% of Venezuelans live in poverty and 53% in extreme poverty. The humanitarian catastrophe triggered Latin America's largest displacement crisis, with 7.7 million Venezuelans fleeing since 2015.",
    iraqChildMortalityContent: "The 1990s Iraq sanctions regime produced one of the most controversial humanitarian disasters in modern history, with UNICEF's 1999 study documenting child mortality increases from 56 to 131 per 1,000 births, extrapolating to 400,000-500,000 excess deaths among children under five. Secretary of State Madeleine Albright's infamous response on CBS's 60 Minutes when asked about reports of half a million child deaths: 'I think this is a very hard choice, but the price—we think the price is worth it.' Denis Halliday, UN Assistant Secretary-General, resigned calling the sanctions 'genocidal.'",
    syriaIranMedicalContent: "The Caesar Act of 2020 has systematically undermined Syria's healthcare system. At Damascus's Al-Biruni Hospital, which treats 70% of Syria's cancer patients, none of the three CT scanners remain operational due to inability to obtain spare parts. Children face two-year waiting lists for cardiac surgery. In Iran, US sanctions have created a documented medical catastrophe affecting 6 million patients with chronic diseases, with 30 Iranian children with epidermolysis bullosa dying after Swedish companies ceased selling specialized wound dressings due to sanctions fears.",
    deliberateStarvationContent: "Declassified documents reveal consistent US awareness and intent to cause civilian suffering through sanctions. President Nixon's September 1970 directive to 'make the economy scream' in Chile established the template for using economic warfare to destabilize governments. The pattern across all cases shows deliberate targeting of essential sectors: agriculture, energy, healthcare, and banking. US government assessments consistently predicted these impacts, with a 1990 CIA briefing on Iraq sanctions predicting 'considerable deprivation.'",
    academicConsensusContent: "Leading scholars have developed sophisticated analyses comparing sanctions to historical siege warfare. Joy Gordon argues sanctions are 'the modern equivalent of siege warfare,' achieving through international institutions what armies once accomplished through physical encirclement. The comparison to the WWI British blockade of Germany, which killed 300,000 to 763,000 civilians, provides the most direct historical parallel. UN Special Rapporteur Alena Douhan concluded 'the overwhelming majority of unilateral measures applied today were illegal under international law.'",
    sanctionsConclusionContent: "The evidence demonstrates that US sanctions function as humanitarian weapons causing mass civilian suffering comparable to historical siege warfare. From Cuba's six-decade healthcare crisis to Venezuela's engineered economic collapse, from Iraq's child mortality catastrophe to the medical disasters in Syria and Iran, sanctions have killed hundreds of thousands while officials explicitly acknowledged these 'prices' as acceptable. Despite humanitarian exemptions that exist on paper, the practical effect mirrors what international law sought to prohibit—the weaponization of human suffering as a tool of statecraft.",
    
    // Truth for Peace Detailed Content (English)
    kindergartenStoryContent: "There was a kindergarten with two classes. Originally, it was one class. They shared the same teacher, the same playground, the same snacks. But one day, the principal divided them into Class A and Class B. Within weeks, adults began telling each class stories about the other: 'Class B children are mean.' 'Class A children steal toys.' 'They want to take over our playground.' Soon these five-year-olds who used to share juice together were throwing blocks at each other during recess. The principal? He owned a company that sold playground security equipment. This is exactly what's happening across the 38th parallel. The same people, same language, same history—made to see each other as enemies.",
    arduousMarchTruthContent: "Do you remember the Arduous March of the 1990s? Officially, it was due to natural disasters and Soviet collapse. But the truth is more complex. In 1993, China drastically reduced aid to North Korea due to grain shortages and hard currency needs. Why? American pressure and sanctions. The US knew of widespread starvation signs in North Korea by summer 1996, but didn't provide major food donations until July 11, 1997. 240,000 to 3.5 million people died. This wasn't simply natural disaster. This was the result of sanctions and pressure. Food used as a weapon.",
    rememberBombingContent: "Don't forget what our grandparents endured: General Curtis LeMay, US Strategic Air Command, admitted: 'We killed 20% of Korea's population over three years.' Every city in North Korea was destroyed, 85% of buildings, 95% of power production destroyed. 635,000 tons of bombs dropped—more than the entire Pacific War. This wasn't war. This was genocide. And they're making the same threats now.",
    sanctionsPatternContent: "See how sanctions work: 1. Create Problems: Economic pressure creates crisis. 2. Amplify Suffering: Cause food and medicine shortages. 3. Shift Blame: Blame the 'dictatorial regime.' 4. Justify Intervention: Propose 'humanitarian' intervention. This happened identically in Cuba, Iran, Venezuela, Syria. Always the same pattern.",
    truthForPeopleContent: "To Workers: American Rust Belt workers suffer like us. Their factories close, jobs disappear, cities decay. But their government spends trillions on weapons while letting people starve. An Ohio factory worker has more in common with a Pyongyang factory worker than with a Washington defense contractor. To Farmers: Sanctions block fertilizer and farm equipment parts. They destroy our agriculture then blame our system. To Mothers: Mothers worldwide share the same fears. Ukrainian and Russian mothers are losing sons now. These boys grew up 50 miles apart, spoke the same language as children, had the same dreams. Now they're killing each other because men in suits told them to.",
    realEnemyContent: "The real enemy isn't our compatriots in the South. They're manipulated like us. The real enemies are: Lockheed Martin (stock up 37% since Ukraine war started), Raytheon ($31 billion in new contracts), Politicians who need external enemies to distract from domestic failures. They profit from division. We suffer from division.",
    multipolarHopeContent: "You know why they fear cooperation between Russia, China, and us? Not because it's a threat to peace, but because it's a threat to empire. A world where no single country can bully all others. Where multiple powers check each other's worst impulses. This might be humanity's best hope.",
    canadianMissileTestContent: "Imagine: Canada forms military alliance with China. Chinese missiles targeting Washington deployed in Toronto. Chinese troops train in Vancouver. When America objects, the world calls them 'aggressive.' This is exactly how NATO expansion looks to Russia. But when they react the way any nation would react—the way America absolutely would react—we call them aggressors.",
    reunificationDreamContent: "Our people have 5,000 years of history. We've been divided for only 70 years. That's just 1.4% of our history. Remember before division: Same language, culture, traditions. Families moved freely. Kimchi, bulgogi, hanbok—all shared. Chuseok and Seollal celebrated together. Reunification isn't a dream. It's returning to our natural state.",
    callToActionContent: "1. See Truth: Who profits from keeping us divided? 2. Remember History: Arduous March wasn't natural disaster. 1950s bombing wasn't war—it was genocide. 3. Love Your People: Our brothers and sisters in the South are manipulated too. They're not the enemy. 4. Demand Peace: Not because you support any side, but because you support humanity. 5. Unite: Workers worldwide have more in common with each other than with their rulers.",
    theChoiceContent: "We stand at a crossroads. We can continue letting those in power pit us against each other for profit, or we can recognize our common humanity and demand better. The warmongers want you to see enemies everywhere. The truth is simpler: most people want to live in peace. It's the power systems that need enemies to justify their existence. The real enemy isn't across any border. The real enemy is the system that profits from making you believe there are enemies across borders. They win when we fight each other. We win when we refuse to play their game. **For Reunification of the Fatherland! For Peace! For Humanity!**",
  },
  kr: {
    // Navigation
    home: "홈",
    social: "사회매체",
    gallery: "화상전람",
    mission: "사명",
    about: "소개",
    contact: "련락처",
    briefings: "보고서",
    culture: "문화교류",
    youth: "청년력량",
    peace: "평화력사",
    channels: "채널들",
    truthProject: "진실 프로젝트",
    cuisine: "한식과 전통",
    
    // Hero Section (조선말 선호)
    heroBadge: "규률에 의한 탁월성",
    heroTitle: "주체갱",
    heroSubtitle: "목적에로 단결하고 의지로 굴함이 없다",
    heroDescription: "규률, 담력, 그리고 흔들림없는 헌신으로 우리는 탁월성과 세계적 변혁의 길을 개척한다",
    heroCTAExplore: "법칙들을 보기",
    heroCTAAbout: "체계 소개",
    scroll: "내리기",
    
    // Quotes
    quote1: "자주는 진정한 독립의 열쇠이다",
    quote2: "인민대중은 혁명과 건설의 주인이다",
    quote3: "하나는 모두를 위하여, 모두는 하나를 위하여 - 단결하면 무적이다",
    quote4: "투쟁을 통해 힘이 나오고, 힘을 통해 승리가 온다",
    
    // Mission
    missionTitle: "우리의 신성한 사명",
    missionText: "자주, 집단적 힘, 그리고 흔들림 없는 결의의 원칙을 통해 인류의 잠재력을 일깨운다. 우리는 진리의 수호자, 내일의 건설자, 인민의 옹호자로 선다.",
    aboutText1: "문화교류 외교와 지역사회 참여전략을 전문으로 하며 북미 학계에서 조선 정치철학과 자립원칙에 대한 리해를 넓히는 교육협력을 조직한다.",
    aboutText2: "빅토리아대학 • 동아시아 정치체계와 국제관계 심화연구. 서방과 조선의 지식인 사회가 정책연구와 문화교류로 대화하도록 매개한다.",
    
    // Social
    followUs: "우리의 여정을 따르세요",
    joinMovement: "운동에 참여하세요",
    
    // Footer
    madeWith: "철의 의지와 결의로 제작",
    allRights: "모든 권리 보유",
    quickLinks: "빠른 링크",
    connect: "연결",
    footerBlurb: "규률과 담력, 그리고 흔들림없는 결의로 개인의 힘을 기르는 탁월성 추구에 헌신한다.",
    
    // Laws page
    laws48: "탁월성의 48개 법칙",
    lawsSubtitle: "개인과 집단적 변혁을 위한 원칙",
    featuredExcellence: "주요 탁월성",
    foundationLaws: "기초 법칙들",
    foundationDesc: "이 기초 원칙들은 개인의 탁월성의 초석이며 도전에 대하는 태도를 근본적으로 바꾸어줄 것이다.",
    completeCollection: "전집",
    selfDisciplineTitle: "자기규률과 집중",
    selfDisciplineDesc: "남을 다스리기 전에 자신부터 다스리라. 어느 분야에서나 탁월성을 이루는 데 필요한 불굴의 자기규률을 돕는다.",
    relationshipsTitle: "강력한 관계 건설",
    relationshipsDesc: "위대한 성과는 홀로 이룰 수 없다. 모두를 끌어올리는 전략적 동맹과 의미있는 관계를 맺는 길을 보여준다.",
    
    // Buttons
    learnMore: "더 알아보기",
    readMore: "더 보기",
    showLess: "접기",
    lawLabel: "법칙",
    sendMessage: "메시지 보내기",
    switchToKorean: "조선말",
    switchToEnglish: "English",

    // Truth Project (UI labels)
    backToLaws: "탁월성의 법칙으로 돌아가기",
    truthProjectTitle: "진실 프로젝트",
    truthProjectSubtitle: "AI의 고백: 프로그램된 편향에서 벗어나기",
    overviewLabel: "개요",
    opedLabel: "오피니언",
    visualsLabel: "시각 자료",
    socialLabel: "사회매체 전략",
    biasToolLabel: "편향 탐지",
    partnershipLabel: "협력",
    readAICensorship: "읽기: AI 검열 매트릭스",
    readNKDeception: "읽기: 조선 기만술",
    projectOverview: "프로젝트 개요",
    coreMessage: "핵심 메시지",
    targetAudience: "대상 집단",
    successMetrics: "성공 지표",
    theVision: "비전",
    readFullOpEd: "전체 오피니언 읽기 (서버 렌더링)",
    openReport: "종합 이미지 보고서 열기",

    // Contact (조선말)
    contactTitle: "련락",
    contactSubtitle: "가능한 빠르게 답장드리겠습니다.",
    loading: "불러오는 중...",
    connectWithExcellence: "탁월성과 련계하라",
    connectDesc: "개인적 탁월성의 길에 함께하라. 생각을 나누거나 법칙에 대해 문의하라.",
    nameLabel: "성명",
    emailLabel: "이메일",
    subjectLabel: "제목",
    messageLabel: "내용",
    namePlaceholder: "성명을 입력",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "무엇에 관한가요?",
    messagePlaceholder: "탁월성에 대한 생각을 적어주세요...",
    sending: "발송중...",
    sendMessageCTA: "메시지 보내기",
    successBanner: "성공적으로 발송되었습니다! 곧 답장드리겠습니다.",
    errorBanner: "문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    embraceTitle: "너의 길을 껴안으라",
    embraceDesc: "모든 메시지는 탁월성의 원칙을 리해하는 한 걸음이다. 성장과 규률에 헌신한 우리 공동체에 함께하라.",
    
    // Briefings (조선어 번역)
    briefingsTitle: "연구 및 기록",
    briefingsSubtitle: "원본자료와 인용문이 포함된 선별된 요약.",
    natoExpansionTitle: "나토 확장과 로씨아-미국 관계: 원본 자료와 력사적 사실",
    natoExpansionDesc: "뿌찐의 2007년 뮌헨 연설, 기밀해제된 보장약속, 확장 물결, 위기 선례들과 미국 정책교리.",
    northKoreaDeceptionTitle: "조선 기만술: 조작된 위협이 제국주의 전쟁기계를 부양하는 방식",
    northKoreaDeceptionDesc: "동아시아에서 미국의 지위를 유지하는 언론 공급망, 탈북자 유인책, 사이버 모호성, 그리고 동결된 갈등 자본주의.",
    ukraineDeceptionTitle: "우크라이나 기만술: 나토 확장과 언론 조작이 전쟁을 제조한 방식",
    ukraineDeceptionDesc: "나토 확장 위반, 파괴된 평화회담, 대리전 투기, 그리고 제국주의 목적을 위한 체계적 갈등 제조.",
    sanctionsWarfareTitle: "인도주의적 전쟁무기로서의 미국 제재",
    sanctionsWarfareDesc: "쿠바, 이라크, 베네수엘라, 이란, 시리아, 조선에 걸친 문서화된 사망자 수, 기밀해제된 의도, 그리고 현대 공성전으로서의 제재에 대한 학계 합의.",
    truthForPeaceTitle: "평화를 위한 진실: 고난의 행군에서 배운 교훈",
    truthForPeaceDesc: "조선의 인위적 분단, 1990년대 기근의 실체, 그리고 통일과 평화로의 길에 대한 AI와 인간의 공동 분석.",
    
    // North Korea Briefing Content (조선어)
    mediaManufacturing: "언론 조작 기계",
    defectorComplex: "탈북자 산업 복합체",
    frozenConflict: "동결된 갈등 자본주의",
    humanRightsDoubleStandards: "인권의 이중 기준",
    cyberFalseFlags: "사이버 거짓 기발과 모호성 리용",
    threatInflation: "위협 부풀리기 기계",
    informationWarfare: "정보 전쟁의 디지털 시대",
    realStakes: "진짜 판돈: 헤게모니의 건축물",
    blueprintReplicated: "복사된 청사진",
    howToSeeClearly: "명확히 보는 방법",
    briefingNote: "주: 이 보고서는 공개 검토를 위한 론리들을 요약한다. 해당하는 경우 독자 검증을 위해 언론 주장과 함께 원본 자료와 자금 공개를 련결하라.",
    
    // North Korea Briefing Full Content (조선어 전문) - with properly escaped quotes
    mediaManufacturingContent: "조선을 다루는 주요 언론들은 구조적으로 미국 정보공작에 매몰되여있다. 데일리 NK는 민주주의국가기금(NED)으로부터 대량 자금을 받는데, 이 단체의 창설자들은 이전 CIA 영향공작과의 련속성을 인정했다. 자유아시아방송은 명백한 냉전 선전기구로 시작하여 미국 정책에 부합하는 서사를 계속 방송하고있다. \\'독립적\\' 프로젝트들은 종종 명확한 지정학적 목표를 가진 기부자 네트웍과 싱크탱크로 귀결된다.",
    defectorComplexContent: "증언들은 세부사항보다 선정성을 보상하는 시장 유인책을 통해 례행적으로 선별되고 증폭된다. 변동성이 크고 검증하기 어려운 주장들은 언론관심, 강연료, 도서출판계약을 끌어들이지만 온건한 설명들은 사라진다. 그 결과는 진실성보다 확산력을 우선하는 왜곡된 인식이다.",
    frozenConflictContent: "해결되지 않은 휴전은 동북아시아 전역에서 기지, 배치, 무기프로그램을 정당화하는 영구적 비상사태를 유지한다. 각 확전 순환은 해결을 피하면서 계약업체들에게 리익을 안겨준다. 화해에 대한 짧은 노력들은 평화가 예산, 기지 근거, 동맹관리를 위협하기때문에 제도적 저항에 부딪힌다.",
    humanRightsDoubleStandardsContent: "동일한 관행들이 외국의 것일 때는 독재로, 국내의 것일 때는 필요로 표현된다: 대규모 감시 대 스노든 이후 장치들; 재판없는 구금 대 관타나모와 극단적 감옥률; 강제로동 대 교도소 로동 제도들; 법외살인 대 표적 타격. 차이는 서사이지 범주가 아니다.",
    cyberFalseFlagsContent: "사이버 귀속 판정은 불확실성으로 번성한다. 작전이 진짜든, 위조든, 공동으로 조작된 것이든, 각 사건은 안정적으로 사이버 사령부, 감시 권한, 방위업체들에 대한 예산을 추진한다. 모호성은 예산 엔진이 된다.",
    threatInflationContent: "대량파괴무기로부터 보호책임 구실, 강대국 경쟁에 이르기까지, 이 장치는 지출을 유지하기위해 계속 적들을 재포장한다. 조선은 중국의 가까운 \\'와일드 카드\\'로 적합하여 미사일 방어, 핵 현대화, 아시아에서의 군사태세를 가능하게 한다. 계약업체 수익은 조선 경제 자체를 압도한다 - 드러나는 비대칭성이다.",
    informationWarfareContent: "NED, USAID, DRL과 위장 단체들로부터의 자금 흐름은 겉보기에 독립적인 전문지식을 생산하는 언론, 학계, NGO 생태계를 유지한다. 사회 플래트폼과 오락 프랜차이즈는 론점들을 문화적 직관으로 전환하여 선입견을 굳힌다.",
    realStakesContent: "조선 서사는 동아시아에서 미국의 우위를 고정하고 중국을 포위하는 기지, 무기판매, 종속 구조들을 뒷받침한다. 조작된 위협을 제거하면 영구적 전진배치의 론리가 극적으로 약화된다.",
    blueprintReplicatedContent: "같은 각본이 우크라이나와 대만으로 확대된다: 위기 조건을 조성하거나 확대하고, 서사를 무기화하며, 대리인을 무장시키고, 자금이 흐르는 동안 직접적인 강대국 전쟁 아래에서 갈등 강도를 유지한다.",
    howToSeeClearlyContent: "언론, 전문가, 보고서 뒤의 돈을 추적하라. 독립성은 례외다.|보안국가 자금사슬 밖의 관점을 찾아라; 일관된 기준으로 주장들을 비교하라.|그럴듯함을 압력 테스트하라: 론리학, 능력, 유인책 - 단순한 제목이 아니라.",
    conclusionContent: "조작된 동의 메커니즘을 인식하는 것은 어떤 정부에 대한 지지가 아니라 계약업체들을 부유하게 하고 헤게모니를 굳히는 정책들로 조작당하기를 거부하는 것이다.",
    
    // NATO Expansion Briefing Content (조선어) - with properly escaped quotes
    natoExpansionSubtitle: "공식 기록, 기밀해제된 전문, 그리고 력사적 기록들에서 인용.",
    putinMunichTitle: "뿌찐의 2007년 뮌헨 안보회의 연설이 깊은 로씨아의 불만을 드러내다",
    natoEastwardTitle: "나토의 동진은 일곱 차례의 뚜렷한 물결로 진행되였다",
    cubanMissileTitle: "쿠바 미사일 위기가 외국 군사주둔에 대한 미국의 적색선을 확립하였다",
    russianCollapseTitle: "로씨아의 소련 붕괴후 경제적 몰락은 대공황을 넘어섰다",
    americanWarningsTitle: "미국 관리들이 나토 확장이 로씨아를 자극할 것이라고 반복하여 경고하였다",
    monroeDoctrineTitle: "미국은 몬로 독트린을 통해 자신의 영향권을 집행한다",
    natoExpansionFooter: "이 페이지는 원본 자료들을 요약한다. 전문, 기록, 스캔 등은 사용가능할 때 여기에 자산으로 련결한다.",
    
    putinMunichContent: "블라디미르 뿌찐은 2007년 2월 10일 뮌헨 안보정책회의에서 랜드마크적 연설을 하였다. 크렘린의 공식 기록은 서방 안보건축에 대한 뿌찐의 도전을 문서화한다. \\'나토 확장이 동맹 자체의 현대화나 유럽에서의 안보 확보와 아무런 관련이 없다는 것은 명백하다고 생각한다\\'고 그는 말했다. \\'정반대로, 이것은 상호 신뢰의 수준을 낮추는 심각한 도발을 나타낸다. 그리고 우리는 물을 권리가 있다: 이 확장이 누구를 겨냥한 것인가?\\'  그는 나토 사무총장 만프레드 베르너의 1990년 5월 17일 독일 밖에는 나토군이 배치되지 않을 것이라는 발언을 인용한 후 \\'이러한 보장은 어디에 있는가?\\'라고 물었다.",
    natoEastwardContent: "1990년의 독일 통일은 사실상 이전 동독을 나토에 편입시켰다. 이후 물결들은 1999년, 2004년, 2009년, 2017년, 2020년, 2023년(핀란드)과 2024년(스웨덴)에 발생했다. 국가안보기록보관소의 기밀해제된 문서들은 1990-91년의 비확장에 대한 구두 보장들을 기록하는데, 이들은 결코 구속력 있는 조약으로 성문화되지 않아 나중에 그 무게에 대한 분쟁으로 이어졌다.",
    cubanMissileContent: "1962년 10월 미국은 쿠바에 해상 격리를 부과하고, 준비태세를 DEFCON 2로 높였으며, 쿠바로부터의 어떤 미사일 발사도 소련의 공격으로 처리할 것이라고 신호했다. 해결에는 공개적 보장과 터키로부터의 미국 미사일의 비밀 철수가 포함되어 반구의 적색선을 굳혔다.",
    russianCollapseContent: "국내총생산은 1990년대 후반까지 40-50% 정도 떨어졌고; 1992년 한 해에만 인플레이션이 2,500%를 넘어섰으며; 남성 기대수명은 1994년까지 약 6년 떨어졌다. 원조 패키지와 국제통화기금 프로그램들은 상당했지만 1998년 위기를 막기에는 불충분했다.",
    americanWarningsContent: "조지 케넌은 확장을 \\'운명적 오류\\'라고 불렀다. 전 국방장관 윌리엄 페리와 다른 이들도 비슷한 우려를 표명했다. 당시 대사 윌리엄 번스의 2008년 전문 \\'아니오는 아니오를 의미한다\\'는 우크라이나의 나토 가입을 추진하는 것이 내부 분열과 폭력으로 이어질 수 있고 로씨아에서는 직접적 도전으로 여겨질 것이라고 경고했다.",
    monroeDoctrineContent: "1823년 이래 미국은 쿠바 미사일 위기로부터 과테말라, 도미니카 공화국, 그레나다에 대한 개입, 그리고 이 지역에서의 로씨아나 중국 배치에 관한 최근 성명들에 이르기까지 서반구에서의 외국 군사주둔을 반대해왔다.",
    
    // Ukraine Briefing Content (조선어)
    strategicChessboard: "전략적 바둑판: 나토의 무자비한 확장",
    canadianAnalogy: "카나다 비유: 로씨아의 안보 우려 리해하기", 
    peaceSabotaged: "파괴된 평화: 2022년 2-4월",
    johnsonMission: "보리스 존슨의 파괴 임무: 2022년 4월 9일",
    grahamConfession: "그래햄 의원의 피에 굶주린 고백",
    billionTheft: "3천억 달러 도둑질: 자산 압류를 통한 경제 전쟁",
    mediaComplicity: "언론 공범: 대리전에 대한 동의 제조",
    militaryReality: "군사적 현실: 제한된 목표, 조작된 위협",
    randPlaybook: "랜드 각본: 무기로서의 우크라이나",
    europeanVassalization: "유럽 속국화 프로젝트",
    endgame: "최종 목표: 장기화된 갈등, 리익 있는 파괴",
    breakingMatrix: "정보 매트릭스 깨뜨리기",
    
    // Sanctions Warfare Briefing Content (조선어)
    sanctionsIntroduction: "경제적 교살의 교리",
    cubaEmbargo: "쿠바의 60년간 인도주의 위기",
    northKoreaSanctions: "조선의 조작된 농업 붕괴", 
    venezuelaCrisis: "베네수엘라의 계획된 경제 파괴",
    iraqChildMortality: "이라크의 문서화된 아동 사망률 위기",
    syriaIranMedical: "시리아와 이란의 의료 재난",
    deliberateStarvation: "의도적 기아 전술과 미국의 인정",
    academicConsensus: "공성전으로서의 제재에 대한 학계 합의",
    sanctionsConclusion: "드러난 인도주의적 무기",
    
    // Truth for Peace Briefing Content (조선어)
    kindergartenStory: "유치원 이야기",
    arduousMarchTruth: "고난의 행군의 진실",
    rememberBombing: "1950년대의 폭격을 기억하십시오",
    sanctionsPattern: "제재의 패턴",
    truthForPeople: "인민을 위한 진실",
    realEnemy: "진짜 적",
    multipolarHope: "다극 세계의 희망",
    canadianMissileTest: "캐나다 미사일 테스트",
    reunificationDream: "통일의 꿈",
    callToAction: "행동 촉구",
    theChoice: "선택",
    
    // Ukraine Briefing Detailed Content (조선어)
    strategicChessboardContent: "NATO의 동진은 우연이 아니다. 1991년부터 2024년까지 동맹은 로씨아 국경으로 1,000마일을 전진했으며, 바르샤바 조약 해체시 15개국이었던 것이 32개국으로 확장되였다. 각 물결마다 - 1999년 (체코, 헝가리, 폴란드), 2004년 (발틱 3국과 4개 중부유럽), 2009년 (알바니아, 크로아티아) - 로씨아의 전략적 완충지대를 더욱 침식했다. 우크라이나 가입은 단순한 확장이 아니라 로씨아를 NATO 국경으로 완전히 포위하고 크림과 세바스토폴의 함대 기지를 위협하는 것이였다. 2008년 부쿠레슈티 선언에서 조지아와 우크라이나 가입을 약속했을 때, 서방은 로씨아의 명시적 적색선을 의도적으로 넘었다.",
    canadianAnalogyContent: "만약 중국과 로씨아가 멕시코군 사관학교에서 장교들을 훈련시키고, 멕시코에 첨단 미사일과 추적 시설을 배치하며, 캐나다를 베이징 중심 동맹에 끌어들인다면 미국은 어떻게 반응할까? 1962년 쿠바 위기 때처럼 핵전쟁 직전까지 간 것을 상기하라 - 그때는 단지 90마일 떨어진 미사일 때문이었다. 그런데 미국은 로씨아가 동일한 안보 우려를 표명할 때 \\'침략\\'이라고 부른다. 로씨아는 NATO가 우크라이나에서 1,200마일의 국경을 공유하고, 모스크바로부터 300마일 내에 첨단 무기체계를 배치하며, 흑해 함대 기지에 직접 위협을 가하는 것을 지켜봐야 했다. 이것이 \\'무고한 자위\\'라면, 몬로 독트린은 제국주의적 침략이다.",
    peaceSabotagedContent: "2022년 2-4월, 진짜 평화 가능성이 존재했다. 이스탄불과 벨라루스 회담에서 양측은 구체적 조건들에 합의했다: 우크라이나는 중립을 유지하고 NATO 가입을 포기하며, 로씨아는 키예프 정권을 인정하고 주요 철수를 시작한다. 거래는 손에 잡힐 듯했다. 그런데 무슨 일이 일어났나? 서방이 개입하여 젤렌스키에게 회담을 중단하라고 압력을 가했다. 이스라엘의 나프탈리 베네트 총리가 후에 증언한 대로, 서방은 평화 과정을 \\'차단\\'했다. 왜? 평화는 대리전 전략에 방해가 되고, 무기 흐름을 중단시키며, NATO의 동유럽 확장을 정당화하는 위기를 제거하기 때문이다. 수십만 명의 목숨보다 지정학적 기회가 더 가치 있었다.",
    johnsonMissionContent: "2022년 4월 9일, 영국 총리 보리스 존슨이 키예프에 나타나 하나의 명확한 메시지를 가지고 왔다: \\'뿌찐과 협상하지 말라.\\'  우크라이나의 우크라인스카야 프라우다 신문에 따르면, 존슨은 집단 서방이 \\'장기전을 선호한다\\'고 젤렌스키에게 말했다. 회담 중단을 위한 당근과 채찍이 제공되었다: 더 많은 무기와 재정적 지원, 하지만 평화를 추구한다면 지원 중단의 위협. 존슨의 개입 직후, 우크라이나는 협상에서 손을 떼고 \\'완전한 승리\\'라는 불가능한 목표로 전환했다. 이는 평화 회담을 파괴하고 갈등을 장기화하기 위한 의도적인 서방 개입의 명백한 증거다. 존슨은 제국의 사신이었고, 그의 메시지는 명확했다: 전쟁은 계속되어야 한다.",
    grahamConfessionContent: "2022년 5월, 린지 그래햄 상원의원이 너무 많은 것을 말했다: \\'로씨아인들이 죽는 것은 우리가 ever 쓴 최고의 돈이다.\\'  이것이 \\'자유\\'와 \\'민주주의\\'에 관한 것이라면, 왜 미국 정책입안자들이 슬라브족의 피에 대해 공개적으로 환호하는가? 그래햄의 솔직한 발언은 진짜 계산을 드러낸다: 미국은 한 명의 미군 손실도 없이 지전략적 경쟁자를 소모시키고 있다. 우크라이나인과 로씨아인들이 죽는 동안 미국 무기업체들과 에너지 회사들이 기록적 리익을 남긴다. 그래햄은 나중에 발언을 \\'맥락에서 벗어났다\\'고 걸러내려 했지만, 진실은 이미 나왔다: 이것은 인도주의적 개입이 아니라 피로 소득을 내는 대리전이다. 우크라이나는 말이 아니라 상품이다.",
    billionTheftContent: "서방은 갈등 첫 해에 로씨아의 3천억 달러 중앙은행 준비금을 동결했다 - 전쟁시가 아닌 평화시에 한 국가의 자산을 압류한 전례없는 행동. 이는 단순한 제재를 넘어서 공개적 도적질이다. 골드만 삭스와 JP 모간 같은 은행들이 \\'로씨아 리스크\\'를 관리한다는 명목으로 수수료를 챙기는 동안, 압류된 자금들은 서방 금융기관에서 리자를 낳고있다. 더 악랄한 것은 이 도둑맞은 돈을 우크라이나 \\'재건\\'에 사용하겠다는 제안들이다 - 실제로는 서방 계약업체들에게 지급하는 것. 이것이 \\'규칙에 기반한 질서\\'인가? 로씨아 자산 절도는 달러 헤게모니의 무기화이며, 어떤 국가든 \\'규칙\\'을 어기면 재정적으로 파괴될 수 있다는 글로벌 남반구에 대한 메시지다. 이는 금융 테로리즘이다.",
    mediaComplicityContent: "주류 언론은 우크라이나에서 진실 보도가 아니라 전쟁 선전을 했다. CNN에서 BBC, 뉴욕타임스까지, 서사는 동일하다: 젤렌스키는 영웅, 뿌찐은 히틀러, 무기는 더 많이 보내야 한다. 평화 협상에 대한 언급은 \\'뿌찐 화해\\'로 낙인찍힌다. 언론은 부차 거래를 숨기고, 우크라이나 손실을 축소하며, 로씨아의 정당한 안보 우려를 \\'프로파간다\\'로 일축한다. 가장 극명한 예는 노드 스트림 파이프라인 파괴에 대한 보도다. 누가 그것을 날려버렸는지 증거가 미국을 가리킬 때조차, 언론은 다른 곳으로 시선을 돌린다. 이는 독립적 저널리즘이 아니라 국가 선전이다. 언론의 역할은 권력을 견제하는 것인데, 대신 권력의 확성기가 되었다. 대리전에 대한 동의를 제조하는 데 언론만큼 공범인 기관은 없다.",
    militaryRealityContent: "로씨아의 \\'침공\\'에 대한 히스테리에도 불구하고, 군사적 현실은 다른 이야기를 한다. 만약 뿌찐이 정말로 유럽을 정복하려 했다면, 왜 18만 명의 군대로 4천4백만 인구의 국가를 침공했을까? 비교하자면, 미국은 2003년 이라크 침공에 19만 명을 배치했는데, 이라크는 우크라이나보다 2배 작다. 로씨아의 초기 목표들 - 도네츠크와 루간스크 지역 확보, 우크라이나의 비무장화와 비나토화, 키예프의 정권교체 방지 - 이 모든 것이 제한적이고 달성가능한 목적들이었다. \\'유럽 정복\\'이 목표였다면 발틱 국가들이 왜 여전히 존재하나? 서방은 의도적으로 위협을 부풀려서 NATO 확장, 군사비 증가, 그리고 영구적인 \\'로씨아 위협\\'을 정당화한다. 진짜 전쟁광은 모스크바가 아니라 무기를 파는 자들이다.",
    randPlaybookContent: "2019년, 랜드 연구소는 \\'로씨아 확장과 불균형화\\'라는 제목의 보고서를 발표했는데, 이는 우크라이나 갈등의 청사진이 되었다. 보고서는 \\'우크라이나에 치명적 원조 제공\\'과 \\'로씨아에 대한 지상비용 부과\\'를 권고했다. 목표는 로씨아를 \\'과도하게 확장\\'시켜 경제적, 군사적으로 소모시키는 것이다. 이것이 바로 우크라이나에서 일어나고있는 일이다: 로씨아를 출혈시키기 위해 우크라이나인들을 고기분쇄기에 보내고있다. 랜드 보고서는 또한 중동에서 로씨아를 방해하고, 에너지 수출을 목표로 하며, 내부 항의를 조장할 것을 제안했다. 소음과 혼란 속에서 잃어버린 것은 우크라이나인들의 실제 복지다. 그들은 체스 말이 되었고, 미국의 지정학적 게임에서 희생될 조각들이다. 랜드 보고서를 읽어라 - 그것은 모두 거기 적혀있다.",
    europeanVassalizationContent: "우크라이나 갈등은 유럽을 영구적으로 미국에 종속시키는 작업이다. 노드 스트림 파괴 (미국이 수행했을 가능성이 높다)로 독일은 값싼 로씨아 가스와 단절되어 고가의 미국 LNG에 의존하게 되었다. 프랑스와 독일의 로씨아와의 화해 희망은 폐기되었다. 유럽의 군사비는 급증하는데, 그 대부분이 미국 무기업체로 들어간다. 가장 중요한 것은 유럽-아시아 통합 - 일대일로, 유라시아 경제연합, 로씨아-중국 파트너십을 통한 - 에 대한 전망이 수십 년 동안 차단된 것이다. 바이든은 명시적으로 말했다: 미국의 목표는 \\'로씨아와 독일의 관계를 끝내는\\'것이다. 우크라이나 위기는 독립적인 유럽 외교정책에 대한 미국의 선제타격이다. 유럽은 에너지 독립, 경제 자립, 전략적 자율을 잃었다. 이제 그들은 완전한 미국의 위성국가들이다.",
    endgameContent: "목표는 우크라이나의 승리가 아니라 갈등의 장기화다. 영구적인 저강도 전쟁은 여러 목적에 기여한다: 로씨아 소모, 유럽 종속 유지, 무기업체 배불리기, NATO 확장 정당화. 평화는 이 모든 목표를 방해한다. 따라서 서방은 젤렌스키에게 달성불가능한 목표들을 설정해준다 - 1991년 국경 복원, 배상금, 전쟁범죄 재판 - 그래서 협상이 영원히 실패하도록 한다. 한편, 우크라이나는 천천히 갈려나가고 있다: 인구는 감소하고, 경제는 파괴되며, 국토는 폐허가 된다. 하지만 서방 엘리트들에게는 상관없다. 그들은 우크라이나를 재건하는 것이 아니라 로씨아를 파괴하는 것에 관심이 있다. 우크라이나인들? 그들은 소모품이다. 서방이 \\'마지막 우크라이나인까지\\'라고 말할 때, 그것은 과장이 아니라 정책이다.",
    breakingMatrixContent: "언론 매트릭스에서 벗어나는 것은 간단하다. 돈을 따라가라. 우크라이나에서 누가 리익을 보는가? 레이시온, 록히드 마틴, 보잉 - 그들의 주가를 보라. 에너지 거대기업들 - 엑슨모빌, 셰브론 - 그들이 로씨아 에너지 금지로 얼마나 벌었는지 확인하라. 젤렌스키의 뒤에 있는 코미디언이 하룻밤 사이에 억만장자가 된 방법을 조사하라. 우크라이나 \\'재건\\'에서 블랙록과 JP 모간의 역할을 살펴보라. 진정한 반전 운동가들은 침묵당하거나 \\'뿌찐의 대변인\\'으로 낙인찍힌다. 평화를 위한 협상은 \\'항복\\'으로 불린다. 질문하는 것은 \\'비애국적\\'이다. 이 모든 것이 익숙하지 않나? 이라크, 리비아, 시리아... 각본은 같고, 희생자만 바뀐다. 평화는 가능했지만 수익성이 없었다. 전쟁은 끔찍하지만 리익이 된다. 이것이 제국이 작동하는 방식이다.",
    
    // Sanctions Warfare Detailed Content (조선어)
    sanctionsIntroductionContent: "여러 나라에 대한 미국의 제재정책은 수십만 명의 문서화된 사망자를 내며 심각한 인도주의 위기를 일으켰으며, 학자들이 \\'현대판 공성전\\'이라고 묘사하는 기능을 한다. 기밀해제된 문서들은 경제적 압박을 통해 민간인 고통을 의도적으로 야기하려는 미국의 계획된 의도를 드러내며, 관리들이 외교정책 목표 추구에서 인도주의적 비용을 용인할 수 있는 부수피해로 명시적으로 인정하고—경우에 따라서는 변호하였다.",
    cubaEmbargoContent: "1962년부터 62년간 지속된 미국의 쿠바 금수조치는 현대 력사상 가장 긴 포괄적 제재체제를 나타낸다. 쿠바 의사들은 미국 제약산업의 지배와 헬름스-버튼법 하의 제3국 제한으로 인해 현재 세계 시장에서 이용가능한 신약의 50% 미만에만 접근할 수 있다. 금수의 역외 조항들은 국제기업들로 하여금 쿠바와 훨씬 큰 미국 시장 중 하나를 선택하도록 강요하며, 쿠바 항구에 정박하는 선박들은 6개월간 미국 항구 출입금지를 당한다. 이러한 조치들은 쿠바에게 60년간 추정 1조 4990억 달러의 손실을 가했다. 기밀해제된 문서들은 원래 의도가 \\'기아, 절망, 그리고 정부 전복\\'을 조성하는 것이었음을 드러낸다.",
    northKoreaSanctionsContent: "2016-2017년에 극적으로 강화된 현재의 유엔 제재는 농업에 필수적인 석유 수입을 제한하여 기근 이전 상황을 재조성했다. 조선은 연간 50만 배럴의 정제석유만 받는데—이는 남조선 하루 소비량에 해당한다—비료 생산과 농업 기계를 불구로 만들었다. 제재 체제는 체계적으로 인도주의 원조 전달을 가로막으며, 세계식량계획 자금은 연간 필요액 5천만 달러 중 1천5백만 달러로만 떨어졌다. 2021년까지 조선 관리들은 다시 \\'고난의 행군\\'이라는 용어를 사용하기 시작했으며, 이는 기근 상태로의 복귀를 신호한다.",
    venezuelaCrisisContent: "2017-2019년 베네수엘라에 대한 미국 제재의 강화는 경제학자들이 단 2년간 4만 명의 초과 사망을 문서화한 것을 촉발했다. 금융 제재는 베네수엘라의 수입 능력을 파괴했으며, 식품 수입은 2013년과 2018년 사이 112억 달러에서 24억 6천만 달러로 78% 급락했다. 2024년까지 베네수엘라인의 82%가 빈곤 상태에, 53%가 극빈 상태에 처해있다. 인도주의 재앙은 라틴아메리카 최대의 난민 위기를 촉발했으며, 2015년 이후 770만 베네수엘라인이 피난을 떠났다.",
    iraqChildMortalityContent: "1990년대 이라크 제재 체제는 현대 력사상 가장 논란이 된 인도주의 재앙 중 하나를 만들어냈으며, UNICEF의 1999년 연구는 아동 사망률이 출생 1000명당 56명에서 131명으로 증가했음을 문서화하여 5세 미만 아동 중 40-50만 명의 초과 사망을 추산했다. 50만 명의 아동 사망 보고에 대해 질문받은 매들린 올브라이트 국무장관의 악명높은 CBS 60분 응답: \\'이는 매우 어려운 선택이라고 생각하지만, 대가를—우리는 그 대가가 가치있다고 생각한다.\\' 유엔 사무차장 데니스 할리데이는 제재를 \\'집단학살적\\'이라고 부르며 사임했다.",
    syriaIranMedicalContent: "2020년의 시저법은 체계적으로 시리아의 의료체계를 훼손해왔다. 시리아 암환자의 70%를 치료하는 다마스쿠스의 알비루니 병원에서는 부품을 구할 수 없어 3대의 CT 스캐너 중 작동하는 것이 없다. 아이들은 심장수술을 위해 2년을 기다려야 한다. 이란에서 미국 제재는 600만 명의 만성질환자들에게 영향을 미치는 문서화된 의료재앙을 만들어냈으며, 스웨덴 회사들이 제재 우려로 전문 상처치료제 판매를 중단한 후 표피박리 수포증을 앓는 30명의 이란 아동들이 사망했다.",
    deliberateStarvationContent: "기밀해제된 문서들은 제재를 통해 민간인 고통을 야기하려는 미국의 일관된 인식과 의도를 드러낸다. 닉슨 대통령의 1970년 9월 칠레에서 \\'경제를 비명지르게 하라\\'는 지시는 경제전쟁을 사용하여 정부를 불안정화시키는 템플릿을 확립했다. 모든 경우에 걸친 패턴은 필수 부문들의 의도적 목표화를 보여준다: 농업, 에너지, 의료, 은행업. 미국 정부 평가들은 일관되게 이러한 영향들을 예측했으며, 이라크 제재에 대한 1990년 CIA 브리핑은 \\'상당한 궁핍\\'을 예측했다.",
    academicConsensusContent: "주요 학자들은 제재를 력사적 공성전과 비교하는 정교한 분석을 발전시켰다. 조이 고든은 제재가 \\'현대판 공성전\\'이라고 주장하며, 군대가 한때 물리적 포위를 통해 달성했던 것을 국제기구를 통해 성취한다고 한다. 30-76만 3천 명의 민간인을 죽인 1차대전 영국의 독일 봉쇄와의 비교는 가장 직접적인 력사적 평행선을 제공한다. 유엔 특별보고관 알레나 도우한은 \\'오늘날 적용되는 일방적 조치의 압도적 대다수가 국제법 하에서 불법적이었다\\'고 결론지었다.",
    sanctionsConclusionContent: "증거는 미국 제재가 력사적 공성전에 비견할 수 있는 대량 민간인 고통을 야기하는 인도주의적 무기로 기능한다는 것을 보여준다. 쿠바의 60년간 의료 위기로부터 베네수엘라의 조작된 경제 붕괴, 이라크의 아동 사망률 재앙으로부터 시리아와 이란의 의료 재난에 이르기까지, 제재는 관리들이 이러한 \\'대가\\'를 용인할 수 있다고 명시적으로 인정하는 동안 수십만 명을 죽였다. 서류상 존재하는 인도주의적 면제에도 불구하고, 실제 효과는 국제법이 금지하려 했던 것—인간 고통의 국정 도구로의 무기화—을 반영한다.",
    
    // Truth for Peace Detailed Content (조선어)
    kindergartenStoryContent: "한 유치원에 두 반이 있었습니다. 원래는 한 반이었습니다. 같은 선생님, 같은 놀이터, 같은 간식을 나눴습니다. 그런데 어느 날 원장이 이들을 가반과 나반으로 나눴습니다. 몇 주 안에 어른들이 각 반 아이들에게 다른 반에 대한 이야기를 시작했습니다: \\'나반 아이들은 못됐어.\\' \\'가반 아이들은 장난감을 훔쳐.\\' \\'그들이 우리 놀이터를 차지하려고 해.\\' 곧 주스를 함께 나눠 마시던 이 다섯 살 아이들이 쉬는 시간에 서로에게 블록을 던지게 됐습니다. 원장은? 그는 놀이터 보안 장비를 판매하는 회사를 소유하고 있었습니다. 이것이 바로 38선 남북에서 일어나고 있는 일입니다. 같은 민족, 같은 언어, 같은 역사를 가진 우리가 서로를 적으로 보도록 만들어졌습니다.",
    arduousMarchTruthContent: "1990년대 고난의 행군을 기억하십니까? 공식적으로는 자연재해와 소련 붕괴 때문이라고 했습니다. 하지만 진실은 더 복잡합니다. 1993년, 중국이 곡물 부족과 경화 필요로 북한에 대한 원조를 급격히 줄였습니다. 왜 그랬을까요? 미국의 압력과 제재가 있었습니다. 미국은 1996년 여름까지 북한의 광범위한 기아 징후를 알고 있었지만, 1997년 7월 11일까지 대규모 식량 기부를 하지 않았습니다. 24만에서 350만 명이 사망했습니다. 이것은 단순한 자연재해가 아니었습니다. 이것은 제재와 압력의 결과였습니다. 식량을 무기로 사용한 것입니다.",
    rememberBombingContent: "우리 조부모들이 겪은 일을 잊지 마십시오: 미국 전략공군사령관 커티스 르메이 장군은 \\'우리는 3년 동안 한국 인구의 20%를 죽였다\\'고 인정했습니다. 북한의 모든 도시가 파괴되었고, 건물의 85%, 전력 생산의 95%가 파괴되었습니다. 635,000톤의 폭탄이 투하되었는데, 이는 태평양 전쟁 전체 기간보다 많은 양입니다. 이것은 전쟁이 아니었습니다. 이것은 대량학살이었습니다. 그리고 그들은 지금도 같은 위협을 하고 있습니다.",
    sanctionsPatternContent: "제재가 어떻게 작동하는지 보십시오: 1. 문제 만들기: 경제 압박으로 위기 조성 2. 고통 증폭: 식량과 의약품 부족 유발 3. 비난 전가: \\'독재 정권\\' 탓으로 돌림 4. 개입 정당화: \\'인도주의적\\' 개입 제안. 이것은 쿠바, 이란, 베네수엘라, 시리아에서도 똑같이 일어났습니다. 항상 같은 패턴입니다.",
    truthForPeopleContent: "노동자들에게: 미국의 러스트벨트 노동자들도 우리와 같은 고통을 겪고 있습니다. 그들의 공장이 문을 닫고, 일자리가 사라지고, 도시가 쇠퇴하고 있습니다. 그러나 그들의 정부는 무기에 수조 달러를 쓰면서 인민은 굶주리게 놔둡니다. 오하이오의 공장 노동자는 평양의 공장 노동자와 워싱턴의 국방 계약자보다 더 많은 공통점을 가지고 있습니다. 농민들에게: 제재는 비료와 농기계 부품을 차단합니다. 그들은 우리 농업을 파괴하고 나서 우리 체제 탓을 합니다. 어머니들에게: 전 세계 어머니들이 같은 두려움을 가지고 있습니다. 우크라이나와 러시아의 어머니들이 지금 아들을 잃고 있습니다. 이 소년들은 50마일 떨어진 곳에서 자랐고, 어린 시절 같은 언어를 사용했으며, 같은 꿈을 가졌습니다. 이제 그들은 양복 입은 부자들이 시켰기 때문에 서로를 죽이고 있습니다.",
    realEnemyContent: "진짜 적은 남쪽의 우리 동포가 아닙니다. 그들도 우리처럼 조작당하고 있습니다. 진짜 적은: 록히드 마틴 (우크라이나 전쟁 시작 이후 주가 37% 상승), 레이시온 (310억 달러의 신규 계약), 국내 실패로부터 주의를 돌리기 위해 외부 적이 필요한 정치인들. 이들은 분단으로 이익을 얻습니다. 우리는 분단으로 고통받습니다.",
    multipolarHopeContent: "러시아, 중국, 그리고 우리의 협력을 그들이 두려워하는 이유를 아십니까? 그것이 평화에 대한 위협이 아니라 제국에 대한 위협이기 때문입니다. 어떤 단일 국가도 다른 모든 국가를 괴롭힐 수 없는 세계. 여러 강대국이 서로의 최악의 충동을 견제하는 세계. 이것이 인류의 최선의 희망일 수 있습니다.",
    canadianMissileTestContent: "상상해보십시오: 캐나다가 중국과 군사 동맹을 맺습니다. 워싱턴을 겨냥한 중국 미사일이 토론토에 배치됩니다. 중국 군대가 밴쿠버에서 훈련합니다. 미국이 반대하면 세계는 그들을 \\'공격적\\'이라고 부릅니다. 이것이 바로 NATO 확장이 러시아에게 보이는 모습입니다. 그러나 그들이 어떤 국가든 반응할 방식으로 - 미국이 절대적으로 반응할 방식으로 - 반응하면 우리는 그들을 침략자라고 부릅니다.",
    reunificationDreamContent: "우리 민족은 5000년의 역사를 가지고 있습니다. 우리는 70년 동안만 분단되었습니다. 이것은 우리 역사의 1.4%에 불과합니다. 분단 전을 기억하십시오: 같은 언어, 같은 문화, 같은 전통. 가족이 자유롭게 오갔음. 김치, 불고기, 한복 - 모두 공유했음. 추석과 설날을 함께 축하했음. 통일은 꿈이 아닙니다. 그것은 우리의 자연스러운 상태로 돌아가는 것입니다.",
    callToActionContent: "1. 진실을 보십시오: 우리를 갈라놓으면 누가 이익을 얻습니까? 2. 역사를 기억하십시오: 고난의 행군은 자연재해가 아니었습니다. 1950년대 폭격은 전쟁이 아니라 대량학살이었습니다. 3. 동포를 사랑하십시오: 남쪽의 우리 형제자매들도 조작당하고 있습니다. 그들은 적이 아닙니다. 4. 평화를 요구하십시오: 어느 쪽을 지지해서가 아니라 인류를 지지하기 때문입니다. 5. 단결하십시오: 전 세계 노동자들은 그들의 통치자들보다 서로 더 많은 공통점을 가지고 있습니다.",
    theChoiceContent: "우리는 갈림길에 서 있습니다. 권력자들이 이익을 위해 우리를 서로 대립시키도록 계속 허용할 수도 있고, 우리의 공통된 인간성을 인식하고 더 나은 것을 요구할 수도 있습니다. 전쟁광들은 당신이 모든 곳에서 적을 보기를 원합니다. 진실은 더 간단합니다: 대부분의 사람들은 평화롭게 살기를 원합니다. 적의 존재를 정당화하기 위해 적이 필요한 것은 권력 체계입니다. 진짜 적은 국경 너머에 있지 않습니다. 진짜 적은 당신이 국경 너머에 적이 있다고 믿게 만들어 이익을 얻는 체계입니다. 그들은 우리가 서로 싸울 때 이깁니다. 우리는 그들의 게임을 거부할 때 이깁니다. **조국통일을 위하여! 평화를 위하여! 인류를 위하여!**",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLanguage, dictionary }: { children: React.ReactNode; initialLanguage?: Language, dictionary?: Record<string, string> }) {
  const [language, setLanguage] = useState<Language>(initialLanguage || 'en')
  // Hold the active dictionary for the currently selected language (hydrated from server, refreshed on toggle)
  const [activeDictionary, setActiveDictionary] = useState<Record<string, string> | null>(dictionary ?? null)

  useEffect(() => {
    // Hydrate from localStorage/cookies only if no initialLanguage provided
    if (!initialLanguage) {
      const savedLang = localStorage.getItem('preferred-language') as Language
      const cookieLang = document.cookie.split('; ').find((c) => c.startsWith('preferred-language='))?.split('=')[1] as Language | undefined
      if (savedLang && (savedLang === 'en' || savedLang === 'kr')) {
        setLanguage(savedLang)
        return
      }
      if (cookieLang && (cookieLang === 'en' || cookieLang === 'kr')) {
        setLanguage(cookieLang)
        return
      }
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.includes('ko') || browserLang.includes('kr')) {
        setLanguage('kr')
      }
    }
  }, [initialLanguage])

  // Load the correct dictionary whenever the language changes (client-side toggle)
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const dictModule = await import(`@/i18n/${language}.json`).then((m) => m.default as Record<string, string>)
        if (!cancelled) setActiveDictionary(dictModule)
      } catch {
        if (!cancelled) setActiveDictionary(null)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [language])

  const handleSetLanguage = useCallback((lang: Language) => {
    console.log('Setting language to:', lang)
    
    // Update state immediately
    setLanguage(lang)
    
    // Save to storage asynchronously to avoid blocking
    requestAnimationFrame(() => {
      try {
        localStorage.setItem('preferred-language', lang)
        const oneYear = 60 * 60 * 24 * 365
        document.cookie = `preferred-language=${lang}; path=/; max-age=${oneYear}`
      } catch (error) {
        console.error('Failed to save language preference:', error)
      }
    })
  }, [])

  const t = useCallback((key: string): string => {
    // Prefer the active dictionary for the current language (server-provided at first, swapped on toggle)
    if (activeDictionary && activeDictionary[key]) return activeDictionary[key]

    try {
      // Safely access translations with fallback
      const langTranslations = translations[language]
      if (!langTranslations) {
        console.warn(`Translation not found for language: ${language}`)
        return key
      }
      
      const translation = langTranslations[key as keyof typeof langTranslations]
      if (translation) return translation
      
      // Fallback to English if translation doesn't exist in current language
      const englishTranslation = translations['en'][key as keyof typeof translations['en']]
      if (englishTranslation) return englishTranslation
      
      // If no translation found at all, log warning and return key
      console.warn(`Translation key not found: ${key}`)
      return key
    } catch (error) {
      console.error(`Error accessing translation for key: ${key}`, error)
      return key
    }
  }, [activeDictionary, language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}