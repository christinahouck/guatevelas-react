import React from 'react';
import { ColorSelectContainer, ColorOption, ColorOptionImage, ColorName } from './styles';

export default function ColorSelect(props) {
    return (
        <ColorSelectContainer>
            {props.prodId.availableColors.map((item, index) => {
                const newColor = item.color;
                return(
                    <ColorOption key={`colorOption${index}`} onClick={(event) => props.toggleColor(event, newColor, index)}>
                        <ColorOptionImage src={item.colorSampleImage} />
                        {props.titles && <ColorName>{newColor}</ColorName>}
                    </ColorOption>
                )
            })} 
        </ColorSelectContainer>
    )
}
