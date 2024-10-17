var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortho20cm_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 20 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_1, 0]);
var format_commune_2 = new ol.format.GeoJSON();
var features_commune_2 = format_commune_2.readFeatures(json_commune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commune_2.addFeatures(features_commune_2);
var lyr_commune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commune_2, 
                style: style_commune_2,
                popuplayertitle: "commune",
                interactive: false,
                title: '<img src="styles/legend/commune_2.png" /> commune'
            });
var format_zonecrindesClimats_3 = new ol.format.GeoJSON();
var features_zonecrindesClimats_3 = format_zonecrindesClimats_3.readFeatures(json_zonecrindesClimats_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonecrindesClimats_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonecrindesClimats_3.addFeatures(features_zonecrindesClimats_3);
var lyr_zonecrindesClimats_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonecrindesClimats_3, 
                style: style_zonecrindesClimats_3,
                popuplayertitle: "zone écrin des Climats",
                interactive: false,
                title: '<img src="styles/legend/zonecrindesClimats_3.png" /> zone écrin des Climats'
            });
var format_zonecentraledesClimats_4 = new ol.format.GeoJSON();
var features_zonecentraledesClimats_4 = format_zonecentraledesClimats_4.readFeatures(json_zonecentraledesClimats_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonecentraledesClimats_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonecentraledesClimats_4.addFeatures(features_zonecentraledesClimats_4);
var lyr_zonecentraledesClimats_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonecentraledesClimats_4, 
                style: style_zonecentraledesClimats_4,
                popuplayertitle: "zone centrale des Climats",
                interactive: false,
                title: '<img src="styles/legend/zonecentraledesClimats_4.png" /> zone centrale des Climats'
            });
var format_ClimatsdeBourgogne_5 = new ol.format.GeoJSON();
var features_ClimatsdeBourgogne_5 = format_ClimatsdeBourgogne_5.readFeatures(json_ClimatsdeBourgogne_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClimatsdeBourgogne_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClimatsdeBourgogne_5.addFeatures(features_ClimatsdeBourgogne_5);
var lyr_ClimatsdeBourgogne_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClimatsdeBourgogne_5, 
                style: style_ClimatsdeBourgogne_5,
                popuplayertitle: "Climats de Bourgogne",
                interactive: true,
    title: 'Climats de Bourgogne<br />\
    <img src="styles/legend/ClimatsdeBourgogne_5_0.png" /> Régionale<br />\
    <img src="styles/legend/ClimatsdeBourgogne_5_1.png" /> Village<br />\
    <img src="styles/legend/ClimatsdeBourgogne_5_2.png" /> Premier Cru<br />\
    <img src="styles/legend/ClimatsdeBourgogne_5_3.png" /> Grand Cru<br />'
        });

lyr_OSMStandard_0.setVisible(false);lyr_Ortho20cm_1.setVisible(true);lyr_commune_2.setVisible(false);lyr_zonecrindesClimats_3.setVisible(false);lyr_zonecentraledesClimats_4.setVisible(false);lyr_ClimatsdeBourgogne_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ortho20cm_1,lyr_commune_2,lyr_zonecrindesClimats_3,lyr_zonecentraledesClimats_4,lyr_ClimatsdeBourgogne_5];
lyr_commune_2.set('fieldAliases', {'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', });
lyr_zonecrindesClimats_3.set('fieldAliases', {'ID_BIEN': 'ID_BIEN', 'NOM_BIEN': 'NOM_BIEN', 'ANNEE_INSC': 'ANNEE_INSC', 'ANNEE_MODI': 'ANNEE_MODI', 'STATUT_ZT': 'STATUT_ZT', });
lyr_zonecentraledesClimats_4.set('fieldAliases', {'ID_BIEN': 'ID_BIEN', 'NOM_BIEN': 'NOM_BIEN', 'ANNEE_INSC': 'ANNEE_INSC', 'ANNE_MODI': 'ANNE_MODI', 'CRITERES': 'CRITERES', });
lyr_ClimatsdeBourgogne_5.set('fieldAliases', {'CRU': 'CRU', 'CLIMATS': 'dénomination Climat', 'NOM': 'commune', });
lyr_commune_2.set('fieldImages', {'NOM': 'TextEdit', 'NOM_M': 'Hidden', 'INSEE_COM': 'Hidden', });
lyr_zonecrindesClimats_3.set('fieldImages', {'ID_BIEN': '', 'NOM_BIEN': '', 'ANNEE_INSC': '', 'ANNEE_MODI': '', 'STATUT_ZT': '', });
lyr_zonecentraledesClimats_4.set('fieldImages', {'ID_BIEN': '', 'NOM_BIEN': '', 'ANNEE_INSC': '', 'ANNE_MODI': '', 'CRITERES': '', });
lyr_ClimatsdeBourgogne_5.set('fieldImages', {'CRU': 'TextEdit', 'CLIMATS': 'TextEdit', 'NOM': 'TextEdit', });
lyr_commune_2.set('fieldLabels', {'NOM': 'no label', });
lyr_zonecrindesClimats_3.set('fieldLabels', {'ID_BIEN': 'no label', 'NOM_BIEN': 'no label', 'ANNEE_INSC': 'no label', 'ANNEE_MODI': 'no label', 'STATUT_ZT': 'no label', });
lyr_zonecentraledesClimats_4.set('fieldLabels', {'ID_BIEN': 'no label', 'NOM_BIEN': 'no label', 'ANNEE_INSC': 'no label', 'ANNE_MODI': 'no label', 'CRITERES': 'no label', });
lyr_ClimatsdeBourgogne_5.set('fieldLabels', {'CRU': 'hidden field', 'CLIMATS': 'inline label - always visible', 'NOM': 'inline label - always visible', });
lyr_ClimatsdeBourgogne_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});