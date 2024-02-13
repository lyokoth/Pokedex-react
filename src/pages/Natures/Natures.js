import React, { useState } from 'react';
import { Grid, Flex, GridItem, Heading, Text, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { StatColors } from '../../Components/Routing/api';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import gridLogo from '../../assets/pokeball-white.png';

const natures = [
    {
        name: "Adamant",
        increasedStat: "attack",
        decreasedStat: "special-attack"
    },
    {
        name: "Bashful",
        increasedStat: "none",
        decreasedStat: "none"
    },
    {
        name: "Bold",
        increasedStat: "defense",
        decreasedStat: "attack"
    },
    {
        name: "Brave",
        increasedStat: "attack",
        decreasedStat: "speed"
    },
    {
        name: "Calm",
        increasedStat: "special-defense",   
        decreasedStat: "Attack"
    },
    {
        name: "Careful",
        increasedStat: "",
        decreasedStat: "Special Attack"
    },
    {
        name: "Docile",
        increasedStat: "None",
        
    },
    {
        name: "Gentle",
        increasedStat: "special-defense",
        decreasedStat: "Defense"
    },
    {
        name: "Hardy",
        increasedStat: "none",
        decreasedStat: "none"
    },
    {
        name: "Hasty",
        increasedStat: "speed",
        decreasedStat: "Defense"
    },
    {
        name: "Impish",
        increasedStat: "defense",
        decreasedStat: "Special Attack"
    },
    {
        name: "Jolly",
        increasedStat: "Speed",
        decreasedStat: "Special Attack"
    },
    {
        name: "Lax",
        increasedStat: "defense",
        decreasedStat: "Special Defense"
    },
    {
        name: "Lonely",
        increasedStat: "attack",
        decreasedStat: "Defense"
    },
    {
        name: "Mild",
        increasedStat: "special-attack",
        decreasedStat: "Defense"
    },
    {
        name: "Modest",
        increasedStat: "special-attack",
        decreasedStat: "Attack"
    },
    {
        name: "Naive",
        increasedStat: "speed",
        decreasedStat: "Special Defense"
    },
    {
        name: "Naughty",
        increasedStat: "attack",
        decreasedStat: "Special Defense"
    },
    {
        name: "Quiet",
        increasedStat: "special-attack",
        decreasedStat: "Speed"
    },
    {
        name: "Quirky",
        increasedStat: "None",
      
    },
    {
        name: "Rash",
        increasedStat: "special-attack",
        decreasedStat: "special-defense"
    },
    {
        name: "Relaxed",
        increasedStat: "defense",
        decreasedStat: "speed"
    },
    {
        name: "Sassy",
        increasedStat: "special-defense",
        decreasedStat: "speed"
    },
    {
        name: "Serious",
        increasedStat: "none",
        decreasedStat: "none"
    },
    {
        name: "Timid",
        increasedStat: "speed",
        decreasedStat: "attack"
    }
];

const searchNatures = (natures, query) => {
  if (!query) {
    return natures;
  }
  return natures.filter((nature) => {
    const natureName = nature.name.toString();
    const increasedStat = nature.increasedStat.toString();
    const decreasedStat = nature.decreasedStat.toString();
    return natureName.includes(query) || increasedStat.includes(query) || decreasedStat.includes(query);
  });
};

const NatureCard = ({ nature }) => {
  let increasedStatColor = StatColors[nature.increasedStat];
  let decreasedStatColor = StatColors[nature.decreasedStat];

  if (nature.increasedStat === "none" && nature.decreasedStat === "none") {
    increasedStatColor = "#000000";
    decreasedStatColor = "#000000";
  }

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={6}
      borderRadius="sm"
      w="50%"
      overflow="hidden"
      bg={StatColors[nature.increasedStat]}
      boxShadow="lg"
      color="black"
      p="4"
      m="4"
      bgImage={gridLogo} 
    >
      <GridItem w='100%' h='80px'>
        <Flex direction="column">
          <Heading as="h2" size="lg" mb="2">{nature.name}</Heading>
          <Text>
            <AddIcon color={increasedStatColor} />
            {nature.increasedStat}</Text>
          <Text>
            <MinusIcon color={decreasedStatColor} />
            {nature.decreasedStat}</Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const NatureCardList = () => {
  const [query, setQuery] = useState("");

  const filteredNatures = searchNatures(natures, query);
  return (
    <div>
      <Flex align="center">
        <Input
          type="text"
          placeholder="Search by Nature or by Stat..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          w="50%"
          m="4"
          p="4"
          bg="white"
          boxShadow="lg"
          borderRadius="sm"
        />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          onClick={() => {}}
          bg="white"
          boxShadow="lg"
          borderRadius="sm"
        />
      </Flex>
      {filteredNatures.map((nature, i) => (
        <NatureCard key={i} nature={nature} />
      ))}
    </div>
  );
};

export default NatureCardList;
