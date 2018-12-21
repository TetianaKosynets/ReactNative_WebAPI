import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as HamperService from './src/services/hampers';

import Header from './src/components/header';
import Body from './src/components/body';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search_term: '',
            results: []
        };
    }

    onSearchChange(value) {
        this.setState({ search_term: value });
    }

    onSearch() {
            HamperService.searchHamper(
                response => {
                    this.setState({ results: response.Search });
                }
            );
    }
     
    render() {
        return (
            <View style={styles.container}>
                <Header
                    input={this.state.search_term}
                    onInputChange={this.onSearchChange.bind(this)}
                    onSearch={this.onSearch.bind(this)}
                />
                <Body results={this.state.results}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF4D3',
        paddingTop: 24
    },
});
