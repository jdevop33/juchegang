"use client"

export default function SatelliteEavesdroppingContent() {
  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">

        {/* Hero section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sovereign-gold/10 text-sovereign-gold rounded-full text-sm font-medium tracking-widest uppercase">
            JPanda Papers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            &ldquo;Don&rsquo;t Look Up&rdquo;
          </h1>
          <p className="text-2xl text-sovereign-gold font-semibold mb-2">
            The $800 Satellite Eavesdropping Crisis Hiding in Plain Sight
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            How Consumer-Grade Equipment Exposed Military Secrets, Phone Calls, Banking Data, and Critical Infrastructure Across Two Continents
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>February 2026</span>
            <span className="text-sovereign-gold">|</span>
            <span>Cybersecurity Analysis</span>
          </div>
        </div>

        {/* Key Stats */}
        <div className="not-prose my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-korean-red mb-1">~50%</div>
              <div className="text-foreground/70 text-sm">Of GEO Satellite Signals Unencrypted</div>
            </div>
            <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-sovereign-gold mb-1">$800</div>
              <div className="text-foreground/70 text-sm">Total Equipment Cost</div>
            </div>
            <div className="bg-river-current/20 border border-river-current/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-foreground mb-1">2,711</div>
              <div className="text-foreground/70 text-sm">T-Mobile Numbers in 9 Hours</div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-korean-red/10 dark:bg-korean-red/20 border border-korean-red/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-3 text-korean-red">Executive Summary</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Half of all geostationary satellite links broadcast sensitive data &mdash; including phone calls, military movements, and banking traffic &mdash; completely unencrypted, receivable by anyone with consumer-grade equipment costing under $800.
          </p>
          <p className="text-foreground/90 leading-relaxed mb-4">
            That is the central finding of the most comprehensive public audit of satellite communication security ever conducted, published in October 2025 by researchers at UC San Diego and the University of Maryland. The study, titled &ldquo;Don&rsquo;t Look Up: There Are Sensitive Internal Links in the Clear on GEO Satellites,&rdquo; won the <strong>Distinguished Paper Award at ACM CCS 2025</strong> in Taipei.
          </p>
          <p className="text-foreground/90 leading-relaxed mb-4">
            It exposed unencrypted cellular backhaul for T-Mobile and AT&amp;T Mexico, real-time Mexican military helicopter and naval vessel tracking, U.S. military ship communications, airline passenger data for ten carriers, Walmart inventory systems, banking ATM traffic, and industrial control systems for critical infrastructure.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            This research reveals a systemic, decades-old failure in satellite communications security that intelligence agencies worldwide have almost certainly been exploiting for years &mdash; and that now, with an open-source tool released on GitHub, <strong>anyone can replicate</strong>.
          </p>
        </div>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section 01 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-mono">01</span>
            <h2 className="text-3xl font-bold">An $800 Rooftop Experiment That Exposed a Continent&rsquo;s Secrets</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The research team &mdash; Aaron Schulman, Nadia Heninger, and Keegan Ryan at UC San Diego, Dave Levin at the University of Maryland, with graduate students Wenyi &ldquo;Morty&rdquo; Zhang and Annie Dai &mdash; spent three years developing their methodology before conducting a systematic scan from a single satellite dish mounted on the roof of UCSD&rsquo;s Computer Science building in La Jolla, California.
          </p>

          <h3 className="text-xl font-bold mb-4 text-sovereign-gold">Equipment Used</h3>

          <div className="not-prose my-6">
            <div className="bg-river-depths/50 rounded-lg border border-river-current/30 overflow-hidden">
              <div className="bg-river-current/20 px-4 py-3 border-b border-river-current/30">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Hardware Breakdown</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-river-current/20">
                      <th className="px-4 py-3 text-left text-sovereign-gold font-semibold">Component</th>
                      <th className="px-4 py-3 text-left text-foreground font-semibold">Specification</th>
                      <th className="px-4 py-3 text-right text-foreground font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">Ku-band Satellite Dish</td>
                      <td className="px-4 py-2">110cm diameter</td>
                      <td className="px-4 py-2 text-right">$180</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">Low-Noise Block Downconverter</td>
                      <td className="px-4 py-2">Universal Ku-band</td>
                      <td className="px-4 py-2 text-right">$15</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">DiSEqC 1.2 Dish Motor</td>
                      <td className="px-4 py-2">Roof mount</td>
                      <td className="px-4 py-2 text-right">$195</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">TBS-5927 DVB-S/S2 USB Tuner</td>
                      <td className="px-4 py-2">PCIe card</td>
                      <td className="px-4 py-2 text-right">$230</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">Cables &amp; Miscellaneous</td>
                      <td className="px-4 py-2">Standard</td>
                      <td className="px-4 py-2 text-right">$30</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="px-4 py-3 text-sovereign-gold" colSpan={2}>TOTAL</td>
                      <td className="px-4 py-3 text-right text-sovereign-gold">~$650&ndash;$800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            From this single vantage point, the team scanned <strong>39 geostationary satellites</strong> across 25 orbital longitudes, locking onto 411 Ku-band transponders and capturing <strong>3.7 terabytes</strong> of raw data over a seven-month period beginning in August 2024. This covered only <strong>14.3%</strong> of the world&rsquo;s 273 Ku-band GEO satellites &mdash; meaning the actual scale of exposed data globally is vastly larger than what they observed.
          </p>

          <div className="bg-river-current/10 border border-river-current/30 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-bold text-foreground mb-2">How GEO Satellites Work</h4>
            <p className="text-foreground/80 leading-relaxed">
              GEO satellites operate as &ldquo;bent-pipe&rdquo; repeaters: they receive signals from ground stations, amplify them, frequency-shift them, and rebroadcast them over a footprint covering up to <strong>40% of Earth&rsquo;s surface</strong>. Anyone within that footprint with an appropriate receiver can capture the downlink signal. The reception is entirely passive and <strong>completely undetectable</strong>.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The technical innovation lay not just in the scanning but in the parsing. Prior tools like GSExtract could extract IP packets from only 52 transponders (15% of the dataset). The researchers&rsquo; custom Python-based parser handled seven distinct protocol stack paths, five of them never previously documented, recovering packets from 238 captures (69%), totaling 192,624 packets &mdash; a <strong>600% improvement</strong> over existing tools.
          </p>

          <div className="not-prose my-6">
            <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6">
              <h4 className="text-sm font-bold text-korean-red uppercase tracking-wider mb-3">Encryption Status of Scanned Traffic</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80 text-sm">Non-TV transponders using MPEG scrambling</span>
                  <span className="text-korean-red font-bold">Only 10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80 text-sm">GSE transponders with encryption enabled</span>
                  <span className="text-korean-red font-bold">Only 20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80 text-sm">Links consistently using IPsec</span>
                  <span className="text-korean-red font-bold">Only 6%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section 02 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-mono">02</span>
            <h2 className="text-3xl font-bold">What the Satellites Revealed</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The scope of exposed sensitive data spans telecommunications, military operations, critical infrastructure, finance, retail, and aviation across multiple countries.
          </p>

          <h3 className="text-xl font-bold mb-4 text-sovereign-gold">Cellular Backhaul: Reading Your Phone Calls From Space</h3>

          <p className="text-lg leading-relaxed mb-6">
            In remote areas where cell towers cannot connect to the core network via fiber or microwave, carriers use satellite links &mdash; and these links were broadcasting subscriber data in the clear.
          </p>

          <div className="not-prose my-6">
            <div className="bg-river-depths/50 rounded-lg border border-river-current/30 overflow-hidden">
              <div className="bg-korean-red/20 px-4 py-3 border-b border-korean-red/30">
                <h4 className="text-sm font-bold text-korean-red uppercase tracking-wider">Cellular Exposure</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-river-current/20">
                      <th className="px-4 py-3 text-left text-sovereign-gold font-semibold">Carrier</th>
                      <th className="px-4 py-3 text-left text-foreground font-semibold">Exposure</th>
                      <th className="px-4 py-3 text-left text-foreground font-semibold">Data Captured</th>
                      <th className="px-4 py-3 text-right text-foreground font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">T-Mobile (US)</td>
                      <td className="px-4 py-2">2,711 phone numbers</td>
                      <td className="px-4 py-2">SMS, voice calls (RTP), browsing history</td>
                      <td className="px-4 py-2 text-right text-korean-red font-medium">9 hours</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">AT&amp;T Mexico</td>
                      <td className="px-4 py-2">710 phone numbers</td>
                      <td className="px-4 py-2">IMSI, session keys (KeNB), IP traffic</td>
                      <td className="px-4 py-2 text-right text-korean-red font-medium">30 minutes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Telmex</td>
                      <td className="px-4 py-2">142 voice calls</td>
                      <td className="px-4 py-2">Both parties&rsquo; numbers, SIP, RTP audio</td>
                      <td className="px-4 py-2 text-right text-korean-red font-medium">2 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            T-Mobile&rsquo;s traffic included an IPsec layer, but it was configured with a <strong>NULL cipher</strong> &mdash; the cryptographic equivalent of an unlocked door labeled &ldquo;security.&rdquo;
          </p>

          <h3 className="text-xl font-bold mb-4 text-sovereign-gold">Military and Government Communications</h3>

          <p className="text-lg leading-relaxed mb-6">
            Mexican military satellite links exposed real-time asset tracking and telemetry data for <strong>Mi-17 and UH-60 Black Hawk helicopters</strong>, naval vessels, and armored vehicles, along with LIDAR/RADAR equipment status, maintenance logs, and deployment information including locations, mission roles, and regional assignments. Mexican law enforcement traffic revealed narcotics trafficking intelligence, incident reports, case tracking, evidence documentation, and surveillance data from remote command centers.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            U.S. military sea vessels transmitted both encrypted and unencrypted traffic, with the unencrypted portion including DNS queries, SIP signaling (from which ship names could be identified), SNMP network management data, and ICMP packets.
          </p>

          <h3 className="text-xl font-bold mb-4 text-sovereign-gold">Critical Infrastructure Exposure</h3>

          <p className="text-lg leading-relaxed mb-6">
            Mexico&rsquo;s Comisi&oacute;n Federal de Electricidad (CFE), serving nearly <strong>50 million customers</strong>, transmitted customer service work orders with names, addresses, account numbers, and tariff types, plus communications about equipment failures and safety hazards at substations.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            In the United States, unnamed critical infrastructure operators transmitted <strong>industrial control system (SCADA) data</strong> over unencrypted satellite links, including power grid repair tickets and oil and gas pipeline control traffic. Some infrastructure owners told the researchers they were concerned that a malicious actor could not only surveil but potentially <strong>disable or spoof control systems</strong>.
          </p>

          <h3 className="text-xl font-bold mb-4 text-sovereign-gold">Corporate and Financial Data</h3>

          <div className="not-prose my-6">
            <div className="bg-river-depths/50 rounded-lg border border-river-current/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-river-current/20">
                      <th className="px-4 py-3 text-left text-sovereign-gold font-semibold">Entity</th>
                      <th className="px-4 py-3 text-left text-foreground font-semibold">Exposed Data</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Walmart Mexico</td>
                      <td className="px-4 py-2">Inventory records, FTP transfers with UPC/SKU &amp; pricing, plaintext telnet credentials, corporate email</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Santander Mexico</td>
                      <td className="px-4 py-2">ATM DNS and LDAP traffic, internal PKI certificates</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Banjercito / Banorte</td>
                      <td className="px-4 py-2">Extensive unencrypted traffic linked to internal banking infrastructure</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">10 Airlines (Intelsat/Panasonic)</td>
                      <td className="px-4 py-2">Passenger browsing metadata, unscrambled entertainment audio, partial RSA private keys from device memory leaks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section 03 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-mono">03</span>
            <h2 className="text-3xl font-bold">A 20-Year-Old Problem the Industry Chose to Ignore</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6 italic text-muted-foreground">
            The watchdog the satellite industry never hired.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The &ldquo;Don&rsquo;t Look Up&rdquo; study is not the first warning about unencrypted satellite broadcasts &mdash; it is the loudest in a two-decade chorus that industry has systematically ignored.
          </p>

          <div className="space-y-6 mb-6">
            <div className="border-l-4 border-sovereign-gold pl-6">
              <p className="text-sm text-sovereign-gold font-bold mb-1">2005</p>
              <p className="text-lg leading-relaxed">
                Researchers at Ruhr University Bochum published &ldquo;Satellite Communication without Privacy &mdash; Attacker&rsquo;s Paradise,&rdquo; demonstrating that a consumer digital satellite dish and DVB card could intercept banking details, legal names, and email content from a single Astra satellite.
              </p>
            </div>

            <div className="border-l-4 border-sovereign-gold pl-6">
              <p className="text-sm text-sovereign-gold font-bold mb-1">2019&ndash;2020</p>
              <p className="text-lg leading-relaxed">
                James Pavur, then an Oxford DPhil candidate, analyzed 4 TB of data from 18 GEO satellites over two years using equipment costing under &euro;300. He intercepted engineer files from ships, COVID test results from airline passengers, and Chinese airline pilot electronic flight bags. He stressed that satellite companies &ldquo;knew about this since 2019 and nothing changed.&rdquo;
              </p>
            </div>

            <div className="border-l-4 border-river-current pl-6">
              <p className="text-sm text-river-current font-bold mb-1">1966&ndash;Present: ECHELON</p>
              <p className="text-lg leading-relaxed">
                The NSA&rsquo;s FROSTING program was specifically designed to intercept Intelsat satellite communications. By the early 1970s, GCHQ operated a secret station at Morwenstow, Cornwall, while NSA built its facility at Yakima, Washington &mdash; eventually expanding to <strong>120 satellite interception antennae</strong> across seven sites worldwide.
              </p>
            </div>

            <div className="border-l-4 border-river-current pl-6">
              <p className="text-sm text-river-current font-bold mb-1">2013: Snowden Revelations</p>
              <p className="text-lg leading-relaxed">
                Confirmed NSA&rsquo;s UPSTREAM collection captured data &ldquo;directly from private sector Internet infrastructure&rdquo; including via satellites, while GCHQ&rsquo;s SOUTHWINDS program specifically intercepted mobile phone activity from commercial aircraft using Inmarsat satellite links.
              </p>
            </div>

            <div className="border-l-4 border-korean-red pl-6">
              <p className="text-sm text-korean-red font-bold mb-1">2015: Turla APT Group</p>
              <p className="text-lg leading-relaxed">
                Kaspersky documented this Russian espionage group hijacking unencrypted DVB-S satellite internet connections for command-and-control operations since at least 2007, exploiting satellite footprints across the Middle East and Africa.
              </p>
            </div>

            <div className="border-l-4 border-korean-red pl-6">
              <p className="text-sm text-korean-red font-bold mb-1">2022: NSA Advisory + Viasat Attack</p>
              <p className="text-lg leading-relaxed">
                Russia&rsquo;s AcidRain cyberattack bricked <strong>40,000&ndash;45,000 satellite modems</strong> across Europe, knocked out monitoring for 5,800 German wind turbines, and disrupted Ukrainian communications at the moment of invasion. The NSA subsequently issued an advisory acknowledging &ldquo;most VSAT links are unencrypted.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section 04 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-mono">04</span>
            <h2 className="text-3xl font-bold">Intelligence Implications: SIGINT for Anyone</h2>
          </div>

          <blockquote className="border-l-4 border-korean-red pl-6 my-8 italic text-korean-red text-xl">
            &ldquo;It&rsquo;s crazy. The fact that this much data is going over satellites that anyone can pick up with an antenna is just incredible. I would be shocked if this is something that intelligence agencies of any size are not already exploiting.&rdquo;
            <span className="block text-sm mt-2 text-foreground/60 not-italic">&mdash; Matt Green, Johns Hopkins University</span>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Matt Blaze, computer scientist and cryptographer at Georgetown University, underscored the accessibility: &ldquo;This was not NSA-level resources. This was <strong>DirecTV-user-level resources</strong>. The barrier to entry for this type of attack is remarkably low.&rdquo; He warned that within weeks of publication, hundreds or thousands of people would replicate the work &mdash; many without disclosing their findings.
          </p>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;The threat model that everybody had in mind was that we need to be encrypting everything, because there are governments that are tapping undersea fiber optic cables. And now what we&rsquo;re seeing is, this same kind of data is just being broadcast to a large fraction of the planet.&rdquo;
            <span className="block text-sm mt-2 text-foreground/60 not-italic">&mdash; Nadia Heninger, UC San Diego</span>
          </blockquote>

          {/* Snowden vs Satellite comparison */}
          <div className="not-prose my-8">
            <div className="bg-river-depths/50 rounded-lg border border-river-current/30 overflow-hidden">
              <div className="bg-sovereign-gold/20 px-4 py-3 border-b border-sovereign-gold/30">
                <h4 className="text-sm font-bold text-sovereign-gold uppercase tracking-wider">Snowden vs. Satellite: Structural Comparison</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-river-current/20">
                      <th className="px-4 py-3 text-left text-sovereign-gold font-semibold">Dimension</th>
                      <th className="px-4 py-3 text-center text-foreground font-semibold">GCHQ TEMPORA (2013)</th>
                      <th className="px-4 py-3 text-center text-foreground font-semibold">Satellite Eaves. (2025)</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Access Required</td>
                      <td className="px-4 py-2 text-center">State-level fiber tap + secret legal cooperation</td>
                      <td className="px-4 py-2 text-center text-korean-red font-medium">$800 dish + rooftop</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Detectability</td>
                      <td className="px-4 py-2 text-center">Potentially detectable at tap point</td>
                      <td className="px-4 py-2 text-center text-korean-red font-medium">Completely undetectable</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Coverage</td>
                      <td className="px-4 py-2 text-center">Specific cable routes</td>
                      <td className="px-4 py-2 text-center text-korean-red font-medium">40% of Earth per satellite</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Who Can Do It</td>
                      <td className="px-4 py-2 text-center">Nation-states only</td>
                      <td className="px-4 py-2 text-center text-korean-red font-medium">Anyone with basic equipment</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Data Types</td>
                      <td className="px-4 py-2 text-center">Internet backbone traffic</td>
                      <td className="px-4 py-2 text-center">Calls, texts, military, SCADA, banking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            A RAND Corporation report titled &ldquo;SIGINT for Anyone&rdquo; had already identified this trend, noting that capabilities &ldquo;that used to be available only to nation-state peer adversaries are now available to any adversary who wants to use them.&rdquo; The report specifically cited Iraqi insurgents who eavesdropped on unencrypted Predator drone video feeds transmitted via commercial satellites.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section 05 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-mono">05</span>
            <h2 className="text-3xl font-bold">A Regulatory Vacuum Where Nobody Is Responsible</h2>
          </div>

          <blockquote className="border-l-4 border-korean-red pl-6 my-8 italic text-korean-red text-xl">
            &ldquo;There is no single stakeholder responsible for encrypting GEO satellite communications.&rdquo;
            <span className="block text-sm mt-2 text-foreground/60 not-italic">&mdash; Don&rsquo;t Look Up, ACM CCS 2025</span>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            This fragmented responsibility &mdash; distributed across satellite operators, ground equipment providers, ISPs, and end customers, each assuming someone else handles encryption &mdash; mirrors a regulatory landscape that is strikingly vacant.
          </p>

          <div className="not-prose my-8">
            <div className="bg-river-depths/50 rounded-lg border border-river-current/30 overflow-hidden">
              <div className="bg-river-current/20 px-4 py-3 border-b border-river-current/30">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">U.S. vs. EU Regulatory Comparison</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-river-current/20">
                      <th className="px-4 py-3 text-left text-sovereign-gold font-semibold">Framework</th>
                      <th className="px-4 py-3 text-center text-foreground font-semibold">Status</th>
                      <th className="px-4 py-3 text-center text-foreground font-semibold">Enforcement</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">FCC Part 25 (US)</td>
                      <td className="px-4 py-2 text-center text-korean-red">No cybersecurity requirements</td>
                      <td className="px-4 py-2 text-center">N/A</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">SPD-5 (US, 2020)</td>
                      <td className="px-4 py-2 text-center text-korean-red">Voluntary principles</td>
                      <td className="px-4 py-2 text-center">Non-binding</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">Satellite Cybersecurity Act</td>
                      <td className="px-4 py-2 text-center text-korean-red">Introduced 3x (2022&ndash;2025)</td>
                      <td className="px-4 py-2 text-center">Never enacted</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">NIST Guidelines</td>
                      <td className="px-4 py-2 text-center">4 guidance documents</td>
                      <td className="px-4 py-2 text-center">No statutory authority</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2">EU NIS2 Directive</td>
                      <td className="px-4 py-2 text-center text-green-400">Effective Oct 2024</td>
                      <td className="px-4 py-2 text-center text-green-400">Mandatory + penalties</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">EU Space Act (proposed)</td>
                      <td className="px-4 py-2 text-center text-green-400">Pen testing pre-launch</td>
                      <td className="px-4 py-2 text-center text-green-400">12hr incident reporting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The comparison to SS7 &mdash; the signaling protocol underlying global telephony since the 1980s &mdash; is instructive. Known to be deeply insecure since at least 2014, exploited for banking fraud, location tracking, and even the pursuit of Sheikha Latifa of Dubai, no mandatory encryption requirements have ever been imposed. The satellite sector follows this same pattern of regulatory paralysis in the face of known, documented, and exploited vulnerabilities.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section 06 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-mono">06</span>
            <h2 className="text-3xl font-bold">Why Encrypting Everything Is Harder Than It Sounds</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Encryption can be applied at multiple layers: link-layer (DVB-CSA or BISS scrambling), network-layer (IPsec), or application-layer (TLS/QUIC). Each has trade-offs in the satellite environment.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Link-layer encryption</strong> is available in most modern satellite modems but is typically an optional, separately licensed feature that operators must pay to enable &mdash; creating a perverse economic incentive against security.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>IPsec</strong> adds 20&ndash;30 bytes of overhead per packet, and GEO satellite links&rsquo; 600ms round-trip latency degrades VPN and IPsec performance substantially. Panasonic Avionics stated that enabling encryption imposes a <strong>20&ndash;30% loss in transponder bandwidth capacity</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Legacy systems</strong> present the most stubborn challenge. GEO satellites have 15&ndash;30 year operational lifespans, and many currently operating were designed before modern cryptographic standards existed. They function as &ldquo;dumb bent-pipes&rdquo; with no onboard processing capability. Ground terminals in remote locations often run off-grid on solar power, where cryptographic processing can exceed available energy budgets. Historical U.S. export controls led to encryption being developed as an optional add-on, with some documentation still referencing 56-bit key strengths &mdash; broken decades ago.
          </p>

          {/* GEO vs LEO */}
          <div className="not-prose my-8">
            <div className="bg-river-depths/50 rounded-lg border border-river-current/30 overflow-hidden">
              <div className="bg-sovereign-gold/20 px-4 py-3 border-b border-sovereign-gold/30">
                <h4 className="text-sm font-bold text-sovereign-gold uppercase tracking-wider">GEO vs. LEO Security Comparison</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-river-current/20">
                      <th className="px-4 py-3 text-left text-sovereign-gold font-semibold">Dimension</th>
                      <th className="px-4 py-3 text-center text-foreground font-semibold">GEO (Legacy)</th>
                      <th className="px-4 py-3 text-center text-foreground font-semibold">Starlink (LEO)</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Altitude</td>
                      <td className="px-4 py-2 text-center">35,786 km</td>
                      <td className="px-4 py-2 text-center">500&ndash;550 km</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Beam Coverage</td>
                      <td className="px-4 py-2 text-center text-korean-red">40% of Earth (wide)</td>
                      <td className="px-4 py-2 text-center text-green-400">Narrow, focused beams</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Latency</td>
                      <td className="px-4 py-2 text-center">~600ms RTT</td>
                      <td className="px-4 py-2 text-center">25&ndash;35ms RTT</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Encryption Default</td>
                      <td className="px-4 py-2 text-center text-korean-red">Optional / off</td>
                      <td className="px-4 py-2 text-center text-green-400">AES-256, always on</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Eavesdrop Difficulty</td>
                      <td className="px-4 py-2 text-center text-korean-red">Trivial ($800)</td>
                      <td className="px-4 py-2 text-center text-green-400">Substantially harder</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section 07 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-mono">07</span>
            <h2 className="text-3xl font-bold">Corporate Responses: From Swift Action to Silence</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The researchers began responsible disclosure in December 2024 and conducted follow-up scans in February 2025 to verify remediation. The responses varied dramatically.
          </p>

          <div className="not-prose my-8">
            <div className="bg-river-depths/50 rounded-lg border border-river-current/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-river-current/20">
                      <th className="px-4 py-3 text-left text-sovereign-gold font-semibold">Entity</th>
                      <th className="px-4 py-3 text-left text-foreground font-semibold">Response</th>
                      <th className="px-4 py-3 text-left text-foreground font-semibold">Action Taken</th>
                      <th className="px-4 py-3 text-center text-foreground font-semibold">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">T-Mobile</td>
                      <td className="px-4 py-2">Weeks to fix</td>
                      <td className="px-4 py-2">Encrypted backhaul + nationwide SIP encryption</td>
                      <td className="px-4 py-2 text-center text-green-400 font-bold">&#10003; Swift</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Walmart</td>
                      <td className="px-4 py-2">In-depth talks</td>
                      <td className="px-4 py-2">Encrypted; verified by re-scan</td>
                      <td className="px-4 py-2 text-center text-green-400 font-bold">&#10003; Fixed</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">AT&amp;T</td>
                      <td className="px-4 py-2">Blamed vendor</td>
                      <td className="px-4 py-2">Fixed; claimed separate US/Mexico networks</td>
                      <td className="px-4 py-2 text-center text-sovereign-gold font-bold">&#9888; Deflected</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">SES / Intelsat</td>
                      <td className="px-4 py-2">Compared to coffee shop WiFi</td>
                      <td className="px-4 py-2">Deflected to customers</td>
                      <td className="px-4 py-2 text-center text-korean-red font-bold">&#10007; Deflected</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">Mexican Military</td>
                      <td className="px-4 py-2">No response</td>
                      <td className="px-4 py-2">Unknown</td>
                      <td className="px-4 py-2 text-center text-korean-red font-bold">&#10007; Silent</td>
                    </tr>
                    <tr className="border-b border-river-current/10">
                      <td className="px-4 py-2 font-medium">CERT-MX</td>
                      <td className="px-4 py-2">No response</td>
                      <td className="px-4 py-2">Unknown</td>
                      <td className="px-4 py-2 text-center text-korean-red font-bold">&#10007; Silent</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">NSA / DISA</td>
                      <td className="px-4 py-2">Acknowledged, no substance</td>
                      <td className="px-4 py-2">N/A</td>
                      <td className="px-4 py-2 text-center text-korean-red font-bold">&#10007; Silent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section 08 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sovereign-gold text-2xl font-mono">08</span>
            <h2 className="text-3xl font-bold">Where Satellite Security Goes From Here</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The &ldquo;Don&rsquo;t Look Up&rdquo; study arrives at an inflection point for satellite communications security. The researchers&rsquo; release of their open-source tool on GitHub &mdash; which accumulated <strong>439 stars and 73 forks</strong> by early 2026 &mdash; effectively ends the era of security through obscurity for satellite communications. Kaspersky compared the study&rsquo;s potential impact to the 2015 Jeep hack, which &ldquo;completely upended cybersecurity standards in the automotive industry.&rdquo;
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The broader satellite security landscape is evolving rapidly but unevenly. GPS spoofing incidents reached <strong>1,500 flights per day</strong> by August 2024. The Viasat attack demonstrated that satellite systems are viable military targets. Over 84% of active satellites now operate in LEO, where newer systems tend to encrypt by default, but many SmallSats and CubeSats still lack adequate security controls.
          </p>

          <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 mb-6">
            <p className="text-foreground/90 leading-relaxed">
              The core lesson of this research is not that satellite communications are uniquely vulnerable &mdash; it is that the satellite industry&rsquo;s assumption that nobody would look up was never a security strategy, merely a bet against curiosity. <strong>That bet has now been lost, publicly and irrevocably.</strong>
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The question is whether the industry and its regulators will respond with the urgency the exposure demands, or whether this will become another entry in the long catalog of infrastructure vulnerabilities &mdash; like SS7, like unencrypted DNS, like default passwords on industrial control systems &mdash; that persist for decades after disclosure because no single entity bears responsibility and no regulation compels action.
          </p>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;VSAT systems should be treated as unencrypted wireless networks.&rdquo;
            <span className="block text-sm mt-2 text-foreground/60 not-italic">&mdash; NSA Advisory, May 2022</span>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            The &ldquo;Don&rsquo;t Look Up&rdquo; researchers proved, with $800 and a rooftop, just how literally true that warning was.
          </p>
        </section>

        {/* Sources */}
        <div className="bg-river-current/10 border border-river-current/30 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Key Sources &amp; References</h3>
          <ul className="space-y-2 text-foreground/70 text-sm">
            <li><strong>Primary Paper:</strong> Zhang, Dai, Ryan, Schulman, Heninger, Levin. &ldquo;Don&rsquo;t Look Up: There Are Sensitive Internal Links in the Clear on GEO Satellites.&rdquo; ACM CCS 2025. Distinguished Paper Award.</li>
            <li><strong>NSA Advisory:</strong> CSA: Protecting VSAT Communications (May 2022)</li>
            <li><strong>RAND Corporation:</strong> SIGINT for Anyone: The Growing Availability of Signals Intelligence in the Open-Source Environment</li>
            <li><strong>EU/ENISA:</strong> From Cyber to Outer Space: A Guide to Securing Commercial Satellite Operations (Feb 2025)</li>
            <li><strong>Legislation:</strong> Satellite Cybersecurity Act (introduced 2022, 2023, 2025 &mdash; never enacted)</li>
            <li><strong>Prior Work:</strong> Pavur &amp; Martinovic (Oxford, 2019&ndash;2020), Lenders et al. (WiSec 2019), Turla APT (Kaspersky, 2015)</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t border-sovereign-gold/30 pt-8 mt-12 text-center">
          <div className="text-sovereign-gold font-bold tracking-widest uppercase text-sm mb-2">
            JPanda Papers
          </div>
          <p className="text-muted-foreground text-sm">
            Open Source Intelligence &bull; Cybersecurity Analysis &bull; Geopolitical Research
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            February 2026 &bull; Unclassified // For Public Release
          </p>
        </div>

      </div>
    </article>
  )
}
