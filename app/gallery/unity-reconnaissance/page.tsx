"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Users, Globe, History, Camera, ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function UnityReconnaissancePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("yugoslavia")
  const { t } = useLanguage()

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-river-depths via-river-deep to-river-depths">
      <div className="container mx-auto px-4 py-8">
        <Link href="/gallery" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4">
            Unity Reconnaissance
          </h1>
          <p className="text-xl text-cream/80 max-w-4xl">
            Before they divided us: Historical evidence of natural human cooperation before external intervention manufactured conflict.
          </p>
        </div>

        {/* Core Truth */}
        <div className="mb-12 bg-gradient-to-r from-river-current/20 via-river-current/20 to-river-current/20 rounded-2xl p-8 border border-river-mid/20">
          <div className="text-center">
            <Heart className="w-12 h-12 text-river-mid mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-cream mb-4">Cooperation Is Our Default State</h2>
            <p className="text-xl text-cream/90 mb-4">
              Humans are Earth's most cooperative species. Division isn't natural - it's manufactured.
            </p>
            <p className="text-cream/80 max-w-3xl mx-auto">
              Every example of "ancient ethnic hatred" falls apart under historical scrutiny. People lived together peacefully 
              for centuries until external forces deliberately created division to serve their interests.
            </p>
          </div>
        </div>

        {/* Yugoslavia: Multi-Ethnic Harmony */}
        <Section
          id="yugoslavia"
          title="Yugoslavia: When Neighbors Were Family"
          icon={Users}
          expanded={expandedSection === "yugoslavia"}
          onToggle={() => toggleSection("yugoslavia")}
          color="green"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-river-mid mb-4">Before the Manufactured Division</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-river-current/15 rounded-lg p-4 border border-river-mid/30">
                    <h4 className="font-bold text-cream mb-3">Multi-Ethnic Neighborhoods</h4>
                    <ul className="space-y-2 text-cream/80 text-sm">
                      <li>• Sarajevo: 30% intermarriage rate in 1991</li>
                      <li>• Mixed neighborhoods were the norm</li>
                      <li>• Children played together regardless of ethnicity</li>
                      <li>• Shared schools, workplaces, and social clubs</li>
                      <li>• Common Yugoslav identity alongside ethnic ones</li>
                    </ul>
                  </div>
                  
                  <div className="bg-river-current/15 rounded-lg p-4 border border-river-mid/30">
                    <h4 className="font-bold text-cream mb-3">Shared Institutions</h4>
                    <ul className="space-y-2 text-cream/80 text-sm">
                      <li>• Yugoslav National Army with mixed units</li>
                      <li>• Multi-ethnic political parties</li>
                      <li>• Inter-republic marriages common</li>
                      <li>• Shared cultural events and holidays</li>
                      <li>• Economic cooperation across republics</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-river-depths/20 rounded-lg p-4">
                  <h4 className="text-river-mid font-bold mb-3">The Testimonies</h4>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-river-mid pl-4">
                      <p className="text-cream/90 italic mb-2">
                        "My best friend was Serbian, my girlfriend was Croatian, my neighbor was Muslim. 
                        We never thought about it. We were all Yugoslav."
                      </p>
                      <p className="text-cream/60 text-sm">- Sarajevo resident, pre-1990</p>
                    </blockquote>
                    
                    <blockquote className="border-l-4 border-river-mid pl-4">
                      <p className="text-cream/90 italic mb-2">
                        "In my apartment building, we had all ethnicities. Kids played together, 
                        families shared meals. Nobody cared who was what."
                      </p>
                      <p className="text-cream/60 text-sm">- Belgrade resident, describing 1980s</p>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="bg-korean-red/15 rounded-lg p-6 border border-korean-red/30">
                <h4 className="text-korean-red font-bold mb-3">How Division Was Manufactured</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-cream font-medium mb-2">Political Manipulation</h5>
                    <ul className="text-cream/80 text-sm space-y-1">
                      <li>• Nationalist politicians amplified historical grievances</li>
                      <li>• Media began emphasizing ethnic differences</li>
                      <li>• Economic crisis blamed on "other" ethnicities</li>
                      <li>• Fear campaigns about ethnic domination</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-cream font-medium mb-2">External Interference</h5>
                    <ul className="text-cream/80 text-sm space-y-1">
                      <li>• German support for Croatian independence</li>
                      <li>• US/NATO selective intervention</li>
                      <li>• Arms flow to different factions</li>
                      <li>• Media coverage amplifying conflict</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Pre-Partition India */}
        <Section
          id="india"
          title="Pre-Partition India: Centuries of Coexistence"
          icon={Globe}
          expanded={expandedSection === "india"}
          onToggle={() => toggleSection("india")}
          color="blue"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-river-mid mb-4">The Reality Before Partition</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-river-current/15 rounded-lg p-4 border border-river-mid/30">
                    <h4 className="font-bold text-cream mb-3">Religious Harmony</h4>
                    <ul className="space-y-2 text-cream/80 text-sm">
                      <li>• Mixed villages with Hindu and Muslim populations</li>
                      <li>• Shared festivals and cultural celebrations</li>
                      <li>• Joint business partnerships and trade</li>
                      <li>• Intermarriage in many communities</li>
                      <li>• Common participation in independence movement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-river-current/20 rounded-lg p-4 border border-river-current/30">
                    <h4 className="font-bold text-cream mb-3">Military Brotherhood</h4>
                    <ul className="space-y-2 text-cream/80 text-sm">
                      <li>• British Indian Army had mixed religious units</li>
                      <li>• Hindu and Muslim soldiers fought side by side</li>
                      <li>• 1857 rebellion saw joint Hindu-Muslim uprising</li>
                      <li>• Shared military traditions and honor codes</li>
                      <li>• Cross-religious friendships in ranks</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-river-depths/20 rounded-lg p-4">
                  <h4 className="text-river-mid font-bold mb-3">Historical Evidence</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-cream/5 rounded">
                      <h5 className="text-sovereign-gold font-medium mb-1">Ganga-Jamuni Tehzeeb</h5>
                      <p className="text-cream/80 text-sm">
                        The composite Hindu-Muslim culture that flourished for centuries, 
                        blending traditions, languages, art, and cuisine.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-cream/5 rounded">
                      <h5 className="text-river-mid font-medium mb-1">Shared Sacred Spaces</h5>
                      <p className="text-cream/80 text-sm">
                        Many shrines and pilgrimage sites were visited by both 
                        Hindu and Muslim devotees for centuries.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-cream/5 rounded">
                      <h5 className="text-river-mid font-medium mb-1">Joint Resistance</h5>
                      <p className="text-cream/80 text-sm">
                        The 1857 uprising saw Hindu and Muslim soldiers unite 
                        against British rule, fighting as one army.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-korean-red/15 rounded-lg p-6 border border-korean-red/30">
                <h4 className="text-korean-red font-bold mb-3">Divide and Rule: How Britain Manufactured Division</h4>
                <div className="space-y-3">
                  <p className="text-cream/90">
                    British colonial strategy deliberately emphasized religious differences to prevent unified resistance:
                  </p>
                  <ul className="text-cream/80 space-y-2">
                    <li>• <strong>1905:</strong> Partition of Bengal along religious lines to "divide and rule"</li>
                    <li>• <strong>Separate electorates:</strong> Made religion the basis of political identity</li>
                    <li>• <strong>Communal Award:</strong> Institutionalized religious division</li>
                    <li>• <strong>Manipulated history:</strong> Emphasized medieval conflicts while ignoring cooperation</li>
                  </ul>
                  
                  <blockquote className="border-l-4 border-korean-red pl-4 mt-4">
                    <p className="text-korean-red italic">
                      "Divide et impera was the old Roman motto, and it should be ours."
                    </p>
                    <p className="text-cream/60 text-sm mt-1">- Lord Elphinstone, British Governor of Bombay</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* American South During Reconstruction */}
        <Section
          id="reconstruction"
          title="Reconstruction Era: When Black and White Workers United"
          icon={History}
          expanded={expandedSection === "reconstruction"}
          onToggle={() => toggleSection("reconstruction")}
          color="purple"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-river-mid mb-4">The Brief Moment of Racial Unity</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-river-current/20 rounded-lg p-4 border border-river-current/30">
                  <h4 className="font-bold text-cream mb-3">Political Cooperation</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• Integrated state legislatures across the South</li>
                    <li>• Black and white Republicans worked together</li>
                    <li>• Biracial coalitions won elections regularly</li>
                    <li>• Shared goals of education and infrastructure</li>
                    <li>• Joint efforts to establish public schools</li>
                  </ul>
                </div>
                
                <div className="bg-river-current/15 rounded-lg p-4 border border-river-mid/30">
                  <h4 className="font-bold text-cream mb-3">Economic Alliance</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• Poor white and Black farmers shared struggles</li>
                    <li>• Labor unions included both races</li>
                    <li>• Populist movement united across color lines</li>
                    <li>• Sharecropping affected all poor farmers</li>
                    <li>• Common interest in land reform</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-river-depths/20 rounded-lg p-4">
                <h4 className="text-river-mid font-bold mb-3">The Populist Moment</h4>
                <blockquote className="border-l-4 border-river-mid pl-4 mb-4">
                  <p className="text-cream/90 italic">
                    "The accident of color can make no difference in the interest of farmers, croppers, and laborers."
                  </p>
                  <p className="text-cream/60 text-sm">- Tom Watson, Populist leader, 1892</p>
                </blockquote>
                <p className="text-cream/80">
                  The Populist Party briefly united poor white and Black farmers around shared economic interests, 
                  threatening the power of wealthy plantation owners and industrialists.
                </p>
              </div>

              <div className="mt-6 bg-korean-red/15 rounded-lg p-6 border border-korean-red/30">
                <h4 className="text-korean-red font-bold mb-3">How Division Was Restored</h4>
                <div className="space-y-3">
                  <p className="text-cream/90">
                    Elite planters and industrialists deliberately destroyed this biracial alliance:
                  </p>
                  <ul className="text-cream/80 space-y-2">
                    <li>• <strong>Jim Crow laws:</strong> Legally segregated previously integrated spaces</li>
                    <li>• <strong>Disenfranchisement:</strong> Poll taxes and literacy tests targeted both poor whites and Blacks</li>
                    <li>• <strong>Lynching terrorism:</strong> Violence to prevent cross-racial organizing</li>
                    <li>• <strong>"Wages of whiteness":</strong> Gave poor whites psychological benefit of racial superiority</li>
                  </ul>
                  
                  <blockquote className="border-l-4 border-korean-red pl-4 mt-4">
                    <p className="text-korean-red italic">
                      "If you can convince the lowest white man he's better than the best colored man, 
                      you won't have to pick his pockets. Hell, give him somebody to look down on, and he'll empty his pockets for you."
                    </p>
                    <p className="text-cream/60 text-sm mt-1">- Lyndon B. Johnson (describing the strategy)</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Rwanda: Colonial Creation of Division */}
        <Section
          id="rwanda"
          title="Rwanda: When Colonial Powers Invented 'Ancient Hatred'"
          icon={Camera}
          expanded={expandedSection === "rwanda"}
          onToggle={() => toggleSection("rwanda")}
          color="yellow"
        >
          <div className="space-y-6">
            <div className="bg-river-depths/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-sovereign-gold mb-4">Before Colonial Division</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sovereign-dark/20 rounded-lg p-4 border border-sovereign-gold/30">
                  <h4 className="font-bold text-cream mb-3">Pre-Colonial Unity</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• Hutu and Tutsi shared same language (Kinyarwanda)</li>
                    <li>• Same culture, traditions, and religious practices</li>
                    <li>• Intermarriage was common and accepted</li>
                    <li>• Social mobility between groups was normal</li>
                    <li>• Terms described occupation, not ethnicity</li>
                  </ul>
                </div>
                
                <div className="bg-river-current/15 rounded-lg p-4 border border-river-mid/30">
                  <h4 className="font-bold text-cream mb-3">Fluid Identity</h4>
                  <ul className="space-y-2 text-cream/80 text-sm">
                    <li>• "Hutu" meant farmer/cultivator</li>
                    <li>• "Tutsi" meant cattle herder</li>
                    <li>• People could change categories through marriage or wealth</li>
                    <li>• No physical differences between groups</li>
                    <li>• Shared participation in royal court</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-korean-red/15 rounded-lg p-6 border border-korean-red/30">
                <h4 className="text-korean-red font-bold mb-3">Colonial Racial Science Creates Division</h4>
                <div className="space-y-4">
                  <p className="text-cream/90">
                    German and Belgian colonizers imposed racist theories to create artificial ethnic divisions:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-korean-red font-medium mb-2">The "Hamitic Myth"</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Tutsis labeled as "superior" Hamitic race</li>
                        <li>• Hutus deemed "inferior" Bantu race</li>
                        <li>• Imposed European racial categories</li>
                        <li>• Created "scientific" racial measurements</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-korean-red font-medium mb-2">Institutional Racism</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Only Tutsis allowed in schools initially</li>
                        <li>• Identity cards marked ethnicity permanently</li>
                        <li>• Tutsi elite given administrative roles</li>
                        <li>• Hutus excluded from power systematically</li>
                      </ul>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-sovereign-gold pl-4 mt-4">
                    <p className="text-sovereign-gold italic">
                      "The Tutsi were born to rule. God gave them all the qualities of leadership."
                    </p>
                    <p className="text-cream/60 text-sm mt-1">- Belgian colonial administrator</p>
                  </blockquote>
                </div>
              </div>

              <div className="mt-6 bg-river-depths/20 rounded-lg p-4">
                <h4 className="text-sovereign-gold font-bold mb-3">The Manufactured Genocide</h4>
                <p className="text-cream/90 mb-3">
                  What colonizers called "ancient tribal hatred" was actually a colonial creation. 
                  The 1994 genocide was the inevitable result of 60+ years of imposed racial division.
                </p>
                <p className="text-cream/80 text-sm">
                  Post-genocide Rwanda abolished ethnic categories and rebuilt unity - 
                  proving these divisions were artificial and removable.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* The Pattern Recognition */}
        <div className="mt-12 bg-gradient-to-r from-river-current/15 via-river-current/15 to-river-current/15 rounded-xl p-8 border border-river-mid/30">
          <h2 className="text-3xl font-bold text-cream mb-6 text-center">The Universal Pattern</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-river-mid mb-2">Step 1: Unity</h3>
              <p className="text-cream/80 text-sm">
                People living together peacefully for generations, sharing culture, intermarrying, cooperating
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">👤</div>
              <h3 className="text-lg font-bold text-sovereign-gold mb-2">Step 2: Elite Interest</h3>
              <p className="text-cream/80 text-sm">
                Powerful group needs to prevent unity that threatens their control and wealth
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📢</div>
              <h3 className="text-lg font-bold text-sovereign-gold mb-2">Step 3: Manufacture Division</h3>
              <p className="text-cream/80 text-sm">
                Amplify minor differences, create fear campaigns, impose categories, institutional discrimination
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💀</div>
              <h3 className="text-lg font-bold text-korean-red mb-2">Step 4: Violence</h3>
              <p className="text-cream/80 text-sm">
                "Inevitable" conflict presented as ancient hatred while elites profit from chaos
              </p>
            </div>
          </div>

          <div className="bg-river-depths/30 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-cream mb-4">The Truth They Don't Want You to Know</h3>
            <p className="text-xl text-cream/90 mb-4">
              <span className="text-river-mid font-bold">Cooperation is our natural state.</span>
            </p>
            <p className="text-cream/80 max-w-4xl mx-auto">
              Every story of "ancient ethnic hatred" or "inevitable conflict" collapses under historical examination. 
              Humans lived in peace for centuries until someone with power needed them divided. 
              The division is always artificial. The unity was always real.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/truth-project/empires-receipts" className="px-6 py-3 bg-river-current hover:bg-river-current text-cream font-medium rounded-lg transition-colors">
            See The Receipts
          </Link>
          <Link href="/briefings/media-manipulation-decoded" className="px-6 py-3 bg-river-current hover:bg-river-current text-cream font-medium rounded-lg transition-colors">
            Decode Manipulation
          </Link>
          <Link href="/gallery" className="px-6 py-3 bg-cream/10 hover:bg-cream/20 text-cream font-medium rounded-lg transition-colors border border-cream/20">
            Back to Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}

function Section({ 
  id, 
  title, 
  icon: Icon, 
  expanded, 
  onToggle, 
  color, 
  children 
}: {
  id: string
  title: string
  icon: any
  expanded: boolean
  onToggle: () => void
  color: string
  children: React.ReactNode
}) {
  const colorClasses = {
    green: "border-river-mid/30 bg-river-current/10",
    blue: "border-river-mid/30 bg-river-current/10",
    purple: "border-river-current/30 bg-river-current/10",
    yellow: "border-sovereign-gold/30 bg-sovereign-dark/10"
  }

  return (
    <div className={`mb-8 rounded-xl border ${colorClasses[color as keyof typeof colorClasses]} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-cream/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 text-${color}-400`} />
          <h2 className="text-2xl font-bold text-cream text-left">{title}</h2>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-cream/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-cream/60" />
        )}
      </button>
      
      {expanded && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  )
}