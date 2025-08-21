import type { Law } from "@/types/law"

// Korean (조선말) versions of the 48 laws; start with a subset and fall back to EN where missing.
// Expand over time; any missing entry should be looked up from EN.

export const lawsKr: Partial<Record<number, Pick<Law, 'title' | 'content'>>> = {
  1: {
    title: "탁월성을 두려워하는 자에게서 배우지 말라",
    content:
      "남의 불안 때문에 스스로를 제한하지 말라. 너의 목적은 개인적 탁월성이다. 너의 기술과 자신감, 담력을 어떤 이의 불안 때문에 줄이지 말라.",
  },
  2: {
    title: "믿을 수 있는 벗을 사귀라",
    content:
      "위대한 일은 홀로 이루어지지 않는다. 성품을 가려 믿음직한 벗을 두고, 함께 공통의 목적을 위해 행하라.",
  },
  7: {
    title: "도움은 구하고, 고무하며, 받아들이고, 공로는 돌려주라",
    content:
      "벗과 전우는 팔과 다리와 같다. 함께 일할 때 공로는 반드시 그들에게 돌아가게 하라.",
  },
  8: {
    title: "쉽게 도발되지 말라. 자기규률을 기르라",
    content:
      "상대가 정한 전장에 나가지 말라. 반응보다 주도권이 앞선다. 규률은 탁월성의 토대이다.",
  },
}


