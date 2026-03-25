// grammar_b1.js - B1 Intermediate Grammar Concepts (Enriched with examples)

const grammarB1 = [
    {
        id: 'b1-01',
        title: 'Präteritum — Simple Past',
        desc: 'The written past tense used in novels, news, and narratives.',
        content: `
            <h3>Präteritum — Simple Past</h3>
            <p>Regular (weak) verbs: stem + <strong>te</strong> + personal ending. Irregular (strong) verbs: new stem vowel, no ending on ich/er.</p>
            <h4>Regular Verb — spielen (to play):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Pronoun</th><th>Präteritum</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td>spiel<strong>te</strong></td></tr>
                    <tr><td>du</td><td>spiel<strong>test</strong></td></tr>
                    <tr><td>er/sie/es</td><td>spiel<strong>te</strong></td></tr>
                    <tr><td>wir</td><td>spiel<strong>ten</strong></td></tr>
                    <tr><td>sie/Sie</td><td>spiel<strong>ten</strong></td></tr>
                </tbody>
            </table></div>
            <h4>Irregular Verbs — stem changes:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Infinitive</th><th>ich (Prät.)</th><th>er (Prät.)</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>kommen</td><td>kam</td><td>kam</td><td>came</td></tr>
                    <tr><td>gehen</td><td>ging</td><td>ging</td><td>went</td></tr>
                    <tr><td>fahren</td><td>fuhr</td><td>fuhr</td><td>drove</td></tr>
                    <tr><td>schreiben</td><td>schrieb</td><td>schrieb</td><td>wrote</td></tr>
                </tbody>
            </table></div>
            <h4>Examples in full sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Als Kind <strong>spielte</strong> ich jeden Tag draußen.</td><td>As a child, I played outside every day.</td></tr>
                    <tr><td>Er <strong>schrieb</strong> einen langen Brief.</td><td>He wrote a long letter.</td></tr>
                    <tr><td>Wir <strong>fuhren</strong> mit dem Zug nach Hamburg.</td><td>We went to Hamburg by train.</td></tr>
                    <tr><td>Sie <strong>kam</strong> spät nach Hause.</td><td>She came home late.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b1-02',
        title: 'Präteritum of sein & haben',
        desc: 'war and hatte — used in everyday speech, not just writing.',
        content: `
            <h3>sein & haben in Präteritum</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>Pronoun</th><th>sein → war</th><th>haben → hatte</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td>war</td><td>hatte</td></tr>
                    <tr><td>du</td><td>warst</td><td>hattest</td></tr>
                    <tr><td>er/sie/es</td><td>war</td><td>hatte</td></tr>
                    <tr><td>wir</td><td>waren</td><td>hatten</td></tr>
                    <tr><td>ihr</td><td>wart</td><td>hattet</td></tr>
                    <tr><td>sie/Sie</td><td>waren</td><td>hatten</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — war and hatte in real sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Gestern <strong>war</strong> es sehr heiß.</td><td>Yesterday it was very hot.</td></tr>
                    <tr><td>Das Konzert <strong>war</strong> wunderschön.</td><td>The concert was wonderful.</td></tr>
                    <tr><td>Ich <strong>hatte</strong> keine Zeit, dich anzurufen.</td><td>I had no time to call you.</td></tr>
                    <tr><td>Als ich jung <strong>war</strong>, <strong>hatte</strong> ich viele Träume.</td><td>When I was young, I had many dreams.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b1-03',
        title: 'Passive Voice (Vorgangspassiv)',
        desc: 'The action is more important than who does it — werden + Partizip II.',
        content: `
            <h3>The Passive Voice</h3>
            <p>Active: Subject does something. Passive: Something is done (actor optional).</p>
            <p>Structure: <strong>werden (conjugated) + ... + Partizip II (end)</strong></p>
            <div class="grammar-table"><table>
                <thead><tr><th>Tense</th><th>German (Passive)</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Present</td><td>Das Haus <strong>wird</strong> gebaut.</td><td>The house is being built.</td></tr>
                    <tr><td>Past (Prät.)</td><td>Das Haus <strong>wurde</strong> gebaut.</td><td>The house was built.</td></tr>
                    <tr><td>Perfect</td><td>Das Haus <strong>ist</strong> gebaut <strong>worden</strong>.</td><td>The house has been built.</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — expressing the "by whom" with von:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Das Buch <strong>wurde von</strong> Goethe geschrieben.</td><td>The book was written by Goethe.</td></tr>
                    <tr><td>Die Pizza <strong>wird</strong> frisch <strong>zubereitet</strong>.</td><td>The pizza is being freshly prepared.</td></tr>
                    <tr><td>Deutsch <strong>wird</strong> in vielen Ländern <strong>gesprochen</strong>.</td><td>German is spoken in many countries.</td></tr>
                    <tr><td>Der Täter <strong>wurde</strong> von der Polizei <strong>festgenommen</strong>.</td><td>The suspect was arrested by the police.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b1-04',
        title: 'Relative Clauses & Relative Pronouns',
        desc: 'Adding who/which/that descriptions to nouns — verb goes to the end.',
        content: `
            <h3>Relative Clauses</h3>
            <p>Introduced by a relative pronoun (based on gender of the noun described). The verb goes to the END of the relative clause.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Case</th><th>Masc.</th><th>Fem.</th><th>Neuter</th><th>Plural</th></tr></thead>
                <tbody>
                    <tr><td>Nominative</td><td><strong>der</strong></td><td><strong>die</strong></td><td><strong>das</strong></td><td><strong>die</strong></td></tr>
                    <tr><td>Accusative</td><td><strong>den</strong></td><td><strong>die</strong></td><td><strong>das</strong></td><td><strong>die</strong></td></tr>
                    <tr><td>Dative</td><td><strong>dem</strong></td><td><strong>der</strong></td><td><strong>dem</strong></td><td><strong>denen</strong></td></tr>
                    <tr><td>Genitive</td><td><strong>dessen</strong></td><td><strong>deren</strong></td><td><strong>dessen</strong></td><td><strong>deren</strong></td></tr>
                </tbody>
            </table></div>
            <h4>Examples — all with different cases:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Case of relative pronoun</th></tr></thead>
                <tbody>
                    <tr><td>Das ist der Mann, <strong>der</strong> Gitarre spielt.</td><td>That is the man who plays guitar.</td><td>Nominative (der = subject in clause)</td></tr>
                    <tr><td>Ich lese das Buch, <strong>das</strong> du empfohlen hast.</td><td>I'm reading the book that you recommended.</td><td>Accusative (neuter object in clause)</td></tr>
                    <tr><td>Die Frau, <strong>der</strong> ich helfe, heißt Emma.</td><td>The woman whom I am helping is called Emma.</td><td>Dative (helfen takes Dative)</td></tr>
                    <tr><td>Der Schüler, <strong>dessen</strong> Vater Arzt ist, ist sehr intelligent.</td><td>The student whose father is a doctor is very intelligent.</td><td>Genitive (whose)</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b1-05',
        title: 'Adjective Declension — All Three Tables',
        desc: 'The right adjective ending every time — after der, after ein, or alone.',
        content: `
            <h3>Adjective Declension — Three Patterns</h3>
            <h4>1. After Definite Article (der/die/das) — "weak" endings:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Case</th><th>Masc.</th><th>Fem.</th><th>Neuter</th><th>Plural</th></tr></thead>
                <tbody>
                    <tr><td>Nominative</td><td>-e</td><td>-e</td><td>-e</td><td>-en</td></tr>
                    <tr><td>Accusative</td><td>-en</td><td>-e</td><td>-e</td><td>-en</td></tr>
                    <tr><td>Dative</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
                </tbody>
            </table></div>
            <h4>2. After Indefinite Article (ein/eine/ein) — "mixed" endings:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Case</th><th>Masc.</th><th>Fem.</th><th>Neuter</th></tr></thead>
                <tbody>
                    <tr><td>Nominative</td><td><strong>-er</strong></td><td>-e</td><td><strong>-es</strong></td></tr>
                    <tr><td>Accusative</td><td>-en</td><td>-e</td><td>-es</td></tr>
                    <tr><td>Dative</td><td>-en</td><td>-en</td><td>-en</td></tr>
                </tbody>
            </table></div>
            <h4>Examples across all three patterns:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Pattern</th></tr></thead>
                <tbody>
                    <tr><td>Der alt<strong>e</strong> Mann trinkt Tee.</td><td>The old man drinks tea.</td><td>After definite — Nom. Masc.</td></tr>
                    <tr><td>Ich sehe einen alt<strong>en</strong> Mann.</td><td>I see an old man.</td><td>After indefinite — Acc. Masc.</td></tr>
                    <tr><td><strong>Kaltes</strong> Wasser ist erfrischend.</td><td>Cold water is refreshing.</td><td>No article — Nom. Neuter → -es</td></tr>
                    <tr><td>Sie trägt ein schön<strong>es</strong> Kleid.</td><td>She is wearing a beautiful dress.</td><td>After indefinite — Nom. Neuter</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b1-06',
        title: 'Dative & Genitive Prepositions',
        desc: 'Prepositions that always take Dative or Genitive — full reference.',
        content: `
            <h3>Dative & Genitive Prepositions</h3>
            <h4>Always Dative: aus, bei, mit, nach, seit, von, zu, außer, gegenüber</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Er kommt <strong>aus der</strong> Schweiz.</td><td>He comes from Switzerland.</td></tr>
                    <tr><td>Ich bin <strong>bei meinem</strong> Freund.</td><td>I'm at my friend's place.</td></tr>
                    <tr><td>Ich lerne Deutsch <strong>seit einem</strong> Jahr.</td><td>I've been learning German for a year.</td></tr>
                    <tr><td>Ich fahre <strong>mit dem</strong> Fahrrad zur Arbeit.</td><td>I cycle to work. (lit: with the bike)</td></tr>
                </tbody>
            </table></div>
            <h4>Always Genitive: wegen, trotz, während, statt, aufgrund</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Er blieb zuhause <strong>wegen des</strong> Regens.</td><td>He stayed home because of the rain.</td></tr>
                    <tr><td><strong>Trotz des</strong> schlechten Wetters gingen wir spazieren.</td><td>Despite the bad weather, we went for a walk.</td></tr>
                    <tr><td><strong>Während des</strong> Unterrichts schläft er nie.</td><td>He never sleeps during class.</td></tr>
                    <tr><td><strong>Statt des</strong> Kuchens nahm sie Eis.</td><td>Instead of cake, she took ice cream.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b1-07',
        title: 'Subordinate Conjunctions: obwohl, wenn, während, bevor',
        desc: 'Conjunctions for contrast, condition, time — verb goes to the end!',
        content: `
            <h3>Advanced Subordinating Conjunctions</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>Conjunction</th><th>Meaning</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>obwohl</strong></td><td>although</td><td>Er lächelt, obwohl er traurig <strong>ist</strong>.</td><td>He smiles although he is sad.</td></tr>
                    <tr><td><strong>wenn</strong></td><td>if / when</td><td>Wenn es <strong>regnet</strong>, bleibe ich zuhause.</td><td>If it rains, I'll stay home.</td></tr>
                    <tr><td><strong>während</strong></td><td>while</td><td>Ich höre Musik, während ich <strong>lerne</strong>.</td><td>I listen to music while I study.</td></tr>
                    <tr><td><strong>bevor</strong></td><td>before</td><td>Wasch die Hände, bevor du <strong>isst</strong>.</td><td>Wash your hands before you eat.</td></tr>
                    <tr><td><strong>als</strong></td><td>when (past, once)</td><td>Als ich 10 <strong>war</strong>, liebte ich Fußball.</td><td>When I was 10, I loved football.</td></tr>
                    <tr><td><strong>nachdem</strong></td><td>after</td><td>Nachdem er <strong>gegessen hatte</strong>, schlief er.</td><td>After he had eaten, he slept.</td></tr>
                </tbody>
            </table></div>
            <h4>If the subordinate clause starts the sentence:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>Obwohl ich müde bin, arbeite ich weiter.</strong></td><td>Although I'm tired, I keep working.</td></tr>
                    <tr><td><strong>Wenn du willst, können wir gehen.</strong></td><td>If you want, we can go.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b1-08',
        title: 'Infinitive Constructions (zu + Infinitiv)',
        desc: 'Linking a second verb with "zu" — the German "to do something".',
        content: `
            <h3>zu + Infinitive Constructions</h3>
            <p>Used after certain verbs and adjectives. The main verb gets an infinitive with <strong>zu</strong> at the end.</p>
            <h4>Common trigger verbs (versuchen, vergessen, anfangen, hoffen, vorhaben, planen...):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich versuche, jeden Tag Deutsch <strong>zu üben</strong>.</td><td>I try to practice German every day.</td></tr>
                    <tr><td>Er vergisst immer, die Tür <strong>zuzumachen</strong>.</td><td>He always forgets to close the door. (separable: zu goes in the middle!)</td></tr>
                    <tr><td>Sie fängt an, <strong>zu weinen</strong>.</td><td>She starts to cry.</td></tr>
                    <tr><td>Wir hoffen, bald nach Deutschland <strong>zu reisen</strong>.</td><td>We hope to travel to Germany soon.</td></tr>
                </tbody>
            </table></div>
            <h4>After adjectives (es ist + adj. + zu):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Es ist schön, Deutsch <strong>zu lernen</strong>.</td><td>It is nice to learn German.</td></tr>
                    <tr><td>Es ist wichtig, viel <strong>zu lesen</strong>.</td><td>It is important to read a lot.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'b1-09',
        title: 'Word Formation: Prefix Verbs & Suffixes',
        desc: 'Decode and build German vocabulary through prefixes and suffixes.',
        content: `
            <h3>German Word Formation</h3>
            <h4>Inseparable Prefixes — change verb meaning significantly:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Prefix</th><th>Effect</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>ver-</strong></td><td>often = wrongly or reversal</td><td>kaufen → verkaufen</td><td>to buy → to sell</td></tr>
                    <tr><td><strong>be-</strong></td><td>makes verb transitive</td><td>antworten → beantworten</td><td>to answer (sth.) [takes object now]</td></tr>
                    <tr><td><strong>er-</strong></td><td>result / completion</td><td>leben → erleben</td><td>to live → to experience</td></tr>
                    <tr><td><strong>zer-</strong></td><td>into pieces</td><td>schneiden → zerschneiden</td><td>to cut up / to shred</td></tr>
                </tbody>
            </table></div>
            <h4>Key suffixes to recognize nouns:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Suffix</th><th>Gender</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>-ung</td><td>die</td><td>Wohnung, Bedeutung, Hoffnung</td><td>apartment, meaning, hope</td></tr>
                    <tr><td>-heit / -keit</td><td>die</td><td>Freiheit, Unabhängigkeit</td><td>freedom, independence</td></tr>
                    <tr><td>-er</td><td>der</td><td>Lehrer, Fahrer, Bäcker</td><td>teacher, driver, baker</td></tr>
                    <tr><td>-chen</td><td>das</td><td>Mädchen, Häuschen, Hündchen</td><td>girl, little house, little dog</td></tr>
                </tbody>
            </table></div>
        `
    }
];
