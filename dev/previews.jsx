import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import SearchModel from "../components/SearchModel";
import Header from "../components/Header";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SearchModel">
                <SearchModel/>
            </ComponentPreview>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews