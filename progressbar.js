//progress bar
var progressBar;
var progress = document.querySelector('.percent');

function updateProgressBar(event) {
    
    if (event.lengthComputable) {
      var percentLoaded = Math.round((event.loaded / event.total) * 100);
      
      if (percentLoaded < 100) {
        progress.style.width = percentLoaded + '%';
        progress.textContent = percentLoaded + '%';
      }
    }
  }

function makingProgressBar(event) {
    
    progress.style.width = '0%';
    progress.textContent = '0%';

    progressBar = new FileReader();
    
    progressBar.onprogress = updateProgressBar;
    
    progressBar.onloadstart = function(e) {
      document.getElementById('progress_bar').className = 'loading';
    };
    progressBar.onload = function(e) {
      
      progress.style.width = '100%';
      progress.textContent = '100%';
      setTimeout("document.getElementById('progress_bar').className='';", 2000);
    }
    
    progressBar.readAsBinaryString(event.target.files[0]);
  }

  document.getElementById('files').addEventListener('change', makingProgressBar, false);



