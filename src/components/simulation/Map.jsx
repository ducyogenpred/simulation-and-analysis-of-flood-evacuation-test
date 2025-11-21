import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoiaW5hcmk3MjciLCJhIjoiY21pOHF0eGg3MDRxbTJqcHBnMW1ieWx1NSJ9.TI1wxgzo0Ab-WquAgm1NQw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // Toggles
  const [showSafeRoutes, setShowSafeRoutes] = useState(true);
  const [showBlockedRoads, setShowBlockedRoads] = useState(true);
  const [showTraffic, setShowTraffic] = useState(true);
  const [showShelters, setShowShelters] = useState(true);
  
  // --- 1. DATA DEFINITIONS ---

  // Blocked Roads
  const blockedRoadsPoints = [
    // Near Amarsolo (The Hagony one)
    { start: [121.015728, 14.550624], end: [121.015557, 14.551327] }, 
    // Near Hidalgo (Hagony as well)
    { start: [121.018523, 14.547358], end: [121.019014, 14.547947]},
    // For flame tree road (Signal)
    {  start: [121.036681, 14.545845], end: [121.037860, 14.54652]},
    //For Burgos Circle Park area (Mind)
    { start: [121.042799, 14.555226], end: [121.042945, 14.555087]},
    //For kalachuchi or smt idk anymore man
    { start: [121.024155, 14.537093], end: [121.025400, 14.537747]}
  ];

  // Heavy Traffic
  const trafficRoadsPoints = [
      // Hagony 1
    { start: [121.018004, 14.546442], end: [121.021213, 14.549537] },
    // Hagony 2
    { start: [121.019123, 14.549733], end: [121.021194, 14.549524] },
    // Signal Village
    { start: [121.03800, 14.54800], end: [121.03800, 14.54600] },
    // 28th Street
    { start: [121.055717, 14.546479], end: [121.048028, 14.554547]},
    // 5th Av
    { start: [121.046248, 14.547395], end: [121.048612, 14.554221]},
  ];

  const shelterData = [
    { 
      title: "Hagonoy Sports Complex", 
      coords: [121.020205, 14.550178], 
      evacuationRoutes: [
        // HAGONOY ROUTES
        // 1. Amorsolo Street (South West)
        { 
          start: [121.015878, 14.549652], 
          waypoints: [[121.01600, 14.54550], [121.01900, 14.54650]] 
        },
        // 2. Rocha Street
        { 
          start: [121.016681, 14.549653], end: [121.02000, 14.55000]
        },
        // 3. Melantic Street
        {
          start: [121.017309, 14.549699], end: [121.02000, 14.55000]
        },
        // 4. Jimenez Street
        {
          start: [121.017203, 14.552158], end: [121.019091, 14.550322]
        }
      ]
    },
    { 
      title: "Signal Village National High School", 
      coords: [121.03650, 14.54700], 
      evacuationRoutes: [
        // SIGNAL VILLAGE ROUTES
        // 1. McKinley
        {
          start: [121.033355, 14.548146], end: [121.03650, 14.54700]
        },
        // 2. Banaba Street
        {
          start: [121.032892, 14.545069], end: [121.03650, 14.54700]
        },
        // 3. Caimito
        {
          start: [121.040037, 14.546700], end: [121.03650, 14.54700]
        },
      ]
    },
        { 
      title: "Mind Shelter", 
      coords: [121.044087, 14.553705], 
      evacuationRoutes: [
        // 1. 28th St
        {
          start: [121.045967, 14.550299], end: [121.044087, 14.553705]
        },
        // 1. 
        {
          start: [121.040539, 14.555874], end: [121.044087, 14.553705]
        }

      ]
    },
    { 
      title: "St Luke's Medical Center", 
      coords: [121.048028, 14.554547], 
      evacuationRoutes: [
        // 1. 30th street
        {
          start: [121.052549, 14.551241], end: [121.048028, 14.554547]
        },
        // 2. 36th street
        {
          start: [121.053202, 14.557934], end: [121.048028, 14.554547]
        },
        // 3. Negros Street
        {
          start: [121.043956, 14.557287], end: [121.048028, 14.554547]
        },    
        // 4. 36th street
        {
          start: [121.047879, 14.559230], end: [121.048028, 14.554547]
        }
      ]
    },
    { 
      title: "Mahogany Shelter", 
      coords: [121.025085, 14.535330], 
      evacuationRoutes: [
        // 1. Kasoy Street
        {
          start: [121.024334, 14.536416], end: [121.025085, 14.535330]
        },
        // 2. Kalachuchi Street
        {
          start: [121.024155, 14.537093], end: [121.025085, 14.535330]
        },
      ]
    },
    { 
      title: "La Paz Shelter", 
      coords: [121.010990, 14.566889], 
    },
    { 
      title: "Highfield Shelter", 
      coords: [121.060716, 14.540081], 
    },
    { 
      title: "Belair Shelter", 
      coords: [121.035564, 14.561476], 
    }

  ];

  const routeDataRef = useRef({
    shelterRoutes: null,
    blockedRoadGeos: null,
    trafficRoadGeos: null
  });

  //
  const getZonePolygons = () => {
    // Zone for Hagonoy
    const hagonoyZone = {
      type: "Feature",
      properties: { name: "Hagonoy Zone" },
      geometry: {
        type: "Polygon",

        "coordinates": [
          [
            [
              121.064319,
              14.551917
            ],
            [
              121.064547,
              14.553111
            ],
            [
              121.065298,
              14.554872
            ],
            [
              121.065738,
              14.55614
            ],
            [
              121.066178,
              14.556622
            ],
            [
              121.066873,
              14.55773
            ],
            [
              121.067023,
              14.558661
            ],
            [
              121.067006,
              14.559267
            ],
            [
              121.066198,
              14.560287
            ],
            [
              121.065482,
              14.560719
            ],
            [
              121.062773,
              14.561464
            ],
            [
              121.061948,
              14.56207
            ],
            [
              121.060461,
              14.563445
            ],
            [
              121.059992,
              14.563979
            ],
            [
              121.05847,
              14.564873
            ],
            [
              121.057523,
              14.56515
            ],
            [
              121.055677,
              14.565522
            ],
            [
              121.054619,
              14.565839
            ],
            [
              121.054182,
              14.566225
            ],
            [
              121.05195,
              14.567652
            ],
            [
              121.050419,
              14.568402
            ],
            [
              121.049613,
              14.568559
            ],
            [
              121.048338,
              14.568536
            ],
            [
              121.047099,
              14.568297
            ],
            [
              121.045978,
              14.568431
            ],
            [
              121.044205,
              14.568714
            ],
            [
              121.042758,
              14.568696
            ],
            [
              121.03678,
              14.567277
            ],
            [
              121.034679,
              14.567247
            ],
            [
              121.03416,
              14.567387
            ],
            [
              121.03322,
              14.56802
            ],
            [
              121.03008,
              14.570887
            ],
            [
              121.02609,
              14.574203
            ],
            [
              121.024027,
              14.575546
            ],
            [
              121.019184,
              14.578447
            ],
            [
              121.017611,
              14.579408
            ],
            [
              121.01643,
              14.579198
            ],
            [
              121.012195,
              14.574986
            ],
            [
              121.010614,
              14.573456
            ],
            [
              121.009228,
              14.572031
            ],
            [
              121.005806,
              14.568653
            ],
            [
              121.002267,
              14.565095
            ],
            [
              120.99905,
              14.561899
            ],
            [
              120.998822,
              14.561716
            ],
            [
              120.999309,
              14.561482
            ],
            [
              120.999386,
              14.561056
            ],
            [
              120.999029,
              14.560229
            ],
            [
              120.998999,
              14.559549
            ],
            [
              120.999567,
              14.559396
            ],
            [
              120.999733,
              14.559087
            ],
            [
              120.999796,
              14.55826
            ],
            [
              121.000119,
              14.557864
            ],
            [
              120.99977,
              14.55728
            ],
            [
              120.999703,
              14.556652
            ],
            [
              121.000046,
              14.555931
            ],
            [
              121.000169,
              14.554815
            ],
            [
              121.001069,
              14.553985
            ],
            [
              121.001358,
              14.553339
            ],
            [
              121.001504,
              14.552706
            ],
            [
              121.002186,
              14.552121
            ],
            [
              121.004714,
              14.551041
            ],
            [
              121.006166,
              14.550355
            ],
            [
              121.00723,
              14.549986
            ],
            [
              121.007464,
              14.549137
            ],
            [
              121.007771,
              14.54883
            ],
            [
              121.008731,
              14.548634
            ],
            [
              121.00929,
              14.547564
            ],
            [
              121.009189,
              14.547094
            ],
            [
              121.008801,
              14.546644
            ],
            [
              121.008566,
              14.54609
            ],
            [
              121.008571,
              14.545697
            ],
            [
              121.008847,
              14.544746
            ],
            [
              121.009698,
              14.543562
            ],
            [
              121.009697,
              14.542607
            ],
            [
              121.009488,
              14.5421
            ],
            [
              121.009383,
              14.541222
            ],
            [
              121.009016,
              14.54037
            ],
            [
              121.011012,
              14.540406
            ],
            [
              121.011022,
              14.539937
            ],
            [
              121.010816,
              14.538752
            ],
            [
              121.012943,
              14.539075
            ],
            [
              121.013037,
              14.538516
            ],
            [
              121.012905,
              14.535576
            ],
            [
              121.012974,
              14.534605
            ],
            [
              121.013106,
              14.534169
            ],
            [
              121.012942,
              14.533076
            ],
            [
              121.012216,
              14.531617
            ],
            [
              121.012306,
              14.530835
            ],
            [
              121.012242,
              14.530498
            ],
            [
              121.011816,
              14.530098
            ],
            [
              121.012177,
              14.529659
            ],
            [
              121.012639,
              14.530406
            ],
            [
              121.013155,
              14.530429
            ],
            [
              121.013836,
              14.530168
            ],
            [
              121.01558,
              14.530871
            ],
            [
              121.01584,
              14.530864
            ],
            [
              121.016089,
              14.529908
            ],
            [
              121.016294,
              14.529632
            ],
            [
              121.016852,
              14.52957
            ],
            [
              121.017323,
              14.530168
            ],
            [
              121.018048,
              14.530122
            ],
            [
              121.018435,
              14.530512
            ],
            [
              121.019024,
              14.530543
            ],
            [
              121.020331,
              14.529854
            ],
            [
              121.021211,
              14.530175
            ],
            [
              121.021749,
              14.530205
            ],
            [
              121.022236,
              14.530536
            ],
            [
              121.022578,
              14.530803
            ],
            [
              121.023043,
              14.530812
            ],
            [
              121.023271,
              14.531206
            ],
            [
              121.024243,
              14.531144
            ],
            [
              121.024319,
              14.531505
            ],
            [
              121.024899,
              14.531498
            ],
            [
              121.024961,
              14.532101
            ],
            [
              121.025619,
              14.532186
            ],
            [
              121.026512,
              14.532098
            ],
            [
              121.027354,
              14.532943
            ],
            [
              121.028129,
              14.533146
            ],
            [
              121.028637,
              14.533443
            ],
            [
              121.028987,
              14.533877
            ],
            [
              121.029343,
              14.533994
            ],
            [
              121.029527,
              14.534304
            ],
            [
              121.029997,
              14.534317
            ],
            [
              121.030198,
              14.534673
            ],
            [
              121.03121,
              14.534925
            ],
            [
              121.031677,
              14.534479
            ],
            [
              121.032415,
              14.534509
            ],
            [
              121.033448,
              14.533932
            ],
            [
              121.034401,
              14.534554
            ],
            [
              121.035234,
              14.535583
            ],
            [
              121.035776,
              14.535809
            ],
            [
              121.036393,
              14.535884
            ],
            [
              121.03694,
              14.536145
            ],
            [
              121.037387,
              14.535979
            ],
            [
              121.038114,
              14.536255
            ],
            [
              121.038631,
              14.536727
            ],
            [
              121.038696,
              14.536978
            ],
            [
              121.039228,
              14.537444
            ],
            [
              121.039444,
              14.538623
            ],
            [
              121.039323,
              14.53915
            ],
            [
              121.0397,
              14.539832
            ],
            [
              121.040402,
              14.539913
            ],
            [
              121.040698,
              14.540299
            ],
            [
              121.041687,
              14.540715
            ],
            [
              121.042432,
              14.540711
            ],
            [
              121.043111,
              14.540354
            ],
            [
              121.044105,
              14.540891
            ],
            [
              121.044722,
              14.540796
            ],
            [
              121.045279,
              14.541282
            ],
            [
              121.045329,
              14.541593
            ],
            [
              121.045956,
              14.541819
            ],
            [
              121.046037,
              14.542227
            ],
            [
              121.046393,
              14.542844
            ],
            [
              121.046987,
              14.541464
            ],
            [
              121.046931,
              14.537134
            ],
            [
              121.046461,
              14.535643
            ],
            [
              121.046999,
              14.535485
            ],
            [
              121.047331,
              14.535678
            ],
            [
              121.051558,
              14.535643
            ],
            [
              121.051695,
              14.537117
            ],
            [
              121.051609,
              14.537674
            ],
            [
              121.051909,
              14.538203
            ],
            [
              121.053275,
              14.53893
            ],
            [
              121.053113,
              14.539418
            ],
            [
              121.053546,
              14.539617
            ],
            [
              121.053281,
              14.542459
            ],
            [
              121.054132,
              14.541528
            ],
            [
              121.054664,
              14.541129
            ],
            [
              121.055503,
              14.54234
            ],
            [
              121.055906,
              14.542169
            ],
            [
              121.055859,
              14.541525
            ],
            [
              121.056537,
              14.540784
            ],
            [
              121.057283,
              14.539683
            ],
            [
              121.057795,
              14.538742
            ],
            [
              121.058779,
              14.537557
            ],
            [
              121.058792,
              14.537302
            ],
            [
              121.058209,
              14.536831
            ],
            [
              121.057792,
              14.53621
            ],
            [
              121.058548,
              14.535632
            ],
            [
              121.058153,
              14.533994
            ],
            [
              121.058536,
              14.533688
            ],
            [
              121.058387,
              14.533084
            ],
            [
              121.058738,
              14.532644
            ],
            [
              121.059291,
              14.53241
            ],
            [
              121.058908,
              14.531196
            ],
            [
              121.05973,
              14.531029
            ],
            [
              121.059946,
              14.531538
            ],
            [
              121.061006,
              14.532437
            ],
            [
              121.061475,
              14.532725
            ],
            [
              121.061212,
              14.533841
            ],
            [
              121.061268,
              14.534941
            ],
            [
              121.061714,
              14.535277
            ],
            [
              121.06328,
              14.535253
            ],
            [
              121.064325,
              14.535163
            ],
            [
              121.065551,
              14.535188
            ],
            [
              121.066646,
              14.535576
            ],
            [
              121.067208,
              14.536285
            ],
            [
              121.06721,
              14.536801
            ],
            [
              121.066412,
              14.537754
            ],
            [
              121.065685,
              14.538425
            ],
            [
              121.065135,
              14.539287
            ],
            [
              121.064625,
              14.539801
            ],
            [
              121.063157,
              14.540347
            ],
            [
              121.062682,
              14.540706
            ],
            [
              121.062341,
              14.541257
            ],
            [
              121.062609,
              14.542221
            ],
            [
              121.062464,
              14.542771
            ],
            [
              121.062014,
              14.543251
            ],
            [
              121.061159,
              14.543725
            ],
            [
              121.060917,
              14.544062
            ],
            [
              121.061117,
              14.544945
            ],
            [
              121.061601,
              14.545361
            ],
            [
              121.061978,
              14.545327
            ],
            [
              121.062656,
              14.544562
            ],
            [
              121.062846,
              14.544148
            ],
            [
              121.062988,
              14.543171
            ],
            [
              121.063419,
              14.542685
            ],
            [
              121.063874,
              14.542714
            ],
            [
              121.064277,
              14.543228
            ],
            [
              121.064418,
              14.544496
            ],
            [
              121.06463,
              14.54493
            ],
            [
              121.065326,
              14.545502
            ],
            [
              121.065707,
              14.546331
            ],
            [
              121.065706,
              14.547347
            ],
            [
              121.065828,
              14.547668
            ],
            [
              121.066272,
              14.548098
            ],
            [
              121.067129,
              14.548576
            ],
            [
              121.067461,
              14.549149
            ],
            [
              121.067446,
              14.549538
            ],
            [
              121.067101,
              14.550142
            ],
            [
              121.066624,
              14.550398
            ],
            [
              121.065501,
              14.550556
            ],
            [
              121.064916,
              14.550816
            ],
            [
              121.064452,
              14.551168
            ],
            [
              121.064319,
              14.551917
            ]
        ]]
      }
    };

    // Zone for Signal Vil
    const signalZone = {
      type: "Feature",
      properties: { name: "Signal Village Zone" },
      geometry: {
        type: "Polygon",
        coordinates: [[

        ]]
      }
    };

    return [hagonoyZone, signalZone];
  };

  const addSimulationLayers = () => {
    if (!map.current) return;

    const { shelterRoutes, blockedRoadGeos, trafficRoadGeos } = routeDataRef.current;
    if (!shelterRoutes || !blockedRoadGeos || !trafficRoadGeos) return; 

    // --- ADD ZONES ---
    if (!map.current.getSource('zones')) {
      const zoneFeatures = getZonePolygons();
      map.current.addSource('zones', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: zoneFeatures
        }
      });
      
      // Fill
      map.current.addLayer({
        id: 'zones-fill-layer',
        type: 'fill',
        source: 'zones',
        layout: { 'visibility': showShelters ? 'visible' : 'none' },
  
        paint: { 'fill-color': 'rgba(75, 197, 136, 0.97)', 'fill-opacity': 0.4 } 
      }); 
      
      // Outline
      map.current.addLayer({
        id: 'zones-outline-layer',
        type: 'line',
        source: 'zones',
        layout: { 'visibility': showShelters ? 'visible' : 'none' },
        paint: { 'line-color': 'rgba(226, 70, 208, 0.97)', 'line-width': 2, 'line-opacity': 1.0 } 
      });
    }

    // Add Safe Routes
    if (!map.current.getSource('safe-routes')) {
      map.current.addSource('safe-routes', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: shelterRoutes.map(geo => ({
            type: 'Feature',
            properties: {},
            geometry: { type: 'LineString', coordinates: geo }
          }))
        }
      });
      map.current.addLayer({
        id: 'safe-routes-layer',
        type: 'line',
        source: 'safe-routes',
        layout: { 'line-join': 'round', 'line-cap': 'round', 'visibility': showSafeRoutes && showShelters ? 'visible' : 'none' },
        paint: { 'line-color': '#00FF00', 'line-width': 8, 'line-blur': 1, 'line-opacity': 1 }
      });
    }

    // Add Blocked Roads
    if (!map.current.getSource('blocked-roads')) {
      map.current.addSource('blocked-roads', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: blockedRoadGeos.map(geo => ({
            type: 'Feature',
            properties: {},
            geometry: { type: 'LineString', coordinates: geo }
          }))
        }
      });
      map.current.addLayer({
        id: 'blocked-roads-layer',
        type: 'line',
        source: 'blocked-roads',
        layout: { 'line-join': 'round', 'line-cap': 'round', 'visibility': showBlockedRoads ? 'visible' : 'none' },
        paint: { 'line-color': '#FF3333', 'line-width': 8, 'line-dasharray': [2, 1] }
      });
    }

    // Add Traffic
    if (!map.current.getSource('traffic-roads')) {
      map.current.addSource('traffic-roads', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: trafficRoadGeos.map(geo => ({
            type: 'Feature',
            properties: {},
            geometry: { type: 'LineString', coordinates: geo }
          }))
        }
      });
      map.current.addLayer({
        id: 'traffic-layer',
        type: 'line',
        source: 'traffic-roads',
        layout: { 'line-join': 'round', 'line-cap': 'round', 'visibility': showTraffic ? 'visible' : 'none' },
        paint: { 'line-color': '#FFEA00', 'line-width': 8, 'line-opacity': 0.8 }
      });
    }

    // Add Shelters
    if (!map.current.getSource('shelters')) {
      map.current.addSource('shelters', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: shelterData.map(shelter => ({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: shelter.coords },
            properties: { title: shelter.title }
          }))
        }
      });
      map.current.addLayer({
        id: 'shelters-layer',
        type: 'circle',
        source: 'shelters',
        layout: { 'visibility': showShelters ? 'visible' : 'none' },
        paint: { 'circle-radius': 12, 'circle-color': '#00FFFF', 'circle-stroke-width': 2, 'circle-stroke-color': '#FFFFFF' }
      });
      map.current.addLayer({
        id: 'shelters-label-layer',
        type: 'symbol',
        source: 'shelters',
        layout: {
          'text-field': ['get', 'title'],
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-size': 13,
          'text-offset': [0, 1.5],
          'text-anchor': 'top',
          'visibility': showShelters ? 'visible' : 'none'
        },
        paint: { 'text-color': '#FFFFFF', 'text-halo-color': '#000000', 'text-halo-width': 2 }
      });
    }
  };

  // --- 3. INITIALIZE MAP ---
  useEffect(() => {
    if (map.current) return; 

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/edel02/cmguztntk003q01srb9tm4unr',
      center: [121.02800, 14.54800],
      zoom: 14.5,
      pitch: 40, 
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    const fetchRoutes = async () => {
      const getRoute = async (start, end, waypoints = []) => {
        try {
          const coordinates = [start, ...waypoints, end]
            .map(coord => `${coord[0]},${coord[1]}`)
            .join(';');

          const query = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/walking/${coordinates}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
          );
          const json = await query.json();
          if (!json.routes || json.routes.length === 0) return [start, end];
          return json.routes[0].geometry.coordinates;
        } catch (error) {
          console.error("Error:", error);
          return [start, end];
        }
      };

      const shelterRoutePromises = shelterData.flatMap(shelter => {
        return shelter.evacuationRoutes.map(route => 
          getRoute(route.start, shelter.coords, route.waypoints)
        );
      });

      const blockedRoutePromises = blockedRoadsPoints.map(road => getRoute(road.start, road.end));
      const trafficRoutePromises = trafficRoadsPoints.map(road => getRoute(road.start, road.end));

      const [shelterRoutes, blockedRoadGeos, trafficRoadGeos] = await Promise.all([
        Promise.all(shelterRoutePromises),
        Promise.all(blockedRoutePromises),
        Promise.all(trafficRoutePromises)
      ]);

      routeDataRef.current = { shelterRoutes, blockedRoadGeos, trafficRoadGeos };
      
      if (map.current && map.current.isStyleLoaded()) {
        addSimulationLayers();
        setIsMapLoaded(true);
      }
    };

    fetchRoutes();

    map.current.on('style.load', () => {
      if (routeDataRef.current.shelterRoutes) {
        addSimulationLayers();
        setIsMapLoaded(true);
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // --- 4. HANDLE VISIBILITY TOGGLES ---
  useEffect(() => {
    if (!map.current || !isMapLoaded) return;

    const toggle = (id, show) => {
      if (map.current.getLayer(id)) {
        map.current.setLayoutProperty(id, 'visibility', show ? 'visible' : 'none');
      }
    };

    toggle('safe-routes-layer', showSafeRoutes && showShelters);
    toggle('blocked-roads-layer', showBlockedRoads);
    toggle('traffic-layer', showTraffic);
    toggle('shelters-layer', showShelters);
    toggle('shelters-label-layer', showShelters);
    toggle('zones-fill-layer', showShelters);
    toggle('zones-outline-layer', showShelters);

  }, [showSafeRoutes, showBlockedRoads, showTraffic, showShelters, isMapLoaded]);

  return (
    <div className="relative h-full w-full">
      <div ref={mapContainer} className="h-full w-full" />

      {/* Control Panel */}
      <div className="absolute top-4 left-4 z-10 bg-background/90 p-4 rounded-lg shadow-md border border-border backdrop-blur-sm min-w-[200px]">
        <h4 className="font-semibold mb-3 text-sm">Map Settings</h4>
        
        <div className="space-y-3 text-xs">
          {/* Safe Route Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-[#00FF00] rounded-full border border-white/20"></div>
              <span>Evacuation Routes</span>
            </div>
            <input
              type="checkbox"
              checked={showSafeRoutes}
              onChange={(e) => setShowSafeRoutes(e.target.checked)}
              className="cursor-pointer"
            />
          </div>

          {/* Blocked Road Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-[#FF3333] rounded-full border border-white/50"></div>
              <span>Blocked Roads</span>
            </div>
            <input
              type="checkbox"
              checked={showBlockedRoads}
              onChange={(e) => setShowBlockedRoads(e.target.checked)}
              className="cursor-pointer"
            />
          </div>

          {/* Traffic Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-[#FFEA00] rounded-full border border-black/20"></div>
              <span>Heavy Traffic</span>
            </div>
            <input
              type="checkbox"
              checked={showTraffic}
              onChange={(e) => setShowTraffic(e.target.checked)}
              className="cursor-pointer"
            />
          </div>

          {/* Shelter Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#00FFFF] border border-white"></div>
              <span>Shelters & Zones</span>
            </div>
            <input
              type="checkbox"
              checked={showShelters}
              onChange={(e) => setShowShelters(e.target.checked)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}