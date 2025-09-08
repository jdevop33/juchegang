export type FeaturedChapter = { time: string; label: string }

export type FeaturedVideo = {
  id: string
  title: string
  speaker: string
  series?: string
  date?: string
  views?: string
  description?: string
  hashtags?: string[]
  youtubeEmbedUrl: string
  attributionHtml?: string
  chapters?: FeaturedChapter[]
}

export const featuredVideos: FeaturedVideo[] = [
  {
    id: "roy-palestine-history-part1",
    title: "Office Hours with Dr. Roy — The History of Palestine (Part 1)",
    speaker: "Dr. Roy Casagranda",
    series: "Office Hours with Dr. Roy",
    date: "Sep 2, 2025",
    views: "247,462",
    description:
      "Part 1 traces the story from ancient times through the creation of Israel in 1948. A framework to understand how the past shapes the present.",
    hashtags: [
      "PalestineHistory",
      "Zionism",
      "HolocaustHistory",
      "GazaIsStarving",
    ],
    youtubeEmbedUrl:
      "https://www.youtube-nocookie.com/embed/U9mLrMSmTKI?si=_t08ZGn-cy2ObKwb",
    attributionHtml:
      "© Dr. Roy Casagranda – All Rights Reserved. All video content featuring Dr. Roy Casagranda is the intellectual property of Dr. Roy Casagranda. Unauthorized reproduction, redistribution, or re-uploading of this content—whether in full or in part—is strictly prohibited.",
    chapters: [
      { time: "00:00:00", label: "Opening: Why Palestine Matters" },
      { time: "00:01:40", label: "Ancient Peoples and Early Judaism" },
      { time: "00:06:00", label: "Babylonian Captivity & Persian Rule" },
      { time: "00:09:56", label: "Greeks, Romans, and the Jewish Diaspora" },
      { time: "00:15:10", label: "Arab Conquest and Jewish-Muslim Relations" },
      { time: "00:17:05", label: "The Crusades and Christian Antisemitism" },
      { time: "00:20:18", label: "Colonialism and the Rise of Zionism" },
      { time: "00:22:18", label: "Pogroms, Dreyfus Affair, and Herzl" },
      { time: "00:29:00", label: "Race, Identity, and the Claim to Palestine" },
      { time: "00:32:02", label: "Balfour Declaration & Sykes-Picot" },
      { time: "00:35:10", label: "Zionism and Antisemitism Connected" },
      { time: "00:41:09", label: "Holocaust: From Camps to Final Solution" },
      { time: "00:47:00", label: "Nazi Racial Policies and IBM Data" },
      { time: "00:55:00", label: "Hatred, Opportunism, and Power" },
      { time: "01:00:00", label: "Why Allies Didn’t Bomb Auschwitz" },
      { time: "01:06:00", label: "Holocaust Death Toll & Modern Antisemitism" },
      { time: "01:10:02", label: "UN Partition of Palestine, 1947" },
      { time: "01:14:15", label: "1948 War and Palestinian Expulsion" },
      { time: "01:20:00", label: "Aftermath: Refugees, Druze, and Bedouin" },
      { time: "01:23:00", label: "Closing and Next Episode Preview" },
    ],
  },
]


