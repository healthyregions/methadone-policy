import Head from 'next/head'
import styles from '../styles/Map.module.css'
import MainNav from '../components/MainNav'
import * as config from '../config/config'

import React, { useState, useEffect, useRef, useCallback } from 'react';

// deck GL and helper function import
import DeckGL from '@deck.gl/react';
import {MapView, FlyToInterpolator} from '@deck.gl/core';
import MapboxGLMap from 'react-map-gl';

export default function Map() {
    console.log(process.env)
    const [viewState, setViewState] = useState({
        latitude: 41.8,
        longitude: -87.6,
        zoom: 8,
        bearing:0,
        pitch:0
    })  
    return (
        <div className={styles.container}>
        <Head>
            <title>Webgeoda Template</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
            />
            <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
            />
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
            media="print"
            onLoad="this.media='all'"
            />
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' rel='stylesheet' />
            <noscript>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
            />
            </noscript>
        </Head>
        <MainNav/>
        <div className={styles.mapContainer}>
                <DeckGL
                    // layers={}
                    // ref={deckRef}
                    initialViewState={viewState}
                    controller={true}
                    // views={view}
                    pickingRadius={20}
                >
                    <MapboxGLMap
                        reuseMaps
                        // ref={mapRef}
                        mapStyle={'mapbox://styles/dhalpern/ckp07gekw2p2317phroaarzej'}
                        preventStyleDiffing={true}
                        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
                        >
                    </MapboxGLMap >
                </DeckGL>
                {/* <MapButtonContainer 
                    infoPanel={panelState.info}
                >
                    <NavInlineButtonGroup>
                        <NavInlineButton
                            title="Selection Box"
                            id="boxSelect"
                            isActive={boxSelect}
                            onClick={() => handleSelectionBoxStart()}
                        >
                            {SVG.selectRect}
                        </NavInlineButton>
                    </NavInlineButtonGroup>
                    <NavInlineButtonGroup>
                        <NavInlineButton
                            title="Geolocate"
                            id="geolocate"
                            onClick={() => handleGeolocate()}
                        >
                            {SVG.locate}
                        </NavInlineButton>
                    </NavInlineButtonGroup>
                    
                    <NavInlineButtonGroup>
                        <NavInlineButton
                        
                            title="Zoom In"
                            id="zoomIn"
                            onClick={() => handleZoom(0.5)}
                        >
                            {SVG.plus}
                        </NavInlineButton>
                        <NavInlineButton
                            title="Zoom Out"
                            id="zoomOut"
                            onClick={() => handleZoom(-0.5)}
                        >
                            {SVG.minus}
                        </NavInlineButton>
                        <NavInlineButton
                            title="Reset Tilt"
                            id="resetTilt"
                            tilted={deckRef.current?.deck.viewState?.MapView?.bearing !== 0 || deckRef.current?.deck.viewState?.MapView?.pitch !== 0}
                            onClick={() => resetTilt()}
                        >
                            {SVG.compass}
                        </NavInlineButton>
                    </NavInlineButtonGroup>
                    <NavInlineButtonGroup>
                        <NavInlineButton
                            title="Share this Map"
                            id="shareButton"
                            shareNotification={shared}
                            onClick={() => handleShare({mapParams, dataParams, currentData, coords: GetMapView(), lastDateIndex: dateIndices[currentData][dataParams.numerator]})}
                        >
                            {SVG.share}
                        </NavInlineButton>
                    </NavInlineButtonGroup>
                    <ShareURL type="text" value="" id="share-url" />
                </MapButtonContainer>
                <GeocoderContainer>
                    <Geocoder 
                        id="Geocoder"
                        placeholder={"Search by location"}
                        API_KEY={MAPBOX_ACCESS_TOKEN}
                        onChange={handleGeocoder}
                    />
                </GeocoderContainer> */}
            </div>
        </div>
    )
}
