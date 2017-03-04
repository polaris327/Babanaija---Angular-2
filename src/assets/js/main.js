// IE10 viewport hack for Surface/desktop Windows 8 bug
// http://getbootstrap.com/getting-started/#support-ie10-width
(function () {
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();

jQuery(document).ready(function($){
    
    if ( $('#communities-carousel').length > 0 ) {
        $("#communities-carousel").owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            navText: ['',''],
            autoplay:true,
            autoplayTimeout: 4000,
            responsive:{
                0:{
                    items: 1,
                    nav:false,
                    loop:true,
                    autoplay:true
                },
                400:{
                    items:2,
                    margin: 15
                },
                750:{
                    items: 2,
                    nav:true,
                    autoplay:false,
                    margin: 30
                },
                1000:{
                    items: 3,
                    autoplay:false
                },
                1400:{
                    items: 4
                }
            }
            
        });
    }
    
    // hide navbar menu on click to body
    $(document).click(function (event) {        
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("in");
        if (_opened === true && !clickover.hasClass("menu_bg") && !clickover.hasClass("navbar-toggle") && ! clickover.closest('.navbar-collapse').hasClass("in") ) {
            $("button.navbar-toggle").click();
        }
    });
    
    // $('.title-menu-mobile').click(function(e){
        // $(this).find('span').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
        
        // $('body').toggleClass('open_communities');
    // }); 
    
    $('.menu_bg').click(function(e){
        // if ( $('body').hasClass('open_communities') ) {
           // $('.title-menu-mobile').find('span').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
        // }
        
        $('body').removeClass('open_communities open_menu');
        $('#navbar-collapse').removeClass('in');
    });
    
    $('.navbar-toggle').click(function(e){
        e.preventDefault();

        $('body').toggleClass('open_menu');        
    });  
    
    // hack for CSS
    setTimeout(
        function(){
            $('.info-links, .profile-links').css('opacity', 1);
        }, 
        10
    );
    
    // Tabs Events
    $('.forum-main .nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab        
        
        //alert('The new tab is now fully shown.');
        console.log( x + ' -> the new tab is now fully shown.');
        
        set_height_content();
    });
    
    // Account - On the web
    //// a.linkset - click
    $('#on_web').on( 'click', 'a.linkset', function(e) {
        e.preventDefault();
        var parent = $(this).closest('li');
        $(this).removeClass('current');
        if ( $(this).hasClass('linkset') ) {
            parent.find('.enter-social-name').addClass('current');
        }
    });
    
    //// .close - click
    $('#on_web').on( 'click', '.close', function(e) {
        e.preventDefault();
        
        var parent = $(this).closest('li');
        $(this).closest('span').removeClass('current');
        
        // .enter-social-name .close - click
        if ( $(this).closest('span').hasClass('enter-social-name') ) {
            parent.find('.linkset').addClass('current');
        }
        
        // .social-name .close - click
        if ( $(this).closest('span').hasClass('social-name') ) {
            parent.find('.linkset').addClass('current');
            
            parent.find('.name-text').html('');
        }
    });
    
    //// .submit-name - click
    $('#on_web').on( 'click', '.submit-name', function(e) {
        e.preventDefault();
        
        var parent = $(this).closest('li');
        var val = parent.find('input.form-control').val();
        
        if ( val != '' ) {
            parent.find('.name-text').html( val );
            
            parent.find('.enter-social-name').removeClass('current');
            parent.find('.social-name').addClass('current');
        }
    });
    
    
    // Toggle Comment
    $('.toggle-comment').click(function(e){
        e.preventDefault();            

        $(this).find('span').toggleClass('fa-chevron-up');
        $(this).closest('div').next('.media').slideToggle();        
    });
    
    $(window).resize(function(){
        set_height_content(); 
    });
    
    // TinyMCE 
    if ( $('#topic-message').length > 0 ) {
        tinymce.init({ 
            selector:'#topic-message',
            height : 260,
            plugins: [
                "autolink lists link imagetools image anchor code media"
            ],
            menubar: '', 
            toolbar: 'bold italic underline | link blockquote image code | bullist numlist alignjustify aligncenter alignleft alignright | undo redo',
            target_list: false,
            default_link_target: "_blank",
            
            // enable title field in the Image dialog
            image_title: true, 
            // enable automatic uploads of images represented by blob or data URIs
            automatic_uploads: true,
            // URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
            images_upload_url: 'postAcceptor.php',
            // here we add custom filepicker only to Image dialog
            file_picker_types: 'image', 
            // and here's our custom image picker
            file_picker_callback: function(cb, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');

                // Note: In modern browsers input[type="file"] is functional without 
                // even adding it to the DOM, but that might not be the case in some older
                // or quirky browsers like IE, so you might want to add it to the DOM
                // just in case, and visually hide it. And do not forget do remove it
                // once you do not need it anymore.

                input.onchange = function() {
                    var file = this.files[0];

                    // Note: Now we need to register the blob in TinyMCEs image blob
                    // registry. In the next release this part hopefully won't be
                    // necessary, as we are looking to handle it internally.
                    var id = 'blobid' + (new Date()).getTime();
                    var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                    var blobInfo = blobCache.create(id, file);
                    blobCache.add(blobInfo);

                    // call the callback and populate the Title field with the file name
                    cb(blobInfo.blobUri(), { title: file.name });
                };

                input.click();
            }
        });
        
    }
    
});

jQuery(window).scroll(function() {	
    if ( jQuery('.tab-pane.active').length > 0 ) {		
		if ( jQuery(window).width() > 767 ) {
			if ( ! jQuery('.tab-pane.active').attr('style') || jQuery('.tab-pane.active').height() > ( jQuery('.forum-sidebar').height()-20 ) ) {
				set_height_content();
			}
		}
		else {
			jQuery('.tab-pane.active').css('height', 'auto');
			jQuery('.tab-content-inner').css('height', 'auto');
		}
    }
});

function set_height_content() {
	if ( jQuery(window).width() > 767 ) {
		var h1 = jQuery('.forum-sidebar').height()-40;
		var h2 = jQuery('.tab-pane.active').height();
		var h3 = jQuery('.nav-tabs.nav-justified').height();
		
		var h4_tab_inner = jQuery('.tab-pane.active .tab-content-inner').height();
		
		if ( h1 > (h2+h3) ) {
		   jQuery('.tab-pane.active').outerHeight( h1-h3 );
		}
		
		if ( h1 > (h4_tab_inner+h3) ) {
		   jQuery('.tab-content-inner').outerHeight( h1-h3 );
		}
		else if ( h1+50 < (h4_tab_inner+h3) ) {
			jQuery('.tab-pane.active').outerHeight( h1-h3 );
			jQuery('.tab-content-inner').outerHeight( h1-h3 );
		}
	}    
}