import * as CONFIG from './config.js';

let map;
let drawnItems;
let matchedLayer;

const MapService = {

    initialize: () => {
        if (map) return;
        
        map = L.map('map').setView(CONFIG.INITIAL_MAP_CENTER, CONFIG.INITIAL_MAP_ZOOM);
        
        L.tileLayer(CONFIG.TILE_LAYER_URL, {
            maxZoom: 19,
            attribution: CONFIG.TILE_LAYER_ATTRIBUTION
        }).addTo(map);

        drawnItems = new L.FeatureGroup().addTo(map);
        matchedLayer = L.layerGroup().addTo(map);
    },

    displayMatchedPath: (geoJsonData) => {
        matchedLayer.clearLayers();

        if (!geoJsonData || geoJsonData.features.length === 0) {
            console.warn("features are empty");
            return;
        }

        const routeFeature = geoJsonData.features[0];
        const geoJsonLayer = L.geoJSON(routeFeature, {className: 'matched-route'});

        geoJsonLayer.addTo(matchedLayer);
        
        map.fitBounds(geoJsonLayer.getBounds());
    },

    getMap: () => map,
    getDrawnItems: () => drawnItems,
};

export default MapService;