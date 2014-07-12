<?php
/**
 * Created by PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 21/12/13
 * Time: 10:07
 */

echo get_header();

global $query_string;
query_posts( $query_string . '&orderby=menu_order&order=ASC' );
?>

			<div class="row">

				<section class="col-xs-12" id="section-products">
					<?php if(have_posts()) :

						$index = 0;
						while(have_posts()) : the_post();

							$parallax = get_field('parallax_img');
							$parallax_css = 'style="background-image: url('.$parallax.');"';

							$video = get_field('video');
							$video_iframe = '<iframe type="text/html" width="640" height="360" src="'.$video.'" frameborder="0"></iframe>';
						?>
                    <?php if($index==0) : ?>
                    <div class="row">
                        <article class="col-xs-12">
                            <div class="feature text-center">
                                <?php if($parallax) { ?>
                                    <div class="feature-bg" <?php echo $parallax_css; ?>></div>
                                <?php } ?>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <h3><?php the_title(); ?></h3>
                                        <h6><?php echo get_field('caption'); ?></h6>
                                        <div class="content">
                                            <?php the_content(); ?>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </article>
                    </div>
                    <?php else : ?>
					<div class="row">
						<article class="col-xs-12">
                            <div class="feature">
                                <?php if($parallax) { ?>
                                    <div class="feature-bg" <?php echo $parallax_css; ?>></div>
                                <?php } ?>
                                <div class="row">
                                    <div class="col-sm-6 text-right <?php echo(($index%2) ? ('') : ('media-content')); ?>">
                                        <?php if($index%2) : ?>
                                        <h3><?php the_title(); ?></h3>
                                        <h6><?php echo get_field('caption'); ?></h6>
                                        <div class="content">
                                            <?php if(get_field('link_more')) { ?>
                                                <?php the_excerpt(); ?>
                                                <a href="<?php echo get_permalink(); ?>" class="btn btn-primary">More</a>
                                            <?php } else {
                                                the_content();
                                            } ?>
                                        </div>
                                        <?php else: ?>
                                            <?php if($video) {
                                                echo $video_iframe;
                                            } else { ?>
                                                <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) ); ?>" />
                                            <?php } ?>
                                        <?php endif; ?>
                                    </div>
                                    <div class="col-sm-6 text-left <?php echo(($index%2) ? ('media-content') : ('')); ?>">
                                        <?php if($index%2) : ?>
                                            <?php if($video) {
                                                echo $video_iframe;
                                            } else { ?>
                                                <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) ); ?>" />
                                            <?php } ?>
                                        <?php else: ?>
                                            <h3><?php the_title(); ?></h3>
                                            <h6><?php echo get_field('caption'); ?></h6>
                                            <div class="content">
                                                <?php if(get_field('link_more')) { ?>
                                                    <?php the_excerpt(); ?>
                                                    <a href="<?php echo get_permalink(); ?>" class="btn btn-primary">More</a>
                                                <?php } else {
                                                    the_content();
                                                } ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
						</article>
					</div>
						<?php

                            endif;
							$index++;
						endwhile;

					else : ?>

					<h3 class="text-center">We're sorry...<br /><small>something went wrong</small></h3>

					<?php endif; ?>
				</section>

			</div>

<?php echo get_footer(); ?>