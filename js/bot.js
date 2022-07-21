console.log("calculated total item lists to be used:",higherItemLists);

function delay(time) {
   return new Promise(resolve => setTimeout(resolve, time));
 }

//  window.addEventListener('load', function () {
//    for (const i in higherItemLists.get("helmet")) {
//       console.log("test")
//       console.log(higherItemLists[i])
//       document.getElementById("helmet-choice").value = higherItemLists[i]
//       calculateBuild()
//       delay(1000).then
//       continue;
//    }
//  })




function dumbNameChangeLater() {
   console.log("STARTING.")
   higherItemLists = new Map([
      ["helmet",["Blue Mask","Caesura","Cumulonimbus","Sparkweaver"]], //,"Third Eye","Cancer֎","Spectre","Anamnesis","Sizzling Shawl"
      ["chestplate",["Libra","Far Cosmos","Soul Signal","Medeis","Time Rift"]],
      ["leggings",["Greaves of the Veneer","Vaward","Dark Shroud","Anxiolytic","Ophiuchus","Adrenaline","Seipodon","Asphyxia"]],
      ["boots",["Stardew","Pro Tempore","Capricorn","Magnet Repulsor"]],
      ["necklace",["Tenuto","Diamond Fusion Necklace","Diamond Hydro Necklace"]],
      ["ring",["Facile","Diamond Hydro Ring","Prism","Moon Pool Circlet"]],
      ["bracelet",["Dragon's Eye Bracelet","Prowess"]]
   ])
   console.log("STARTING..")
   var count = 0
   console.log("STARTING...")
   for (const i in higherItemLists.get("helmet")) {
      console.log("BOT: testing ",higherItemLists.get("helmet").reverse()[i],". Percent done: ",100*i/higherItemLists.get('helmet').length,"%")
      document.getElementById("helmet-choice").value = higherItemLists.get("helmet")[i]

      for (const j in higherItemLists.get("chestplate")) {
         console.log("BOT: reached ",higherItemLists.get("chestplate")[j],"at",count,". Percent done: ",100*(i/higherItemLists.get("helmet").length+j/(higherItemLists.get("helmet").length*higherItemLists.get("chestplate").length)),"%")
         document.getElementById("chestplate-choice").value = higherItemLists.get("chestplate")[j]

         for (const k in higherItemLists.get("leggings")) {
            //console.log("BOT: reached ",higherItemLists.get("leggings")[k],count)
            document.getElementById("leggings-choice").value = higherItemLists.get("leggings")[k]

            for (const l in higherItemLists.get("boots")) {
               //console.log("BOT: with ",l,higherItemLists.get("boots")[l])
               document.getElementById("boots-choice").value = higherItemLists.get("boots")[l]

               for (const m in higherItemLists.get("bracelet")) {
                  //console.log("BOT: with ",m,higherItemLists.get("bracelet")[m])
                  document.getElementById("bracelet-choice").value = higherItemLists.get("bracelet")[m]

                  for (const n in higherItemLists.get("necklace")) {
                     //console.log("BOT: with ",n,higherItemLists.get("necklace")[n])
                     document.getElementById("necklace-choice").value = higherItemLists.get("necklace")[n]

                     for (const o in higherItemLists.get("ring")) {
                        //console.log("BOT: with ",n,higherItemLists.get("ring")[o])
                        document.getElementById("ring1-choice").value = higherItemLists.get("ring")[o]

                        for (var p = o; p < higherItemLists.get("ring").length; p++) { //Finds unique combination of rings
                           //console.log("BOT: with ",p,higherItemLists.get("ring")[p])
                           document.getElementById("ring2-choice").value = higherItemLists.get("ring")[p]

                           count++

                           document.getElementById("weapon-choice").vaule = "Lament"
                           document.getElementById("weapon-powder").value = "w6w6w6"


                           calculateBuild()
                           delay(1000)

                           let stat = player_build.getStats();
                           
                           if (stat.get("skillPoints") > 210) {
                              continue;
                           }
                           const available = levelToSkillPoints(player_build.level) - player_build.assigned_skillpoints
                           if (available > 0) {
                              //console.log("assigned def:"+available)
                              document.getElementById("def-skp").value = parseInt(document.getElementById("def-skp").value) + available
                              updateStats();
                              delay(1000)
                           }
                           manaSustain = (stat.get("manaRegen")*2)+(stat.get("manaSteal")-4)
                           if (!(
                              ((stat.get("EHP")[0] > 40000 && stat.get("EHP")[1] > 30000) || (stat.get("EHP")[1] > 35000 && stat.get("spellHeal")[0] > 3300)) && 
                              stat.get("spellDamage")[1] > 22000 && 
                              stat.get("walkSpeed") > -10 && 
                              ((stat.get("spellCost")[2] > 2 && manaSustain > 12) || (manaSustain >= 8) || (stat.get("spellCost")[2] < 2 && manaSustain < 8))
                              )) {
                              if (count%1000 == 0) {
                                 console.log(count+"th iteration failed, build:",manaSustain,stat.get("URL"))
                              }
                              continue;
                           }
                           //console.log("BOT: Manually assigned skill points ",player_build.base_skillpoints)

                           //useless it seems
                           // console.log("Spell Cost", player_build.getSpellCost())
                           // console.log("Base Spell Cost", player_build.getBaseSpellCost())

                           //IMPORTANT:melee stats[10] = average dps, melee_stats[11] = attack speed
                           //[0]neutral, [1]earth, [2]thunder, [3]water, [4]fire, [5]air
                           //    [nonCrit min, nonCrit max, crit min, crit max]

                           //[6][total nonCrit min, total nonCrit max, nonCrit change]
                           //[7][total crit min, total crit max, crit chance]
                           //[8]normal dps, [9]crit dps, melee_stats[12] = single hit average
                           for (var index = -1; index<=n; index++) {
                              console.log("=======NEW BUILD========")
                           }
                           
                           console.log(`BOT: Damage: ${Math.round(stat.get("spellDamage")[1])} (${stat.get("spellCost")[2]} mana)`)
                           console.log(`BOT: Mana Sustain ${manaSustain}, ${stat.get("manaRegen")} mana regen / ${stat.get("manaSteal")-6} mana steal`)
                           console.log(`BOT: EHP: ${Math.round(stat.get("EHP")[0])}/${Math.round(stat.get("EHP")[1])} (${stat.get("spellHeal")[0]} first pulse)`)
                           console.log(`BOT: Misc. : ${stat.get("walkSpeed")} walk speed`)
                           console.log(stat.get("URL"))
                           // console.log("BOT: Melee Stats", player_build.getMeleeStats())

                           // //IMPORTANT:defense stats[0] = total hp, [1][0] = ehp, [1][1] = ehp no agi, [2] = hp regen, [3][0] = effective hp regen, [5] = array of elemental defenses
                           // console.log("BOT: Defense Stats", player_build.getDefenseStats())
                           console.log("========================")
                        }
                     }
                  }
               }
            }
         }
      }
   }
   console.log("Completed "+count+" iterations")
}


function returnResult() {
   let stat = player_build.getStats();
   manaSustain = (stat.get("manaRegen")*2)+(stat.get("manaSteal"))
   console.log(`BOT: Damage: ${Math.round(stat.get("spellDamage")[1])} (${stat.get("spellCost")[2]} mana)`)
   console.log(`BOT: Mana Sustain ${manaSustain}, ${stat.get("manaRegen")} mana regen / ${stat.get("manaSteal")} mana steal`)
   console.log(`BOT: EHP: ${Math.round(stat.get("EHP")[0])}/${Math.round(stat.get("EHP")[1])} (${stat.get("spellHeal")[0]} first pulse)`)
   console.log(`BOT: Misc. : ${stat.get("walkSpeed")} walk speed`)
   console.log(stat.get("URL"))
}


// new Map() of add/sub skill point gear
// for (skillPointModifierGear) {
//     for (skillPointModifierAcces) { //possibility for break point here
//         .... {
// //at this point, there is 219*199*188*198*116*116*89*74 = 1.4376658e+17 combinations
// //with estimated 15ms each, it would take 70million years to sort through
// //we need to put it down right there, hypothetically look for gear that is worse
//               if (too many skill points) {
//                   break
//               }
//               remainGear = sort through map list of gear that matches current skill requirements
//               note down the highest value of each stat of each piece
//               if (addingHighestValueIsNotEnough) {
//                    break
//               }
//               for (remainGear) {
//                    for (remainGear) {
                       
         
// //hypothetical possible problem that having a weapon out can let you put on stronger armor. look into it
