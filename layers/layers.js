var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
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
                                "LAYERS": "OI.OrthoimageCoverage.HR",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_1, 0]);
var format_zonecrindesClimats_2 = new ol.format.GeoJSON();
var features_zonecrindesClimats_2 = format_zonecrindesClimats_2.readFeatures(json_zonecrindesClimats_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonecrindesClimats_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonecrindesClimats_2.addFeatures(features_zonecrindesClimats_2);
var lyr_zonecrindesClimats_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonecrindesClimats_2, 
                style: style_zonecrindesClimats_2,
                popuplayertitle: 'zone écrin des Climats',
                interactive: false,
                title: '<img src="styles/legend/zonecrindesClimats_2.png" /> zone écrin des Climats'
            });
var format_zonecentraledesClimats_3 = new ol.format.GeoJSON();
var features_zonecentraledesClimats_3 = format_zonecentraledesClimats_3.readFeatures(json_zonecentraledesClimats_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonecentraledesClimats_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonecentraledesClimats_3.addFeatures(features_zonecentraledesClimats_3);
var lyr_zonecentraledesClimats_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonecentraledesClimats_3, 
                style: style_zonecentraledesClimats_3,
                popuplayertitle: 'zone centrale des Climats',
                interactive: false,
                title: '<img src="styles/legend/zonecentraledesClimats_3.png" /> zone centrale des Climats'
            });
var format_ClimatsdeBourgogneINAOSC_4 = new ol.format.GeoJSON();
var features_ClimatsdeBourgogneINAOSC_4 = format_ClimatsdeBourgogneINAOSC_4.readFeatures(json_ClimatsdeBourgogneINAOSC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClimatsdeBourgogneINAOSC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClimatsdeBourgogneINAOSC_4.addFeatures(features_ClimatsdeBourgogneINAOSC_4);
var lyr_ClimatsdeBourgogneINAOSC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClimatsdeBourgogneINAOSC_4, 
                style: style_ClimatsdeBourgogneINAOSC_4,
                popuplayertitle: 'Climats de Bourgogne (INAO / SC)',
                interactive: true,
    title: 'Climats de Bourgogne (INAO / SC)<br />\
    <img src="styles/legend/ClimatsdeBourgogneINAOSC_4_0.png" /> Grand Cru<br />\
    <img src="styles/legend/ClimatsdeBourgogneINAOSC_4_1.png" /> Premier Cru<br />\
    <img src="styles/legend/ClimatsdeBourgogneINAOSC_4_2.png" /> Village<br />\
    <img src="styles/legend/ClimatsdeBourgogneINAOSC_4_3.png" /> Régionale<br />'
        });
var format_commune_5 = new ol.format.GeoJSON();
var features_commune_5 = format_commune_5.readFeatures(json_commune_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commune_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commune_5.addFeatures(features_commune_5);
var lyr_commune_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commune_5, 
                style: style_commune_5,
                popuplayertitle: 'commune',
                interactive: true,
                title: '<img src="styles/legend/commune_5.png" /> commune'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Ortho20cm_1.setVisible(true);lyr_zonecrindesClimats_2.setVisible(false);lyr_zonecentraledesClimats_3.setVisible(false);lyr_ClimatsdeBourgogneINAOSC_4.setVisible(true);lyr_commune_5.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_Ortho20cm_1,lyr_zonecrindesClimats_2,lyr_zonecentraledesClimats_3,lyr_ClimatsdeBourgogneINAOSC_4,lyr_commune_5];
lyr_zonecrindesClimats_2.set('fieldAliases', {'ID_BIEN': 'ID_BIEN', 'NOM_BIEN': 'NOM_BIEN', 'ANNEE_INSC': 'ANNEE_INSC', 'ANNEE_MODI': 'ANNEE_MODI', 'STATUT_ZT': 'STATUT_ZT', });
lyr_zonecentraledesClimats_3.set('fieldAliases', {'ID_BIEN': 'ID_BIEN', 'NOM_BIEN': 'NOM_BIEN', 'ANNEE_INSC': 'ANNEE_INSC', 'ANNE_MODI': 'ANNE_MODI', 'CRITERES': 'CRITERES', });
lyr_ClimatsdeBourgogneINAOSC_4.set('fieldAliases', {'app': 'appellation', 'denom': 'climat', 'insee': 'insee', 'nomcom': 'commune', 'tex': 'lieu-dit', 'classt': 'classement', 'url_bivb': 'fiche BIVB', });
lyr_commune_5.set('fieldAliases', {'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', });
lyr_zonecrindesClimats_2.set('fieldImages', {'ID_BIEN': '', 'NOM_BIEN': '', 'ANNEE_INSC': '', 'ANNEE_MODI': '', 'STATUT_ZT': '', });
lyr_zonecentraledesClimats_3.set('fieldImages', {'ID_BIEN': '', 'NOM_BIEN': '', 'ANNEE_INSC': '', 'ANNE_MODI': '', 'CRITERES': '', });
lyr_ClimatsdeBourgogneINAOSC_4.set('fieldImages', {'app': 'TextEdit', 'denom': 'TextEdit', 'insee': 'TextEdit', 'nomcom': 'TextEdit', 'tex': 'TextEdit', 'classt': 'TextEdit', 'url_bivb': 'TextEdit', });
lyr_commune_5.set('fieldImages', {'NOM': 'TextEdit', 'NOM_M': 'Hidden', 'INSEE_COM': 'Hidden', });
lyr_zonecrindesClimats_2.set('fieldLabels', {'ID_BIEN': 'no label', 'NOM_BIEN': 'no label', 'ANNEE_INSC': 'no label', 'ANNEE_MODI': 'no label', 'STATUT_ZT': 'no label', });
lyr_zonecentraledesClimats_3.set('fieldLabels', {'ID_BIEN': 'no label', 'NOM_BIEN': 'no label', 'ANNEE_INSC': 'no label', 'ANNE_MODI': 'no label', 'CRITERES': 'no label', });
lyr_ClimatsdeBourgogneINAOSC_4.set('fieldLabels', {'app': 'inline label - always visible', 'denom': 'inline label - always visible', 'insee': 'hidden field', 'nomcom': 'inline label - always visible', 'tex': 'inline label - always visible', 'classt': 'inline label - always visible', 'url_bivb': 'inline label - always visible', });
lyr_commune_5.set('fieldLabels', {'NOM': 'no label', });
lyr_commune_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});