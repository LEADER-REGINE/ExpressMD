import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-native';
import Highlight from './Highlight';

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    item: {
        padding: 10,
        flexDirection: 'column',
    },
    titleText: {
        fontWeight: 'bold',
    },
});

const InfiniteHits = ({ hits, hasMore, refine }) => (
    <FlatList
        data={hits}
        keyExtractor={item => item.objectID}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReached={() => hasMore && refine()}
        renderItem={({ item }) => (
            <View style={styles.item}>
                <Text style={styles.titleText}>
                    <Highlight attribute="type" hit={item} />
                </Text>

                <Text>
                    <Highlight attribute="lastname" hit={item} />
                </Text>
                <Text>
                    <Highlight attribute="firstname" hit={item} />
                </Text>
            </View>
        )}
    />
);

InfiniteHits.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    hasMore: PropTypes.bool.isRequired,
    refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);