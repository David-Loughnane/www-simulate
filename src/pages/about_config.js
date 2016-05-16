exports.panes = {
  'intro': {
    title: 'Introduction'
  , description:
  'Welcome to the visualisation of our group project on Resource Allocation in Content-Centric Networks. The current internet hosts communicate via IP addresses in the packet headers. Therefore, IP defines the packet stucture of the encapsulated data to be delivered and is absolutely location dependent – the requestor-host addresses the server-host and vice versa. This, however, is not very efficient. It results in a lot of unnecessary traffic while the requests propagate back and forth between the peers. The most intuitive solution would be to cache popular content closer to locations with high demand and address data via content and not location. The requestor would then be served from the closest node that has cached that particular content before and the request would not have to propagate all the way to the initial source every time.'
  }
, 'motive': {
    title: 'Information Centric Networking'
  , description:
  'Information Centric Networking (ICN) is is looking at networks with an information focal point as opposed to a host to host focus. Some companies including Netflix and YouTube already make use local caching to situate popular content in data centers closer to the locations where there is a higher demand for that specific content. In general, content-centric networks request data objects by their content, using hash functions, rather than the location of a server. This widens the opportunity to cache because network nodes can track the popularity of particular data objects. With this knowledge, they can cache popular data objects and stop the request propagating the entire way to the data source. <br><br> Our focus was on the algorithms by which nodes on the network decide to cache content given limited resources.'
  }
, 'cache': {
    title: 'Caching'
  , description: 
  'ICN research has yielded many potential algorithms, ranging from very simple (e.g. \'leave copy everywhere\' which always caches data as it passes through) to more complex (e.g. caching with some probability using cache location on path as variables).<br><br> Our focus was on the implementation of the algorithm described by Olivier et al. [1]. These caching algorithms are all based on the concept of using a populrity table for keeping track of the popularity of content locally at each router node. All caching nodes maintain a popularity table and every time a data object travels through them it increments the popularity of that object by one in its table. As soon as the content reaches an established threshold, it is being cached in the node. In order to avoid caching content that becomes unpopular over time, the popularity of all contents is being decremend every time interval relative to the time which has passed. As soon as the cache becomes full, the content with the lowest accumulated popularity score is deleted and replaced by the new popular content. If a specific content had not been requested for a long period of time, it is being deleted as well.<br><br> [1] : Festor Olivier C’esar Bernardini Thomas Silverston. Towards Popularity-Based Caching in Content Centric Networks. In: RESCOM 2012, Les Vosges, France. 2012. '
  }
, 'algo': {
    title: 'Algorithms'
  , description: " We implemented six different caching algoithms using popularity tables <br><br><b> Self-caching (static)</b>: using this algorithm, the caching node will only cache the content in itself as soon as the content reaches a defined threshold <br><br><b>Self-caching (dynamic)</b>: this algorithm does the same with the difference that the threshold at each node is dynamic changes over time <br><br><b>Neighbour-caching (static)</b>: this algorithm suggests its neighbours to cache popular content and the neighbouring nodes always cache <br><br><b>Neighbour-caching (dynamic) </b>: same, but threshold dynamic <br><br><b> Neighbour-caching-t (static)</b>: this algorithm differs from the pervious by allowing the nodes that receive a suggestion to decline if their threshold was not met <br><br><b> Neighbour-caching-t (dynamic)</b>: same but both thresholds dynamic"
  }
, 'Legend': {
    title: 'Animation Legend'
  , description: "<table><tr><td><img src=\"src/pages/NodeImages/cacheMiss.svg\" style=\"width:100px;height:100px;\"></td><td><b>Cache Miss</b>: A router has checked its cache and not found the requested data</td></tr><tr><td><img src=\"src/pages/NodeImages/CacheRemove.svg\" style=\"width:100px;height:100px;\"></td><td><b>Cache Remove</b>: A router has overfilled its cache and is removing the least popular piece of data which was in the cache</td></tr><tr><td><img src=\"src/pages/NodeImages/ContentFound.svg\" style=\"width:100px;height:100px;\"></td><td><b>Cache/Server Hit</b>: A content lookup as occured and returned the piece of content</td></tr><tr><td><img src=\"src/pages/NodeImages/NodeWithContent.svg\" style=\"width:100px;height:100px;\"></td><td><b>Content Node</b>: Either a router or source with a non-empty content store or cache</td></tr><tr><td><img src=\"src/pages/NodeImages/requesterNode.svg\" style=\"width:100px;height:100px;\"></td><td><b>Active Requester Node</b>: A node currently requesting content</td></tr><tr><td><img src=\"src/pages/NodeImages/RequesterNode.svg\" style=\"width:100px;height:100px;\"></td><td><b>Inactive Requester Node</b>: A requester node not currently making a request</td></tr><tr><td><img src=\"src/pages/NodeImages/requestHop.svg\" style=\"width:100px;height:100px;\"></td><td><b>Request Hop</b>: A node which has passed on a request for content</td></tr><tr><td><img src=\"src/pages/NodeImages/RouterWithoutContent.svg\" style=\"width:100px;height:100px;\"></td><td><b>Empty Router Node</b>: A router either with no cache or an empty cache</td></tr><tr><td><img src=\"src/pages/NodeImages/contentHop.svg\" style=\"width:100px;height:100px;\"></td><td><b>Content Hop</b>: Content being passed through nodes towards the requester</td></tr>"
  }
, 'Data': {
    title: 'Data'
    ,description: "All of our data streams for the Simulation and Comparision graphs were generated using a modified version of the Icarus simulator written by Lorenzo Saino (<a href=\"http://icarus-sim.github.io\">Available Here</a>) <br><br> Our implementation of the simulator along with the source code for our algorithms are available <a href=\"https://github.com/FilWisher/distributed-project\"> on github</a> <br><br> The source code for this visulation platform is also available <a href=\"https://github.com/FilWisher/www-simulate\">on github</a>"
}
, 'who': {
    title: 'Team'
  , description: '<b>Supervisor</b>: Kin Leung (Department of Electrical and Electronic Engineering) <br><br> <b>Group Members</b>: Noppawee Apichonpongpan, Lisa Chalaguine, William Fisher, Wing Liu, David Loughnane & Hugh O’Brien'
  }
}


exports.render = section => {
    var el = document.createElement( 'html' );
    el.innerHTML = section.description
  return (h, store) => {
    return h`<div class='section'>
      <h2 class='title'>${section.title}</h2>
      <p class='description'>${el}</p>
    </div>`
  }
}
