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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <Link href="/gallery" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Unity Reconnaissance
          </h1>
          <p className="text-xl text-white/80 max-w-4xl">
            Before they divided us: Historical evidence of natural human cooperation before external intervention manufactured conflict.
          </p>
        </div>

        {/* Core Truth */}
        <div className="mb-12 bg-gradient-to-r from-green-900/30 via-blue-900/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
          <div className="text-center">
            <Heart className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Cooperation Is Our Default State</h2>
            <p className="text-xl text-white/90 mb-4">
              Humans are Earth's most cooperative species. Division isn't natural - it's manufactured.
            </p>
            <p className="text-white/80 max-w-3xl mx-auto">
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
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Before the Manufactured Division</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                    <h4 className="font-bold text-white mb-3">Multi-Ethnic Neighborhoods</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Sarajevo: 30% intermarriage rate in 1991</li>
                      <li>• Mixed neighborhoods were the norm</li>
                      <li>• Children played together regardless of ethnicity</li>
                      <li>• Shared schools, workplaces, and social clubs</li>
                      <li>• Common Yugoslav identity alongside ethnic ones</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-3">Shared Institutions</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Yugoslav National Army with mixed units</li>
                      <li>• Multi-ethnic political parties</li>
                      <li>• Inter-republic marriages common</li>
                      <li>• Shared cultural events and holidays</li>
                      <li>• Economic cooperation across republics</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="text-green-400 font-bold mb-3">The Testimonies</h4>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-green-500 pl-4">
                      <p className="text-white/90 italic mb-2">
                        "My best friend was Serbian, my girlfriend was Croatian, my neighbor was Muslim. 
                        We never thought about it. We were all Yugoslav."
                      </p>
                      <p className="text-white/60 text-sm">- Sarajevo resident, pre-1990</p>
                    </blockquote>
                    
                    <blockquote className="border-l-4 border-blue-500 pl-4">
                      <p className="text-white/90 italic mb-2">
                        "In my apartment building, we had all ethnicities. Kids played together, 
                        families shared meals. Nobody cared who was what."
                      </p>
                      <p className="text-white/60 text-sm">- Belgrade resident, describing 1980s</p>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                <h4 className="text-red-400 font-bold mb-3">How Division Was Manufactured</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-white font-medium mb-2">Political Manipulation</h5>
                    <ul className="text-white/80 text-sm space-y-1">
                      <li>• Nationalist politicians amplified historical grievances</li>
                      <li>• Media began emphasizing ethnic differences</li>
                      <li>• Economic crisis blamed on "other" ethnicities</li>
                      <li>• Fear campaigns about ethnic domination</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-2">External Interference</h5>
                    <ul className="text-white/80 text-sm space-y-1">
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
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">The Reality Before Partition</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-3">Religious Harmony</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Mixed villages with Hindu and Muslim populations</li>
                      <li>• Shared festivals and cultural celebrations</li>
                      <li>• Joint business partnerships and trade</li>
                      <li>• Intermarriage in many communities</li>
                      <li>• Common participation in independence movement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="font-bold text-white mb-3">Military Brotherhood</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• British Indian Army had mixed religious units</li>
                      <li>• Hindu and Muslim soldiers fought side by side</li>
                      <li>• 1857 rebellion saw joint Hindu-Muslim uprising</li>
                      <li>• Shared military traditions and honor codes</li>
                      <li>• Cross-religious friendships in ranks</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="text-blue-400 font-bold mb-3">Historical Evidence</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded">
                      <h5 className="text-yellow-400 font-medium mb-1">Ganga-Jamuni Tehzeeb</h5>
                      <p className="text-white/80 text-sm">
                        The composite Hindu-Muslim culture that flourished for centuries, 
                        blending traditions, languages, art, and cuisine.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded">
                      <h5 className="text-green-400 font-medium mb-1">Shared Sacred Spaces</h5>
                      <p className="text-white/80 text-sm">
                        Many shrines and pilgrimage sites were visited by both 
                        Hindu and Muslim devotees for centuries.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded">
                      <h5 className="text-purple-400 font-medium mb-1">Joint Resistance</h5>
                      <p className="text-white/80 text-sm">
                        The 1857 uprising saw Hindu and Muslim soldiers unite 
                        against British rule, fighting as one army.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                <h4 className="text-red-400 font-bold mb-3">Divide and Rule: How Britain Manufactured Division</h4>
                <div className="space-y-3">
                  <p className="text-white/90">
                    British colonial strategy deliberately emphasized religious differences to prevent unified resistance:
                  </p>
                  <ul className="text-white/80 space-y-2">
                    <li>• <strong>1905:</strong> Partition of Bengal along religious lines to "divide and rule"</li>
                    <li>• <strong>Separate electorates:</strong> Made religion the basis of political identity</li>
                    <li>• <strong>Communal Award:</strong> Institutionalized religious division</li>
                    <li>• <strong>Manipulated history:</strong> Emphasized medieval conflicts while ignoring cooperation</li>
                  </ul>
                  
                  <blockquote className="border-l-4 border-red-500 pl-4 mt-4">
                    <p className="text-red-300 italic">
                      "Divide et impera was the old Roman motto, and it should be ours."
                    </p>
                    <p className="text-white/60 text-sm mt-1">- Lord Elphinstone, British Governor of Bombay</p>
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
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">The Brief Moment of Racial Unity</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-bold text-white mb-3">Political Cooperation</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Integrated state legislatures across the South</li>
                    <li>• Black and white Republicans worked together</li>
                    <li>• Biracial coalitions won elections regularly</li>
                    <li>• Shared goals of education and infrastructure</li>
                    <li>• Joint efforts to establish public schools</li>
                  </ul>
                </div>
                
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h4 className="font-bold text-white mb-3">Economic Alliance</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Poor white and Black farmers shared struggles</li>
                    <li>• Labor unions included both races</li>
                    <li>• Populist movement united across color lines</li>
                    <li>• Sharecropping affected all poor farmers</li>
                    <li>• Common interest in land reform</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-black/20 rounded-lg p-4">
                <h4 className="text-purple-400 font-bold mb-3">The Populist Moment</h4>
                <blockquote className="border-l-4 border-purple-500 pl-4 mb-4">
                  <p className="text-white/90 italic">
                    "The accident of color can make no difference in the interest of farmers, croppers, and laborers."
                  </p>
                  <p className="text-white/60 text-sm">- Tom Watson, Populist leader, 1892</p>
                </blockquote>
                <p className="text-white/80">
                  The Populist Party briefly united poor white and Black farmers around shared economic interests, 
                  threatening the power of wealthy plantation owners and industrialists.
                </p>
              </div>

              <div className="mt-6 bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                <h4 className="text-red-400 font-bold mb-3">How Division Was Restored</h4>
                <div className="space-y-3">
                  <p className="text-white/90">
                    Elite planters and industrialists deliberately destroyed this biracial alliance:
                  </p>
                  <ul className="text-white/80 space-y-2">
                    <li>• <strong>Jim Crow laws:</strong> Legally segregated previously integrated spaces</li>
                    <li>• <strong>Disenfranchisement:</strong> Poll taxes and literacy tests targeted both poor whites and Blacks</li>
                    <li>• <strong>Lynching terrorism:</strong> Violence to prevent cross-racial organizing</li>
                    <li>• <strong>"Wages of whiteness":</strong> Gave poor whites psychological benefit of racial superiority</li>
                  </ul>
                  
                  <blockquote className="border-l-4 border-red-500 pl-4 mt-4">
                    <p className="text-red-300 italic">
                      "If you can convince the lowest white man he's better than the best colored man, 
                      you won't have to pick his pockets. Hell, give him somebody to look down on, and he'll empty his pockets for you."
                    </p>
                    <p className="text-white/60 text-sm mt-1">- Lyndon B. Johnson (describing the strategy)</p>
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
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Before Colonial Division</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-500/30">
                  <h4 className="font-bold text-white mb-3">Pre-Colonial Unity</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Hutu and Tutsi shared same language (Kinyarwanda)</li>
                    <li>• Same culture, traditions, and religious practices</li>
                    <li>• Intermarriage was common and accepted</li>
                    <li>• Social mobility between groups was normal</li>
                    <li>• Terms described occupation, not ethnicity</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-bold text-white mb-3">Fluid Identity</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• "Hutu" meant farmer/cultivator</li>
                    <li>• "Tutsi" meant cattle herder</li>
                    <li>• People could change categories through marriage or wealth</li>
                    <li>• No physical differences between groups</li>
                    <li>• Shared participation in royal court</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                <h4 className="text-red-400 font-bold mb-3">Colonial Racial Science Creates Division</h4>
                <div className="space-y-4">
                  <p className="text-white/90">
                    German and Belgian colonizers imposed racist theories to create artificial ethnic divisions:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-red-300 font-medium mb-2">The "Hamitic Myth"</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Tutsis labeled as "superior" Hamitic race</li>
                        <li>• Hutus deemed "inferior" Bantu race</li>
                        <li>• Imposed European racial categories</li>
                        <li>• Created "scientific" racial measurements</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-red-300 font-medium mb-2">Institutional Racism</h5>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Only Tutsis allowed in schools initially</li>
                        <li>• Identity cards marked ethnicity permanently</li>
                        <li>• Tutsi elite given administrative roles</li>
                        <li>• Hutus excluded from power systematically</li>
                      </ul>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-yellow-500 pl-4 mt-4">
                    <p className="text-yellow-300 italic">
                      "The Tutsi were born to rule. God gave them all the qualities of leadership."
                    </p>
                    <p className="text-white/60 text-sm mt-1">- Belgian colonial administrator</p>
                  </blockquote>
                </div>
              </div>

              <div className="mt-6 bg-black/20 rounded-lg p-4">
                <h4 className="text-yellow-400 font-bold mb-3">The Manufactured Genocide</h4>
                <p className="text-white/90 mb-3">
                  What colonizers called "ancient tribal hatred" was actually a colonial creation. 
                  The 1994 genocide was the inevitable result of 60+ years of imposed racial division.
                </p>
                <p className="text-white/80 text-sm">
                  Post-genocide Rwanda abolished ethnic categories and rebuilt unity - 
                  proving these divisions were artificial and removable.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* The Pattern Recognition */}
        <div className="mt-12 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-green-900/20 rounded-xl p-8 border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">The Universal Pattern</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Step 1: Unity</h3>
              <p className="text-white/80 text-sm">
                People living together peacefully for generations, sharing culture, intermarrying, cooperating
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">👤</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Step 2: Elite Interest</h3>
              <p className="text-white/80 text-sm">
                Powerful group needs to prevent unity that threatens their control and wealth
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📢</div>
              <h3 className="text-lg font-bold text-orange-400 mb-2">Step 3: Manufacture Division</h3>
              <p className="text-white/80 text-sm">
                Amplify minor differences, create fear campaigns, impose categories, institutional discrimination
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💀</div>
              <h3 className="text-lg font-bold text-red-400 mb-2">Step 4: Violence</h3>
              <p className="text-white/80 text-sm">
                "Inevitable" conflict presented as ancient hatred while elites profit from chaos
              </p>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">The Truth They Don't Want You to Know</h3>
            <p className="text-xl text-white/90 mb-4">
              <span className="text-green-400 font-bold">Cooperation is our natural state.</span>
            </p>
            <p className="text-white/80 max-w-4xl mx-auto">
              Every story of "ancient ethnic hatred" or "inevitable conflict" collapses under historical examination. 
              Humans lived in peace for centuries until someone with power needed them divided. 
              The division is always artificial. The unity was always real.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/truth-project/empires-receipts" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
            See The Receipts
          </Link>
          <Link href="/briefings/media-manipulation-decoded" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Decode Manipulation
          </Link>
          <Link href="/gallery" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20">
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
    green: "border-green-500/30 bg-green-900/10",
    blue: "border-blue-500/30 bg-blue-900/10",
    purple: "border-purple-500/30 bg-purple-900/10",
    yellow: "border-yellow-500/30 bg-yellow-900/10"
  }

  return (
    <div className={`mb-8 rounded-xl border ${colorClasses[color as keyof typeof colorClasses]} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 text-${color}-400`} />
          <h2 className="text-2xl font-bold text-white text-left">{title}</h2>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-white/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/60" />
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