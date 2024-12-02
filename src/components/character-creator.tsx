"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { gameData, brigOutcomes } from './game-data';

const OutcomeDisplay = ({ outcome, traits, contacts, enemies }) => {
  if (outcome.risk) {
    return (
      <div className="text-sm mt-2">
        <div className="mb-2">
          <span className="font-semibold">Success:</span>
          <div className="pl-2">
            {outcome.success.traits && (
              <div>
                <span className="font-semibold">Traits: </span>
                {outcome.success.traits.map((trait, index) => (
                  <span 
                    key={index} 
                    className={traits.includes(trait) ? "text-red-500" : ""}
                  >
                    {trait}{index < outcome.success.traits.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            )}
            {outcome.success.money && (
              <div>
                <span className="font-semibold">Money: </span>
                <span>${outcome.success.money}</span>
              </div>
            )}
            {outcome.success.contacts && (
              <div>
                <span className="font-semibold">Contacts: </span>
                {outcome.success.contacts.map((contact, index) => (
                  <span 
                    key={index}
                    className={contacts.includes(contact) ? "text-red-500" : ""}
                  >
                    {contact}{index < outcome.success.contacts.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            )}
            {outcome.success.items && (
              <div>
                <span className="font-semibold">Items: </span>
                {outcome.success.items.join(", ")}
              </div>
            )}
          </div>
        </div>
        <div>
          <span className="font-semibold">Failure:</span>
          <div className="pl-2">
            {outcome.failure.brig && <div>Go to Brig</div>}
            {outcome.failure.money && <div>Lose ${Math.abs(outcome.failure.money)}</div>}
            {outcome.failure.items && (
              <div>
                <span className="font-semibold">Items: </span>
                {outcome.failure.items.join(", ")}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-sm mt-2">
      {outcome.traits && (
        <div>
          <span className="font-semibold">Traits: </span>
          {outcome.traits.map((trait, index) => (
            <span 
              key={index} 
              className={traits.includes(trait) ? "text-red-500" : ""}
            >
              {trait}{index < outcome.traits.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      )}
      {outcome.money && (
        <div>
          <span className="font-semibold">Money: </span>
          <span>${outcome.money}</span>
        </div>
      )}
      {outcome.contacts && (
        <div>
          <span className="font-semibold">Contacts: </span>
          {outcome.contacts.map((contact, index) => (
            <span 
              key={index}
              className={contacts.includes(contact) ? "text-red-500" : ""}
            >
              {contact}{index < outcome.contacts.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      )}
      {outcome.enemies && (
        <div>
          <span className="font-semibold">Enemies: </span>
          {outcome.enemies.map((enemy, index) => (
            <span 
              key={index}
              className={enemies.includes(enemy) ? "text-red-500" : ""}
            >
              {enemy}{index < outcome.enemies.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      )}
      {outcome.brig && (
        <div>
          <span className="font-semibold">Result: </span>
          <span>Go to Brig</span>
        </div>
      )}
    </div>
  );
};

const CharacterCreator = () => {
  const [traits, setTraits] = useState([]);
  const [money, setMoney] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [items, setItems] = useState([]);
  const [age, setAge] = useState(20);
  const [inBrig, setInBrig] = useState(false);

  const handleBrig = () => {
    setInBrig(true);
    
    // Add guaranteed traits
    setTraits(prev => {
      const newTraits = [...prev];
      brigOutcomes.guaranteedTraits.forEach(trait => {
        if (!newTraits.includes(trait)) {
          newTraits.push(trait);
        }
      });

      // Handle melee skill chance
      if (Math.random() < brigOutcomes.meleeChance) {
        if (!newTraits.includes(brigOutcomes.meleeSkill)) {
          newTraits.push(brigOutcomes.meleeSkill);
        }
      }

      // Handle random trait chance
      if (Math.random() < brigOutcomes.randomTraitChance) {
        const randomTrait = brigOutcomes.possibleTraits[
          Math.floor(Math.random() * brigOutcomes.possibleTraits.length)
        ];
        if (!newTraits.includes(randomTrait)) {
          newTraits.push(randomTrait);
        }
      }

      // Handle chronic scar chance
      if (Math.random() < brigOutcomes.chronicScarChance) {
        if (!newTraits.includes(brigOutcomes.chronicScar)) {
          newTraits.push(brigOutcomes.chronicScar);
        }
      }

      // Handle rare scar chance
      if (Math.random() < brigOutcomes.rareScarChance) {
        const rareScar = brigOutcomes.rareScars[
          Math.floor(Math.random() * brigOutcomes.rareScars.length)
        ];
        if (!newTraits.includes(rareScar)) {
          newTraits.push(rareScar);
        }
      }

      // Handle negative trait chance
      if (Math.random() < brigOutcomes.negativeTraitChance) {
        const negativeTrait = brigOutcomes.negativeTraits[
          Math.floor(Math.random() * brigOutcomes.negativeTraits.length)
        ];
        if (!newTraits.includes(negativeTrait)) {
          newTraits.push(negativeTrait);
        }
      }

      return newTraits;
    });

    // Handle aging
    if (Math.random() < brigOutcomes.agingChance) {
      const extraYears = Math.floor(Math.random() * 
        (brigOutcomes.agingRange[1] - brigOutcomes.agingRange[0] + 1)) + 
        brigOutcomes.agingRange[0];
      setAge(prevAge => prevAge + extraYears);
    }
  };

  const handleChoice = (adventure, choice) => {
    const outcome = gameData[adventure][choice];
    
    if (outcome.risk) {
      const success = Math.random() >= 0.5;
      const result = success ? outcome.success : outcome.failure;
      
      if (result.traits) {
        setTraits(prev => {
          const newTraits = [...prev];
          result.traits.forEach(trait => {
            if (!newTraits.includes(trait)) {
              newTraits.push(trait);
            }
          });
          return newTraits;
        });
      }
      
      if (result.money) {
        setMoney(prev => prev + result.money);
      }
      
      if (result.contacts) {
        setContacts(prev => {
          const newContacts = [...prev];
          result.contacts.forEach(contact => {
            if (!newContacts.includes(contact)) {
              newContacts.push(contact);
            }
          });
          return newContacts;
        });
      }
      
      if (result.enemies) {
        setEnemies(prev => {
          const newEnemies = [...prev];
          result.enemies.forEach(enemy => {
            if (!newEnemies.includes(enemy)) {
              newEnemies.push(enemy);
            }
          });
          return newEnemies;
        });
      }

      if (result.items) {
        setItems(prev => {
          const newItems = [...prev];
          result.items.forEach(item => {
            if (!newItems.includes(item)) {
              newItems.push(item);
            }
          });
          return newItems;
        });
      }

      if (result.brig) {
        handleBrig();
      }
      
      return;
    }

    if (outcome.brig) {
      handleBrig();
      return;
    }
    
    if (outcome.traits) {
      setTraits(prev => {
        const newTraits = [...prev];
        outcome.traits.forEach(trait => {
          if (!newTraits.includes(trait)) {
            newTraits.push(trait);
          }
        });
        return newTraits;
      });
    }
    
    if (outcome.money) {
      setMoney(prev => prev + outcome.money);
    }
    
    if (outcome.contacts) {
      setContacts(prev => {
        const newContacts = [...prev];
        outcome.contacts.forEach(contact => {
          if (!newContacts.includes(contact)) {
            newContacts.push(contact);
          }
        });
        return newContacts;
      });
    }
    
    if (outcome.enemies) {
      setEnemies(prev => {
        const newEnemies = [...prev];
        outcome.enemies.forEach(enemy => {
          if (!newEnemies.includes(enemy)) {
            newEnemies.push(enemy);
          }
        });
        return newEnemies;
      });
    }

    if (outcome.items) {
      setItems(prev => {
        const newItems = [...prev];
        outcome.items.forEach(item => {
          if (!newItems.includes(item)) {
            newItems.push(item);
          }
        });
        return newItems;
      });
    }
  };

  const resetCharacter = () => {
    setTraits([]);
    setMoney(0);
    setContacts([]);
    setEnemies([]);
    setItems([]);
    setAge(20);
    setInBrig(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Character Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Current Money: ${money}</h3>
              <h3 className="font-bold mb-2">Age: {age}</h3>
              <h3 className="font-bold mb-2">Traits:</h3>
              <ScrollArea className="h-40">
                <ul className="list-disc pl-4">
                  {traits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
            <div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Contacts:</h3>
                <ul className="list-disc pl-4">
                  {contacts.map((contact, index) => (
                    <li key={index}>{contact}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">Enemies:</h3>
                <ul className="list-disc pl-4">
                  {enemies.map((enemy, index) => (
                    <li key={index}>{enemy}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Items:</h3>
                <ul className="list-disc pl-4">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(gameData).map(([adventure, choices]) => (
          <Card key={adventure}>
            <CardHeader>
              <CardTitle>{adventure}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {Object.entries(choices).map(([choice, outcome]) => (
                  <div key={choice} className="border rounded-lg p-3">
                    <Button
                      onClick={() => handleChoice(adventure, choice)}
                      variant="outline"
                      className="w-full text-left justify-start mb-2"
                    >
                      {choice}
                    </Button>
                    <OutcomeDisplay 
                      outcome={outcome} 
                      traits={traits} 
                      contacts={contacts} 
                      enemies={enemies}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button 
        onClick={resetCharacter}
        variant="destructive"
        className="w-full md:w-auto"
      >
        Reset Character
      </Button>
    </div>
  );
};

export default CharacterCreator;
