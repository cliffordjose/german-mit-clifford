// grammar_a2.js - A2 Elementary Grammar Concepts (Enriched with examples)

const grammarA2 = [
    {
        id: 'a2-01',
        title: 'Perfect Tense: Perfekt',
        desc: 'The most common way to talk about the past in spoken German.',
        content: `
            <h3>The Perfekt Tense</h3>
            <p>In spoken German, Perfekt is the go-to past tense. Structure: <strong>haben/sein (pos.2) + ... + Partizip II (end)</strong></p>
            <h4>With haben (for most verbs):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>habe</strong> Pizza <strong>gegessen</strong>.</td><td>I ate pizza.</td></tr>
                    <tr><td>Sie <strong>hat</strong> einen Brief <strong>geschrieben</strong>.</td><td>She wrote a letter.</td></tr>
                    <tr><td>Wir <strong>haben</strong> Fußball <strong>gespielt</strong>.</td><td>We played football.</td></tr>
                    <tr><td>Er <strong>hat</strong> viel <strong>gearbeitet</strong>.</td><td>He worked a lot.</td></tr>
                </tbody>
            </table></div>
            <h4>With sein (movement/change of state):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Er <strong>ist</strong> nach Hause <strong>gegangen</strong>.</td><td>He went home.</td></tr>
                    <tr><td>Ich <strong>bin</strong> früh <strong>aufgewacht</strong>.</td><td>I woke up early.</td></tr>
                    <tr><td>Sie <strong>ist</strong> nach Berlin <strong>geflogen</strong>.</td><td>She flew to Berlin.</td></tr>
                    <tr><td>Wann <strong>bist</strong> du <strong>angekommen</strong>?</td><td>When did you arrive?</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-02',
        title: 'Past Participle Formation (Partizip II)',
        desc: 'How to form the "done / eaten / gone" form of German verbs.',
        content: `
            <h3>Forming the Partizip II</h3>
            <h4>Regular (Weak) Verbs: ge- + stem + -(e)t</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Infinitive</th><th>Partizip II</th><th>Example Sentence</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>machen (to do)</td><td>ge<strong>macht</strong></td><td>Ich habe meine Hausaufgaben gemacht.</td><td>I did my homework.</td></tr>
                    <tr><td>spielen (to play)</td><td>ge<strong>spielt</strong></td><td>Die Kinder haben gespielt.</td><td>The children played.</td></tr>
                    <tr><td>kaufen (to buy)</td><td>ge<strong>kauft</strong></td><td>Er hat ein neues Handy gekauft.</td><td>He bought a new phone.</td></tr>
                    <tr><td>arbeiten (to work)</td><td>ge<strong>arbeitet</strong></td><td>Sie hat heute viel gearbeitet.</td><td>She worked a lot today.</td></tr>
                </tbody>
            </table></div>
            <h4>Irregular (Strong) Verbs: ge- + changed stem + -en</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Infinitive</th><th>Partizip II</th><th>Example Sentence</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>essen (to eat)</td><td>ge<strong>gessen</strong></td><td>Wir haben zu viel gegessen.</td><td>We ate too much.</td></tr>
                    <tr><td>trinken (to drink)</td><td>ge<strong>trunken</strong></td><td>Er hat zwei Bier getrunken.</td><td>He drank two beers.</td></tr>
                    <tr><td>schreiben (to write)</td><td>ge<strong>schrieben</strong></td><td>Sie hat einen Roman geschrieben.</td><td>She wrote a novel.</td></tr>
                    <tr><td>sehen (to see)</td><td>ge<strong>sehen</strong></td><td>Hast du diesen Film gesehen?</td><td>Have you seen this film?</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 No "ge-" for:</h4><p>Inseparable prefix verbs (be-, ver-, er-...): <strong>besuchen → besucht</strong> (visited). Verbs ending in -ieren: <strong>telefonieren → telefoniert</strong> (phoned).</p></div>
        `
    },
    {
        id: 'a2-03',
        title: 'sein vs haben in Perfekt',
        desc: 'The critical rule for choosing the right helper verb.',
        content: `
            <h3>Choosing sein vs haben</h3>
            <h4>Use SEIN when the verb shows movement to a new location OR a change of state:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Why sein?</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>bin</strong> zur Schule gegangen.</td><td>I went to school.</td><td>Movement to a new place</td></tr>
                    <tr><td>Er <strong>ist</strong> eingeschlafen.</td><td>He fell asleep.</td><td>Change of state</td></tr>
                    <tr><td>Sie <strong>ist</strong> Ärztin geworden.</td><td>She became a doctor.</td><td>Change of state (werden)</td></tr>
                    <tr><td>Wir <strong>sind</strong> zuhause geblieben.</td><td>We stayed at home.</td><td>Special: bleiben uses sein!</td></tr>
                </tbody>
            </table></div>
            <h4>Use HABEN for everything else (incl. all transitive verbs):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Why haben?</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>habe</strong> das Buch gelesen.</td><td>I read the book.</td><td>Transitive — has a direct object</td></tr>
                    <tr><td>Sie <strong>hat</strong> viel gearbeitet.</td><td>She worked a lot.</td><td>No movement/state change</td></tr>
                    <tr><td>Er <strong>hat</strong> mich angerufen.</td><td>He called me.</td><td>Transitive verb</td></tr>
                    <tr><td>Wir <strong>haben</strong> lange gewartet.</td><td>We waited for a long time.</td><td>No movement involved</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-04',
        title: 'Separable Verbs in Perfekt',
        desc: '"ge-" goes in the MIDDLE between prefix and stem.',
        content: `
            <h3>Separable Verbs in Perfekt</h3>
            <p>The "ge-" in the Partizip II is inserted between the prefix and the verb stem: <strong>prefix + ge + stem + t/en</strong></p>
            <div class="grammar-table"><table>
                <thead><tr><th>Infinitive</th><th>Partizip II</th><th>Sentence</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>aufmachen (open)</td><td>auf<strong>ge</strong>macht</td><td>Er hat das Fenster aufgemacht.</td><td>He opened the window.</td></tr>
                    <tr><td>anrufen (call)</td><td>an<strong>ge</strong>rufen</td><td>Hat sie dich angerufen?</td><td>Did she call you?</td></tr>
                    <tr><td>einschlafen (fall asleep)</td><td>ein<strong>ge</strong>schlafen</td><td>Das Baby ist eingeschlafen.</td><td>The baby fell asleep.</td></tr>
                    <tr><td>zurückkommen (come back)</td><td>zurück<strong>ge</strong>kommen</td><td>Wann bist du zurückgekommen?</td><td>When did you come back?</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-05',
        title: 'Dative Case & Dative Pronouns',
        desc: 'The indirect object — the person who receives something.',
        content: `
            <h3>The Dative Case</h3>
            <p>Dative marks the indirect object. In Dative, ALL genders change — not just masculine!</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Gender</th><th>Nominative</th><th>Accusative</th><th>Dative</th></tr></thead>
                <tbody>
                    <tr><td>Masculine</td><td>der</td><td>den</td><td><strong>dem</strong></td></tr>
                    <tr><td>Feminine</td><td>die</td><td>die</td><td><strong>der</strong></td></tr>
                    <tr><td>Neuter</td><td>das</td><td>das</td><td><strong>dem</strong></td></tr>
                    <tr><td>Plural</td><td>die</td><td>die</td><td><strong>den</strong> (+ -n to noun!)</td></tr>
                </tbody>
            </table></div>
            <h4>Dative pronouns with examples:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Pronoun</th><th>Dative</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td>mir</td><td>Kannst du <strong>mir</strong> helfen?</td><td>Can you help me?</td></tr>
                    <tr><td>du</td><td>dir</td><td>Ich gebe <strong>dir</strong> das Buch.</td><td>I give you the book.</td></tr>
                    <tr><td>er</td><td>ihm</td><td>Ich schreibe <strong>ihm</strong> eine E-Mail.</td><td>I write him an email.</td></tr>
                    <tr><td>sie (she)</td><td>ihr</td><td>Das gehört <strong>ihr</strong>.</td><td>That belongs to her.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-06',
        title: 'Two-Way Prepositions (Wechselpräpositionen)',
        desc: 'Nine prepositions: Dative for location (Wo?), Accusative for movement (Wohin?).',
        content: `
            <h3>Two-Way Prepositions</h3>
            <p>The 9 two-way prepositions: <strong>an, auf, hinter, in, neben, über, unter, vor, zwischen</strong></p>
            <p><strong>Wo? (Where? = static location) → Dative</strong> | <strong>Wohin? (Where to? = movement) → Accusative</strong></p>
            <h4>Examples — Dative (location) vs Accusative (movement):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Dative — Location (Wo?)</th><th>English</th><th>Accusative — Movement (Wohin?)</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Das Buch liegt auf <strong>dem</strong> Tisch.</td><td>The book is on the table.</td><td>Leg das Buch auf <strong>den</strong> Tisch.</td><td>Put the book on the table.</td></tr>
                    <tr><td>Sie ist in <strong>der</strong> Küche.</td><td>She is in the kitchen.</td><td>Sie geht in <strong>die</strong> Küche.</td><td>She goes into the kitchen.</td></tr>
                    <tr><td>Der Hund schläft unter <strong>dem</strong> Bett.</td><td>The dog sleeps under the bed.</td><td>Der Hund läuft unter <strong>das</strong> Bett.</td><td>The dog runs under the bed.</td></tr>
                    <tr><td>Das Bild hängt an <strong>der</strong> Wand.</td><td>The picture hangs on the wall.</td><td>Häng das Bild an <strong>die</strong> Wand.</td><td>Hang the picture on the wall.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-07',
        title: 'Reflexive Verbs & Reflexive Pronouns',
        desc: 'When the action reflects back onto the subject.',
        content: `
            <h3>Reflexive Verbs</h3>
            <p>A reflexive verb means the subject acts on itself. The reflexive pronoun matches the subject.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Pronoun</th><th>Reflexive (Acc.)</th><th>Reflexive (Dat.)</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td>mich</td><td>mir</td></tr>
                    <tr><td>du</td><td>dich</td><td>dir</td></tr>
                    <tr><td>er/sie/es</td><td><strong>sich</strong></td><td><strong>sich</strong></td></tr>
                    <tr><td>wir</td><td>uns</td><td>uns</td></tr>
                    <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
                    <tr><td>sie/Sie</td><td><strong>sich</strong></td><td><strong>sich</strong></td></tr>
                </tbody>
            </table></div>
            <h4>Common reflexive verbs with examples:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich wasche <strong>mich</strong> jeden Morgen.</td><td>I wash myself every morning. (sich waschen)</td></tr>
                    <tr><td>Er freut <strong>sich</strong> über das Geschenk.</td><td>He is happy about the gift. (sich freuen)</td></tr>
                    <tr><td>Setz <strong>dich</strong> bitte hin!</td><td>Please sit down! (sich setzen)</td></tr>
                    <tr><td>Wir treffen <strong>uns</strong> um 8 Uhr.</td><td>We meet (each other) at 8 o'clock. (sich treffen)</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-08',
        title: 'Adjective Usage & Predicate Adjectives',
        desc: 'Using adjectives — without endings after sein, WITH endings before nouns.',
        content: `
            <h3>Adjectives in German</h3>
            <h4>1. Predicate Adjectives (after sein/werden) — NO endings:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Der Kaffee ist <strong>heiß</strong>.</td><td>The coffee is hot.</td></tr>
                    <tr><td>Das Essen war <strong>lecker</strong>.</td><td>The food was tasty.</td></tr>
                    <tr><td>Die Prüfung ist <strong>schwer</strong>.</td><td>The exam is difficult.</td></tr>
                    <tr><td>Er wird <strong>müde</strong>.</td><td>He is getting tired.</td></tr>
                </tbody>
            </table></div>
            <h4>2. Attributive Adjectives (before nouns) — endings required:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Ending?</th></tr></thead>
                <tbody>
                    <tr><td>Der <strong>heiße</strong> Kaffee schmeckt gut.</td><td>The hot coffee tastes good.</td><td>-e (masc. nom. after der)</td></tr>
                    <tr><td>Ich trinke <strong>heißen</strong> Kaffee.</td><td>I drink hot coffee.</td><td>-en (masc. acc., no article)</td></tr>
                    <tr><td>Das ist ein <strong>leckeres</strong> Essen.</td><td>That is a tasty meal.</td><td>-es (neuter, after ein)</td></tr>
                    <tr><td>Sie hat eine <strong>schwere</strong> Tasche.</td><td>She has a heavy bag.</td><td>-e (fem. acc. after eine)</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-09',
        title: 'Coordinating Conjunctions (und, oder, aber, denn)',
        desc: 'Connecting two main clauses — no word order change.',
        content: `
            <h3>Coordinating Conjunctions</h3>
            <p>These join two main clauses. The verb stays in position 2 in BOTH clauses — no word order change!</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Conjunction</th><th>Meaning</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>und</strong></td><td>and</td><td>Ich lerne Deutsch <strong>und</strong> er lernt Spanisch.</td><td>I learn German and he learns Spanish.</td></tr>
                    <tr><td><strong>oder</strong></td><td>or</td><td>Möchtest du Tee <strong>oder</strong> Kaffee?</td><td>Would you like tea or coffee?</td></tr>
                    <tr><td><strong>aber</strong></td><td>but</td><td>Ich bin müde, <strong>aber</strong> ich kann nicht schlafen.</td><td>I am tired, but I cannot sleep.</td></tr>
                    <tr><td><strong>denn</strong></td><td>because</td><td>Er bleibt zuhause, <strong>denn</strong> er ist krank.</td><td>He stays at home, because he is sick.</td></tr>
                    <tr><td><strong>sondern</strong></td><td>but rather</td><td>Ich trinke keinen Kaffee, <strong>sondern</strong> Tee.</td><td>I don't drink coffee, but rather tea.</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 denn vs weil:</h4><p><strong>denn</strong> → verb stays in position 2 (coordinating). <strong>weil</strong> → verb goes to the END (subordinating). Compare: "Ich bin müde, <strong>denn</strong> ich habe wenig geschlafen." vs "Ich bin müde, <strong>weil</strong> ich wenig geschlafen <strong>habe</strong>."</p></div>
        `
    },
    {
        id: 'a2-10',
        title: 'Subordinate Clauses: weil & dass',
        desc: '"Because" and "that" clauses — the verb jumps to the END!',
        content: `
            <h3>Subordinate Clauses</h3>
            <p>After <strong>weil</strong> (because) and <strong>dass</strong> (that), the conjugated verb moves to the very end of the subordinate clause.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Main Clause</th><th>Subordinate Clause</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich schlafe früh,</td><td>weil ich morgen früh aufstehen <strong>muss</strong>.</td><td>I'm going to bed early because I have to get up early tomorrow.</td></tr>
                    <tr><td>Ich weiß,</td><td>dass er morgen kommen <strong>will</strong>.</td><td>I know that he wants to come tomorrow.</td></tr>
                    <tr><td>Er sagt,</td><td>dass er kein Geld <strong>hat</strong>.</td><td>He says that he has no money.</td></tr>
                    <tr><td>Sie bleibt zuhause,</td><td>weil sie krank <strong>ist</strong>.</td><td>She stays home because she is sick.</td></tr>
                </tbody>
            </table></div>
            <h4>If the subordinate clause comes FIRST — main verb immediately after comma:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Weil ich müde <strong>bin</strong>, <strong>gehe</strong> ich schlafen.</td><td>Because I am tired, I'm going to sleep.</td></tr>
                    <tr><td>Dass er lügt, <strong>weiß</strong> ich.</td><td>That he lies, I know (= I know that he lies).</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-11',
        title: 'Comparative & Superlative Adjectives',
        desc: 'Bigger, fastest — how to compare things in German.',
        content: `
            <h3>Comparing Adjectives</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>Positive</th><th>Comparative (+er)</th><th>Superlative (am...sten)</th></tr></thead>
                <tbody>
                    <tr><td>schnell (fast)</td><td>schneller</td><td>am schnellsten</td></tr>
                    <tr><td>groß (big/tall)</td><td>größer (umlaut!)</td><td>am größten</td></tr>
                    <tr><td>jung (young)</td><td>jünger</td><td>am jüngsten</td></tr>
                    <tr><td>gut (good)</td><td><strong>besser</strong> (irregular)</td><td>am <strong>besten</strong></td></tr>
                    <tr><td>viel (much)</td><td><strong>mehr</strong> (irregular)</td><td>am <strong>meisten</strong></td></tr>
                    <tr><td>gern (gladly)</td><td><strong>lieber</strong> (irregular)</td><td>am <strong>liebsten</strong></td></tr>
                </tbody>
            </table></div>
            <h4>Examples with comparatives and superlatives:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Berlin ist <strong>größer als</strong> München.</td><td>Berlin is bigger than Munich.</td></tr>
                    <tr><td>Er ist <strong>jünger als</strong> seine Schwester.</td><td>He is younger than his sister.</td></tr>
                    <tr><td>Das ist das <strong>beste</strong> Restaurant in der Stadt.</td><td>That is the best restaurant in the city.</td></tr>
                    <tr><td>Ich esse am <strong>liebsten</strong> Pizza.</td><td>I like eating pizza the most.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a2-12',
        title: 'Future Tense (Futur I)',
        desc: 'Expressing what will happen using werden + infinitive.',
        content: `
            <h3>Futur I — The Future Tense</h3>
            <p>Structure: <strong>werden (pos.2) + ... + infinitive (end)</strong></p>
            <div class="grammar-table"><table>
                <thead><tr><th>Pronoun</th><th>werden</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td>werde</td></tr>
                    <tr><td>du</td><td>wirst</td></tr>
                    <tr><td>er/sie/es</td><td>wird</td></tr>
                    <tr><td>wir</td><td>werden</td></tr>
                    <tr><td>ihr</td><td>werdet</td></tr>
                    <tr><td>sie/Sie</td><td>werden</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — Futur I in sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>werde</strong> morgen viel <strong>lernen</strong>.</td><td>I will study a lot tomorrow.</td></tr>
                    <tr><td>Es <strong>wird</strong> heute Nacht <strong>regnen</strong>.</td><td>It will rain tonight.</td></tr>
                    <tr><td>Wir <strong>werden</strong> nächstes Jahr nach Japan <strong>reisen</strong>.</td><td>We will travel to Japan next year.</td></tr>
                    <tr><td>Du <strong>wirst</strong> das <strong>bereuen</strong>!</td><td>You will regret this!</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Everyday Tip:</h4><p>Germans usually use the <strong>present tense</strong> for future events when context is clear: "Ich lerne morgen." (I'll study tomorrow.) Futur I is used for predictions, promises, and when extra emphasis is needed.</p></div>
        `
    }
];
