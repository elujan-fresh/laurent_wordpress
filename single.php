<?php get_header(); ?>
	
	<!-- section -->
	<section role="main">
	
	<?php if (have_posts()): while (have_posts()) : the_post(); ?>
	
		<!-- article -->
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<?php the_content(); // Dynamic Content ?>
		</article>
		<!-- /article -->
		
	<?php endwhile; ?>
	<?php else: ?>

	<?php endif; ?>
	
	</section>
	<!-- /section -->
	

<?php get_footer(); ?>