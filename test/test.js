/**
 * @author Anton Nikishkin
 * Unit test around node/browserify usage of the module not the actual marker functionality
 * The original module: https://github.com/googlemaps/js-info-bubble
 */

'use strict';

var expect = require('chai').expect;
var leche = require('leche');
var InfoBubble = require('./../src/infobubble');

var infobubbleInstance = null;

describe('node-js-info-bubble', function () {

  before(function () {
    //mocks google maps
    global.google = leche.create(['maps']);
    // global.map = leche.create(['getZoom']);
    global.google.maps = leche.create(['OverlayView']);
    // global.google.maps.event = leche.create(['addListener']);

    // mock document
    // global.document = leche.create(['document']);
    global.document = leche.create(['createElement', 'style']);

    infoBubbleInstance = new InfoBubble(global.map);
  });

  it('Initialises a new InfoBubble', function () {
    expect(infobubbleInstance).to.exist;
    expect(infobubbleInstance).to.be.an.instanceOf(InfoBubble);
  });

  it('Assigns a global variable InfoBubble', function () {
    expect(global.InfoBubble).to.exist;
  });

  // public methods
  
  // not tested yet

});
