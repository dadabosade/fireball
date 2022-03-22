import React from 'react';
import classNames from 'classnames';

import WearableImage from './common/WearableImage/WearableImage';
import HorizontalPrice from '../common/HorizontalPrice/HorizontalPrice';
import HorizontalLink from '../common/HorizontalLink/HorizontalLink';
import CardName from '../common/CardName/CardName';
import CardStats from '../common/CardStats/CardStats';
import styles from './../styles';

export default function WearableHorizontal({ wearable, render }) {
    const classes = styles();
    const additionalClass = 'horizontal';

    const gotchiSections = {
        // image
        get image() {
            return <WearableImage wearable={wearable} key={`${wearable.id}-wearable-image`} />
        },

        // body
        get body() {
            return <div style={{'width': '70%'}} key={`${wearable.id}-wearable-body`}>
                <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', 'paddingTop': '30px'}}>
                    <div>
                        <CardName item={wearable} />
                    </div>
                    <div>
                        <CardStats item={wearable} />
                    </div>
                </div>
                <div>
                    <HorizontalLink item={wearable} url={'https://aavegotchi.com/baazaar/erc1155/'} additionalClass={additionalClass} />
                </div>
            </div>
        },

        // price
        get price() {
            return <HorizontalPrice item={wearable} key={`${wearable.id}-wearable-price`} />
        }
    }

    function renderSection(value) {
        if (typeof value === 'string') return gotchiSections[value];

        return (
            Object.keys(value).map( (key) => (
                gotchiSections[key](value[key].map( item => (
                    renderSection(item)
                )))
            ))
        )
    }

    return (
        <div className={classNames(classes.horizontalCard, wearable.rarity || 'common')}>
            {render.map( (name) => {
                return renderSection(name)
            })}
        </div>
    );
}
