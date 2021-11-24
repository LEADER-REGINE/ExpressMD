import React, { useState, useEffect } from 'react'
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import * as Typesense from 'typesense'


export default function ViewDoc({ route }) {
    const [data, setData] = useState();


    const { type } = route.params;
    let doctype = JSON.stringify(type);
    let client = new Typesense.Client({
        'nodes': [{
            'host': 'ipozelsk5jw4082up-1.a1.typesense.net', // where xxx is the ClusterID of your Typesense Cloud cluster
            'port': '443',
            'protocol': 'https'
        }],
        'apiKey': '0VlHcRLX2wdljc0juIVaJQRZ5pWpx0dK',
        'connectionTimeoutSeconds': 2
    })
    useEffect(() => {
        let isMounted = true;
        let search = {
            'q': doctype,
            'query_by': 'type',
        }
        client.collections('doctors')
            .documents()
            .search(search)
            .then(function (searchResults) {
                if (isMounted) setData(Object.keys(searchResults));
                console.log(data);
            })

        return () => { isMounted = false };
    }, []);


    /*  const listItems = searchRes.map((searchRes) =>
         <li key={searchRes.toString()}>
             {searchRes}
         </li>
     ); */

    return (
        <View>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(type)}</Text>

        </View>
    );
}