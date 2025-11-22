import { GEOAPIFY_API_KEY, GEOAPIFY_BASE_URL } from './config.js';

export async function getMatchedCoordinates(latlngs) {
    try {
        const coordinates = convertCordinates(latlngs);
        const requestBody = buildRequestBody(coordinates);
        const { response, data } = await sendRequest(requestBody);

        return handleResponse(response, data);
    } catch (error) {
        console.error("error: ", error);
        return null;
    }
}

function buildRequestBody(coordinates, mode = "walk") {
    return {
        mode, 
        waypoints: coordinates.map(coords => ({ location: coords }))
    }
}

function convertCordinates(latlngs) {
    return latlngs.map(latlng => [latlng.lng, latlng.lat]);
}

async function sendRequest(requestBody) {
    const url = `${GEOAPIFY_BASE_URL}?apiKey=${GEOAPIFY_API_KEY}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    return { response, data };
}

function handleResponse(response, data) {
    if (response.ok) {
        return data;
    } else {
        console.error("api error: ", data.message);
        return null;
    }
}