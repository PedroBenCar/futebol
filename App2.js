// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const Jogadores = ({ navigation, route }) => {
    const { dados } = route.params;

    const footballPlayers = [
        {
        name: "Cristiano Ronaldo",
        position: "Forward",
        age: 36,
        },
        {
        name: "Lionel Messi",
        position: "Attacking Midfielder",
        age: 34,
        },
        {
        name: "Neymar Jr.",
        position: "Forward",
        age: 29,
        },
        {
        name: "Kylian Mbappé",
        position: "Forward",
        age: 23,
        },
        {
        name: "Sergio Ramos",
        position: "Defender",
        age: 35,
        },
        {
        name: "Kevin De Bruyne",
        position: "Midfielder",
        age: 30,
        },
        {
        name: "Robert Lewandowski",
        position: "Forward",
        age: 32,
        },
        {
        name: "Virgil van Dijk",
        position: "Defender",
        age: 30,
        },
        {
        name: "Luka Modric",
        position: "Midfielder",
        age: 35,
        },
        {
        name: "Erling Haaland",
        position: "Forward",
        age: 21,
        },
        ];
        //footballPlayers
  return (
    <View>
            <View>
            <Text>Dados Cadastrados:</Text>
            <FlatList
                data={dados}
                renderItem={(item) => {
                    return (
                        <View>
                
                            <FlatList
                                data={footballPlayers}
                                renderItem={(item) => {

                                    return (
                                        <View>
                                            <Text> name {item.item.name} </Text>
                                            <Text> position {item.item.position} </Text>
                                            <Text> age {item.item.age} </Text>
                                        </View>
                                    )
                                }}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
            </View>
    </View>
  );
};

export default Jogadores;
