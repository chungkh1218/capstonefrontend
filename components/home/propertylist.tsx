import * as React from "react";
import { Component } from "react";
import {View} from 'react-native'

import PropertyItem from './propertyitem'
import { IProperty} from '../../models/models'

interface IPropertyListProp {
    properties: IProperty[];
}

export default class PropertyList extends Component <IPropertyListProp>{
    render(){
        console.log(this.props.properties)
        return(
            <View>
                {this.props.properties.map((property, i) => (
                    <PropertyItem
                        key={i}
                        re_id={property.re_id}
                        catname={property.catname}
                        addr={property.addr}           
                    />
                ))}

            </View>
        )
    }
}