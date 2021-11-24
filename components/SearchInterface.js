import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
        apiKey: "tGTueBt9wQzJZpJ25xpxiVf9LPCqqQYR", // Be sure to use a Search API Key
        nodes: [
            {
                host: 'ipozelsk5jw4082up-1.a1.typesense.net', // where xxx is the ClusterID of your Typesense Cloud cluster
                port: '443',
                protocol: 'https'
            },
        ],
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  queryBy is required.
    additionalSearchParameters: {
        queryBy: "type,firstName,lastName",
    },
})
const searchClient = typesenseInstantsearchAdapter.searchClient
export default function SearchInterface() {
    const Hit = ({ hit }) => (
        <Text>
            {hit.title} - {hit.description}
        </Text>
    )
    return (
        <InstantSearch searchClient={searchClient} indexName="pages_v1">
            <SearchBox />
            <Stats />
            <Hits hitComponent={Hit} />
        </InstantSearch>
    )
}