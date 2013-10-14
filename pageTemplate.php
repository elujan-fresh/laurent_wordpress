

<div id="documentaries">
        <div id="documentaries_content">
          <p class="documentaries_title">Roman Polanski: A Film Memoir </p>
          <p class="documentaries_text">
            The documentary ROMAN POLANSKI: A FILM MEMOIR tells the extraordinary story of Roman Polanski’s life, beginning with his childhood in the Cracow ghetto, his first films in Poland, the move to Paris, his career in Europe and America, crowned with an Oscar for THE PIANIST, the tragedy of the murder of his pregnant wife Sharon Tate in Los Angeles, the controversy surrounding his arrest in 1977, through to his work and life today in France with his wife Emmanuelle Seigner
          </p>
         <br>
          <div id="line"></div>
         
          <p class="documentaries_quote">
            ”…people see a human being, thoughtful, eloquent and emotional as he reflects on what, by any accounts, has been an extraordinary life.”   <span class="text_small">  -The Hollywood Reporter</span>
          </p>
          <div id="line"></div>
          
        <br>
          <p class="documentaries_text">
          The conversations were recorded during Roman Polanski‘s stay in his home in Gstaad where he was under house arrest for several months after he was apprehended on his way to the Zurich Film Festival in 2009. The conversations are illustrated with excerpts from Polanski’s films, news footage, press clippings, private and exclusive photos, and documents chronicling the filmmaker’s extraordinary life.   The film premiered at the Zurich Film Festival in 2011..
          </p>
          <div id="documentaries_paginator">
             <ul>

                    <?php

                        //<li class="active"><span class="paginator_active">1</span></li>
                        //<li><span class="paginator"><a href="http://69.89.31.69/~nedlandm/lb/templatepage_polanski2" style="text-decoration:none;">2</a></span></li>
               
                      
                      $post = new WP_Query( 
                        array(
                          
                          'post_type'=>"post", 
                          'orderby' => "post_date", 
                          'order' => "DESC" 
                        ) 
                      );
                      $recent_posts = wp_get_recent_posts();
                      
                    ?>
                    <?php 
                        $count = 0 ;
                        foreach ($recent_posts as $p) {

                          if($count <= 5)
                          {

                          # code...
                    ?>
                    <li><span class="paginator"><a  href="<?php echo $p['guid']; ?>" style="text-decoration:none;"><?php echo $count+1;?></a></div>
                    <?php
                          }
                          $count++;
                        }
                    ?>
             
               
              </ul>
            
          </div>
        </div>
        
      </div>
