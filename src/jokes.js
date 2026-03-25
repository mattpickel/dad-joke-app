// groans: 1–5 (how bad is the pun?)
// topics: animals, dental, food, science, music, sports, medical, kids, wordplay, tech, nature

const JOKES = [
  // ── ANIMALS ──────────────────────────────────────────────────────────────
  { setup: "What do you call a fish without eyes?",                                    punchline: "A fsh.",                                                          groans: 5, topic: "animals" },
  { setup: "Why do cows wear bells?",                                                  punchline: "Because their horns don't work!",                                groans: 3, topic: "animals" },
  { setup: "What do you call a sleeping dinosaur?",                                    punchline: "A dino-snore!",                                                   groans: 4, topic: "animals" },
  { setup: "I asked my dog what 2 minus 2 is.",                                        punchline: "He said nothing.",                                                groans: 3, topic: "animals" },
  { setup: "What do you call a pig that does karate?",                                 punchline: "A pork chop!",                                                    groans: 4, topic: "animals" },
  { setup: "Why don't elephants use computers?",                                       punchline: "Because they're afraid of the mouse!",                            groans: 3, topic: "animals" },
  { setup: "What do you call a bear with no teeth?",                                   punchline: "A gummy bear!",                                                   groans: 4, topic: "animals" },
  { setup: "Why don't seagulls fly over the bay?",                                     punchline: "Because then they'd be bagels!",                                  groans: 5, topic: "animals" },
  { setup: "What do you call two monkeys sharing an Amazon account?",                  punchline: "Prime mates!",                                                    groans: 5, topic: "animals" },
  { setup: "How do you count cows?",                                                   punchline: "With a cow-culator!",                                             groans: 4, topic: "animals" },
  { setup: "What do you call a lazy kangaroo?",                                        punchline: "A pouch potato!",                                                 groans: 5, topic: "animals" },
  { setup: "Why did the cat sit on the computer?",                                     punchline: "To keep an eye on the mouse!",                                    groans: 3, topic: "animals" },

  // ── FOOD ─────────────────────────────────────────────────────────────────
  { setup: "What do you call cheese that isn't yours?",                                punchline: "Nacho cheese!",                                                   groans: 2, topic: "food" },
  { setup: "Why did the banana go to the doctor?",                                     punchline: "Because it wasn't peeling well!",                                 groans: 4, topic: "food" },
  { setup: "What do you call a sad strawberry?",                                       punchline: "A blueberry!",                                                    groans: 3, topic: "food" },
  { setup: "Why did the cookie go to the doctor?",                                     punchline: "Because it was feeling crumby!",                                  groans: 3, topic: "food" },
  { setup: "Why did the tomato turn red?",                                             punchline: "Because it saw the salad dressing!",                              groans: 3, topic: "food" },
  { setup: "Why do potatoes make good detectives?",                                    punchline: "Because they keep their eyes peeled!",                            groans: 4, topic: "food" },
  { setup: "What kind of nut always seems to have a cold?",                            punchline: "A cashew!",                                                       groans: 4, topic: "food" },
  { setup: "I'm on a seafood diet.",                                                   punchline: "I see food and I eat it.",                                        groans: 2, topic: "food" },
  { setup: "What do you call a fake noodle?",                                          punchline: "An impasta!",                                                     groans: 5, topic: "food" },
  { setup: "Why do French people eat snails?",                                         punchline: "Because they don't like fast food!",                              groans: 3, topic: "food" },
  { setup: "What do elves make sandwiches with?",                                      punchline: "Shortbread!",                                                     groans: 4, topic: "food" },

  // ── SCIENCE ──────────────────────────────────────────────────────────────
  { setup: "Why don't scientists trust atoms?",                                        punchline: "Because they make up everything!",                                groans: 3, topic: "science" },
  { setup: "I'm reading a book about anti-gravity.",                                   punchline: "It's impossible to put down!",                                    groans: 4, topic: "science" },
  { setup: "A neutron walks into a bar and asks: 'How much for a beer?'",              punchline: "The bartender says: 'For you, no charge.'",                       groans: 4, topic: "science" },
  { setup: "What did the biologist wear to impress their date?",                       punchline: "Designer genes!",                                                 groans: 5, topic: "science" },
  { setup: "Why did the physics teacher break up with the biology teacher?",           punchline: "There was no chemistry.",                                         groans: 4, topic: "science" },
  { setup: "Why did the germ cross the microscope?",                                   punchline: "To get to the other slide!",                                      groans: 4, topic: "science" },
  { setup: "A photon checks into a hotel. The bellhop asks if he needs help with his luggage.", punchline: "'No thanks,' says the photon. 'I'm traveling light.'",  groans: 5, topic: "science" },
  { setup: "Why can't you trust an atom?",                                             punchline: "They literally make up everything.",                              groans: 3, topic: "science" },

  // ── MUSIC ─────────────────────────────────────────────────────────────────
  { setup: "Why did the musician get arrested?",                                       punchline: "Because they got caught in treble!",                              groans: 5, topic: "music" },
  { setup: "What's a skeleton's least favorite instrument?",                           punchline: "The trom-BONE!",                                                  groans: 4, topic: "music" },
  { setup: "What do you get when you drop a piano down a mine shaft?",                 punchline: "A flat miner.",                                                   groans: 5, topic: "music" },
  { setup: "What did the drummer name his twin daughters?",                            punchline: "Anna one, Anna two!",                                             groans: 5, topic: "music" },
  { setup: "Why did the music teacher need a ladder?",                                 punchline: "To reach the high notes!",                                        groans: 3, topic: "music" },
  { setup: "How do you make a band stand?",                                            punchline: "Take away their chairs!",                                         groans: 4, topic: "music" },
  { setup: "What rock group has four guys who can't sing or play instruments?",        punchline: "Mount Rushmore!",                                                 groans: 4, topic: "music" },
  { setup: "Why is a piano so hard to open?",                                          punchline: "Because all the keys are inside!",                                groans: 3, topic: "music" },

  // ── SPORTS ───────────────────────────────────────────────────────────────
  { setup: "Why did the bicycle fall over?",                                           punchline: "It was two-tired!",                                               groans: 3, topic: "sports" },
  { setup: "What do you call a boomerang that doesn't come back?",                     punchline: "A stick.",                                                        groans: 3, topic: "sports" },
  { setup: "Why did the golfer bring an extra pair of pants?",                         punchline: "In case he got a hole in one!",                                   groans: 5, topic: "sports" },
  { setup: "Why are basketball players messy eaters?",                                 punchline: "They're always dribbling!",                                       groans: 4, topic: "sports" },
  { setup: "What's a swimmer's favorite kind of math?",                                punchline: "Dive-ision!",                                                     groans: 5, topic: "sports" },
  { setup: "Why did the football coach go to the bank?",                               punchline: "To get his quarterback!",                                         groans: 4, topic: "sports" },
  { setup: "What did the baseball glove say to the ball?",                             punchline: "'Catch ya later!'",                                               groans: 3, topic: "sports" },
  { setup: "Why did the scarecrow win the marathon?",                                  punchline: "Because he was outstanding in his field!",                        groans: 3, topic: "sports" },

  // ── MEDICAL ──────────────────────────────────────────────────────────────
  { setup: "Why do nurses like red crayons?",                                          punchline: "Sometimes they have to draw blood!",                              groans: 4, topic: "medical" },
  { setup: "What did the doctor say to the sick calendar?",                            punchline: "Your days are numbered!",                                         groans: 5, topic: "medical" },
  { setup: "Why do pediatricians make great comedians?",                               punchline: "Because they always keep their patients laughing!",               groans: 3, topic: "medical" },
  { setup: "What's the best medicine in the world?",                                   punchline: "Laughter... but don't tell your insurance company.",              groans: 4, topic: "medical" },
  { setup: "What did the stethoscope say to the doctor?",                              punchline: "Stop listening to me, you're being too heart-y!",                 groans: 5, topic: "medical" },
  { setup: "Why did the doctor become a comedian?",                                    punchline: "Because they had great patients!",                                groans: 4, topic: "medical" },
  { setup: "What did one tonsil say to the other?",                                    punchline: "Better get dressed, the doctor is taking us out tonight!",        groans: 4, topic: "medical" },
  { setup: "What do you call an ear doctor who moonlights as a DJ?",                   punchline: "A hearing aid!",                                                  groans: 5, topic: "medical" },
  { setup: "Why did the skeleton go to the doctor alone?",                             punchline: "Because he had no body to go with him!",                         groans: 4, topic: "medical" },
  { setup: "Why did the doctor carry a red pen?",                                      punchline: "In case they needed to draw blood!",                              groans: 4, topic: "medical" },
  { setup: "What do you call a doctor who fixes websites?",                            punchline: "A URL-ologist!",                                                  groans: 4, topic: "medical" },

  // ── KIDS ─────────────────────────────────────────────────────────────────
  { setup: "Why can't you give Elsa a balloon?",                                       punchline: "Because she'll let it go.",                                       groans: 4, topic: "kids" },
  { setup: "What did one wall say to the other?",                                      punchline: "I'll meet you at the corner!",                                    groans: 3, topic: "kids" },
  { setup: "Why did the teddy bear say no to dessert?",                                punchline: "Because she was already stuffed!",                                groans: 3, topic: "kids" },
  { setup: "What do you call a train that sneezes?",                                   punchline: "Achoo-choo train!",                                               groans: 4, topic: "kids" },
  { setup: "Why can't Cinderella play soccer?",                                        punchline: "Because she always runs away from the ball!",                     groans: 4, topic: "kids" },
  { setup: "What do you call a T-Rex who hates losing?",                               punchline: "A dino-sore loser!",                                              groans: 5, topic: "kids" },
  { setup: "Why did the math book look so sad?",                                       punchline: "Because it had too many problems!",                               groans: 3, topic: "kids" },
  { setup: "How do you make an octopus laugh?",                                        punchline: "With ten-tickles!",                                               groans: 5, topic: "kids" },
  { setup: "What do clouds wear under their shorts?",                                  punchline: "Thunderwear!",                                                    groans: 5, topic: "kids" },
  { setup: "What do you get when you cross a snowman and a shark?",                    punchline: "Frostbite!",                                                      groans: 4, topic: "kids" },
  { setup: "Why did the superhero flush the toilet?",                                  punchline: "Because it was his doody!",                                       groans: 5, topic: "kids" },

  // ── WORDPLAY ─────────────────────────────────────────────────────────────
  { setup: "I told my wife she was drawing her eyebrows too high.",                    punchline: "She looked surprised.",                                           groans: 4, topic: "wordplay" },
  { setup: "I only know 25 letters of the alphabet.",                                  punchline: "I don't know why.",                                              groans: 4, topic: "wordplay" },
  { setup: "What do you call a belt made of watches?",                                 punchline: "A waist of time!",                                               groans: 5, topic: "wordplay" },
  { setup: "I used to hate facial hair...",                                             punchline: "...but then it grew on me.",                                      groans: 3, topic: "wordplay" },
  { setup: "What do you call a factory that makes okay products?",                     punchline: "A satisfactory!",                                                 groans: 5, topic: "wordplay" },
  { setup: "How do you organize a space party?",                                       punchline: "You planet!",                                                     groans: 4, topic: "wordplay" },
  { setup: "I couldn't figure out why the baseball kept getting bigger.",              punchline: "Then it hit me.",                                                 groans: 4, topic: "wordplay" },
  { setup: "I used to be addicted to soap.",                                           punchline: "But I'm clean now.",                                              groans: 5, topic: "wordplay" },
  { setup: "My wife told me I had to stop acting like a flamingo.",                    punchline: "I had to put my foot down.",                                      groans: 5, topic: "wordplay" },
  { setup: "What do you call someone with no body and no nose?",                       punchline: "Nobody knows.",                                                   groans: 5, topic: "wordplay" },
  { setup: "I would tell you a construction joke...",                                  punchline: "...but I'm still working on it.",                                 groans: 4, topic: "wordplay" },
  { setup: "Why don't skeletons fight each other?",                                    punchline: "They don't have the guts!",                                       groans: 4, topic: "wordplay" },
  { setup: "Did you hear about the guy who invented Lifesavers?",                      punchline: "He made a mint!",                                                 groans: 4, topic: "wordplay" },
  { setup: "I'm reading a book about mazes.",                                          punchline: "I got so lost in it.",                                            groans: 3, topic: "wordplay" },

  // ── TECH ─────────────────────────────────────────────────────────────────
  { setup: "Why do programmers prefer dark mode?",                                     punchline: "Because light attracts bugs!",                                    groans: 4, topic: "tech" },
  { setup: "How many programmers does it take to change a light bulb?",                punchline: "None, that's a hardware problem.",                                groans: 3, topic: "tech" },
  { setup: "Why did the programmer quit his job?",                                     punchline: "Because he didn't get arrays!",                                   groans: 5, topic: "tech" },
  { setup: "What do you call 8 hobbits?",                                             punchline: "A hobbyte!",                                                      groans: 5, topic: "tech" },
  { setup: "Why was the JavaScript developer sad?",                                    punchline: "Because he didn't Node how to Express himself!",                  groans: 5, topic: "tech" },
  { setup: "What's a computer's favorite snack?",                                      punchline: "Microchips!",                                                     groans: 3, topic: "tech" },
  { setup: "Why did the developer go broke?",                                          punchline: "Because he used up all his cache!",                               groans: 4, topic: "tech" },
  { setup: "Why don't programmers like nature?",                                       punchline: "It has too many bugs and no documentation.",                      groans: 4, topic: "tech" },
  { setup: "I told my computer I needed a break.",                                     punchline: "Now it won't stop sending me Kit Kat ads.",                       groans: 3, topic: "tech" },

  // ── NATURE ───────────────────────────────────────────────────────────────
  { setup: "What did the ocean say to the beach?",                                     punchline: "Nothing, it just waved!",                                         groans: 3, topic: "nature" },
  { setup: "What do trees drink?",                                                     punchline: "Root beer!",                                                      groans: 4, topic: "nature" },
  { setup: "Why did the leaf go to the doctor?",                                       punchline: "It was feeling a little green!",                                  groans: 3, topic: "nature" },
  { setup: "What do you call a snowman with a six-pack?",                              punchline: "An abdominal snowman!",                                           groans: 5, topic: "nature" },
  { setup: "Why do mountains make great comedians?",                                   punchline: "Because their jokes are always peak!",                            groans: 4, topic: "nature" },
  { setup: "What did the big flower say to the baby flower?",                          punchline: "Hey, bud!",                                                       groans: 3, topic: "nature" },
  { setup: "What do you call dangerous precipitation?",                                punchline: "A rain of terror!",                                               groans: 5, topic: "nature" },
  { setup: "How does the moon cut his hair?",                                          punchline: "Eclipse it!",                                                     groans: 5, topic: "nature" },
  { setup: "Why did the sun go to school?",                                            punchline: "To get a little brighter!",                                       groans: 3, topic: "nature" },

  // ── DENTAL ──────────────────────────────────────────────────────────────
  { setup: "What time did the man go to the dentist?",                                 punchline: "Tooth-hurty!",                                                    groans: 5, topic: "dental" },
  { setup: "Why did the pie go to a dentist?",                                         punchline: "Because it needed a filling!",                                    groans: 4, topic: "dental" },
  { setup: "What does a dentist call their X-rays?",                                   punchline: "Tooth pics!",                                                     groans: 5, topic: "dental" },
  { setup: "Why did the king go to the dentist?",                                      punchline: "To get his teeth crowned!",                                       groans: 4, topic: "dental" },
  { setup: "What did the dentist say to the golfer?",                                  punchline: "You have a hole in one!",                                         groans: 5, topic: "dental" },
  { setup: "Why did the deer need braces?",                                            punchline: "Because he had buck teeth!",                                      groans: 4, topic: "dental" },
  { setup: "What do you call a dentist who doesn't like tea?",                         punchline: "Denis!",                                                          groans: 5, topic: "dental" },
  { setup: "What does the dentist of the year get?",                                   punchline: "A little plaque!",                                                groans: 5, topic: "dental" },
  { setup: "Why did the smartphone go to the dentist?",                                punchline: "It had a Bluetooth problem!",                                     groans: 4, topic: "dental" },
  { setup: "What do dentists call their patients' X-ray appointment?",                 punchline: "A tooth-orial!",                                                  groans: 3, topic: "dental" },
  { setup: "Why are dentists so good at solving problems?",                            punchline: "They always get to the root of it!",                              groans: 4, topic: "dental" },
  { setup: "What did the tooth say to the departing dentist?",                         punchline: "Fill me in when you get back!",                                   groans: 4, topic: "dental" },
  { setup: "Why did the dentist and the orthodontist break up?",                       punchline: "They couldn't align on anything!",                                groans: 5, topic: "dental" },
  { setup: "What's a dentist's favorite dinosaur?",                                    punchline: "A Flosso-raptor!",                                                groans: 5, topic: "dental" },
  { setup: "What game do kid dentists love to play?",                                  punchline: "Caps and robbers!",                                               groans: 4, topic: "dental" },
]

export default JOKES
