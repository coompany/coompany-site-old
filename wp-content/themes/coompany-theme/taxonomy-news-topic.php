<?php
/**
 * Created by PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 27/12/13
 * Time: 12:00
 */

echo get_header();
?>

			<section class="row" id="section-news">
<?php
if(have_posts()) :
	?>
				<div class="col-sm-9 col-sm-offset-3">
	<?php
	while(have_posts()) : the_post();
		$datetime = new DateTime();
		$datetime->setTimestamp(get_the_time('U'));
		$date_exploded = explode(' ', get_the_date());
		$str_time = $date_exploded[0].' '.$date_exploded[1];
		$image_url = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );
		$more_elm = '<p><a href="" class="btn btn-primary">More</a></p>';
		?>
					<article class="row">
						<div class="col-xs-12">
							<div class="news-image" style="background-image: url(<?php echo $image_url; ?>)">&nbsp;</div>
							<div class="news-time">
								<time datetime="<?php echo $datetime->format('Y-m-d H:m'); ?>">
									<?php echo $str_time; ?> <small><?php echo $date_exploded[2]; ?></small>
								</time>
							</div>
							<h3><?php the_title(); ?></h3>
							<div class="content"><?php the_content($more_elm); ?></div>
						</div>
					</article>
					<hr />
		<?php
	endwhile;
	?>
				</div>
	<?php
else:
	?>
				<div class="col-xs-12 alert alert-warning">
					<h3 class="text-center">There is no news to show yet...</h3>
				</div>
	<?php
endif;
?>
			</section>

<?php echo get_footer(); ?>