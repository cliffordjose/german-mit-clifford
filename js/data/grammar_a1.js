// grammar_a1.js - A1 Beginner Grammar Concepts (Enriched with examples)

const grammarA1 = [
    {
        id: 'a1-01',
        title: 'The German Alphabet',
        desc: 'Learn all 26 letters plus special characters ä, ö, ü and ß.',
        content: `
            <h3>The German Alphabet</h3>
            <p>The German alphabet has 26 standard letters — identical to the English alphabet — plus 4 special characters unique to German.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Letter</th><th>Name</th><th>Sounds Like</th></tr></thead>
                <tbody>
                    <tr><td>A a</td><td>ah</td><td>"a" in "father"</td></tr>
                    <tr><td>E e</td><td>eh</td><td>"e" in "bed"</td></tr>
                    <tr><td>I i</td><td>ih</td><td>"ee" in "see"</td></tr>
                    <tr><td>J j</td><td>yot</td><td>"y" in "yes"</td></tr>
                    <tr><td>V v</td><td>fau</td><td>"f" in "fish"</td></tr>
                    <tr><td>W w</td><td>veh</td><td>"v" in "vine"</td></tr>
                    <tr><td>Z z</td><td>tset</td><td>"ts" in "bits"</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — How letters sound in real words:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German Word</th><th>Pronunciation Hint</th><th>English Meaning</th></tr></thead>
                <tbody>
                    <tr><td><strong>Ja</strong></td><td>"yah" (J = Y sound!)</td><td>Yes</td></tr>
                    <tr><td><strong>Vater</strong></td><td>"Fah-ter" (V = F sound!)</td><td>Father</td></tr>
                    <tr><td><strong>Wasser</strong></td><td>"Vas-ser" (W = V sound!)</td><td>Water</td></tr>
                    <tr><td><strong>Zeit</strong></td><td>"Tseit" (Z = TS sound!)</td><td>Time</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Key Insight:</h4><p>German spelling is phonetically consistent — words are almost always pronounced exactly as written. Once you know the rules, you can pronounce any German word correctly!</p></div>
        `
    },
    {
        id: 'a1-02',
        title: 'Umlauts (ä, ö, ü)',
        desc: 'The three modified vowels unique to German.',
        content: `
            <h3>Umlauts: ä, ö, ü</h3>
            <p>Umlauts are modified vowels with two dots (¨) that change the sound of the vowel. They also change the meaning of words!</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Umlaut</th><th>Pronunciation</th><th>Example Word</th><th>Meaning</th></tr></thead>
                <tbody>
                    <tr><td><strong>ä</strong></td><td>Like "e" in "bed"</td><td>Mädchen</td><td>Girl</td></tr>
                    <tr><td><strong>ö</strong></td><td>Round lips for "o", say "e"</td><td>schön</td><td>Beautiful</td></tr>
                    <tr><td><strong>ü</strong></td><td>Round lips for "oo", say "ee"</td><td>über</td><td>Over / about</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — Umlauts can completely change a word's meaning:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Without Umlaut</th><th>Meaning</th><th>With Umlaut</th><th>Meaning</th></tr></thead>
                <tbody>
                    <tr><td>Mutter</td><td>Mother</td><td>Mütter</td><td>Mothers (plural!)</td></tr>
                    <tr><td>Bruder</td><td>Brother</td><td>Brüder</td><td>Brothers (plural!)</td></tr>
                    <tr><td>alt</td><td>old</td><td>älter</td><td>older (comparative!)</td></tr>
                    <tr><td>Apfel</td><td>Apple</td><td>Äpfel</td><td>Apples (plural!)</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Typing Tip:</h4><p>When you can't type umlauts: <strong>ä = ae, ö = oe, ü = ue</strong>. Example: write "schoen" instead of "schön".</p></div>
        `
    },
    {
        id: 'a1-03',
        title: 'The ß (Eszett / Sharp S)',
        desc: 'When to use ß instead of ss and how it sounds.',
        content: `
            <h3>The ß (Eszett / "scharfes S")</h3>
            <p>The ß sounds exactly like a regular "ss". It only appears after <strong>long vowels or diphthongs</strong>.</p>
            <h4>Rule: Long vowel → ß | Short vowel → ss</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Word with ß</th><th>Meaning</th><th>Why ß? (Long vowel before it)</th></tr></thead>
                <tbody>
                    <tr><td><strong>Straße</strong></td><td>Street</td><td>"a" in Straße is long</td></tr>
                    <tr><td><strong>groß</strong></td><td>Big / tall</td><td>"o" in groß is long</td></tr>
                    <tr><td><strong>heiß</strong></td><td>Hot</td><td>"ei" is a diphthong</td></tr>
                    <tr><td><strong>Spaß</strong></td><td>Fun / joke</td><td>"a" in Spaß is long</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-table"><table>
                <thead><tr><th>Word with ss</th><th>Meaning</th><th>Why ss? (Short vowel before it)</th></tr></thead>
                <tbody>
                    <tr><td><strong>Wasser</strong></td><td>Water</td><td>"a" in Wasser is short</td></tr>
                    <tr><td><strong>essen</strong></td><td>To eat</td><td>"e" in essen is short</td></tr>
                    <tr><td><strong>müssen</strong></td><td>Must / to have to</td><td>"ü" in müssen is short</td></tr>
                    <tr><td><strong>Fluss</strong></td><td>River</td><td>"u" in Fluss is short</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-04',
        title: 'Basic Pronunciation Rules',
        desc: 'Key rules for reading German words aloud correctly.',
        content: `
            <h3>Key German Pronunciation Rules</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>Letters</th><th>Sound</th><th>Example</th><th>Meaning</th></tr></thead>
                <tbody>
                    <tr><td><strong>ei</strong></td><td>Like "eye"</td><td>weit</td><td>far</td></tr>
                    <tr><td><strong>ie</strong></td><td>Like "ee"</td><td>Liebe</td><td>love</td></tr>
                    <tr><td><strong>eu / äu</strong></td><td>Like "oy"</td><td>neu / Häuser</td><td>new / houses</td></tr>
                    <tr><td><strong>sch</strong></td><td>Like "sh"</td><td>Schule</td><td>school</td></tr>
                    <tr><td><strong>sp / st</strong> (word start)</td><td>"shp" / "sht"</td><td>Spiel / Stadt</td><td>game / city</td></tr>
                    <tr><td><strong>ch</strong> (after a/o/u)</td><td>Deep throat (Bach)</td><td>Buch / machen</td><td>book / to do</td></tr>
                    <tr><td><strong>ch</strong> (after i/e)</td><td>Soft hiss</td><td>ich / Milch</td><td>I / milk</td></tr>
                    <tr><td><strong>v</strong></td><td>Like "f"</td><td>Vater / viel</td><td>father / much</td></tr>
                    <tr><td><strong>w</strong></td><td>Like "v"</td><td>Wein / warm</td><td>wine / warm</td></tr>
                    <tr><td><strong>z</strong></td><td>Like "ts"</td><td>Zeit / zehn</td><td>time / ten</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — Tricky words to practice:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>Pronunciation Guide</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>schwimmen</strong></td><td>shvimmen (schw = shv!)</td><td>to swim</td></tr>
                    <tr><td><strong>Tschüss</strong></td><td>Choos (tsch = "ch" in "church")</td><td>Bye!</td></tr>
                    <tr><td><strong>sprechen</strong></td><td>shpreshen (sp = shp!)</td><td>to speak</td></tr>
                    <tr><td><strong>Beispiel</strong></td><td>Byshpeel</td><td>example</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-05',
        title: 'Definite Articles (der, die, das)',
        desc: 'The word "the" in German — and it has three forms!',
        content: `
            <h3>Definite Articles: der, die, das</h3>
            <p>Every German noun has a grammatical gender: masculine, feminine, or neuter. The article "the" changes accordingly.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Gender</th><th>Article</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Masculine</td><td><strong>der</strong></td><td>der Mann / der Hund</td><td>the man / the dog</td></tr>
                    <tr><td>Feminine</td><td><strong>die</strong></td><td>die Frau / die Katze</td><td>the woman / the cat</td></tr>
                    <tr><td>Neuter</td><td><strong>das</strong></td><td>das Kind / das Buch</td><td>the child / the book</td></tr>
                    <tr><td>Plural (all!)</td><td><strong>die</strong></td><td>die Männer / die Bücher</td><td>the men / the books</td></tr>
                </tbody>
            </table></div>
            <h4>More examples to memorize by heart:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>der (masculine)</th><th>die (feminine)</th><th>das (neuter)</th></tr></thead>
                <tbody>
                    <tr><td>der Tisch (table)</td><td>die Schule (school)</td><td>das Haus (house)</td></tr>
                    <tr><td>der Kaffee (coffee)</td><td>die Stadt (city)</td><td>das Auto (car)</td></tr>
                    <tr><td>der Lehrer (teacher)</td><td>die Mutter (mother)</td><td>das Kind (child)</td></tr>
                    <tr><td>der Morgen (morning)</td><td>die Straße (street)</td><td>das Wasser (water)</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Golden Rule:</h4><p>Always memorize new nouns WITH their article! Never "Tisch" alone — always "<strong>der</strong> Tisch". Think of the article as part of the word itself.</p></div>
        `
    },
    {
        id: 'a1-06',
        title: 'Indefinite & Negative Articles (ein, kein)',
        desc: 'How to say "a/an" and "no/not a" in German.',
        content: `
            <h3>Indefinite Articles: ein, eine</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>Gender</th><th>indefinite "a/an"</th><th>Negative "no/not a"</th><th>Example</th></tr></thead>
                <tbody>
                    <tr><td>Masculine</td><td><strong>ein</strong></td><td><strong>kein</strong></td><td>ein Hund / kein Hund (a dog / no dog)</td></tr>
                    <tr><td>Feminine</td><td><strong>eine</strong></td><td><strong>keine</strong></td><td>eine Katze / keine Katze (a cat / no cat)</td></tr>
                    <tr><td>Neuter</td><td><strong>ein</strong></td><td><strong>kein</strong></td><td>ein Auto / kein Auto (a car / no car)</td></tr>
                    <tr><td>Plural</td><td>— (none)</td><td><strong>keine</strong></td><td>keine Kinder (no children)</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — kein in full sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German Sentence</th><th>English Translation</th></tr></thead>
                <tbody>
                    <tr><td>Ich habe <strong>kein</strong> Auto.</td><td>I have no car. / I don't have a car.</td></tr>
                    <tr><td>Er trinkt <strong>keinen</strong> Alkohol.</td><td>He drinks no alcohol. (masc. accusative → keinen)</td></tr>
                    <tr><td>Wir haben <strong>keine</strong> Zeit.</td><td>We have no time.</td></tr>
                    <tr><td>Das ist <strong>kein</strong> Problem.</td><td>That's not a problem. (neuter)</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 kein vs nicht:</h4><p><strong>kein</strong> negates nouns ("Ich habe kein Geld." = I have no money.) <strong>nicht</strong> negates verbs, adjectives, adverbs ("Ich gehe nicht." = I'm not going.)</p></div>
        `
    },
    {
        id: 'a1-07',
        title: 'Noun Gender & Plural Forms',
        desc: 'How to recognize gender and form plurals.',
        content: `
            <h3>Noun Gender Hints & Plural Formation</h3>
            <h4>Gender Hints (not guaranteed, but helpful):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Pattern</th><th>Gender</th><th>Examples</th></tr></thead>
                <tbody>
                    <tr><td>Ends in -ung, -heit, -keit, -schaft, -tion</td><td><strong>die</strong> (fem.)</td><td>die Wohnung, die Freiheit, die Nation</td></tr>
                    <tr><td>Ends in -chen, -lein, -ment, -um</td><td><strong>das</strong> (neuter)</td><td>das Mädchen, das Instrument, das Museum</td></tr>
                    <tr><td>Days, months, seasons, male people</td><td><strong>der</strong> (masc.)</td><td>der Montag, der Januar, der Sommer</td></tr>
                </tbody>
            </table></div>
            <h4>Common Plural Patterns with Examples:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Pattern</th><th>Singular</th><th>Plural</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Add -e</td><td>der Tag</td><td>die Tag<strong>e</strong></td><td>day → days</td></tr>
                    <tr><td>Add -en / -n</td><td>die Frau</td><td>die Frau<strong>en</strong></td><td>woman → women</td></tr>
                    <tr><td>Add -er (often + umlaut)</td><td>das Kind</td><td>die Kind<strong>er</strong></td><td>child → children</td></tr>
                    <tr><td>Add -s (loanwords)</td><td>das Auto</td><td>die Auto<strong>s</strong></td><td>car → cars</td></tr>
                    <tr><td>Umlaut, no -ending</td><td>der Vater</td><td>die V<strong>ä</strong>ter</td><td>father → fathers</td></tr>
                    <tr><td>No change (-er nouns)</td><td>der Lehrer</td><td>die Lehrer</td><td>teacher → teachers</td></tr>
                </tbody>
            </table></div>
            <div class="grammar-notes"><h4>💡 Capitalization Rule:</h4><p>ALL German nouns are capitalized: "Ich kaufe das <strong>B</strong>uch in der <strong>S</strong>tadt." (I buy the book in the city.)</p></div>
        `
    },
    {
        id: 'a1-08',
        title: 'Personal Pronouns',
        desc: 'ich, du, er, sie, es, wir, ihr, Sie — and when to use each.',
        content: `
            <h3>Personal Pronouns</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Context / Notes</th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong></td><td>I</td><td>Always lowercase (unlike English "I")</td></tr>
                    <tr><td><strong>du</strong></td><td>you (singular informal)</td><td>For friends, family, children, peers</td></tr>
                    <tr><td><strong>er / sie / es</strong></td><td>he / she / it</td><td>"es" also for neuter nouns</td></tr>
                    <tr><td><strong>wir</strong></td><td>we</td><td></td></tr>
                    <tr><td><strong>ihr</strong></td><td>you all (plural informal)</td><td>Talking to a group of friends</td></tr>
                    <tr><td><strong>Sie</strong></td><td>You (formal)</td><td>Always CAPITALIZED. For strangers, bosses</td></tr>
                    <tr><td><strong>sie</strong></td><td>they</td><td>lowercase "sie" = they</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — Pronouns in action:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German Sentence</th><th>English Translation</th></tr></thead>
                <tbody>
                    <tr><td><strong>Ich</strong> bin Student.</td><td>I am a student.</td></tr>
                    <tr><td><strong>Du</strong> bist sehr nett.</td><td>You are very nice.</td></tr>
                    <tr><td><strong>Er</strong> heißt Marco. <strong>Sie</strong> heißt Anna.</td><td>His name is Marco. Her name is Anna.</td></tr>
                    <tr><td>Sprechen <strong>Sie</strong> Deutsch?</td><td>Do you speak German? (formal — to a stranger)</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-09',
        title: 'Present Tense: Regular Verbs (Präsens)',
        desc: 'How to conjugate regular "-en" verbs in the present tense.',
        content: `
            <h3>Present Tense — Regular Verbs</h3>
            <p>Most German verbs end in <strong>-en</strong>. To conjugate: remove -en to get the stem, then add the personal ending.</p>
            <p>Example: <strong>lernen</strong> (to learn) → stem: <strong>lern-</strong></p>
            <div class="grammar-table"><table>
                <thead><tr><th>Pronoun</th><th>Ending</th><th>lernen</th><th>spielen</th><th>wohnen</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td>-e</td><td>lerne</td><td>spiele</td><td>wohne</td></tr>
                    <tr><td>du</td><td>-st</td><td>lernst</td><td>spielst</td><td>wohnst</td></tr>
                    <tr><td>er/sie/es</td><td>-t</td><td>lernt</td><td>spielt</td><td>wohnt</td></tr>
                    <tr><td>wir</td><td>-en</td><td>lernen</td><td>spielen</td><td>wohnen</td></tr>
                    <tr><td>ihr</td><td>-t</td><td>lernt</td><td>spielt</td><td>wohnt</td></tr>
                    <tr><td>sie/Sie</td><td>-en</td><td>lernen</td><td>spielen</td><td>wohnen</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — Full sentences in the present tense:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German Sentence</th><th>English Translation</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>lerne</strong> Deutsch.</td><td>I am learning German.</td></tr>
                    <tr><td>Er <strong>wohnt</strong> in Berlin.</td><td>He lives in Berlin.</td></tr>
                    <tr><td>Wir <strong>spielen</strong> Fußball.</td><td>We are playing football.</td></tr>
                    <tr><td>Kaufst du ein Buch?</td><td>Are you buying a book?</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-10',
        title: 'Present Tense: Irregular Verbs (Vowel Changes)',
        desc: 'Strong verbs with vowel changes in the du and er/sie/es forms.',
        content: `
            <h3>Irregular Verbs — Vowel Changes</h3>
            <p>Many common German verbs have a <strong>vowel change</strong> in the 2nd (du) and 3rd person singular (er/sie/es). The other forms are regular.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Verb</th><th>Change</th><th>du form</th><th>er/sie/es form</th></tr></thead>
                <tbody>
                    <tr><td>fahren (to drive)</td><td>a → ä</td><td>du f<strong>ä</strong>hrst</td><td>er f<strong>ä</strong>hrt</td></tr>
                    <tr><td>schlafen (to sleep)</td><td>a → ä</td><td>du schl<strong>ä</strong>fst</td><td>er schl<strong>ä</strong>ft</td></tr>
                    <tr><td>lesen (to read)</td><td>e → ie</td><td>du l<strong>ie</strong>st</td><td>er l<strong>ie</strong>st</td></tr>
                    <tr><td>sprechen (to speak)</td><td>e → i</td><td>du spr<strong>i</strong>chst</td><td>er spr<strong>i</strong>cht</td></tr>
                    <tr><td>nehmen (to take)</td><td>e → i (special)</td><td>du n<strong>imm</strong>st</td><td>er n<strong>imm</strong>t</td></tr>
                    <tr><td>essen (to eat)</td><td>e → i</td><td>du <strong>i</strong>sst</td><td>er <strong>i</strong>sst</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — Irregular verbs in full sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Er <strong>fährt</strong> jeden Tag zur Arbeit.</td><td>He drives to work every day.</td></tr>
                    <tr><td>Sie <strong>liest</strong> gern Bücher.</td><td>She likes to read books.</td></tr>
                    <tr><td>Was <strong>isst</strong> du zum Frühstück?</td><td>What do you eat for breakfast?</td></tr>
                    <tr><td>Er <strong>schläft</strong> bis 9 Uhr.</td><td>He sleeps until 9 o'clock.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-11',
        title: 'Separable Verbs (Trennbare Verben)',
        desc: 'Verbs with detachable prefixes — the prefix jumps to the end!',
        content: `
            <h3>Separable Verbs</h3>
            <p>In the present tense, the prefix splits from the verb and moves to the very end of the sentence. The conjugated verb stays in position 2.</p>
            <h4>Structure: [Conjugated stem (pos.2)] ... [prefix (END)]</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Infinitive</th><th>Meaning</th><th>Sentence</th><th>Translation</th></tr></thead>
                <tbody>
                    <tr><td><strong>auf</strong>stehen</td><td>to get up</td><td>Ich stehe um 7 Uhr <strong>auf</strong>.</td><td>I get up at 7 o'clock.</td></tr>
                    <tr><td><strong>an</strong>rufen</td><td>to phone</td><td>Er ruft seine Mutter <strong>an</strong>.</td><td>He phones his mother.</td></tr>
                    <tr><td><strong>ein</strong>kaufen</td><td>to go shopping</td><td>Wir kaufen heute <strong>ein</strong>.</td><td>We are going shopping today.</td></tr>
                    <tr><td><strong>mit</strong>kommen</td><td>to come along</td><td>Kommst du <strong>mit</strong>?</td><td>Are you coming along?</td></tr>
                </tbody>
            </table></div>
            <h4>More examples:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Sie <strong>macht</strong> das Fenster <strong>auf</strong>.</td><td>She opens the window. (aufmachen = to open)</td></tr>
                    <tr><td>Wann fängt der Film <strong>an</strong>?</td><td>When does the film start? (anfangen = to start)</td></tr>
                    <tr><td>Er bringt das Buch <strong>zurück</strong>.</td><td>He brings back the book. (zurückbringen)</td></tr>
                    <tr><td>Ich ziehe mich <strong>um</strong>.</td><td>I am changing clothes. (sich umziehen)</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-12',
        title: 'sein (to be) & haben (to have)',
        desc: 'The two most critical verbs — irregular conjugation with examples.',
        content: `
            <h3>sein (to be) & haben (to have)</h3>
            <p>These are the most essential verbs in German. Both are irregular — you must memorize them!</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Pronoun</th><th>sein (to be)</th><th>haben (to have)</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td>bin</td><td>habe</td></tr>
                    <tr><td>du</td><td>bist</td><td>hast</td></tr>
                    <tr><td>er/sie/es</td><td>ist</td><td>hat</td></tr>
                    <tr><td>wir</td><td>sind</td><td>haben</td></tr>
                    <tr><td>ihr</td><td>seid</td><td>habt</td></tr>
                    <tr><td>sie/Sie</td><td>sind</td><td>haben</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — sein in real sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>bin</strong> aus Deutschland.</td><td>I am from Germany.</td></tr>
                    <tr><td>Das Wetter <strong>ist</strong> heute schön.</td><td>The weather is nice today.</td></tr>
                    <tr><td>Wir <strong>sind</strong> Studenten.</td><td>We are students.</td></tr>
                    <tr><td><strong>Seid</strong> ihr müde?</td><td>Are you all tired?</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — haben in real sentences:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>habe</strong> einen Hund.</td><td>I have a dog.</td></tr>
                    <tr><td>Er <strong>hat</strong> Hunger.</td><td>He is hungry. (lit. "He has hunger")</td></tr>
                    <tr><td>Wir <strong>haben</strong> keine Zeit.</td><td>We have no time.</td></tr>
                    <tr><td><strong>Hast</strong> du einen Stift?</td><td>Do you have a pen?</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-13',
        title: 'Modal Verbs (können, müssen, wollen, dürfen, sollen, mögen)',
        desc: 'Expressing ability, necessity, desire, permission, duty and preference.',
        content: `
            <h3>Modal Verbs — The 6 Essentials</h3>
            <p>Modal verbs go in position 2 conjugated, and send the main verb as an infinitive to the end of the sentence.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Modal</th><th>Meaning</th><th>ich</th><th>du</th><th>er/sie/es</th></tr></thead>
                <tbody>
                    <tr><td><strong>können</strong></td><td>can / able to</td><td>kann</td><td>kannst</td><td>kann</td></tr>
                    <tr><td><strong>müssen</strong></td><td>must / have to</td><td>muss</td><td>musst</td><td>muss</td></tr>
                    <tr><td><strong>wollen</strong></td><td>want to</td><td>will</td><td>willst</td><td>will</td></tr>
                    <tr><td><strong>dürfen</strong></td><td>may / allowed to</td><td>darf</td><td>darfst</td><td>darf</td></tr>
                    <tr><td><strong>sollen</strong></td><td>should / supposed to</td><td>soll</td><td>sollst</td><td>soll</td></tr>
                    <tr><td><strong>möchten</strong></td><td>would like to</td><td>möchte</td><td>möchtest</td><td>möchte</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — one per modal:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German Sentence</th><th>English Translation</th></tr></thead>
                <tbody>
                    <tr><td>Ich <strong>kann</strong> gut <strong>schwimmen</strong>.</td><td>I can swim well.</td></tr>
                    <tr><td>Du <strong>musst</strong> jetzt <strong>schlafen</strong>.</td><td>You must sleep now.</td></tr>
                    <tr><td>Er <strong>will</strong> ein Arzt <strong>werden</strong>.</td><td>He wants to become a doctor.</td></tr>
                    <tr><td><strong>Darf</strong> ich das Fenster <strong>aufmachen</strong>?</td><td>May I open the window?</td></tr>
                    <tr><td>Sie <strong>soll</strong> um 8 Uhr hier <strong>sein</strong>.</td><td>She is supposed to be here at 8.</td></tr>
                    <tr><td>Ich <strong>möchte</strong> einen Kaffee <strong>bestellen</strong>.</td><td>I would like to order a coffee.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-14',
        title: 'Basic Word Order & The V2 Rule',
        desc: 'The Subject-Verb-Object rule, and why the verb is always in position 2.',
        content: `
            <h3>German Word Order — The V2 Rule</h3>
            <p>The <strong>Verb-Second (V2) Rule</strong> is the most fundamental rule: the conjugated verb is ALWAYS in position 2 of a main clause, no matter what comes first.</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Position 1</th><th>Position 2 (VERB)</th><th>Rest</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich</td><td>kaufe</td><td>einen Apfel.</td><td>I buy an apple.</td></tr>
                    <tr><td>Heute</td><td>kaufe</td><td>ich einen Apfel.</td><td>Today I buy an apple.</td></tr>
                    <tr><td>In der Stadt</td><td>kaufe</td><td>ich einen Apfel.</td><td>In the city I buy an apple.</td></tr>
                    <tr><td>Morgen früh</td><td>fährt</td><td>er nach Berlin.</td><td>Tomorrow morning he drives to Berlin.</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — Subject and verb flip when time/place moves to position 1:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Ich lerne Montags Deutsch. → <strong>Montags lerne ich</strong> Deutsch.</td><td>I learn German on Mondays. → On Mondays, I learn German.</td></tr>
                    <tr><td>Er schläft jetzt. → <strong>Jetzt schläft er</strong>.</td><td>He sleeps now. → Now he sleeps.</td></tr>
                    <tr><td>Wir fahren morgen. → <strong>Morgen fahren wir</strong>.</td><td>We drive tomorrow. → Tomorrow we drive.</td></tr>
                    <tr><td>Sie kommt um 5. → <strong>Um 5 kommt sie</strong>.</td><td>She comes at 5. → At 5, she comes.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-15',
        title: 'Yes/No Questions & W-Questions',
        desc: 'Asking questions with verb inversion and question words.',
        content: `
            <h3>Two Types of Questions in German</h3>
            <h4>1. Yes/No Questions — verb moves to position 1:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Statement</th><th>Question</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Du kommst morgen.</td><td><strong>Kommst</strong> du morgen?</td><td>Are you coming tomorrow?</td></tr>
                    <tr><td>Er spricht Deutsch.</td><td><strong>Spricht</strong> er Deutsch?</td><td>Does he speak German?</td></tr>
                    <tr><td>Ihr habt Zeit.</td><td><strong>Habt</strong> ihr Zeit?</td><td>Do you all have time?</td></tr>
                    <tr><td>Sie ist zuhause.</td><td><strong>Ist</strong> sie zuhause?</td><td>Is she at home?</td></tr>
                </tbody>
            </table></div>
            <h4>2. W-Questions — question word in position 1, verb in position 2:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Question</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>Was</strong> machst du beruflich?</td><td>What do you do for work?</td></tr>
                    <tr><td><strong>Wo</strong> wohnst du?</td><td>Where do you live?</td></tr>
                    <tr><td><strong>Wann</strong> fängt die Schule an?</td><td>When does school start?</td></tr>
                    <tr><td><strong>Warum</strong> lernst du Deutsch?</td><td>Why are you learning German?</td></tr>
                    <tr><td><strong>Wie viel</strong> kostet das?</td><td>How much does that cost?</td></tr>
                    <tr><td><strong>Woher</strong> kommst du?</td><td>Where are you from?</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-16',
        title: 'Negation: nicht & kein',
        desc: 'How to say "no" and "not" in German — complete guide.',
        content: `
            <h3>Negation in German</h3>
            <h4>nicht — negates verbs, adjectives, and adverbs:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>What is negated?</th></tr></thead>
                <tbody>
                    <tr><td>Ich gehe <strong>nicht</strong>.</td><td>I am not going.</td><td>verb</td></tr>
                    <tr><td>Das ist <strong>nicht</strong> richtig.</td><td>That is not correct.</td><td>adjective</td></tr>
                    <tr><td>Er kommt <strong>nicht</strong> heute.</td><td>He is not coming today.</td><td>adverb (heute)</td></tr>
                    <tr><td>Ich fahre <strong>nicht</strong> nach Berlin.</td><td>I am not driving to Berlin.</td><td>prepositional phrase</td></tr>
                </tbody>
            </table></div>
            <h4>kein — negates nouns (replaces ein/keine article):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Note</th></tr></thead>
                <tbody>
                    <tr><td>Ich habe <strong>kein</strong> Geld.</td><td>I have no money.</td><td>neuter</td></tr>
                    <tr><td>Wir haben <strong>keine</strong> Kinder.</td><td>We have no children.</td><td>plural</td></tr>
                    <tr><td>Er hat <strong>keinen</strong> Hunger.</td><td>He has no appetite.</td><td>masc. accusative</td></tr>
                    <tr><td>Das ist <strong>keine</strong> gute Idee.</td><td>That is not a good idea.</td><td>feminine</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-17',
        title: 'Nominative & Accusative Cases',
        desc: 'The subject and direct object — core of German grammar.',
        content: `
            <h3>The Nominative & Accusative Cases</h3>
            <p><strong>Nominative</strong> = the subject (who does the action)<br><strong>Accusative</strong> = the direct object (what is affected by the action)</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Gender</th><th>Nominative (Subject)</th><th>Accusative (Object)</th></tr></thead>
                <tbody>
                    <tr><td>Masculine</td><td>der / ein</td><td><strong style="color:var(--accent-red)">den / einen</strong> — ONLY masculine changes!</td></tr>
                    <tr><td>Feminine</td><td>die / eine</td><td>die / eine — no change</td></tr>
                    <tr><td>Neuter</td><td>das / ein</td><td>das / ein — no change</td></tr>
                    <tr><td>Plural</td><td>die</td><td>die — no change</td></tr>
                </tbody>
            </table></div>
            <h4>Examples — spotting the subject vs object:</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>German</th><th>English</th><th>Analysis</th></tr></thead>
                <tbody>
                    <tr><td><strong>Der Hund</strong> beißt <strong>den Mann</strong>.</td><td>The dog bites the man.</td><td>Hund = subject (Nom.), Mann = object (Acc. → den!)</td></tr>
                    <tr><td><strong>Die Frau</strong> kauft <strong>einen Apfel</strong>.</td><td>The woman buys an apple.</td><td>Frau = subject, Apfel = object</td></tr>
                    <tr><td>Ich liebe <strong>meinen</strong> Vater.</td><td>I love my father.</td><td>mein → meinen (masc. accusative)</td></tr>
                    <tr><td>Er sieht <strong>das</strong> Kind.</td><td>He sees the child.</td><td>das Kind stays das (neuter, no change)</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-18',
        title: 'Accusative Prepositions',
        desc: 'Prepositions that always trigger the Accusative case.',
        content: `
            <h3>Accusative Prepositions</h3>
            <p>These prepositions ALWAYS take the Accusative case. Remember: <strong>DOGFU</strong> (durch, ohne, gegen, für, um) + bis + entlang</p>
            <div class="grammar-table"><table>
                <thead><tr><th>Preposition</th><th>Meaning</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>für</strong></td><td>for</td><td>Das Geschenk ist für <strong>meinen</strong> Vater.</td><td>The gift is for my father.</td></tr>
                    <tr><td><strong>ohne</strong></td><td>without</td><td>Er kommt ohne <strong>seinen</strong> Bruder.</td><td>He comes without his brother.</td></tr>
                    <tr><td><strong>gegen</strong></td><td>against</td><td>Ich bin gegen <strong>diesen</strong> Plan.</td><td>I am against this plan.</td></tr>
                    <tr><td><strong>durch</strong></td><td>through</td><td>Wir fahren durch <strong>den</strong> Tunnel.</td><td>We drive through the tunnel.</td></tr>
                    <tr><td><strong>um</strong></td><td>around / at (time)</td><td>Der Bus kommt um <strong>neun Uhr</strong>.</td><td>The bus comes at nine o'clock.</td></tr>
                    <tr><td><strong>bis</strong></td><td>until / up to</td><td>Ich warte bis <strong>nächsten Dienstag</strong>.</td><td>I'll wait until next Tuesday.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-19',
        title: 'Basic Prepositions (in, auf, mit, von, zu)',
        desc: 'The most frequently used prepositions and their meanings.',
        content: `
            <h3>Essential German Prepositions</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>Preposition</th><th>Meaning</th><th>Case</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td><strong>in</strong></td><td>in / into</td><td>Dat. (location) / Acc. (movement)</td><td>Ich bin im Haus. / Ich gehe ins Haus.</td><td>I am in the house. / I go into the house.</td></tr>
                    <tr><td><strong>auf</strong></td><td>on / onto</td><td>Dat. (location) / Acc. (movement)</td><td>Das Buch liegt auf dem Tisch.</td><td>The book is lying on the table.</td></tr>
                    <tr><td><strong>mit</strong></td><td>with</td><td>Always Dative</td><td>Ich fahre mit dem Zug.</td><td>I travel by train.</td></tr>
                    <tr><td><strong>von</strong></td><td>from / by / of</td><td>Always Dative</td><td>Das ist ein Lied von Beethoven.</td><td>That is a song by Beethoven.</td></tr>
                    <tr><td><strong>zu</strong></td><td>to (people/places)</td><td>Always Dative</td><td>Ich gehe zum Arzt.</td><td>I'm going to the doctor.</td></tr>
                    <tr><td><strong>nach</strong></td><td>to (cities/countries), after</td><td>Always Dative</td><td>Ich fliege nach Japan.</td><td>I'm flying to Japan.</td></tr>
                    <tr><td><strong>aus</strong></td><td>from (origin) / out of</td><td>Always Dative</td><td>Sie kommt aus Österreich.</td><td>She comes from Austria.</td></tr>
                </tbody>
            </table></div>
        `
    },
    {
        id: 'a1-20',
        title: 'Possessive Pronouns (mein, dein, sein…)',
        desc: 'Expressing ownership — my, your, his, her, our, their.',
        content: `
            <h3>Possessive Pronouns</h3>
            <div class="grammar-table"><table>
                <thead><tr><th>English</th><th>German</th><th>Example</th><th>Translation</th></tr></thead>
                <tbody>
                    <tr><td>my</td><td>mein</td><td>Das ist mein Buch.</td><td>That is my book.</td></tr>
                    <tr><td>your (informal)</td><td>dein</td><td>Wie ist deine Adresse?</td><td>What is your address?</td></tr>
                    <tr><td>his</td><td>sein</td><td>Sein Hund heißt Rex.</td><td>His dog is called Rex.</td></tr>
                    <tr><td>her</td><td>ihr</td><td>Ihr Auto ist rot.</td><td>Her car is red.</td></tr>
                    <tr><td>our</td><td>unser</td><td>Unser Haus ist groß.</td><td>Our house is big.</td></tr>
                    <tr><td>your (formal)</td><td>Ihr</td><td>Ist das Ihr Mantel?</td><td>Is that your coat?</td></tr>
                    <tr><td>their</td><td>ihr</td><td>Das sind ihre Kinder.</td><td>Those are their children.</td></tr>
                </tbody>
            </table></div>
            <h4>Declension examples (like kein):</h4>
            <div class="grammar-table"><table>
                <thead><tr><th>Case</th><th>Example</th><th>English</th></tr></thead>
                <tbody>
                    <tr><td>Nominative (masc.)</td><td>Mein Vater ist Arzt.</td><td>My father is a doctor.</td></tr>
                    <tr><td>Accusative (masc.)</td><td>Ich liebe meinen Vater.</td><td>I love my father. (→ meinen!)</td></tr>
                    <tr><td>Nominative (fem.)</td><td>Meine Mutter kocht gern.</td><td>My mother likes to cook.</td></tr>
                    <tr><td>Nominative (neuter)</td><td>Mein Kind schläft noch.</td><td>My child is still sleeping.</td></tr>
                </tbody>
            </table></div>
        `
    }
];
