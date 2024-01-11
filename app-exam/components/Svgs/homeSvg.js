import React from "react";
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

const HomeSvg = props => {
    return (
        <View>
            <Svg viewBox="0 -960 960 960" height={props.height} width={props.width} strokeWidth={props.strokeWidth}>
                <Path 
                    d="M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z"
                    fill="#EF8A17"
                />
            </Svg>
        </View>
    );
}

export default HomeSvg;