import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { Image } from "react-native";

const jobtTypes = ["Full-Time", "Part-Time", "Contract"];

const Welcome = () => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full-Time");
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Welcome Abhinav</Text>
                <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onChange={() => {
                            console.log("searching...");
                        }}
                        placeholder="Search for jobs"
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                    data={jobtTypes}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text style={styles.tabText(activeJobType, item)}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

export default Welcome;
