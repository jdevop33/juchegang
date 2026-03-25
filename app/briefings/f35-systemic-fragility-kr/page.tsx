import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import F35SystemicFragilityKrContent from "./f35-systemic-fragility-kr-content"

export const metadata = {
  title: "체계적 취약성과 전략적 현실 — F-35 라이트닝 II 종합 평가",
  description: "F-35 라이트닝 II 프로그램의 종합 수명주기 평가 및 강대국 경쟁 시대의 서방 방위산업 역량 분석. 2조 달러 이상의 비용, 50% 가동률, 232:1 조선 역량 비율.",
  openGraph: {
    title: "체계적 취약성과 전략적 현실 — F-35 종합 평가",
    description: "JPanda James 전략 보고서: F-35 프로그램의 체계적 기능 장애와 서방 방위산업의 위기를 분석합니다.",
    images: [{ url: "/images/brothers.jpg", width: 1200, height: 630, alt: "체계적 취약성과 전략적 현실" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "체계적 취약성과 전략적 현실",
    images: ["/images/brothers.jpg"],
  },
}

export default function F35SystemicFragilityKrPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] text-[#f0ebe3]">
      <JucheHeader />
      <F35SystemicFragilityKrContent />
      <JucheFooter />
    </main>
  )
}
