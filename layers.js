var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_RC2017inclpostcodekopie_0 = new ol.format.GeoJSON();
var features_RC2017inclpostcodekopie_0 = format_RC2017inclpostcodekopie_0.readFeatures(json_RC2017inclpostcodekopie_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RC2017inclpostcodekopie_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RC2017inclpostcodekopie_0.addFeatures(features_RC2017inclpostcodekopie_0);var lyr_RC2017inclpostcodekopie_0 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_RC2017inclpostcodekopie_0, 
                radius: 20 * 2,
                gradient: ['#ffffff', '#ffffff', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
                blur: 15,
                shadow: 250,
                title: 'RC2017 incl postcode kopie'
            });var format_RC2017inclpostcodekopiekopie_1 = new ol.format.GeoJSON();
var features_RC2017inclpostcodekopiekopie_1 = format_RC2017inclpostcodekopiekopie_1.readFeatures(json_RC2017inclpostcodekopiekopie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RC2017inclpostcodekopiekopie_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RC2017inclpostcodekopiekopie_1.addFeatures(features_RC2017inclpostcodekopiekopie_1);var lyr_RC2017inclpostcodekopiekopie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RC2017inclpostcodekopiekopie_1, 
                style: style_RC2017inclpostcodekopiekopie_1,
                title: '<img src="styles/legend/RC2017inclpostcodekopiekopie_1.png" /> RC2017 incl postcode kopie kopie'
            });
var group_heatmap = new ol.layer.Group({
                                layers: [lyr_RC2017inclpostcodekopie_0,lyr_RC2017inclpostcodekopiekopie_1,],
                                title: "heatmap"});

lyr_RC2017inclpostcodekopie_0.setVisible(true);lyr_RC2017inclpostcodekopiekopie_1.setVisible(true);
var layersList = [baseLayer,group_heatmap];
lyr_RC2017inclpostcodekopiekopie_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'volgnr': 'volgnr', 'datum': 'datum', 'tijd': 'tijd', 'postcode': 'postcode', 'long': 'long', 'lat': 'lat', 'medium': 'medium', 'soort': 'soort', 'artikel': 'artikel', 'merk/model/type': 'merk/model/type', 'gebrek': 'gebrek', 'tevreden': 'tevreden', 'geleerd/helpen': 'geleerd/helpen', 'opm': 'opm', 'email': 'email', 'reparateur': 'reparateur', 'tijd (min)': 'tijd (min)', 'gered': 'gered', 'veld17': 'veld17', });
lyr_RC2017inclpostcodekopiekopie_1.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'volgnr': 'TextEdit', 'datum': 'TextEdit', 'tijd': 'TextEdit', 'postcode': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'medium': 'TextEdit', 'soort': 'TextEdit', 'artikel': 'TextEdit', 'merk/model/type': 'TextEdit', 'gebrek': 'TextEdit', 'tevreden': 'TextEdit', 'geleerd/helpen': 'TextEdit', 'opm': 'TextEdit', 'email': 'TextEdit', 'reparateur': 'TextEdit', 'tijd (min)': 'TextEdit', 'gered': 'TextEdit', 'veld17': 'TextEdit', });
lyr_RC2017inclpostcodekopiekopie_1.set('fieldLabels', {});
lyr_RC2017inclpostcodekopiekopie_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});