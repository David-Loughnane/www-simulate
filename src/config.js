// config passed to js-network-vis for configuring visualization details

/*
var get_random_component = function (min, max) {
  var letters = '0123456789abcdef'.split('')
  letters = letters.slice(min, max)
  var c = ''
  for (var i = 0; i < 2; i++) {
    c += letters[Math.floor(Math.random()*letters.length)] 
  }
  return c
}

var get_random_green = function () {
  var c = '#'
  c += get_random_component(0, 5) //red
  c += get_random_component(5, 16) //green
  c += get_random_component(0, 5) //blue
  return c
}

var get_random_blue = function () {
  var c = '#'
  c += get_random_component(0, 5) //red
  c += get_random_component(0, 5) //green
  c += get_random_component(5, 16) //blue
  return c
}

var make_color_palette = function(color_fn) {
  var cs = {}
  return function color(id) {
    if (cs[id]) return cs[id]
    else {
      cs[id] = color_fn()
      return cs[id]
    }
  }
}

var request_colors = make_color_palette(get_random_blue)
var response_colors = make_color_palette(get_random_green)
*/

var width = 1000
var height = 500
var r = 18
var stroke_colour = 'black'
var stroke_width = 2

module.exports = { 
  element: '#vis'
, charge: -300
, friction: 100
, linkDistance: 15
, height: height
, width: width
, r: r
, stroke_width: stroke_width
, setup(nodes, edges) {
    nodes.forEach(n => {
      n.requests = []
      n.cache = []
      n.content = []
    }) 
  }
, node_color(node) {
    if (node.type == 'router') {
      return 'grey'
    }
    else if (node.type == 'source') {
      return 'fuchsia'
    }
    else if (node.type == 'receiver') {
      return 'dodgerblue'
    }
    return 'yellow'
  }
, node_size: 8
, tick(nodes, edges) {
    edges.attr('x1', function(d) { return d.source.x })
      .attr('y1', function(d) { return d.source.y })
      .attr('x2', function(d) { return d.target.x })
      .attr('y2', function(d) { return d.target.y })
  
    nodes.attr('cx', function(d) { return d.x = Math.max(r, Math.min(width - r, d.x)); })
        .attr('cy', function(d) { return d.y = Math.max(r, Math.min(height - r, d.y)); });
  }
}
