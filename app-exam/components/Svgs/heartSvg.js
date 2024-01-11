import React from "react";
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

const HeartSvg = props => {
    return (
        <View>
            <Svg viewBox="0 -960 960 960" height={props.height} width={props.width} strokeWidth={props.strokeWidth}>
                <Path 
                    d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
                    stroke={(props.filled) ? "none" : "#EF8A17"}
                    fill={(props.filled) ? "#EF8A17" : "none"}
                />
            </Svg>
        </View>
    );
}

export default HeartSvg;