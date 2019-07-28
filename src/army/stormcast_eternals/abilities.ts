import { DURING_SETUP, END_OF_MOVEMENT_PHASE, COMBAT_PHASE, SHOOTING_PHASE } from 'types/phases'
import { IEffects } from 'types/data'

// General Allegiance Abilities (always active regardless of army composition)
const Abilities: IEffects[] = [
  {
    name: `Scions of the Storm`,
    desc: `Setup 1 unit in the Celestial Realm for every unit you setup on the battlefield. At the end of your movement phase you can set up one or more reserve units on the battlefield more than 9" from the enemy. Any units not setup before the 4th Battleround are slain.`,
    when: [DURING_SETUP, END_OF_MOVEMENT_PHASE],
  },
  {
    name: `Shock and Awe`,
    desc: `Subtract 1 from hit rolls for attacks that target any unit setup this turn via SCIONS OF THE STORM.`,
    when: [COMBAT_PHASE, SHOOTING_PHASE],
  },
]

export default Abilities