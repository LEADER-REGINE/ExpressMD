import React, { useState, useEffect } from 'react'
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from '../components/instantSearch/SearchBox';
import InfiniteHits from '../components/instantSearch/InfiniteHits';
import algoliasearch from 'algoliasearch/lite';

export default function ViewDoc({ route }) {
    const [data, setData] = useState();
    const { type } = route.params;
    let doctype = JSON.stringify(type);

    const searchClient = algoliasearch('06RC56CRHD', 'f57ffb5b8caf871af421b4da2b0e6d61');


    return (
        <View>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(type)}</Text>

            <View>
                <InstantSearch
                    searchClient={searchClient}
                    indexName="doctors"
                >
                    <SearchBox currentRefinement={JSON.stringify(type)} />
                    <InfiniteHits />
                </InstantSearch>
            </View>

        </View>
    );
}

