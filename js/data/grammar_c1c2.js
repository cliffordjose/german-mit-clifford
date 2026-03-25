// grammar_c1c2.js - C1 Advanced & C2 Mastery Grammar Concepts (Enriched with examples)

const grammarC1 = [
    {
        id: 'c1-01',
        title: 'Zustandspassiv vs Vorgangspassiv',
        desc: 'The difference between "is closed" (state) and "is being closed" (process).',
        content: `
            <h3>Two Types of Passive</h3>
            <h4>Vorgangspassiv (Process) — werden + Partizip II → the action is happening:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Focus</th></tr></thead>
                <tbody>
                    <tr><td>Das Fenster <strong>wird</strong> geöffnet.</td><td>The window is being opened.</td><td>The opening process</td></tr>
                    <tr><td>Das Haus <strong>wird</strong> gebaut.</td><td>The house is being built.</td><td>The building process</td></tr>
                    <tr><td>Das Paket <strong>wurde</strong> geliefert.</td><td>The package was delivered.</td><td>The delivery action</td></tr>
                </tbody>
            </table></div>
            <h4>Zustandspassiv (State) — sein + Partizip II → the result of the process:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Focus</th></tr></thead>
                <tbody>
                    <tr><td>Das Fenster <strong>ist</strong> geöffnet.</td><td>The window is open. (= in an open state)</td><td>Resulting state</td></tr>
                    <tr><td>Das Haus <strong>ist</strong> gebaut.</td><td>The house is built. (= finished, completed state)</td><td>Resulting state</td></tr>
                    <tr><td>Der Laden <strong>ist</strong> geschlossen.</td><td>The store is closed. (= it is in a closed state)</td><td>Resulting state</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 The Classic Test:</h4><p>If "being" fits → Vorgangspassiv (werden). If no "being" fits → Zustandspassiv (sein).<br>"The door is being opened." → wird geöffnet.<br>"The door is (already) open." → ist geöffnet.</p></div>
        `
    },
    {
        id: 'c1-02',
        title: 'Konjunktiv I — Indirect Speech (Advanced)',
        desc: 'The formal/journalistic way to report what others said.',
        content: `
            <h3>Konjunktiv I — Indirect Speech</h3>
            <p>Used in newspapers, academic writing, and formal contexts to signal that you are reporting someone else's words — without vouching for their truth.</p>
            <h4>Formation — infinitive stem, with special er/sie/es forms:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Pronoun</th><th>sein (Konj. I)</th><th>haben (Konj. I)</th><th>kommen (Konj. I)</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td>sei</td><td>habe</td><td>komme</td></tr>
                    <tr><td>er / sie / es</td><td><strong>sei</strong></td><td><strong>habe</strong></td><td><strong>komme</strong></td></tr>
                    <tr><td>sie (plural)</td><td>seien</td><td>haben*</td><td>kommen*</td></tr>
                </tbody>
            </table></div>
            <p style="color:var(--text-secondary); font-size:14px;">*When Konj. I looks identical to Präsens, use Konj. II instead to preserve the reported speech marker.</p>
            <h4>Examples — Direct → Reported speech:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Direct Speech</th><th>Indirect (Konj. I)</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>"Ich bin unschuldig."</td><td>Er sagte, er <strong>sei</strong> unschuldig.</td><td>He said he was innocent.</td></tr>
                    <tr><td>"Wir haben keine Ahnung."</td><td>Sie sagten, sie <strong>hätten</strong> keine Ahnung. (K.II!)</td><td>They said they had no idea.</td></tr>
                    <tr><td>"Das ist zu teuer."</td><td>Er meinte, das <strong>sei</strong> zu teuer.</td><td>He thought that was too expensive.</td></tr>
                    <tr><td>"Ich komme morgen."</td><td>Sie sagte, sie <strong>komme</strong> morgen.</td><td>She said she would come tomorrow.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c1-03',
        title: 'Complex Sentences with Multiple Clauses',
        desc: 'Stacking subordinate clauses while keeping grammatical control.',
        content: `
            <h3>Complex Sentence Structures</h3>
            <p>Advanced German stacks multiple subordinate clauses. Each conjunction restarts its own "verb-to-end" rule.</p>
            <h4>Two subordinate clauses linked together:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Er sagte, <strong>dass</strong> er kommt, <strong>wenn</strong> er Zeit <strong>hat</strong>.</td><td>He said that he will come, if he has time.</td></tr>
                    <tr><td>Ich weiß, <strong>dass</strong> sie es schafft, <strong>weil</strong> sie sehr fleißig <strong>ist</strong>.</td><td>I know she will make it, because she is very hard-working.</td></tr>
                    <tr><td>Er behauptet, <strong>dass</strong> er unschuldig ist, <strong>obwohl</strong> die Beweise dagegen <strong>sprechen</strong>.</td><td>He claims to be innocent, although the evidence speaks against it.</td></tr>
                    <tr><td>Ich glaube, <strong>dass</strong> das Buch, <strong>das</strong> du empfohlen <strong>hast</strong>, sehr interessant <strong>ist</strong>.</td><td>I believe the book that you recommended is very interesting.</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Reading Complex Sentences:</h4><p>Find the main verb first. Then find each conjunction and identify the start and end of each subordinate clause. Work from outside to inside.</p></div>
        `
    },
    {
        id: 'c1-04',
        title: 'Advanced Word Order & Inversion',
        desc: 'Deliberate topicalization — whatever is placed first becomes the focus.',
        content: `
            <h3>Advanced Word Order in German</h3>
            <p>Any element can be moved to position 1 for emphasis. The verb always stays in position 2. This is called "topicalization."</p>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>What is emphasized?</th></tr></thead>
                <tbody>
                    <tr><td>Morgen <strong>fährt</strong> er nach Berlin.</td><td>Tomorrow he drives to Berlin.</td><td>WHEN (morgen)</td></tr>
                    <tr><td><strong>Ihn</strong> sehe ich jeden Tag.</td><td>HIM I see every day.</td><td>WHO (ihn)</td></tr>
                    <tr><td><strong>Wegen der Kälte</strong> blieb er zuhause.</td><td>Because of the cold, he stayed home.</td><td>REASON</td></tr>
                    <tr><td><strong>Dieses Buch</strong> lese ich gerade.</td><td>THIS book I am currently reading.</td><td>WHICH book (contrast)</td></tr>
                </tbody>
            </table></div>
            <h4>Verb clusters at the end of subordinate clauses:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Order</th></tr></thead>
                <tbody>
                    <tr><td>Er hat das nicht machen <strong>wollen</strong>.</td><td>He didn't want to do that.</td><td>Partizip II + modal inf. at end</td></tr>
                    <tr><td>Ich weiß, dass er hätte kommen <strong>sollen</strong>.</td><td>I know that he should have come.</td><td>hätte + inf. + sollen</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c1-05',
        title: 'Participial Clauses (Partizipialkonstruktionen)',
        desc: 'Compressing relative clauses into participial adjectives before nouns.',
        content: `
            <h3>Participial Clauses</h3>
            <p>Instead of a full relative clause, you can use a participial phrase before the noun — a hallmark of academic and journalistic German.</p>
            <h4>Using Partizip I (active, simultaneous action):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Full Relative Clause</th><th>Participial Form</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>der Mann, der lacht</td><td>der <strong>lachende</strong> Mann</td><td>the laughing man</td></tr>
                    <tr><td>die Kinder, die spielen</td><td>die <strong>spielenden</strong> Kinder</td><td>the playing children</td></tr>
                    <tr><td>die Preise, die steigen</td><td>die <strong>steigenden</strong> Preise</td><td>the rising prices</td></tr>
                </tbody>
            </table></div>
            <h4>Using Partizip II (passive/completed action):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Full Relative Clause</th><th>Participial Form</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>das Buch, das geschrieben wurde von Goethe</td><td>das von Goethe <strong>geschriebene</strong> Buch</td><td>the book written by Goethe</td></tr>
                    <tr><td>der Brief, der gestern geschickt wurde</td><td>der gestern <strong>geschickte</strong> Brief</td><td>the letter sent yesterday</td></tr>
                    <tr><td>die Reform, die eingeführt wurde</td><td>die <strong>eingeführte</strong> Reform</td><td>the reform that was introduced</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c1-06',
        title: 'Advanced Nominalization (Nominalisierung)',
        desc: 'Transforming verbal clauses into compact formal noun phrases.',
        content: `
            <h3>Advanced Nominalization</h3>
            <p>Academic and bureaucratic German transforms entire verbal clauses into compressed noun phrases for a formal, objective tone.</p>
            <h4>Verbal → Nominal style transformations:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Verbal Style</th><th>Nominal Style</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Weil das Wetter schlecht war, blieben wir zuhause.</td><td><strong>Wegen des schlechten Wetters</strong> blieben wir zuhause.</td><td>Because of the bad weather, we stayed home.</td></tr>
                    <tr><td>Obwohl er erschöpft war, arbeitete er weiter.</td><td><strong>Trotz seiner Erschöpfung</strong> arbeitete er weiter.</td><td>Despite his exhaustion, he kept working.</td></tr>
                    <tr><td>Bevor die Reform eingeführt wurde, stiegen die Kosten.</td><td><strong>Vor der Einführung der Reform</strong> stiegen die Kosten.</td><td>Before the introduction of the reform, costs rose.</td></tr>
                    <tr><td>Nachdem er die Prüfung bestanden hatte, feierte er.</td><td><strong>Nach dem Bestehen der Prüfung</strong> feierte er.</td><td>After passing the exam, he celebrated.</td></tr>
                </tbody>
            </table></div>
        `
    }
];

const grammarC2 = [
    {
        id: 'c2-01',
        title: 'Advanced Sentence Restructuring',
        desc: 'Mastering rhythm, focus, and cohesion for native-level expression.',
        content: `
            <h3>Stylistic Sentence Restructuring</h3>
            <p>At C2, you choose structures deliberately for style, emphasis, and tone — not just grammar compliance.</p>
            <h4>Left dislocation (Linksversetzung) — strong topic contrast:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English Effect</th></tr></thead>
                <tbody>
                    <tr><td><strong>Den Wein</strong> — den trinke ich nicht.</td><td>Wine — THAT I don't drink. (strong emphasis on what is rejected)</td></tr>
                    <tr><td><strong>Dein Chef</strong> — der ist wirklich unmöglich.</td><td>Your boss — HE is truly impossible.</td></tr>
                    <tr><td><strong>Diese Stadt</strong> — die kenne ich gut.</td><td>This city — THAT I know well.</td></tr>
                    <tr><td><strong>Das Ergebnis</strong> — damit bin ich zufrieden.</td><td>The result — with THAT I am satisfied.</td></tr>
                </tbody>
            </table></div>
            <h4>Extraposition — heavy phrase moved after verbal bracket:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Normal</th><th>Extraposed (formal/literary)</th></tr></thead>
                <tbody>
                    <tr><td>Ich habe ihn gestern getroffen.</td><td>Ich habe ihn gestern getroffen — <strong>den alten Freund aus Schulzeiten</strong>.</td></tr>
                    <tr><td>Er hat versprochen, ihr zu helfen.</td><td>Er hat versprochen, ihr zu helfen — <strong>wenn er Zeit hätte</strong>.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c2-02',
        title: 'Literary Konjunktiv Usage',
        desc: 'Archaic and literary uses of the subjunctive in authentic German texts.',
        content: `
            <h3>Literary Konjunktiv</h3>
            <h4>"Als ob / als wenn" — as if (always Konjunktiv II):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Er sah aus, als ob er geweint <strong>hätte</strong>.</td><td>He looked as if he had been crying.</td></tr>
                    <tr><td>Sie benahm sich, als <strong>wäre</strong> sie die Königin.</td><td>She behaved as if she were the queen.</td></tr>
                    <tr><td>Er spricht, als ob er alles <strong>wüsste</strong>.</td><td>He speaks as if he knew everything.</td></tr>
                </tbody>
            </table></div>
            <h4>Literary wishes — Konjunktiv II without "wenn" at the start:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>Wäre</strong> ich doch noch jung!</td><td>If only I were still young!</td></tr>
                    <tr><td><strong>Hätte</strong> ich das gewusst!</td><td>If only I had known that!</td></tr>
                    <tr><td><strong>Käme</strong> er doch endlich!</td><td>If only he would finally come!</td></tr>
                    <tr><td><strong>Wäre</strong> das Lebens so einfach!</td><td>If life were only that simple!</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c2-03',
        title: 'Emphasis Structures',
        desc: 'Cleft sentences, particles, and structure to achieve precise emphasis.',
        content: `
            <h3>Emphasis Structures</h3>
            <h4>Cleft sentences — "Es ist X, der/die/das...Y":</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Normal</th><th>Cleft (Emphatic)</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Maria hat mir geholfen.</td><td><strong>Es ist Maria</strong>, die mir geholfen hat.</td><td>It is MARIA who helped me.</td></tr>
                    <tr><td>Das hat mich überrascht.</td><td><strong>Es ist das</strong>, was mich überrascht hat.</td><td>That is what surprised me.</td></tr>
                    <tr><td>Er kam am Dienstag.</td><td><strong>Es war am Dienstag</strong>, als er kam.</td><td>It was on Tuesday that he came.</td></tr>
                </tbody>
            </table></div>
            <h4>Emphatic particles in sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>Selbst</strong> er hat es nicht gewusst.</td><td>Even HE didn't know it.</td></tr>
                    <tr><td><strong>Ausgerechnet</strong> heute muss es regnen!</td><td>Of all days, it has to rain TODAY!</td></tr>
                    <tr><td><strong>Gerade</strong> du solltest das wissen!</td><td>YOU of all people should know this!</td></tr>
                    <tr><td><strong>Sogar</strong> sein bester Freund zweifelte.</td><td>Even his best friend had doubts.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c2-04',
        title: 'Elliptical Constructions',
        desc: 'Leaving out recoverable elements — a mark of native German fluency.',
        content: `
            <h3>Ellipsis in German</h3>
            <p>Native speakers regularly omit understood elements. Recognizing and producing this is a benchmark of mastery.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Full Form</th><th>Elliptical Form</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich kaufe Äpfel und ich kaufe Orangen.</td><td>Ich kaufe Äpfel und [ich kaufe] Orangen.</td><td>I buy apples and oranges.</td></tr>
                    <tr><td>Er singt gut und sie singt auch gut.</td><td>Er singt gut und sie auch.</td><td>He sings well and so does she.</td></tr>
                    <tr><td>"Wer hat das gemacht?" "Ich habe das gemacht."</td><td>"Wer hat das gemacht?" "Ich."</td><td>"Who did that?" "I did."</td></tr>
                    <tr><td>Ich muss jetzt nach Hause gehen.</td><td>[Ich] Muss jetzt [nach Hause].</td><td>Gotta head home now. (informal)</td></tr>
                </tbody>
            </table></div>
            <h4>Common conversational ellipsis:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>Full Form</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Alles klar?</td><td>Ist alles klar?</td><td>Everything okay?</td></tr>
                    <tr><td>Danke dir.</td><td>Ich danke dir.</td><td>Thank you. (to you)</td></tr>
                    <tr><td>Kaffee bitte.</td><td>Ich möchte (einen) Kaffee, bitte.</td><td>Coffee, please.</td></tr>
                    <tr><td>Na ja.</td><td>(full meaning requires context)</td><td>Well... / Sort of... / Meh.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c2-05',
        title: 'Advanced Clause Embedding',
        desc: 'Deeply nested clauses — the hallmark of formal written German.',
        content: `
            <h3>Deep Clause Embedding</h3>
            <p>Native-level written German embeds multiple clauses inside each other. Understanding and parsing this is essential for academic reading.</p>
            <h4>Step-by-step analysis of a complex sentence:</h4>
            <p><em>"Die Annahme, dass die Theorie, die von dem Forscher, dessen Artikel erschienen ist, entwickelt wurde, korrekt ist, muss bewiesen werden."</em></p>
            <div class="grammar-table"><table>
                <thead><tr><th>Level</th><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Main clause</td><td>Die Annahme muss bewiesen werden.</td><td>The assumption must be proven.</td></tr>
                    <tr><td>Level 1 (dass)</td><td>dass die Theorie korrekt ist</td><td>that the theory is correct</td></tr>
                    <tr><td>Level 2 (die)</td><td>die von dem Forscher entwickelt wurde</td><td>which was developed by the researcher</td></tr>
                    <tr><td>Level 3 (dessen)</td><td>dessen Artikel erschienen ist</td><td>whose article appeared</td></tr>
                </tbody>
            </table></div>
            <h4>More complex embeddings from journalism:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Die Regierung, die von Experten, die seit Jahren warnen, kritisiert wird, reagiert kaum.</td><td>The government, which is being criticized by experts who have been warning for years, barely responds.</td></tr>
                    <tr><td>Er glaubt, dass das Projekt, das er leitet, erfolgreich sein wird, obwohl es kaum Fördermittel gibt.</td><td>He believes that the project he leads will be successful, even though there are hardly any funding resources.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c2-06',
        title: 'Scientific & Academic German',
        desc: 'Grammar patterns used in German academic writing and scientific papers.',
        content: `
            <h3>Wissenschaftssprache — Academic German</h3>
            <h4>1. Avoiding "ich" — impersonal constructions:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Instead of "ich..."</th><th>Write:</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich untersuche das Problem.</td><td>In dieser Arbeit <strong>wird</strong> das Problem untersucht.</td><td>In this paper, the problem is examined.</td></tr>
                    <tr><td>Ich argumentiere, dass...</td><td><strong>Es lässt sich argumentieren</strong>, dass...</td><td>It can be argued that...</td></tr>
                    <tr><td>Ich zeige, dass...</td><td>Die Ergebnisse <strong>zeigen</strong>, dass...</td><td>The results show that...</td></tr>
                    <tr><td>Ich nehme an...</td><td><strong>Es wird angenommen</strong>, dass...</td><td>It is assumed that...</td></tr>
                </tbody>
            </table></div>
            <h4>2. Heavy Nominalization and Genitive preference:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Colloquial</th><th>Academic Style</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>die Ergebnisse von der Studie</td><td>die Ergebnisse <strong>der Studie</strong></td><td>the results of the study</td></tr>
                    <tr><td>weil die Kosten hoch sind</td><td>aufgrund der <strong>hohen Kosten</strong></td><td>because of the high costs</td></tr>
                    <tr><td>dass wir etwas prüfen</td><td>die <strong>Überprüfung</strong> von etwas</td><td>the examination of something</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'c2-07',
        title: 'Modal Particles — Complete Mastery',
        desc: 'doch, ja, halt, mal, eben, bloß, eigentlich, denn — the soul of German speech.',
        content: `
            <h3>Modal Particles (Modalpartikeln)</h3>
            <p>Untranslatable small words that color the emotional tone of a sentence. They cannot be left out without completely changing the feel.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Particle</th><th>Core Tone</th><th>Example</th><th>English (Approximate)</th></tr></thead>
                <tbody>
                    <tr><td><strong>doch</strong></td><td>contradiction / persuasion</td><td>Komm <strong>doch</strong> rein!</td><td>Oh come on in! (warmer than just "Komm rein")</td></tr>
                    <tr><td><strong>ja</strong></td><td>shared knowledge / mild surprise</td><td>Das ist <strong>ja</strong> interessant!</td><td>Oh, that IS interesting! (shared surprise)</td></tr>
                    <tr><td><strong>halt / eben</strong></td><td>resignation / unchangeable fact</td><td>So ist das <strong>halt</strong>.</td><td>That's just how it is. (deal with it)</td></tr>
                    <tr><td><strong>mal</strong></td><td>softener / casualness</td><td>Komm <strong>mal</strong> her.</td><td>Come here for a sec.</td></tr>
                    <tr><td><strong>denn</strong></td><td>genuine curiosity</td><td>Was ist <strong>denn</strong> passiert?</td><td>What on earth happened? (interested)</td></tr>
                    <tr><td><strong>eigentlich</strong></td><td>actually / in principle</td><td>Was willst du <strong>eigentlich</strong>?</td><td>What do you actually want? (slight impatience)</td></tr>
                    <tr><td><strong>bloß</strong></td><td>urgency / fear / warning</td><td>Sag es <strong>bloß</strong> nicht weiter!</td><td>Don't you dare tell anyone!</td></tr>
                </tbody>
            </table></div>
            <h4>Same sentence — completely different tone with different particles:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English Nuance</th></tr></thead>
                <tbody>
                    <tr><td>Das ist schön.</td><td>That is nice. (neutral)</td></tr>
                    <tr><td>Das ist <strong>ja</strong> schön!</td><td>Oh, that IS really nice! (pleasantly surprised)</td></tr>
                    <tr><td>Das ist <strong>doch</strong> schön!</td><td>Come on, that IS nice, you must agree!</td></tr>
                    <tr><td>Das ist <strong>halt</strong> schön.</td><td>Well, it's nice. (resigned / matter-of-fact)</td></tr>
                </tbody>
            </table></div>
        `
    }
];
