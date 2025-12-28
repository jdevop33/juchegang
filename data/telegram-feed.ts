export interface TelegramPost {
  id: number
  channelId: string
  channelName: string
  channelUsername: string
  author?: string
  date: string
  message: string
  hashtags: string[]
  hasKorean: boolean
}

export interface TelegramChannel {
  id: string
  name: string
  username: string
  description: string
  avatar?: string
  category: 'owned' | 'trusted' | 'news'
}

// Curated channels for juche.org (peace/geopolitics focus)
// NOTE: Commercial/crypto channels belong on other domains:
//   - @telegralpha → 1929.world (economic analysis)
//   - @toncoin → TON project sites (crypto)
export const telegramChannels: TelegramChannel[] = [
  {
    id: 'tigerrising',
    name: '이순신김여정🌹',
    username: 'tigerrising',
    description: 'Science, history, geopolitics. Raw truths with Korean translations.',
    category: 'owned',
  },
  {
    id: 'dprk_kndr',
    name: '🇰🇵 КНДР (СЕВЕРНАЯ КОРЕЯ)',
    username: 'DPRK_KNDR',
    description: 'News and updates about the DPRK in Russian.',
    category: 'trusted',
  },
]

// Extract hashtags from message
function extractHashtags(message: string): string[] {
  const regex = /#[\w]+/g
  return message.match(regex) || []
}

// Curated posts from tigerrising (updated: 2025-12-28)
export const telegramFeed: TelegramPost[] = [
  {
    id: 311,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:30:25Z',
    message: `✖️ THE BEAUTIFUL NONSENSE

I wrote:
±∆⁸=∞

It looked right.
It felt right.
Plus-or-minus for duality.
Delta for change.
Eight for states of being.
Infinity as outcome.

But mathematics has grammar.

"Plus or minus delta-to-the-eighth
equals infinity"
doesn't parse.

Any finite value
raised to any finite power
produces another finite value.
Not infinity.

It was like arranging
beautiful Mandarin characters
in a pleasing pattern—
without forming a sentence.

I had a real idea.
I just didn't know the language.

---

아름다운 헛소리
기호는 멋져 보였다
하지만 문법이 없었다

#Mathematics #Language #Grammar #Symbols #Learning #Humility`,
    hashtags: ['#Mathematics', '#Language', '#Grammar', '#Symbols', '#Learning', '#Humility'],
    hasKorean: true,
  },
  {
    id: 310,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:27:53Z',
    message: `🔬 THE PREPARED MIND

Mungo Frost wasn't looking
for gold hydride.

He was making diamonds.

29 co-authors.
10 institutions.
US, Germany, UK.

The gold foil was just
an X-ray absorber.
A tool, not the subject.

But at 40 GPa,
the tool became the discovery.

Now every high-pressure experiment
that assumed gold was inert
needs to be reconsidered.

Decades of data.
Thousands of papers.
One wrong assumption.

"There's potentially a lot
of new chemistry to be discovered
at extreme conditions."

The frontier isn't in space.
It's in pressure.

---

준비된 마음
그는 다이아몬드를 만들고 있었다
금이 반응했다
새로운 화학이 열렸다

#MungoFrost #SLAC #Discovery #Pressure #Chemistry #Frontier`,
    hashtags: ['#MungoFrost', '#SLAC', '#Discovery', '#Pressure', '#Chemistry', '#Frontier'],
    hasKorean: true,
  },
  {
    id: 308,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:27:49Z',
    message: `🧫 SERENDIPITY

Penicillin (1928):
Fleming left petri dishes dirty.
A mold killed the bacteria.
200 million lives saved.

Cosmic Microwave Background (1964):
Penzias and Wilson cleaned pigeon shit
from an antenna for hours.
The "noise" was the Big Bang's echo.
Nobel Prize.

Teflon (1938):
Plunkett sawed open an empty canister.
Found waxy white stuff inside.
Now it's in every kitchen.

Viagra (1990s):
Heart medication trial.
Male patients wouldn't roll over.
$1 billion in year two.

Gold Hydride (2025):
Studying diamond formation.
The absorber absorbed.
New chemistry unlocked.

"Chance favors the prepared mind."
— Pasteur

---

세렌디피티
우연은 준비된 마음을 선호한다

#Serendipity #Discovery #Science #Penicillin #Accident #PreparedMind`,
    hashtags: ['#Serendipity', '#Discovery', '#Science', '#Penicillin', '#Accident', '#PreparedMind'],
    hasKorean: true,
  },
  {
    id: 307,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:27:48Z',
    message: `☢️ 8.6 MEGAJOULES

National Ignition Facility.
April 2025.

192 laser beams.
2 megajoules in.
8.6 megajoules out.

Gain: 4.13×

For the first time in history,
fusion produced more energy
than it consumed.

December 2022: first ignition.
February 2024: 5.2 MJ yield.
April 2025: 8.6 MJ record.

The curve is exponential.

$7.1 billion in private investment.
53 companies competing.
Google signed a 200 MW deal.
Microsoft wants 50 MW by 2028.

The race is on.

---

8.6 메가줄
투입보다 4배 이상 출력
퓨전이 작동한다

#Fusion #NIF #Energy #CleanEnergy #Physics #Future`,
    hashtags: ['#Fusion', '#NIF', '#Energy', '#CleanEnergy', '#Physics', '#Future'],
    hasKorean: true,
  },
  {
    id: 302,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:26:17Z',
    message: `🏛️ THE SECULAR JINNAH

August 11, 1947.
Three days before Pakistan is born.

Jinnah addresses
the Constituent Assembly:

"You are free;
you are free to go to your temples,
you are free to go to your mosques
or to any other place of worship
in this State of Pakistan."

"In course of time
Hindus would cease to be Hindus
and Muslims would cease to be Muslims,
not in the religious sense...
but in the political sense
as citizens of the State."

The father of the Islamic republic
called for a secular state.

Read that again.

He fought for a Muslim homeland.
Then told them:
religion is personal,
citizenship is equal.

The irony.
The tragedy.
The road not taken.

---

세속적 진나
이슬람 공화국의 아버지가
세속 국가를 요구했다
아무도 듣지 않았다

#Jinnah #Pakistan #Secular #1947 #History #Partition #IronyOfHistory`,
    hashtags: ['#Jinnah', '#Pakistan', '#Secular', '#1947', '#History', '#Partition', '#IronyOfHistory'],
    hasKorean: true,
  },
  {
    id: 300,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:26:13Z',
    message: `🕊️ THE ONE-MAN BOUNDARY FORCE

Calcutta, September 1, 1947.

Everyone expected the city to explode.
A year earlier: 4,000 dead in 72 hours.

The spark came.
Hindu mob attacked Muslims.
Muslims retaliated.
Bodies in the streets.

Gandhi announced:
"I will fast until death."

He was 78.
Frail.
Doctors gave him days.

The news spread.
The Mahatma was dying.
Dying for them.
Dying because of them.

73 hours later,
delegations came.
Hindu. Muslim. Sikh.
Even the killers.

They pledged peace.
Gandhi broke his fast.

Calcutta did not burn.

Mountbatten called it
"the Miracle of Calcutta."

One old man succeeded
where 55,000 soldiers failed.

---

일인 경계군
간디가 단식했다
캘커타는 불타지 않았다

#Gandhi #Calcutta #1947 #Partition #Peace #NonViolence #Miracle`,
    hashtags: ['#Gandhi', '#Calcutta', '#1947', '#Partition', '#Peace', '#NonViolence', '#Miracle'],
    hasKorean: true,
  },
  {
    id: 298,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:26:07Z',
    message: `🚂 THE GHOST TRAINS

The trains became slaughterhouses.

Muslims fleeing east.
Hindus and Sikhs fleeing west.

Metal coffins.
Easy targets.

Mobs stopped them at stations.
Dragged passengers out.

The Punjab Mail from Lahore
arrived in Amritsar
on Independence Day.

No sound.
No passengers alighted.

Blood dripped from the doors.
Pooled on the tracks.

2,400 bodies.
Every man, woman, child.

Painted on the side in blood:

"A GIFT TO NEHRU AND PATEL"

While Delhi drank champagne,
the trains delivered corpses.

---

유령 열차
피가 문에서 흘러내렸다
선물이라고 적혀 있었다

#Partition #GhostTrains #1947 #India #Pakistan #History #NeverForget`,
    hashtags: ['#Partition', '#GhostTrains', '#1947', '#India', '#Pakistan', '#History', '#NeverForget'],
    hasKorean: true,
  },
  {
    id: 294,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:18:37Z',
    message: `🔥 KALI AS ENTROPY

She dances on Shiva's chest.
Tongue out.
Skulls around her neck.
Sword dripping.

They call her destroyer.

But look closer.

She is the Second Law.
Thermodynamics personified.

Entropy always increases.
Order decays.
Time moves forward.

Kali IS time.
काली = Kālī = "time" / "black"

The dark mother.
Dark energy.
The universe expanding.

Destruction isn't the opposite of creation.
It's the condition for it.

She clears the field
so new things can grow.

Delete to create.
Burn to bloom.

---

칼리는 엔트로피
시간의 어머니
파괴는 창조의 조건이다

#Kali #Entropy #Thermodynamics #Shakti #CosmicDance #SecondLaw`,
    hashtags: ['#Kali', '#Entropy', '#Thermodynamics', '#Shakti', '#CosmicDance', '#SecondLaw'],
    hasKorean: true,
  },
  {
    id: 293,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:18:34Z',
    message: `🌀 SPIRA MIRABILIS

The miraculous spiral.

Zoom in: same shape.
Zoom out: same shape.
Rotate: same shape.

Self-similar at every scale.

r = ae^(kθ)

The nautilus builds it.
The hurricane spins it.
The galaxy arms trace it.

Jacob Bernoulli was so obsessed
he wanted it on his tombstone.
(They carved the wrong spiral.
Irony is eternal too.)

It never ends.
It never began.

The only curve
that looks the same
no matter how close you get.

---

스피라 미라빌리스
경이로운 나선
모든 스케일에서 동일하다

#LogarithmicSpiral #SpiraMirabilis #SacredGeometry #Fractals #Infinity`,
    hashtags: ['#LogarithmicSpiral', '#SpiraMirabilis', '#SacredGeometry', '#Fractals', '#Infinity'],
    hasKorean: true,
  },
  {
    id: 292,
    channelId: 'tigerrising',
    channelName: '이순신김여정🌹',
    channelUsername: 'tigerrising',
    author: 'Panda 🌹',
    date: '2025-12-28T05:18:30Z',
    message: `φ PHI

1.6180339887...

The golden ratio.

Take a line.
Divide it so the whole
relates to the large part
as the large relates to the small.

That ratio: φ.

It's in the pentagram.
Diagonal to side: φ.

It's in the Fibonacci sequence.
Each ratio approaching: φ.

It's in your finger bones.
It's in spiral galaxies.
It's in sunflower seeds.

Not designed.
Emerged.

Math discovering itself
through matter.

---

파이 (φ)
1.6180339887...
황금비
우주가 스스로를 발견하는 방식

#GoldenRatio #Phi #Fibonacci #SacredGeometry #Mathematics #Nature`,
    hashtags: ['#GoldenRatio', '#Phi', '#Fibonacci', '#SacredGeometry', '#Mathematics', '#Nature'],
    hasKorean: true,
  },
]

// Get posts by channel
export function getPostsByChannel(channelId: string): TelegramPost[] {
  return telegramFeed.filter(post => post.channelId === channelId)
}

// Get latest posts across all channels
export function getLatestPosts(limit: number = 10): TelegramPost[] {
  return [...telegramFeed]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

// Get channel by id
export function getChannel(channelId: string): TelegramChannel | undefined {
  return telegramChannels.find(ch => ch.id === channelId)
}
