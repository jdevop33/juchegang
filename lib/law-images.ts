/**
 * Maps each law number to Korean heritage imagery
 * All images are authentic Korean cultural heritage: Joseon paintings, museum collections,
 * landscape photography, and historical materials. Zero AI-generated content.
 *
 * Sources: Wikimedia Commons (Public Domain), Met Museum (CC0), Cleveland Museum (CC0),
 * Smithsonian (CC0), Library of Congress (no known restrictions)
 */

const heritageImages: Record<number, string> = {
	1: '/gallery/heritage/law-01-seodang-village-school.jpg',    // Kim Hong-do, Seodang (서당)
	2: '/gallery/heritage/law-02-ssireum-wrestling.jpg',          // Kim Hong-do, Ssireum (씨름)
	3: '/gallery/heritage/law-03-lovers-under-moon.jpg',          // Shin Yun-bok, Wolha Jeongin (월하정인)
	4: '/gallery/heritage/law-04-hunminjeongeum.jpg',             // Hunminjeongeum manuscript (훈민정음)
	5: '/gallery/heritage/law-05-bamboo-in-wind.jpg',             // Yi Jeong, Bamboo in the Wind (묵죽도)
	6: '/gallery/heritage/law-06-dancing-boy.jpg',                // Kim Hong-do, Mudong (무동)
	7: '/gallery/heritage/law-07-blacksmith-shop.jpg',            // Kim Hong-do, Daejanggan (대장간)
	8: '/gallery/heritage/law-08-inwang-after-rain.jpg',          // Jeong Seon, Inwangjesaekdo (인왕제색도)
	9: '/gallery/heritage/law-09-threshing-rice.jpg',             // Kim Hong-do, Tajak (타작)
	10: '/gallery/heritage/law-10-tiger-and-magpie.jpg',          // Minhwa, Kkachi Horangi (까치호랑이)
	11: '/gallery/heritage/law-11-dano-festival.jpg',             // Shin Yun-bok, Dano Pungjeong (단오풍정)
	12: '/gallery/heritage/law-12-plum-branch.jpg',               // Yi Yu-won, Plum Branch (매화도)
	13: '/gallery/heritage/law-13-gathering-officials.jpg',       // Gyehoe-do, Gathering of Officials (계회도)
	14: '/gallery/heritage/law-14-diamond-mountains.jpg',         // Jeong Seon, Geumgangjeondo (금강전도)
	15: '/gallery/heritage/law-15-dragon-and-carp.jpg',           // Dragon and Carp (용과 잉어)
	16: '/gallery/heritage/law-16-sungnyemun-restored.jpg',       // Sungnyemun Gate restored (숭례문)
	17: '/gallery/heritage/law-17-sword-dance.jpg',               // Shin Yun-bok, Ssanggeum Daemu (쌍검대무)
	18: '/gallery/heritage/law-18-hyangwonjeong-reflection.jpg',  // Gyeongbokgung, Hyangwonjeong Pavilion
	19: '/gallery/heritage/law-19-mountain-god-tiger.jpg',        // Mountain God with Tiger (산신도)
	20: '/gallery/heritage/law-20-an-junggeun-calligraphy.jpg',   // An Jung-geun calligraphy (안중근 서예)
	21: '/gallery/heritage/law-21-portrait-of-beauty.jpg',        // Shin Yun-bok, Miindo (미인도)
	22: '/gallery/heritage/law-22-secret-garden.jpg',             // Changdeokgung Huwon (후원)
	23: '/gallery/heritage/law-23-chusa-calligraphy.jpg',         // Kim Jeong-hui, Chusa-style (추사체)
	24: '/gallery/heritage/law-24-portrait-yun-dongseom.jpg',     // Portrait of Yun Dongseom (윤동섬 초상)
	25: '/gallery/heritage/law-25-hunminjeongeum-full.jpg',       // Hunminjeongeum full document (훈민정음)
	26: '/gallery/heritage/law-26-korean-soldiers-1904.jpg',      // Library of Congress, Korean soldiers
	27: '/gallery/heritage/law-27-spring-outing.jpg',             // Shin Yun-bok, Sangchun Yaheung (상춘야흥)
	28: '/gallery/heritage/law-28-kuryong-waterfall.jpg',         // Mt. Kumgang, Kuryong Waterfall
	29: '/gallery/heritage/law-29-chaekgado-scholars.jpg',        // Chaekgado screen (책거리)
	30: '/gallery/heritage/law-30-moon-jar.jpg',                  // Joseon Moon Jar (달항아리)
	31: '/gallery/heritage/law-31-dongjakjin-ferry.jpg',          // Jeong Seon, Dongjakjin (동작진)
	32: '/gallery/heritage/law-32-birds-and-flowers.jpg',         // Birds and Flowers Screen (화조도)
	33: '/gallery/heritage/law-33-kim-hongdo.jpg',                // Kim Hong-do, Painting Appreciation
	34: '/gallery/heritage/law-34-tiger-family.jpg',              // Tiger Family (호랑이 가족도), Cleveland Museum CC0
	35: '/gallery/heritage/law-35-sunrise-peak-jeju.jpg',         // Seongsan Ilchulbong, Jeju (성산일출봉)
	36: '/gallery/heritage/law-36-heaven-lake-paektu.jpg',        // Heaven Lake, Mt. Paektu (천지)
	37: '/gallery/heritage/law-37-gunseondo-immortals.jpg',       // Kim Hong-do, Gunseondo (군선도), Public Domain
	38: '/gallery/heritage/law-38-bukchon-hanok.jpg',             // Bukchon Hanok Village, Seoul
	39: '/gallery/heritage/law-39-seoul-fortress-wall.jpg',       // Seoul Fortress Wall (한양도성)
	40: '/gallery/heritage/law-40-boating-clear-river.jpg',       // Shin Yun-bok, Juyu Cheonggang (주유청강)
	41: '/gallery/heritage/law-41-bulguksa-temple.jpg',           // Bulguksa Temple, Gyeongju (불국사)
	42: '/gallery/heritage/law-42-an-junggeun-portrait.jpg',      // An Jung-geun portrait (안중근)
	43: '/gallery/heritage/law-43-playing-geomungo.jpg',          // Shin Yun-bok, Cheonggeum Sangryeon
	44: '/gallery/heritage/law-44-diamond-mountains-peaks.jpg',   // Mt. Kumgang rocky peaks (금강산)
	45: '/gallery/heritage/law-45-seoul-west-gate-1904.jpg',      // Seoul West Gate 1904, Library of Congress
	46: '/gallery/heritage/law-46-tea-bowl-gold-repair.jpg',      // Celadon tea bowl with gold lacquer repair, Smithsonian CC0
	47: '/gallery/heritage/law-47-mt-paektu-snow.jpg',            // Mt. Paektu crater rim, CC-BY-SA 2.0
	48: '/gallery/heritage/law-48-golden-rooster-longevity.jpg',  // Ten Symbols of Longevity (십장생)
}

export function getLawImageCandidates(lawNumber: number): string[] {
	if (lawNumber < 1 || lawNumber > 48) {
		return [heritageImages[1]]
	}

	const heritage = heritageImages[lawNumber]
	if (heritage) {
		return [heritage]
	}

	// Fallback to old gallery pattern
	const paddedNumber = lawNumber.toString().padStart(3, '0')
	return [
		`/gallery/gallery-${paddedNumber}.webp`,
		`/gallery/gallery-${paddedNumber}.jpg`,
		`/gallery/gallery-${paddedNumber}.png`,
	]
}

export function getLawImage(lawNumber: number): string {
	return getLawImageCandidates(lawNumber)[0]
}

export function getAllLawImages(): string[] {
	return Array.from({ length: 48 }, (_, i) => getLawImage(i + 1))
}
