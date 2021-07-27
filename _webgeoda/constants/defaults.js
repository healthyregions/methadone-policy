import { dataPresets } from "../../map-config";

const generateWidgetPresets = (widgetConfig) => {
  const defaultWidgetLocations = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let hiddenIndex = 0;
  for(const i of widgetConfig){
    defaultWidgetLocations.push({
      side: i.display,
      index: i.display === "pinned" ? leftIndex++ : (i.display === "tray" ? rightIndex++ : hiddenIndex++)
    });
  }
  return defaultWidgetLocations
}

export const INITIAL_STATE = {
  storedGeojson: {},
  storedData: {},
  cachedVariables: {},
  cachedTimeSeries: {},
  currentData: dataPresets.data[0].geodata,
  datasetToLoad: null,
  activeDatasets: [],
  currentMethod: "natural_breaks",
  currentOverlay: "",
  currentResource: "",
  currentHoverTarget: {
    x: null,
    y: null,
    id: null,
    data: null,
  },
  mapData: {
    data: [],
    params: [],
  },
  initialViewState: {},
  dataParams: {
    ...dataPresets.variables[0],
    colorScale:
      dataPresets.variables[0].colorScale[
        dataPresets.variables[0].numberOfBins || 5
      ],
  },
  dataPresets: dataPresets,
  mapParams: {
    mapType: "natural_breaks",
    bins: {
      bins: [],
      breaks: [],
    },
    binMode: "",
    fixedScale: null,
    nBins: 8,
    vizType: "2D",
    activeGeoid: "",
    overlay: "",
    resource: "",
    colorScale: [],
  },
  panelState: {
    variables: true,
    report: false,
    context: false,
    contextPos: { x: null, y: null },
  },
  selectionKeys: [],
  selectionNames: [],
  sidebarData: {},
  anchorEl: null,
  mapLoaded: false,
  mapStyle: {
    mapboxStyle: dataPresets.style?.mapboxStyle || 'mapbox://styles/dhalpern/ckp07gekw2p2317phroaarzej',
    underLayerId: dataPresets.style?.underLayerId || 'water'
  },
  mapFilters: [],
  notification: {
    info: null,
    location: "",
  },
  tooltipContent: {
    x: 0,
    y: 0,
    data: null,
  },
  widgetConfig: dataPresets.widgets,
  widgetData: {},
  showWidgetTray: true,
  widgetLocations: generateWidgetPresets(dataPresets.widgets),
  cachedLisaScatterplotData: {},
  isLoading: true
};
