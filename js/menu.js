(function(){
  'use strict'
    
  var builditems = function(array){
    var el = document.querySelector('.items')
    el.classList.remove('hide')
    el.innerHTML = array.map(a => {
      return `<div class="items__item" onclick="location.href='${ a.link }';">
              <img src="resources/${ a.img }.png" alt="${ a.name }"/>
              <div class="items__desc">
                <h3>${ a.name }</h3>
                <h4>${ a.desc }</h4>
              </div>
            </div>`
    }).join('')
  }

  builditems([{
    name:'Macro Terminal CNC',
    img:'macro-terminal-icon',
    desc:'Learn, test, and simulate better with Macro Terminal CNC',
    link:'https://kandksoftware.github.io/macro-terminal-pro/'
  },{
    name:'Macro Mill Plus CNC',
    img:'macro-mill-icon',
    desc:'the most modern and secure software to speed up your work and improve safety',
    link:'https://kandksoftware.github.io/macro-mill-plus-cnc/'
  },{
    name:'Macro Lathe CNC',
    img:'macro-lathe-icon',
    desc:'simulator for the CNC lathes',
    link:'https://kandksoftware.github.io/macro-lathe-cnc/'
  },{
    name:'Macro Converter CNC',
    img:'macro-converter-icon',
    desc:'convert CNC macro into a pure g-code',
    link:'https://kandksoftware.github.io/macro-converter-cnc/'
  }/*,{
    name:'Macro Router CNC',
    img:'macro-router-icon',
    desc:'use a power of macro for CNC routers',
    link:'https://kandksoftware.github.io/macro-router-cnc/'
  }*/,{
    name:'Mobile CAM CNC',
    img:'mobile_cam_icon',
    desc:'the fastest and easiest conversation software for Fanuc / Haas',
    link:'https://mobilecamcnc.github.io/products/'
  }])
})();
