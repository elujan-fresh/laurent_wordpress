<?php get_header(); ?>
	
	<!-- section -->
	<section role="main">
	
		
	
	<?php if (have_posts()): while (have_posts()) : the_post(); ?>
	
		<!-- article -->
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		
			<?php the_content(); ?>
			
			<?php //comments_template( '', true ); // Remove if you don't want comments ?>
						
			
		</article>
		<!-- /article -->
		
	<?php endwhile; ?>
	
	<?php else: ?>
	
	
	
	<?php endif; ?>
	
	</section>
	<!-- /section -->
	
<?php //get_sidebar(); ?>

<?php get_footer(); ?>