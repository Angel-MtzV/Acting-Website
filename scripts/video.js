(function(window) {
    function setupVideo()
    {
        var vo = document.getElementById('vo-reel');
        var theatrical = document.getElementById('t-reel');
        vo.addEventListener('mouseover', function() { this.controls = true; }, false);
        vo.addEventListener('mouseout', function() { this.controls = false; }, false);
        theatrical.addEventListener('mouseover', function() { this.controls = true; }, false);
        theatrical.addEventListener('mouseout', function() { this.controls = false; }, false);
    }

    window.addEventListener('load', setupVideo, false);
})(window);