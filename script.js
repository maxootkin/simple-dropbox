
function addFiles(event) {
    var files = event.target.files; 

    
    for (var i = 0, f; f = files[i]; i++) {      

      var reader = new FileReader(); 

      reader.onload = (function(theFile) {
        return function(e) {
          
          var divv = document.createElement('div');
          divv.className = "mainfileareafile";          
          divv.innerHTML = ['<img class="file__image" src="', 
                              e.target.result,'" title="', encodeURI(theFile.name), '"/><div class="file__title">', 
                              encodeURI(theFile.name), '</div>'].join('');
          document.getElementById('list').insertBefore(divv, list.firstChild);
        };
        makingProgressBar();
      })(f);

      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', addFiles, false);
