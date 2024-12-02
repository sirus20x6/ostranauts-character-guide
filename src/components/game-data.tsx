export const gameData = {
  "Crackdown": {
    "Hide in Air Vent": {
      traits: ["Skilled in Stealth", "Skilled in Intrusion", "Craven"],
      money: 246,
      contacts: ["Shipbreaker Friend"]
    },
    "Bluff": {
      traits: ["Skilled in Forgery", "Skilled in Acting"],
      money: 500
    },
    "Nothing to Hide": {
      traits: ["Skilled in Street Etiquette", "Honest", "Arrogant"],
      contacts: ["Law Friend"]
    },
    "Fake Alarm": {
      traits: ["Skilled in Hacking", "Genius"]
    },
    "RISK: Be a Hero (Unarmed)": {
      risk: true,
      success: {
        traits: ["Skilled in Archery", "Brave"],
        money: 1750,
        enemies: ["Law Enemy"]
      },
      failure: {
        brig: true
      }
    }
  },
  "Daily Grind": {
    "Hacking": {
      traits: ["Skilled in Hacking"],
      enemies: ["Law Enemy"]
    },
    "Watch Movies": {
      traits: ["Observant", "Skilled in Acting"],
      contacts: ["Manager Friend"]
    },
    "Suit Maintenance": {
      traits: ["Skilled in EVA", "Patient", "Skilled in Physics", "Finicky"]
    },
    "Fight Club": {
      traits: ["Skilled in Unarmed", "Brave", "Masochist", "Strained Back"],
      contacts: ["Law Friend"]
    },
    "Shipspotting": {
      traits: ["Complacent", "Skilled in Sensor Ops", "Shy"],
      money: 650
    },
    "Work as Electrician": {
      traits: ["Skilled in Electrical Engineering", "Patient"],
      money: 200
    }
  },
  "King Incognito": {
    "Start Riot": {
      traits: ["Skilled in Folk Etiquette", "Skilled in Unarmed Melee", "Skilled in Persuasion", "Charismatic", "Leader"],
      money: 246,
      enemies: ["Bartender Enemy", "Manager Enemy"]
    },
    "Pick Pocket": {
      traits: ["Skilled in Stealth", "Observant", "Patient", "Selfish"],
      money: 250
    },
    "Mug Them": {
      traits: ["Strong"],
      brig: true
    },
    "Seduce Them": {
      traits: ["Skilled in Cooking", "Skilled in Dance", "Beautiful"],
      contacts: ["Ex-Lover"]
    },
    "Get Them Drunk": {
      traits: ["Skilled in Song", "Liar", "Slovenly"],
      money: 850,
      contacts: ["Manager Contact"]
    },
    "RISK: Hack Them (Hacking)": {
      risk: true,
      success: {
        traits: ["Observant", "Brave", "Diligent", "Skilled in Software Engineering", "Skilled in Street Etiquette", "Skilled in Stealth"],
        money: 2850,
        enemies: ["Manager Enemy"]
      },
      failure: {
        brig: true
      }
    }
  },
  "Labor Barge Locker": {
    "RISK: Force the lock (Strong)": {
      risk: true,
      success: {
        money: -200,
        contacts: ["Shipbreaker Friend"],
        items: ["Laser Torch"]
      },
      failure: {
        money: -2300
      }
    },
    "Hack the Lock": {
      traits: ["Leader", "Skilled in Hacking"],
      contacts: ["Shipbreaker Contact"]
    },
    "Cut Hole in Crate": {
      money: 700,
      traits: ["Severe Burns"]
    },
    "Mislabel Crate": {
      traits: ["Skilled in Street Etiquette", "Leader"],
      contacts: ["Shipbreaker Friend", "Shipbreaker Friend"]
    },
    "Report Poor Security": {
      traits: ["Skilled in Business Admin", "Loyal"],
      contacts: ["Manager Contact"]
    }
  },
  "Occupational Hazard": {
    "Hack Engine": {
      traits: ["Skilled in Hacking", "Genius"],
      contacts: ["Criminal Contact"]
    },
    "Take the Stick": {
      traits: ["Skilled in Spaceship Piloting", "Skilled in EVA", "Injury"],
      contacts: ["Shipbreaker Friend"]
    },
    "Jury Rig Engine": {
      traits: ["Skilled in Mechanical Engineering", "Brave", "Coordinated"],
      money: -150
    },
    "Troubleshoot Engine": {
      traits: ["Skilled in Starship Piloting"],
      money: 850
    },
    "RISK: Abandon Ship (EVA)": {
      risk: true,
      success: {
        money: -1050,
        traits: ["Severe Burns"]
      },
      failure: {
        items: ["EVA Suit"]
      }
    }
  },
  "Poker Game": {
    "RISK: Call the Bluff (Gambling)": {
      risk: true,
      success: {
        items: ["Volatile Ship (Legal)"]
      },
      failure: {
        money: -9000
      }
    },
    "Fold": {
      money: 900
    },
    "Cheat": {
      traits: ["Aberrant Wound"],
      money: 1500,
      enemies: ["Law Enemy"]
    },
    "Grab the Key and Run": {
      items: ["Volatile Ship (Stolen)"],
      money: -6500,
      enemies: ["Random Enemy", "Random Enemy", "Random Enemy"],
      endCareer: true
    },
    "Call on Technicality": {
      traits: ["Skilled in Gambling"],
      money: 300
    }
  },
  "Rare Salvage": {
    "Notify Corporate": {
      traits: ["Follower", "Skilled in Business Admin"],
      contacts: ["Manager Contact"]
    },
    "Black Market": {
      traits: ["Skilled in Street Etiquette"],
      money: 200,
      contacts: ["Criminal Contact"],
      enemies: ["Law Enemy"]
    },
    "Bribe the Boss": {
      traits: ["Skilled in Oligarch Etiquette"],
      money: 750,
      enemies: ["Law Enemy"]
    },
    "Smash it": {
      traits: ["Strong", "Scar: Cargo Accident", "Skilled in Armed Melee", "Cruel", "Pessimist"]
    },
    "RISK: Take for yourself (Patient)": {
      risk: true,
      success: {
        items: ["Miura Hydra Intake Regulator"]
      },
      failure: {
        brig: true
      }
    }
  },
  "Shady Deal": {
    "Gather Intel for Cops": {
      traits: ["Skilled in Street Etiquette", "Honest"],
      contacts: ["Law Friend"]
    },
    "RISK: Join the Scheme (Street Smarts)": {
      risk: true,
      success: {
        money: 4500
      },
      failure: {
        brig: true
      }
    },
    "Backstab Them": {
      traits: ["Treacherous"],
      money: 900,
      enemies: ["Criminal Enemy"]
    },
    "Report to Corporate": {
      traits: ["Selfish"],
      money: 900,
      contacts: ["Manager Contact", "Law Friend"]
    },
    "Instigate Violence": {
      traits: ["Tough", "Skilled in Armed", "Skilled in Unarmed", "Injury"],
      money: 900,
      enemies: ["Criminal Enemy"]
    }
  }
};

export const brigOutcomes = {
  guaranteedTraits: ["Prisoner Past"],
  meleeChance: 0.7,
  meleeSkill: "Skilled in Melee Unarmed",
  randomTraitChance: 0.2,
  possibleTraits: ["Craven", "Brave", "Apathetic", "Observant", "Patient", "Impatient"],
  chronicScarChance: 0.9,
  chronicScar: "Chronic Scar: Cuffs",
  rareScarChance: 0.15,
  rareScars: ["Chronic Scar: Activism", "Chronic Scar: Brand Thief", "Chronic Scar: Industrial"],
  negativeTraitChance: 0.1,
  negativeTraits: ["Quitter", "Follower", "Pushover", "Treacherous", "Selfish", "Vengeful", "Agliophobic"],
  agingChance: 0.5,
  agingRange: [1, 3]
};
