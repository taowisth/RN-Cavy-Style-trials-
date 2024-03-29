import * as React from 'react'
import { Text, View, TextInput, TouchableOpacity  } from 'react-native';
import PropTypes from 'prop-types';


import {searchInputStyles as styles} from "./styles";

class SearchInput extends React.Component{

    render() {
        const {placeholder, onPress, onChangeText, style } = this.props;
        return(
            <View style={[styles.container, style]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.button}>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,

    onPress: PropTypes.func,
    onChangeText: PropTypes.func,

    style:PropTypes.any,
};

export default SearchInput;
