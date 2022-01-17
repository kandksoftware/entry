(function(){
  'use strict'

  const $ = id => document.getElementById(id)
  
  function XBuilder(){
    this.data = [{
      image:'macro-terminal-icon',
      name:'Macro Terminal CNC',
      desc:' - Learn, test, and simulate better with Macro Terminal CNC',
      link:'https://kandksoftware.github.io/macro-terminal-pro/'
    },{
      image:'macro-mill-icon',
      name:'Macro Mill Plus CNC',
      desc:' - the most modern and secure software to speed up your work and improve safety',
      link:'https://kandksoftware.github.io/macro-mill-plus-cnc/'
    },{
      image:'macro-lathe-icon',
      name:'Macro Lathe CNC',
      desc:' - simulator for the CNC lathes',
      link:'https://kandksoftware.github.io/macro-lathe-cnc/'
    },{
      image:'macro-converter-icon',
      name:'Macro Converter CNC',
      desc:' - convert CNC macro into a pure g-code',
      link:'https://kandksoftware.github.io/macro-converter-cnc/'
    }/*,{
      image:'macro-router-icon',
      name:'Macro Router CNC',
      desc:' - use a power of macro for CNC routers',
      link:'https://kandksoftware.github.io/macro-router-cnc/'
    }*/,{
      image:'mobile_cam_icon',
      name:'Mobile CAM CNC',
      desc:' - the fastest and easiest conversational software for Fanuc / Haas',
      link:'https://mobilecamcnc.github.io/products/'
    }]
    
    function template(o){
      return `<a href="${ o.link }">
              <div class="app-item app-margin-bottom-5px">
                <div class="app-float app-icon-container">
                  <img src="resources/${ o.image }.png" alt="icon image"/>
                </div>
                <div class="app-float app-description-container">
                  <div class="app-description-center">
                    ${ '<span class="bold">' + o.name + '</span>' + o.desc }
                  </div>
                </div>
              </div>
            </a>`
    }

    this.build = function(){
      const app = $('app')
      if(app !== null){
        app.classList.remove('hide')
      }
      return `<h2>Select your software:</h2>` + this.data.map(d => template(d)).join('')
    }
  }

  $('app-entry').innerHTML = new XBuilder().build()

})()
