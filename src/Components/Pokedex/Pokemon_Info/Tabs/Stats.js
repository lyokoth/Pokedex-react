import { StatColors } from "../../../Routing/api";
import React from 'react';
import { Progress, Flex, Heading, Card, Stack, Text } from "@chakra-ui/react";


const Stats = ({stats }) => {
    
    return (
        <Flex direction={'column'}>
        <Stack direction={{base: "column", md: "column"}}>
        <Heading size="md">Base Stats:</Heading>
            <Card className="stats" style={{textTransform: 'capitalize'}}>
                 {stats.map((stat, i) => (
                    <div key={i} className="stat-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <Text style={{ marginRight: '10px' }}>{stat.stat.name}: {stat.base_stat}</Text>
                  
                    <Progress 
                          
                          hasStripe value={stat.base_stat}
                          flex="1" 
                          isAnimated="true"
                           minWidth="100px"
                           size="md"
                       
                           backgroundColor={index => StatColors[stat.stat.name]}
                              />
                            
                                 </div>
                                        ))}

                        BST: {stats.reduce((acc, stat) => acc + stat.base_stat, 0)}
            </Card>
        </Stack>
    </Flex>
   
    );
                }
export default Stats;