# Pinner: Route Matching Application (Geoapify + Leaflet)

Pinner is a small, front-end application built with clean **Vanilla JavaScript** that demonstrates how to use the **Geoapify Route Matching API**. It allows the user to draw an approximate path on a map, which the API then accurately matches and snaps to the actual road network.

---

## Prerequisites and Configuration

For the application to run correctly, you need an API key and must launch the project using a local server.

### 1. Geoapify API Key (Required)

The project relies on the Geoapify API to perform the route calculations.

1.  **Get a Key:** Visit the [Geoapify website](https://www.geoapify.com/) and create a free account to obtain your API key.
2.  **Edit `src/secrets.js`:** Paste your API key into the `src/secrets.js` file (or `src/config.js` if you haven't split them) in the `GEOAPIFY_API_KEY` constant.

### 2. Running Locally

1.  **Get the Code:** Clone the repository or download the files.
2.  **Start a Server:** Use your local web server.
3.  **Access:** Open `index.html` via the local server address (e.g., `http://127.0.0.1:5500/index.html`).


---

## Technologies Used

* **Map Library:** [Leaflet.js](https://leafletjs.com/)
* **API Service:** [Geoapify Route Matching API](https://www.geoapify.com/route-matching-api)
* **Drawing Tool:** Leaflet.draw plugin
* **Language:** Vanilla JavaScript