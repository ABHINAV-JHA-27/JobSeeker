import { useRouter } from "expo-router";
import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import { SIZES, COLORS } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size={"large"} />
                ) : error ? (
                    <Text>Something went wrong!</Text>
                ) : (
                    <FlatList
                        data={[1, 2, 3, 4]}
                        keyExtractor={(item) => item?.job_id}
                        renderItem={({ item }) => (
                            <PopularJobCard item={item} />
                        )}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    );
};

export default Popularjobs;
