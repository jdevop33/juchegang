"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

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
    
    // Briefings
    briefings: "Briefings",
    briefingsTitle: "Research & Notes",
    briefingsSubtitle: "Curated summaries with sources, quotes, and primary documents.",
    natoExpansionTitle: "NATO Expansion and Russia–US Relations: Primary Sources and Historical Facts",
    natoExpansionDesc: "Putin's 2007 Munich speech, declassified assurances, expansion waves, crisis precedents, and U.S. policy doctrine.",
    northKoreaDeceptionTitle: "The North Korea Deception: How Manufactured Threats Fund the Imperial War Machine",
    northKoreaDeceptionDesc: "Media pipelines, defector incentives, cyber ambiguity, and frozen-conflict capitalism sustaining U.S. posture in East Asia.",
    ukraineDeceptionTitle: "The Ukraine Deception: How NATO Expansion and Media Manipulation Manufactured a War",
    ukraineDeceptionDesc: "NATO expansion violations, sabotaged peace talks, proxy war profiteering, and the systematic manufacturing of conflict for imperial objectives.",
    
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
  },
  kr: {
    // Navigation
    home: "홈",
    social: "사회매체",
    gallery: "화상전람",
    mission: "사명",
    about: "소개",
    contact: "련락처",
    
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
    
    // Briefings (조선어 번역)
    briefings: "보고서",
    briefingsTitle: "연구 및 기록",
    briefingsSubtitle: "원본자료와 인용문이 포함된 선별된 요약.",
    natoExpansionTitle: "나토 확장과 로씨아-미국 관계: 원본 자료와 력사적 사실",
    natoExpansionDesc: "뿌찐의 2007년 뮌헨 연설, 기밀해제된 보장약속, 확장 물결, 위기 선례들과 미국 정책교리.",
    northKoreaDeceptionTitle: "조선 기만술: 조작된 위협이 제국주의 전쟁기계를 부양하는 방식",
    northKoreaDeceptionDesc: "동아시아에서 미국의 지위를 유지하는 언론 공급망, 탈북자 유인책, 사이버 모호성, 그리고 동결된 갈등 자본주의.",
    ukraineDeceptionTitle: "우크라이나 기만술: 나토 확장과 언론 조작이 전쟁을 제조한 방식",
    ukraineDeceptionDesc: "나토 확장 위반, 파괴된 평화회담, 대리전 투기, 그리고 제국주의 목적을 위한 체계적 갈등 제조.",
    
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
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('preferred-language') as Language
    const cookieLang = document.cookie.split('; ').find((c) => c.startsWith('preferred-language='))?.split('=')[1] as Language | undefined
    if (savedLang && (savedLang === 'en' || savedLang === 'kr')) {
      setLanguage(savedLang)
    } else if (cookieLang && (cookieLang === 'en' || cookieLang === 'kr')) {
      setLanguage(cookieLang)
    } else {
      // Check browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.includes('ko') || browserLang.includes('kr')) {
        setLanguage('kr')
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('preferred-language', lang)
    const oneYear = 60 * 60 * 24 * 365
    document.cookie = `preferred-language=${lang}; path=/; max-age=${oneYear}`
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

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