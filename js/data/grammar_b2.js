// grammar_b2.js - B2 Upper Intermediate Grammar Concepts (Enriched with examples)

const grammarB2 = [
    {
        id: 'b2-01',
        title: 'Passive Voice in Different Tenses',
        desc: 'Using the passive across all major German tenses.',
        content: `
            <h3>Passive Voice Across Tenses</h3>
            <p>The passive = <strong>werden (in the right tense) + Partizip II</strong></p>
            <div class="grammar-table"><table>
                <thead><tr><th>Tense</th><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Präsens</td><td>Das Auto <strong>wird</strong> repariert.</td><td>The car is being repaired.</td></tr>
                    <tr><td>Präteritum</td><td>Das Auto <strong>wurde</strong> repariert.</td><td>The car was repaired.</td></tr>
                    <tr><td>Perfekt</td><td>Das Auto <strong>ist</strong> repariert <strong>worden</strong>.</td><td>The car has been repaired.</td></tr>
                    <tr><td>Futur I</td><td>Das Auto <strong>wird</strong> repariert <strong>werden</strong>.</td><td>The car will be repaired.</td></tr>
                </tbody>
            </table></div>
            <h4>More passive examples across subjects:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Die Tür <strong>wurde</strong> geschlossen.</td><td>The door was closed.</td></tr>
                    <tr><td>Das Abendessen <strong>wird</strong> gekocht.</td><td>Dinner is being cooked.</td></tr>
                    <tr><td>Die Brücke <strong>ist</strong> gebaut <strong>worden</strong>.</td><td>The bridge has been built.</td></tr>
                    <tr><td>Die E-Mail <strong>wird</strong> morgen gesendet <strong>werden</strong>.</td><td>The email will be sent tomorrow.</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Perfekt Passive:</h4><p>Note the difference: "geworden" (become) vs "worden" (in passive perfect). Always use <strong>worden</strong> (without ge-) in passive perfect!</p></div>
        `
    },
    {
        id: 'b2-02',
        title: 'Passive with Modal Verbs',
        desc: '"The form must be filled out." — Modals inside passive constructions.',
        content: `
            <h3>Passive with Modal Verbs</h3>
            <p>Structure: <strong>Modal (pos.2) + ... + Partizip II + werden</strong> (infinitive)</p>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Das Formular <strong>muss</strong> ausgefüllt <strong>werden</strong>.</td><td>The form must be filled out.</td></tr>
                    <tr><td>Das Paket <strong>kann</strong> hier abgeholt <strong>werden</strong>.</td><td>The package can be picked up here.</td></tr>
                    <tr><td>Das Problem <strong>sollte</strong> sofort gelöst <strong>werden</strong>.</td><td>The problem should be solved immediately.</td></tr>
                    <tr><td>Die Daten <strong>dürfen</strong> nicht weitergegeben <strong>werden</strong>.</td><td>The data must not be shared.</td></tr>
                </tbody>
            </table></div>
            <h4>In the PAST (modal in Präteritum):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Die Hausaufgaben <strong>mussten</strong> abgegeben werden.</td><td>The homework had to be handed in.</td></tr>
                    <tr><td>Der Aufsatz <strong>sollte</strong> überarbeitet werden.</td><td>The essay was supposed to be revised.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b2-03',
        title: 'Konjunktiv II — Subjunctive Mood',
        desc: 'Hypothetical situations, wishes, and extreme politeness.',
        content: `
            <h3>Konjunktiv II</h3>
            <p>Used for things that are NOT real. Formed with <strong>würden + infinitive</strong> for most verbs, or special forms for key verbs.</p>
            <h4>Key Konjunktiv II forms (must memorize!):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Verb</th><th>Konj. II (ich)</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>sein</td><td>wäre</td><td>Wenn ich reich <strong>wäre</strong>...</td><td>If I were rich...</td></tr>
                    <tr><td>haben</td><td>hätte</td><td>Ich <strong>hätte</strong> gern einen Wein.</td><td>I'd like a wine please.</td></tr>
                    <tr><td>können</td><td>könnte</td><td><strong>Könnten</strong> Sie mir helfen?</td><td>Could you help me?</td></tr>
                    <tr><td>müssen</td><td>müsste</td><td>Du <strong>müsstest</strong> mehr lernen.</td><td>You really should study more.</td></tr>
                </tbody>
            </table></div>
            <h4>Using würden + infinitive for other verbs:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>würde</strong> gerne nach Japan <strong>reisen</strong>.</td><td>I would love to travel to Japan.</td></tr>
                    <tr><td>Was <strong>würdest</strong> du an meiner Stelle <strong>tun</strong>?</td><td>What would you do in my situation?</td></tr>
                    <tr><td>Er <strong>würde</strong> das niemals <strong>sagen</strong>.</td><td>He would never say that.</td></tr>
                    <tr><td><strong>Würden</strong> Sie mir bitte das Salz <strong>reichen</strong>?</td><td>Would you please pass me the salt?</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b2-04',
        title: 'Hypothetical Sentences (Konditionalsätze)',
        desc: 'Real and unreal conditions — if I were rich, I would buy a house.',
        content: `
            <h3>Conditional Sentences</h3>
            <h4>Real conditions (use Präsens or Futur I):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Wenn ich Zeit <strong>habe</strong>, <strong>komme</strong> ich.</td><td>If I have time, I will come.</td></tr>
                    <tr><td>Wenn es <strong>regnet</strong>, nehme ich einen Regenschirm.</td><td>If it rains, I'll take an umbrella.</td></tr>
                </tbody>
            </table></div>
            <h4>Unreal/Hypothetical conditions (use Konjunktiv II in BOTH clauses):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Wenn ich Zeit <strong>hätte</strong>, <strong>würde</strong> ich mehr lesen.</td><td>If I had time, I would read more.</td></tr>
                    <tr><td>Wenn er hier <strong>wäre</strong>, <strong>könnte</strong> er uns helfen.</td><td>If he were here, he could help us.</td></tr>
                    <tr><td>Wenn ich Millionär <strong>wäre</strong>, <strong>würde</strong> ich die Welt bereisen.</td><td>If I were a millionaire, I would travel the world.</td></tr>
                    <tr><td>Wenn wir früher <strong>gegangen wären</strong>, <strong>hätten</strong> wir den Zug erwischt.</td><td>If we had left earlier, we would have caught the train. (past unreal!)</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b2-05',
        title: 'Indirect Speech (Basics)',
        desc: 'Reporting what someone said — dass clauses and Konjunktiv I preview.',
        content: `
            <h3>Indirect Speech</h3>
            <p>Reporting what someone said, often with a "dass" clause. The tense usually stays the same.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Direct Speech</th><th>Indirect Speech (mit dass)</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>"Ich bin krank." (Er sagt...)</td><td>Er sagt, dass er krank <strong>ist</strong>.</td><td>He says that he is sick.</td></tr>
                    <tr><td>"Ich habe gegessen." (Sie sagt...)</td><td>Sie sagt, dass sie gegessen <strong>hat</strong>.</td><td>She says that she has eaten.</td></tr>
                    <tr><td>"Wir kommen morgen." (Sie sagen...)</td><td>Sie sagen, dass sie morgen <strong>kommen</strong>.</td><td>They say that they are coming tomorrow.</td></tr>
                    <tr><td>"Ich weiß es nicht." (Er sagt...)</td><td>Er sagt, dass er es nicht <strong>weiß</strong>.</td><td>He says that he doesn't know it.</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Konjunktiv I Preview (for C1):</h4><p>Formal and journalistic German uses Konjunktiv I: "Er <strong>sei</strong> krank." (He is reportedly sick.) This allows the writer to report without endorsing the truth of the statement.</p></div>
        `
    },
    {
        id: 'b2-06',
        title: 'Participle I (Partizip I) as Adjective',
        desc: 'The ongoing/active present participle used before nouns.',
        content: `
            <h3>Partizip I as an Adjective</h3>
            <p>Formed by adding <strong>-d</strong> to the infinitive. Describes something happening simultaneously with the main action. Takes normal adjective endings when used before a noun.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Infinitive</th><th>Partizip I</th><th>Before noun</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>schlafen</td><td>schlafend</td><td>das <strong>schlafende</strong> Kind</td><td>the sleeping child</td></tr>
                    <tr><td>lachen</td><td>lachend</td><td>die <strong>lachenden</strong> Studenten</td><td>the laughing students</td></tr>
                    <tr><td>wachsen</td><td>wachsend</td><td><strong>wachsende</strong> Probleme</td><td>growing problems</td></tr>
                    <tr><td>steigen</td><td>steigend</td><td><strong>steigende</strong> Preise</td><td>rising prices</td></tr>
                </tbody>
            </table></div>
            <h4>Examples in full sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Der <strong>weinende</strong> Mann saß auf der Bank.</td><td>The crying man sat on the bench.</td></tr>
                    <tr><td>Das ist ein <strong>wachsendes</strong> Problem.</td><td>That is a growing problem.</td></tr>
                    <tr><td>Die <strong>steigende</strong> Inflation beunruhigt alle.</td><td>The rising inflation worries everyone.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b2-07',
        title: 'Advanced Conjunctions: nachdem, sobald, indem',
        desc: 'Precise time and method clauses for nuanced expression.',
        content: `
            <h3>Advanced Conjunctions</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>Conjunction</th><th>Meaning</th><th>Tense Note</th></tr></thead>
                <tbody>
                    <tr><td><strong>nachdem</strong></td><td>after</td><td>Clause tense is one step further in the past (Plusquamperfekt)</td></tr>
                    <tr><td><strong>sobald</strong></td><td>as soon as</td><td>Same tense in both clauses</td></tr>
                    <tr><td><strong>indem</strong></td><td>by (doing)</td><td>Present tense — describes the means/method</td></tr>
                    <tr><td><strong>solange</strong></td><td>as long as</td><td>Same tense logic as main clause</td></tr>
                </tbody>
            </table></div>
            <h4>Examples:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>Nachdem</strong> er gegessen <strong>hatte</strong>, rief er an.</td><td>After he had eaten, he called.</td></tr>
                    <tr><td><strong>Sobald</strong> sie ankommt, fangen wir an.</td><td>As soon as she arrives, we'll start.</td></tr>
                    <tr><td>Er lernt Deutsch, <strong>indem</strong> er täglich übt.</td><td>He learns German by practicing daily.</td></tr>
                    <tr><td>Ich warte, <strong>solange</strong> du brauchst.</td><td>I'll wait as long as you need.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b2-08',
        title: 'Nominalization: Verbs to Nouns',
        desc: 'Any German infinitive can become a neuter "das" noun — extremely common.',
        content: `
            <h3>Nominalization (Verbs → Nouns)</h3>
            <p>Any German verb can be converted into a <strong>neuter noun (das...)</strong> simply by capitalizing the infinitive. This is a core feature of written and formal German.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Verb</th><th>Noun</th><th>Example sentence</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>schreiben</td><td>das Schreiben</td><td>Das Schreiben ist eine Kunst.</td><td>Writing is an art.</td></tr>
                    <tr><td>lernen</td><td>das Lernen</td><td>Das Lernen fällt ihm leicht.</td><td>Learning comes easy to him.</td></tr>
                    <tr><td>reisen</td><td>das Reisen</td><td>Beim Reisen lernt man viel.</td><td>When traveling, one learns a lot.</td></tr>
                    <tr><td>laufen</td><td>das Laufen</td><td>Das tägliche Laufen hält mich fit.</td><td>Daily running keeps me fit.</td></tr>
                </tbody>
            </table></div>
            <h4>Alternative noun forms (suffix -ung, -heit etc.):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Verb</th><th>-ung Noun</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>bedeuten</td><td>die Bedeutung</td><td>meaning / significance</td></tr>
                    <tr><td>hoffen</td><td>die Hoffnung</td><td>hope</td></tr>
                    <tr><td>üben</td><td>die Übung</td><td>exercise / practice</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b2-09',
        title: 'Extended Infinitives (um…zu, ohne…zu, statt…zu)',
        desc: 'Express purpose, absence of action, and alternatives elegantly.',
        content: `
            <h3>Extended Infinitive Constructions</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>Construction</th><th>Meaning</th><th>German Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>um ... zu + inf.</strong></td><td>in order to</td><td>Er lernt Deutsch, <strong>um</strong> in Berlin <strong>zu arbeiten</strong>.</td><td>He learns German in order to work in Berlin.</td></tr>
                    <tr><td><strong>ohne ... zu + inf.</strong></td><td>without doing</td><td>Sie ging, <strong>ohne</strong> sich zu <strong>verabschieden</strong>.</td><td>She left without saying goodbye.</td></tr>
                    <tr><td><strong>statt ... zu + inf.</strong></td><td>instead of doing</td><td>Er spielt Spiele, <strong>statt</strong> zu <strong>lernen</strong>.</td><td>He plays games instead of studying.</td></tr>
                </tbody>
            </table></div>
            <h4>More examples:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich spare Geld, <strong>um</strong> ein Auto <strong>zu kaufen</strong>.</td><td>I'm saving money in order to buy a car.</td></tr>
                    <tr><td>Er isst weiter, <strong>ohne</strong> aufzuhören.</td><td>He keeps eating without stopping.</td></tr>
                    <tr><td><strong>Statt</strong> zu klagen, <strong>tu</strong> etwas!</td><td>Instead of complaining, do something!</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Same Subject Rule:</h4><p>These constructions only work when BOTH clauses have the same subject. "Er hilft mir, <strong>ohne</strong> es zu merken." ✓ But if the subjects differ, use "ohne dass": "Er hilft mir, <strong>ohne dass</strong> ich darum gebeten habe." ✓</p></div>
        `
    }
];
