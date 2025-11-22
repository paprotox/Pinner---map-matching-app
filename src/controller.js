import { getMatchedCoordinates } from './api.js';
import MapService from './map.js';
import * as CONFIG from './config.js';

export function startApplication() {
    MapService.initialize();

    const mapInstance = MapService.getMap();
    const drawnItemsInstance = MapService.getDrawnItems();

    const drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItemsInstance
        },
        draw: {
            ...CONFIG.DRAW_OPTIONS, 
        }
    });
    
    mapInstance.addControl(drawControl);
    mapInstance.on(L.Draw.Event.CREATED, handleMapMatching);
}

async function handleMapMatching(e) {
    const layer = e.layer;
    const drawnItemsInstance = MapService.getDrawnItems();

    drawnItemsInstance.clearLayers();
    drawnItemsInstance.addLayer(layer); 

    const latlngs = layer.getLatLngs();

    const matchedData = await getMatchedCoordinates(latlngs); 

    if (matchedData) {
        drawnItemsInstance.clearLayers();
        MapService.displayMatchedPath(matchedData); 
    }
}