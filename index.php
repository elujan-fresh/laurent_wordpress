<?php get_header(); ?>
	
 <div id="slideshow" >
        <div id="slideshow_left" class="prev">
        </div>

        <div id="slideimage" class="sliderClass"> 
          <ul id="slideshowImgStyle"> 
            <li><div id="carruselImg1"></div></li>
            <li><div id="carruselImg2"></div></li>
            <li><div id="carruselImg3"></div></li>
            <li><div id="carruselImg4"></div></li>
        

           
          </ul>
        </div>
        <div id="slideshow_right" class="next">
        </div>
      </div>

      <div id="bioexcerpt" >
        <div id="bioexcerpt_img">
        </div>

        <div id="biotextauthor">
          <p>
            <span class="biotextauthor_title">Laurent Bouzereau<br/>Director/Filmmaker/Author</span>
            <p  class="biotextauthor_info">Named one of the top 50 leaders in the field of New Media by <em>The Hollywood Reporter</em>, director/filmmaker/author Laurent Bouzereau is one of the most sought-after talents in the industry. <a href="http://69.89.31.69/~nedlandm/lb/about-3/" style="text-decoration:none;"><span class="biotextauthor_readmore">&gt;Read more</span></a>
            </p>
          </p>
        </div>

        <div id="biopost">
          <p>
            <span class="biotextauthor_title" >Recent</span>
        <p class="biopost_text">
              <?php
                $post = new WP_Query( 
                  array(
                    
                    //'post_type'=>'news', 
                    'orderby' => "post_date", 
                    'order' => "DESC" 
                  ) 
                );

                //die(print_r(array($post->posts),true));
              ?>
              <?php 
                  foreach ($post->posts as $p) {
                  
                    # code...
              ?>
              <div class="biopost_text" id="marginFirstOp"><a  href="<?php echo $p->guid; ?>" style="text-decoration:none;"><?php echo $p->post_name; ?></a></div>
              <?php
                  }
              ?>
            </p>
          </p>
        </div>
      </div>


      <div id="quotewidget" >
        <div id="author_quote"><p>
            <div id="autorsName">Stephen Schaefer</div>
          <br/>
          <a href="http://bostonherald.com/entertainment/movies/hollywood_mine/2013/05/" style="text-decoration:none;">
              <div id="subtitleName">Boston Herald</div>
            </a>
          </p>
        </div>
        <div id="quote">
          <p style="color:#f0f0f0;">
            <em>“A refreshingly candid documentary of one of Hollywood’s 
              highest profile and most successful producers”</em>
              </p>
        </div>
      </div>
      
<?php get_footer(); ?>