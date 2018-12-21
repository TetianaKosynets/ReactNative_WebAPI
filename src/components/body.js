import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Body extends Component {
    renderHamper(hamper) {

        return hamper.map(hamper => {
            return (
                <Text key={hamper.hamperId} style={styles.text}>
                    {hamper.hamperName}
                </Text>
            )
        })

    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHamper(this.props.results)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    text: {
        fontSize: 18
    }
});

export default Body;
