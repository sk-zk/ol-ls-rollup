import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';

import Map from "ol/Map.js";
import View from 'ol/View.js';
import { defaults as controlDefaults } from 'ol/control.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

import LayerSwitcher from 'ol-layerswitcher';

const map = new Map({
  layers: [new TileLayer({
    source: new OSM()
  })],
  target: "map",
  view: new View({
    center: [0,0],
    zoom: 0,
    constrainResolution: true,
  }),
  controls: controlDefaults({
    zoom: true,
    attribution: false,
    rotate: false,
  }),
});

const layerSwitcher = new LayerSwitcher();
map.addControl(layerSwitcher);
