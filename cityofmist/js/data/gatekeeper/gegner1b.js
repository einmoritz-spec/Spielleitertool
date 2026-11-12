/* Gatekeeper – Gatekeepers as Adversaries, Fortsetzung: Agenten-Dangers, Gear und Mist Effects, Agent Power Sets, Rupturing Contracts (S. 272–279). Ergänzt die Kategorie gk_gegner. */
CM_ORTE.gk_gegner = (CM_ORTE.gk_gegner||[]).concat([
 { id:"gk-infiltrator-danger", name:"Infiltrator (Danger)", teaser:"Agent-Danger: Undercover-Spion mit Gain-Access-Spektrum", p:272,
  text:["Danger-Profil des Infiltrator (Laufbahn S. 218)."],
  dangers:[
   { name:"Infiltrator", rating:4, limits:"HURT OR SUBDUE 3 / CATCH 5 / GAIN ACCESS X",
     text:["Rating: yyyy(+y)"],
     moves:[
      ["Ghost In The Wind","Wann immer du Clues über die Identität, den Aufenthaltsort oder das Werk eines Infiltrators erhältst, erleidest du zuerst oblivious-5 (du darfst Face Danger, falls möglich). Verringere die Anzahl der Clues und das Tier des Status 1 zu 1. Behalte verbleibende Clues oder Status-Tiers."],
      ["Optional: Essence-Mesh Jumpsuit (+y)","Der Infiltrator ist in die Essenz von etwas oder jemand anderem gehüllt. Gibst du Clues aus, um die Natur des Infiltrators zu enthüllen, erhältst du Antworten, als wäre sie wirklich diese Person oder Sache. Nur ein Dynamite!-Wurf (12+) kann einen Makel in ihrer Tarnung offenbaren."],
      ["Deep Undercover","Lege das Maximum des gain-access-Spektrums anhand der Schwierigkeit der Mission des Infiltrators fest. Am Ende jeder Downtime gib ihr closer-1 auf dem gain-access-Spektrum, falls der Infiltrator darauf hingearbeitet hat, Zugang zu ihrem Ziel zu erhalten."],
      ["Mission Accomplished","Wenn gain-access das Maximum erreicht, tötet oder entführt der Infiltrator jemand Entscheidenden, sabotiert erfolgreich ein System oder hat vollständige Informationen über eine Operation oder die Crew (Complicate Things, Bigtime oder Make Something Horrible Happen). Die SL kann dies abbilden, indem sie den Tag des gain-access-Status ändert, sein Tier behält (auch wenn es Tier 6 ist) und ihn dann dem Ziel gibt."]],
     gm:[
      "Free herself of restraints (entferne bis zu 3 Tiers) or circumvent security systems (override-4)",
      "Hide in the shadows or disappear in a crowd (gib sich selbst hidden-4)",
      "Shroud someone to make them forget her (vague-memories-3) or to shut down their Mythos powers (burne bis zu zwei Tags)",
      "Manipulate someone’s feelings (friendly-3, attracted-3, angry-3 usw.)",
      "Strike someone or shoot them with a hidden weapon (severely-wounded-4)",
      "Stir an unexplained fear of impending disaster",
      "Reveal herself for just a moment, and disappear again"]}]},

 { id:"gk-investigator-danger", name:"Investigator (Danger)", teaser:"Agent-Danger: Detektiv der Gatekeeper mit Locate-Spektrum", p:272,
  text:["Danger-Profil des Investigator (Laufbahn S. 220)."],
  dangers:[
   { name:"Investigator", rating:3, limits:"HURT OR SUBDUE 4 / LOCATE 3 / CORRUPT 5",
     text:["Rating: yyy"],
     moves:[
      ["Investigative Work","Wenn du den Investigator überwindest oder ihm entkommst oder wenn sie dich zum ersten Mal bemerkt (in einer Szene oder Cutscene), erleidest du followed-1 auf dem locate-Spektrum. Am Ende jeder Downtime danach erleidest du followed-1, außer du verbringst die Downtime damit, deine Spuren zu verwischen. Wenn locate das Maximum erreicht, findet der Investigator dich (erneut)."],
      ["Not My First Rodeo","Wenn der Investigator die Szene betritt, gib ihr alert-3 und ready-for-anything-3. Die SL kann diese Status als Hard Move erneuern."],
      ["Powers of Deduction","Wenn der Investigator die Szene zum ersten Mal oder als Hard Move überblickt, stellt dir die SL eine Frage. Du musst mit einer geraden Antwort oder einer soliden Spur antworten. Der Investigator kennt deine Antwort, auch wenn dein Charakter sie nicht ausgesprochen hat."],
      ["Defensive Shrouding","Einmal pro Szene kann der Investigator ihren Shrouding-Hard-Move als Intrusion einsetzen."]],
     gm:[
      "Dish out an intense barrage of Shrouding (amnesia-4, memory-loss-3 bei einer kleinen Gruppe, oder burne bis zu 3 Mythos-Tags) or fire a Shrouding sidearm (flesh-wound-2 und burne bis zu 2 Mythos-Tags)",
      "Expose a hidden target, using deduction, experience, or a Breach Detector ward (entferne bis zu 3 verschleiernde Status-Tiers oder Tags)",
      "Step up to the scene, blowing cigarette smoke and glancing around pensively"]}]},

 { id:"gk-medic-danger", name:"Medic (Danger)", teaser:"Agent-Danger: Sanitäter der Gatekeeper mit Force-to-Resupply-Spektrum", p:273,
  text:["Danger-Profil des Medic."],
  dangers:[
   { name:"Medic", rating:2, limits:"HURT OR SUBDUE 3 / FORCE TO RESUPPLY 4",
     text:["Rating: yy"],
     moves:[
      ["Not My First Rodeo","Wenn der Medic die Szene betritt, gib ihr alert-1 und ready-for-anything-1. Die SL kann diese Status als Hard Move erneuern."],
      ["Body Armor","Wenn der Medic einen Status körperlichen Schadens erleidet, verringere dessen Tier um 1, falls er mundan ist, oder um 2, falls er von Mythos-Kräften stammt."]],
     gm:[
      "Give first aid to a wounded comrade (gib sich selbst restock-1 und entferne bis zu 2 Tiers von hurt- oder magical-condition-Status, 3 falls die Wunde eine legendäre Qualität behält)",
      "Inject a patient with a high-power stimulant (gib sich selbst restock-1; der Patient ignoriert lähmende körperliche Schadens- und magical-condition-Status bis Tier 3 und erhält vorübergehend stimulated-2)",
      "Defend herself with Shrouding (vague-memories-3 oder burne einen Mythos-Tag)",
      "Call for extraction, vanishing along with her patient(s) (Deny Them Something They Want)",
      "Beg an aggressor not to harm an incapacitated agent (hesitant-2)",
      "Rush over to a wounded Gatekeeper and begin treating her"]}]},

 { id:"gk-pac-veiler-danger", name:"PAC Veiler (Danger)", teaser:"Agent-Danger: Veiler der Public Affairs mit DMO-the-Scene-Spektrum", p:273,
  text:["Danger-Profil des PAC Veiler."],
  dangers:[
   { name:"PAC Veiler", rating:3, limits:"HURT OR SUBDUE 3 / DMO THE SCENE X",
     text:["Rating: yyy"],
     moves:[
      ["Not My First Rodeo","Wenn der PAC Veiler die Szene betritt, gib ihr alert-1 und ready-for-anything-1. Die SL kann diese Status als Hard Move erneuern."],
      ["Nothing to See Here","Lege das Maximum des DMO-the-scene-Spektrums anhand der Schwierigkeit der Aufgabe des PAC Veilers fest. Wenn DMO-the-scene das Maximum erreicht, erleiden alle am Schauplatz oblivious-5, und alle nicht aktiv aufrechterhaltenen Mythos-Kräfte werden abgeschaltet (burne Tags nach Bedarf)."],
      ["Graywasher","Erhöhe die Effekte der Shrouding-Moves des PAC Veilers um eins, wenn sie Conjurations oder fortlaufende, von ihrem Rift gelöste Mythos-Kräfte ins Visier nimmt."],
      ["Defensive Shrouding","Einmal pro Szene kann der PAC Veiler ihren Shrouding-Hard-Move als Intrusion einsetzen."]],
     gm:[
      "Reassure everyone at the scene (calm-3 oder entferne bis zu 3 Tiers emotionaler Status)",
      "Distract-Mask-Obliviate witnesses at the scene, as per protocol (amnesia-4, oder DMO-1 für die gesamte Szene)",
      "Shroud to protect herself from Mythos powers (burne bis zu zwei Mythos-Tags)",
      "Deploy a portable Mist Beacon (erschaffe Danger: Mist Beacon, S. 277)",
      "Set up a Graywashing barrier (einmal pro Szene erschaffe eine neue Danger: Graywashing Barrier; für jeden Punkt Size Factor, den ein PAC-Veiler-Team hat, kann sie den Size Factor der Barriere oder das penetrate-Spektrumsmaximum um 1 erhöhen)",
      "Step into a scene affected by a Rift as if nothing is out of the ordinary",
      "Talk to witnesses casually (just before obliviating them)"]}]},

 { id:"gk-rd-gadgeteer-danger", name:"R&D Gadgeteer (Danger)", teaser:"Agent-Danger: Tüftlerin der Forschungsabteilung mit Malfunction-Spektrum", p:274,
  text:["Danger-Profil des R&D Gadgeteer."],
  dangers:[
   { name:"R&D Gadgeteer", rating:4, limits:"HURT OR SUBDUE 1 / MALFUNCTION 3",
     text:["Rating: yyyy"],
     moves:[
      ["Cute Deranged Lab Rat","Wenn der R&D Gadgeteer einen sozialen Status erleidet, verringere dessen Tier um eins, falls er aggressiv oder herrisch ist; ist er freundlich, erhöhe sein Tier um eins."],
      ["Look What You’ve Done","Wenn hurt-or-subdue das Maximum erreicht, erreicht auch malfunction das Maximum."],
      ["It’s Not Supposed To Do That","Wenn malfunction das Maximum erreicht, wählt die SL einen der folgenden Nebeneffekte: **Clearance Override:** Alle in der Nähe, einschließlich des R&D Gadgeteers und aller Gatekeeper, erleiden oblivious-5. **Faultline Rift:** Entlang einer meilenlangen Linie, deren Mittelpunkt der R&D Gadgeteer ist, wird der Umgebungs-Mist aufgehoben. Mythoi strömen wie eine Flut herein (Complicate Things, Bigtime). **Perching Accident:** Zwei Bewusstseine in der Nähe des R&D Gadgeteers tauschen die Körper (vorübergehend, aber sie wissen es nicht) und erleiden swapped-body-5. **Weaving Accident:** Der R&D Gadgeteer oder jemand oder etwas in der Nähe verändert seine Essenz (vorübergehend, aber niemand weiß es) und erleidet transformed-5, z. B. wird die Gadgeteer unglaublich charismatisch, oder ihr Drehstuhl wird bewusst und bekommt einen Mund."]],
     gm:[
      "Test her most recent invention on someone or something nearby (gib sich selbst glitch-1 auf dem malfunction-Spektrum):",
      "The Unweaver: Erase a physical body from existence (disembodied-5)",
      "Portable Portal: As an intrusion, redirect a physical or energy attack, transferring its effect to another target (als Intrusion; Effekt auf ein anderes Ziel übertragen)",
      "Shrouding Spiders: Unleash a swarm of spiders (hurt-or-subdue:1, Size Factor 3) whose bite Shrouds Mythos powers (als Soft Move burne einen Mythos-Tag; jedes Mal, wenn du diesen Soft Move einsetzt, erhöhe die Zahl der verbrannten Tags um eins. Der R&D Gadgeteer erleidet glitch-1 nur einmal pro Ziel.)",
      "Mist Analyzer (erleide malfunctioned-3 statt glitch-1): Give R&D Gadgeteer the temporary tag Mist Analyzer. Anyone who holds the tag can burn it to answer any single question about the nature of the Mist.",
      "Conjuration Collar: Create a new Rift or Conjuration Danger. The R&D Gadgeteer controls it until the collar malfunctions.",
      "Squeal anxiously as her gadget is going out of control (glitch-1)",
      "Tinker with an oversized and strange gadget, preparing to operate it",
      "Look worried as her gadget shows signs of instability"]}]},

 { id:"gk-rift-handler-danger", name:"Rift Handler (Danger)", teaser:"Agent-Danger: Verhandlerin der Gatekeeper mit Unmask-Spektrum", p:274,
  text:["Danger-Profil des Rift Handler."],
  dangers:[
   { name:"Rift Handler", rating:3, limits:"HURT OR SUBDUE 4 / UNMASK 6",
     text:["Rating: yyy"],
     moves:[
      ["Read the Sitch","Wenn der Rift Handler die Szene betritt, gib ihr einen Status, der ihr sozial am besten dient, etwa seductive-2, impressive-2, woman-with-a-plan-2, here-to-help-2, stern-2 usw."],
      ["Seasoned Negotiator","Wenn du den Rift Handler Convince, verringere das Tier des Status, den du gibst, um zwei. Macht dir der Rift Handler ein gutes Angebot und du lehnst ab, bist du Taking the Risk."],
      ["Good Judge of Character","Als Soft Move liest ein Spieler, dessen Charakter anwesend ist, seine Identities und Mysteries vor. Die SL wählt eines davon, das der Rift Handler dann kennt oder spürt."],
      ["Not My First Rodeo","Wenn der Rift Handler die Szene betritt, gib ihr alert-2 und ready-for-anything-2. Die SL kann diese Status als Hard Move erneuern."],
      ["Defensive Shrouding","Einmal pro Szene kann der Rift Handler ihren Shrouding-Hard-Move als Intrusion einsetzen."]],
     gm:[
      "Convince someone to cooperate, using the best approach to sway them (convinced-3)",
      "Deduce an important fact about the person or social situation she’s in (Complicate Things, Bigtime, oder burne bis zu zwei Convince-Leverage-Tags)",
      "Cause the environment to hush when she or her allies are talking (all-eyes-on-me-2) or increase background distraction when her opponents speak (gib dem Publikum vorübergehend scattered-attention-2)",
      "Obliviate a room (amnesia-4 für alle Anwesenden) or counter Mythos powers with Shrouding (burne bis zu 2 Mythos-Tags)",
      "Loom out of the crowd or a dark corner unexpectedly and introduce herself, holding out a calling card",
      "Look a Rift up and down, gauging them",
      "Approach a Rift with an offer that will serve both parties"]}]},

 { id:"gk-seals-danger", name:"Seals (Danger)", teaser:"Agent-Danger: Gatekeeper-Eliteeinheit mit Mythosproof Overcoat", p:275,
  text:["Danger-Profil der Seals."],
  dangers:[
   { name:"Seals", rating:4, limits:"HURT OR SUBDUE 4 / OVERLOAD 6",
     text:["Rating: yyyy"],
     moves:[
      ["Storm the Castle","Wenn ein Gatekeeper Seal die Szene betritt, gib ihr overwhelming-2 und erschaffe die Danger: Mist Beacon (S. 277)."],
      ["Mythosproof Overcoat","**Passive:** Wenn der Gatekeeper Seal einen von einer Mythos-Kraft verhängten Status erleidet, ersetze dessen Tag durch overload. **Active:** Als Intrusion kann der Gatekeeper Seal einen overload-Status beliebigen Tiers nehmen, um jemandem, der Mythos-Kräfte gegen sie einsetzt, einen vorübergehenden Shrouded-Status desselben Tiers zu geben. **Recharge:** Als Soft Move (nach einem Spielerzug) entfernt der Gatekeeper Seal alle nicht-permanenten overload-Status. **Overloaded:** Wenn overload:6 ausgeschöpft ist, versagen die Passive- und Active-Abwehr des Mantels und können kurzzeitig nicht genutzt werden. Entferne nach dem nächsten Spielerzug alle nicht-permanenten overload-Status."],
      ["Expert Hand-to-Hand Combatant","Wenn du dich mit einem Gatekeeper Seal in den Nahkampf begibst, trifft sie dich zuerst mit einem ihrer Hard Moves."],
      ["Military Discipline","Wenn ein Gatekeeper Seal einen sozialen oder emotionalen Status erleidet, verringere dessen Tier um 2."]],
     gm:[
      "Fire a hail of anti-Mythos energy bolts (sealed-4)",
      "Fire standard Mist-anchored ammo, aiming to injure or kill (gunshot-wound-3 und sealed-3)",
      "Use combat training to physically restrain or hurt a target (broken-arm-3 oder restrained-3) or slap an Obliviating ward on them (vague-memories-3)",
      "Slap a Mist-seal on a depowered or defeated Rift (sealed-5)",
      "Regroup (entferne bis zu 2 Tiers negativer taktischer Status von sich oder Verbündeten und gib ihrer Einheit einen taktischen Vorteils-Status mit Tier 2)",
      "Call backup (erhöhe den Size Factor dieser Danger um 1)",
      "Storm the targets out of a billowing wisp of Mist",
      "Draw a glowing magical ward with her fingers",
      "Take aim with a rune-inscribed assault rifle or shotgun"]}]},

 { id:"gk-security-detail-danger", name:"Security Detail (Danger)", teaser:"Agent-Danger: Wachdienst der Gatekeeper mit Corrupt-Spektrum", p:275,
  text:["Danger-Profil der Security Detail."],
  dangers:[
   { name:"Security Detail", rating:2, limits:"HURT OR SUBDUE 3 / CORRUPT 4",
     text:["Rating: yy"],
     moves:[
      ["Standing Watch","Wenn der Security-Detail-Agent Wache hält, gib ihr alert-1."],
      ["Defensive Shrouding","Einmal pro Szene kann der Security-Detail-Agent einen ihrer Shrouding-Hard-Moves als Intrusion einsetzen."],
      ["(Optional) Body Armor","Wenn ein Security-Detail-Agent einen Status körperlichen Schadens erleidet, verringere dessen Tier um 1, falls er mundan ist, oder um 2, falls er von Mythos-Kräften stammt."]],
     gm:[
      "Take cover-2 and fire at a threat using her Shrouding sidearm (flesh-wound-2 und burne einen Mythos-Tag -oder- grazed-1 und burne zwei Mythos-Tags)",
      "Shroud someone who shouldn’t be seeing this (memory-loss-3)",
      "Call in backup (erhöhe den Size Factor dieser Danger um 1)",
      "Use a Graywash Spray on a comrade to dispel Mythos effects (entferne ein Tier negativer, durch Mythos-Kräfte verursachter Status)",
      "Step back and forth, looking around while patting her rolled “Newspaper” on her palm"]}]},

 { id:"gk-swat-danger", name:"SWAT (Danger)", teaser:"Agent-Danger: taktische Einsatztruppe mit SWAT Specialization", p:276,
  text:["Danger-Profil der SWAT."],
  dangers:[
   { name:"SWAT", rating:3, limits:"HURT OR SUBDUE 4 / ACHIEVE GOAL 3",
     text:["Rating: yyy"],
     moves:[
      ["Deploy","Wenn ein Gatekeeper-SWAT-Agent die Szene betritt, gib ihr einen nützlichen taktischen Vorteil mit Tier 2, etwa cover-2, superior-position-2, team-tactics-2, alert-2 usw."],
      ["Improved Body Armor","Wenn ein Gatekeeper-SWAT-Agent einen Status körperlichen Schadens erleidet, verringere dessen Tier um 1. Wenn ein Gatekeeper-SWAT-Agent einen Status mythischer Herkunft erleidet, verringere dessen Tier um 2."],
      ["Defensive Shrouding","Einmal pro Szene kann der Gatekeeper-SWAT-Agent einen ihrer Shrouding-Hard-Moves als Intrusion einsetzen."],
      ["SWAT Specialization","Wähle eine für einen einzelnen Agenten; eine Einheit hat alle. **Target Acquisition:** Scanne das Gebiet mit Perching-Brillen (burne bis zu zwei invisibility- und illusory-Tags oder Status-Tiers, oder gib dem Team einen zusätzlichen nützlichen taktischen Status wie bei Deploy). **Lugger:** Erschaffe eine neue Danger: Mist Beacon oder Graywashing Barrier (S. 277). Erhöhe die Effekte der Shrouding-Moves des SWAT-Agenten um eins, wenn sie Conjurations oder fortlaufende, von ihrem Rift gelöste Mythos-Kräfte ins Visier nimmt. **Vanguard:** Feuere eine Blendgranate (vorübergehend blinded-4) oder eine Tränengasgranate (Rauchdeckung und choking-3) aus einem leichten Granatwerfer. **Weaving Liaison:** Fordere taktische Weaving-Unterstützung an, um eine Barriere zu entfernen oder zu erschaffen, den Fluchtweg des Ziels zurück zum Team zu biegen usw. (Complicate Things, Bigtime oder cornered-3)."]],
     gm:[
      "Discharge accurate bursts of lethal or non-lethal Shrouding gunfire (flesh-wound-2 und burne zwei Mythos-Tags -oder- disoriented-2 und burne zwei Mythos-Tags)",
      "Tackle a hostile with martial arts (grappled-3 oder stunned-3)",
      "Call in backup (erhöhe den Size Factor dieser Danger um 1) or a medic (erschaffe Danger: Medic)",
      "Regroup and reassess the situation, recovering from a tactical tough spot (entferne bis zu zwei Tiers negativer taktischer Status beim Team oder positiver taktischer Status bei Gegnern)",
      "Crash through a glass ceiling or a door thought to be secure, muttering “Go! Go! Go!” into the radio"]}]},

 { id:"gk-tactical-weaver-danger", name:"Tactical Weaver (Danger)", teaser:"Agent-Danger: Weaverin im Feldeinsatz mit Stretch-the-Mist-Spektrum", p:276,
  text:["Danger-Profil des Tactical Weaver."],
  dangers:[
   { name:"Tactical Weaver", rating:4, limits:"HURT OR SUBDUE 4 / DISRUPT 6 / STRETCH THE MIST 3",
     text:["Rating: yyyy"],
     moves:[
      ["Not My First Rodeo","Wenn der Tactical Weaver die Szene betritt, gib ihr alert-2 und ready-for-anything-2. Die SL kann diese Status als Hard Move erneuern."],
      ["Never Rest","Am Ende jeder Downtime oder als Hard Move kann der Tactical Weaver dir einen rechtlichen, finanziellen oder sozialen Status mit Tier 3 geben oder eine neue Danger erschaffen, die dich verfolgt (wähle aus City Official, Corporate Lawyer, Detective, SWAT Team / Elite Security, Hitman; siehe SL-Toolkit, S. 140)."],
      ["Defensive Shrouding and Weaving","Einmal pro Szene kann der Tactical Weaver einen ihrer Shrouding- oder Weaving-Hard-Moves als Intrusion einsetzen."],
      ["Wear and Tear","Wenn stretch-the-Mist das Maximum erreicht, gib dem Umgebungs-Mist einen thin-Mist-1-Status und entferne alle Status von stretch-the-Mist."]],
     gm:[
      "Use advanced Weaving to edit the objects or qualities in the reality around her target (jedes Mal erleidet sie stretching-it-1):",
      "Make doors disappear or make them open to other locations (Complicate Things, Bigtime)",
      "Create obstacles and restraints around the target (stuck-4)",
      "Create cover-3 for herself and her allies or remove cover from her target (bis zu 3 Tiers)",
      "Change the weather and the environment (erschaffe passende Story-Tags oder gib Status mit Tier 4, z. B. soaking-wet-4, malleable-walls-4)",
      "Crystallize strange abstract objects that attack the target, or use the environment to do so (impaled-4, crushed-4, slashed-4)",
      "Fire rounds from an oversized revolver Shrouding sidearm (gunshot-wound-3 und burne drei Mythos-Tags)",
      "Deploy field agents to finish the job (erschaffe eine neue Danger: SWAT)",
      "Loom in the distance as a threatening dark silhouette on the rooftops",
      "Read new intel in her “Newspaper”, informing her next attack"]}]},

 { id:"gk-trainee-danger", name:"Trainee (Danger)", teaser:"Agent-Danger: Berufsanfängerin der Gatekeeper", p:276,
  text:["Danger-Profil des Trainee."],
  dangers:[
   { name:"Trainee", rating:1, limits:"HURT OR SUBDUE 1 / SCARE 2 / TURN 4",
     text:["Rating: y"],
     moves:[
      ["Basic Training","Wenn der Trainee die Szene betritt, erhöhe je nach ihrer Ausbildung eines ihrer Spektren oder einen Danger-Move-Effekt um eins oder gib ihr einen Story-Tag."],
      ["Oops","Einmal pro Sitzung dürfen die Spieler wählen, einen vom Trainee erzeugten Effekt auf etwas oder jemand anderes umzulenken."]],
     gm:[
      "Fiddle with her Shrouding Focus, trying to Shroud someone or something (distracted-1 oder vague-memories-1) or fire her Shrouding sidearm inaccurately (grazed-1 oder burne einen Mythos-Tag)",
      "Call her CO for backup (erschaffe eine neue Danger: Rift Handler)",
      "Struggle with her Fedora Absentia, and then try to pull it together"]}]},

 { id:"gk-urban-warfare-tactician-danger", name:"Urban Warfare Tactician (Danger)", teaser:"Agent-Danger: Taktikerin für Häuserkampf mit Bodyguards", p:277,
  text:["Danger-Profil des Urban Warfare Tactician."],
  dangers:[
   { name:"Urban Warfare Tactician", rating:3, limits:"HURT OR SUBDUE 4",
     text:["Rating: yyy"],
     moves:[
      ["Not My First Rodeo","Wenn der Urban Warfare Tactician die Szene betritt, gib ihr alert-2 und ready-for-anything-2. Die SL kann diese Status als Hard Move erneuern."],
      ["Body Armor","Wenn der Urban Warfare Tactician einen Status körperlichen Schadens erleidet, verringere dessen Tier um 1, falls er mundan ist, oder um 2, falls er von Mythos-Kräften stammt."],
      ["Bodyguards","Wenn der Urban Warfare Tactician einen Status erleidet, vor dem ihre Bodyguards sie schützen können, erleiden stattdessen die Bodyguards den Status."],
      ["Defensive Shrouding","Einmal pro Szene kann der Urban Warfare Tactician ihren Shrouding-Hard-Move als Intrusion einsetzen."]],
     gm:[
      "Employ tactically-minded combat Shrouding with her sidearm or focus (flesh-wound-2 und burne zwei Mythos-Tags, betrifft eine kleine Gruppe von Rifts gleichzeitig)",
      "Command her team to achieve battlefield superiority (gib ihnen bis zu drei Tiers taktischer Überlegenheits-Status)",
      "Call for backup (erschaffe eine neue Gatekeeper-Einheit-Danger oder erhöhe den Size Factor ihres Teams um 1)",
      "Observe the battlefield and data on her “Newspaper”, frowning",
      "Loud-whisper stern commands into her “Newspaper”"]}]},

 { id:"gk-gear-mist-effects", name:"Gear and Mist Effects Dangers", teaser:"Mist Beacon und Graywashing Barrier als Dangers", p:277,
  text:[
   "## Gear and Mist Effects Dangers",
   "Zwei Dangers für Ausrüstung und Mist-Effekte der Gatekeeper: das tragbare Mist Beacon und die Graywashing Barrier."],
  dangers:[
   { name:"Mist Beacon", rating:1, limits:"DECOMMISSION 2",
     text:["Rating: y+"],
     moves:[
      ["Intense Mist Field","Wenn das Mist Beacon einen Status legendärer Natur erleidet, verringere dessen Tier um 3."],
      ["Accelerated Cycle (+y)","Das Mist Beacon kann seinen Hard Move als Soft Move ausführen."],
      ["Higher Output (+y)","Der Hard Move des Mist Beacons verhängt einen thick-Mist-2-Status mit einer Obergrenze von 2."]],
     gm:["Intensify the Mist in the area (thick-Mist-1, dieser Status kann Tier 1 nicht überschreiten)"]},
   { name:"Graywashing Barrier", rating:1, limits:"PENETRATE 4",
     text:[
      "Graywashing Barriers sind unsichtbare Eindämmungsfelder, die manifestierte legendäre Kräfte herausfiltern, ohne die Bewegung zu behindern. Sie verbergen das im Feld enthaltene Legendäre vor der Außenwelt und verhindern, dass es hindurchkommt. Mythos-Kräfte und -Phänomene innerhalb des von der Barriere umschlossenen Bereichs bleiben unbeeinflusst und werden wie gewohnt wahrgenommen. Leider für die Gatekeeper beeinflusst Graywashing nicht unmanifestierte Kräfte, sodass ein Rift eine Graywashing Barrier leicht überqueren und seine Mythos-Kräfte auf der anderen Seite neu starten kann (dafür gibt es die Rift-Prevention-Teams). Hat der Rift jedoch Gegenstände oder Kräfte um sich herum beschworen, streift die Barriere sie ab – sofern sie stark genug ist.",
      "Eine Graywashing Barrier mit Size Factor 1 deckt typischerweise einen Raum ab, 2 – ein Haus oder ein kleines Gebäude, 3 – eine Straße oder einen Wolkenkratzer und 4 – einen Straßenblock der City oder eine kleine Nachbarschaft. Aufgrund des „Eierschalen-Effekts“ lässt ein mächtiger Mythos-Angriff an einer Stelle die Barriere nicht vollständig zusammenbrechen, sondern schlägt ein Loch hinein, durch das das Legendäre sich bewegen und wahrgenommen werden kann. Eine Barriere vollständig zum Einsturz zu bringen erfordert einen Flächeneffekt, der ihren Size Factor kontern kann (erreichbar über Optionen in den Moves Change the Game und Hit With All You’ve Got oder durch den Move Stop. Holding. Back.)."],
     moves:[
      ["Field Effect","Diese Danger hat einen Size Factor von 1."],
      ["Barrier","Wenn die Graywashing Barrier eine Mythos-Kraft blockiert, füge den von der Mythos-Kraft erzeugten Status ihrem penetrate-Spektrum hinzu. Die Barriere schaltet außerdem Conjurations ab, während sie hindurchgehen: Sie erleidet penetrated-1 für jeden Tag der Conjuration und burnt den Tag, wenn er nicht permanent ist. **Als Soft Move** entferne alle Status von penetrate. **Wenn penetrate das Maximum erreicht,** bricht die Barriere; alle Tiers oder Tags über dem penetrate-Spektrumsmaximum überqueren die Barriere und betreffen, falls relevant, das ursprüngliche Ziel."],
      ["Need More Power","Als Soft Move kann ein Gatekeeper, der die Graywashing Barrier kontrolliert, dem Umgebungs-Mist thin-Mist-1 zufügen, um das penetrate-Spektrumsmaximum um 1 zu erhöhen oder den Size Factor der Barriere um 1 zu erhöhen."]],
     gm:[
      "Overwhelm aware individuals who cross into the legendary side with the sights and sounds of previously hidden magical effects",
      "Surround anyone who crosses into the mundane side with peace and quiet"]}]},

 { id:"gk-agent-power-sets", name:"Agent Power Sets", teaser:"Geteilte Moves für Agenten-Dangers: Argent Clan Member, Mender, Rupturer, Section R1, Wildlife Control", p:278,
  text:[
   "## Agent Power Sets",
   "Ähnlich den Mythos Power Sets (SL-Toolkit, S. 141 und 152) stellen Agent Power Sets Moves dar, die verschiedene Agenten-Dangers aufgrund gemeinsamer Zugehörigkeit, Zuweisung oder Ausbildung teilen. Um ein Agent Power Set auf eine Danger anzuwenden, gib der Danger einfach die benutzerdefinierten Moves des Sets."],
  listen:[
   {t:"Argent Clan Member +y", pre:"", items:[
    "**Superiority Complex:** Wenn ein Argent Clan Member die Szene betritt, gib ihr feeling-superior-3.",
    "**High-Up Connections:** Als Hard Move markiert der Argent Clan Member einen Gatekeeper als Bedrohung für den Clan. Nach der nächsten Downtime erleidet die markierte Bedrohung harassed-by-superiors-2."]},
   {t:"Mender +y", pre:"", items:[
    "**Nice Handiwork:** Die Hard Moves dieser Danger verhängen sealed-Status, statt Tags zu burnen, mit einem Tier für jeden Mythos-Tag, der verbrannt würde."]},
   {t:"Rupturer +y", pre:"", items:[
    "**I Have It Under Control (+y):** Der Rupturer kann den Effekt ihrer Contracts um 1 oder 2 erhöhen und erhöht das Tier des thin-Mist-Status-Nebeneffekts um dieselbe Zahl.",
    "Study the target’s Mythos and gain valuable information on its abilities, weaknesses, limitations, and agenda. The Rupturer either learns the target’s Mysteries (als Leverage, Complicate Things Bigtime), or gains a tactical advantage (burne bis zu zwei Tags oder gib einen vorteilhaften Status mit Tier 2).",
    "Invoke one of her contracts (Effekt siehe S. 279, und gib dem Umgebungs-Mist thin-Mist-1)"]},
   {t:"Section R1 +y", pre:"", items:[
    "**Smuggler’s Bane:** Wenn sie am Stadtrand operiert, gib der Section R1 outrun:4 oder erhöhe ihr bestehendes outrun-Spektrumsmaximum um 1, je nachdem, was besser ist.",
    "Discover the location of all Relics within a block using a Relic-Attuned Perching Ward (Complicate Things, Bigtime)",
    "Take possession of a Relic",
    "Shroud a Relic in her possession (burne alle Tags im Relic)"]},
   {t:"Wildlife Control +y", pre:"", items:[
    "**Monster Hunter:** Im Kampf gegen monströse Rifts, Familiars oder Conjurations erhöhe die Effekte der Moves des Wildlife-Control-Agenten um 1.",
    "Discover the location of all Familiars and Conjurations within a block (Complicate Things, Bigtime)"]}],
  dangers:[]},

 { id:"gk-rupturing-contracts", name:"Sample Rupturing Contracts", teaser:"Beispiel-Contracts des Rupturer nach Kategorie", p:279,
  text:["## Sample Rupturing Contracts"],
  listen:[
   {t:"Adaptation", pre:"", items:[
    "**Skinwalker (Navajo-Gestaltwandler-Hexe):** Erhalte drei Tags zu einem bestimmten Tier oder Klauen, Hörner oder Reißzähne, die grizzly-wound-3 zufügen können. *Condition:* Erleide corrupted-1.",
    "**Gwydion (walisischer Magier):** Gib oder entferne drei Tiers oder Tags magischer Verwandlungs-Status, oder lasse Bäume lebendig werden, um entangled-3 oder impaled-3 zu geben. *Condition:* Fordere einen anderen Magier oder Krieger zum Einzelkampf heraus, oder stelle dich einer Armee.",
    "**Nikola Tesla (Erfinder):** Gib electrocuted-3, grounded-3 oder supercharged-3. *Condition:* Erleide fascinated-by-science-2."]},
   {t:"Bastion", pre:"", items:[
    "**Og King of the Bashan (biblischer Riese):** Verringere alle eingehenden Status, die durch Größe abgemildert würden, um drei. Verhänge crushed-3 als zusätzlichen Hard Move. *Condition:* Verkünde deine Überlegenheit.",
    "**Gorgoneion (Kopf einer Gorgone, der Schutz gewährt):** Gib aegis-3 einer Einzelperson oder aegis-2 einer kleinen Gruppe. *Condition:* Trenne den Kopf einer lebenden Schlange ab. Wirkt nur gegen Böses.",
    "**Tinfoil Hat (verhindert außerirdische Telepathie):** Verringere alle Gedankenkontroll-Status um 3 und verhindere das Ausgeben von Clues aus Telepathie. *Condition:* Trage einen Aluhut (tinfoil hat)."]},
   {t:"Conjuration", pre:"", items:[
    "**Ishtar (Göttin der Liebe, des Krieges und der politischen Macht):** Erschaffe eine neue Danger: Social Butterfly (SL-Toolkit, S. 144) mit dem Mind Controller Mythos Power Set (SL-Toolkit, S. 153). *Condition:* Nur um Macht zu gewinnen.",
    "**Chinese Imperial Guardian Lions:** Erschaffe eine neue Danger: Chinthe Statues (SL-Toolkit, S. 164). *Condition:* Nur gegen Eindringlinge.",
    "**Ravens of Death:** Erschaffe eine neue Danger mit Size Factor 3, hurt:2, banish:1, die als Hard Move distracted-1 oder peck-1 verhängen kann. *Condition:* Auf einem Schlachtfeld wurde Blut vergossen."]},
   {t:"Divination", pre:"", items:[
    "**Al-Khidr (Mystiker mit Geheimwissen im Koran):** Erhalte mystic-illumination-3 oder burne drei Tags von Illusion oder Lügen. *Condition:* Hilf Menschen in Not.",
    "**Tasseomancy (Kaffeesatzlesen):** Enthülle ein nützliches Geheimnis (auch der Gatekeeper, Complicate Things, Bigtime). *Condition:* Behalte die schmutzige Tasse, die ein vages Bild im Satz bewahrt, oder vergiss, was du erfahren hast.",
    "**Ratatoskr (Eichhörnchen, das den nordischen Weltenbaum Yggdrasil hinaufklettert):** Finde jemanden, der in einer Enclave, im Deep Mist oder zwischen den Welten existiert (Complicate Things, Bigtime). *Condition:* Versorge das Eichhörnchen mit saftigem Klatsch."]},
   {t:"Expression", pre:"", items:[
    "**Vesuvius and Pompeii:** Erschaffe the-floor-is-lava und gib allen Zielen im Bereich lava-burns-3. *Condition:* Wirkt nur bei unvorbereiteten Opfern.",
    "**Dracula:** Gib einem Opfer drained-2 und entferne zwei Tiers eines negativen Status. *Condition:* Beiße sie und trinke ihr Blut.",
    "**Anapo (Sioux-Geist der Morgendämmerung):** Erschaffe bright-light oder gib blinded-3 oder banished-3. *Condition:* Um die Dunkelheit zu vertreiben.",
    "**Eeyeekalduk (Inuit-Heilgott):** Entferne bis zu drei Tiers von Verletzungs- oder Krankheits-Status. *Condition:* Der Effekt kehrt sich um, wenn er bei Gesunden versucht wird.",
    "**Gremlins:** Sabotiere eine Maschine und gib ihr decommissioned-3. *Condition:* Schwer zu kontrollieren, sodass sie weiter Chaos unter anderen Maschinen anrichten, zumindest eine Weile."]},
   {t:"Mobility", pre:"", items:[
    "**Ghost:** Ignoriere vorübergehend physische Barrieren und erhalte hurt-or-subdue:–. *Condition:* Nicht in direktem Sonnenlicht.",
    "**Avalerion (mythischer heraldischer Vogel):** Bewege dich mit großer Geschwindigkeit bis hin zum Fliegen. Erhalte outrun:4. *Condition:* Stelle dich denen, die du verfolgst, offen entgegen, oder überbringe ihnen eine Nachricht.",
    "**Dōsojin (japanischer Wegahnen-Kami):** Ermögliche außergewöhnlich schnelles Reisen in öffentlichen Verkehrsmitteln, falls der Rupturer keine Exit Doors nutzen kann (Deny Them Something They Want). *Condition:* Beginne ein Gespräch mit jemandem, der mit dir reist."]},
   {t:"Subversion", pre:"", items:[
    "**Jenny Greenteeth (englische Flusshexe) oder Rusalka (slawischer Flussgeist):** Locke jemanden ahnungslos in Gefahr (burne bis zu drei Investigations- oder Awareness-Tags oder gib tempted-3; ist das Ziel ein NPC, dann Make Something Horrible Happen). *Condition:* Muss in der Nähe eines Gewässers angerufen werden."]}],
  dangers:[]}
]);
