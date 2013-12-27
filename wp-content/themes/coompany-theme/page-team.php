<?php
/**
 * Template Name: Team Page
 *
 * Created by PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 26/12/13
 * Time: 19:37
 */

echo get_header();
?>

			<section class="row">
				<div class="col-md-8">
					<?php $page_chi_siamo = get_post(119);		// page 119 is Chi siamo ?>
					<h2><?php echo $page_chi_siamo->post_title; ?></h2>
					<div class="content">
						<?php echo apply_filters('the_content', $page_chi_siamo->post_content); ?>
					</div>
				</div>
				<div class="col-md-3 col-md-offset-1" id="page-contatti">
					<?php $page_contatti = get_post(148);		// page 148 is Contatti ?>
					<h3><?php echo $page_contatti->post_title; ?></h3>
					<div class="content">
						<?php echo apply_filters('the_content', $page_contatti->post_content); ?>
					</div>
				</div>
			</section>

			<section id="section-team-members" class="row">
				<div class="col-xs-12">
					<?php
					query_posts('post_type=team&posts_per_page=-1');
					if(have_posts()) :
						echo '<div class="row">';
						$i = 0;
						while(have_posts()) : the_post();
							$image_url = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );
							?>
					<div class="col-sm-3 team-member<?php echo(($i%3!=0) ? (' col-sm-offset-1') : (null)); ?>">
						<img class="img-circle" src="<?php echo $image_url; ?>" />
						<h4><?php echo get_the_title(); ?><br /><small><?php echo get_field('role'); ?></small></h4>
						<p class="content"><?php echo get_the_content(); ?></p>
					</div>
							<?php
							$i++;
						endwhile;
						echo '</div>';
					else :
						?>
					<h5>Nessun membro del team presente...</h5>
						<?php
					endif;
					?>
				</div>
			</section>

<?php echo get_footer(); ?>